import assert from "node:assert/strict";
import { access, readFile, stat } from "node:fs/promises";
import test from "node:test";

const projectRoot = new URL("../", import.meta.url);

async function render() {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}`);
  const { default: worker } = await import(workerUrl.href);

  return worker.fetch(
    new Request("https://profile.example/", {
      headers: {
        accept: "text/html",
        host: "profile.example",
        "x-forwarded-host": "profile.example",
        "x-forwarded-proto": "https",
      },
    }),
    {
      ASSETS: {
        fetch: async () => new Response("Not found", { status: 404 }),
      },
    },
    {
      waitUntil() {},
      passThroughOnException() {},
    },
  );
}

test("server-renders the bilingual academic profile", async () => {
  const response = await render();
  assert.equal(response.status, 200);
  assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);

  const html = await response.text();
  assert.match(html, /<title>Aojie Xu 徐鳌杰 \| Historical GIS &amp; GeoAI<\/title>/i);
  assert.match(html, /Historical GIS/);
  assert.match(html, /Open to PhD opportunities/);
  assert.match(html, /Transactions in GIS/);
  assert.match(html, /European Journal of Agronomy/);
  assert.match(html, /xuaojie@m\.scnu\.edu\.cn/);
  assert.match(html, /https:\/\/profile\.example\/og\.jpg/);
  assert.doesNotMatch(html, /codex-preview|Your site is taking shape|Building your site/i);
});

test("keeps the deployable source free of starter code and private CV fields", async () => {
  const [page, layout, content, packageJson, og] = await Promise.all([
    readFile(new URL("../app/page.tsx", import.meta.url), "utf8"),
    readFile(new URL("../app/layout.tsx", import.meta.url), "utf8"),
    readFile(new URL("../app/content.ts", import.meta.url), "utf8"),
    readFile(new URL("../package.json", import.meta.url), "utf8"),
    stat(new URL("../public/og.jpg", import.meta.url)),
  ]);

  const source = `${page}\n${layout}\n${content}\n${packageJson}`;
  assert.doesNotMatch(source, /SkeletonPreview|react-loading-skeleton|codex-preview/);
  assert.doesNotMatch(source, /18575105876|2002年12月|河南通许|中共预备党员/);
  assert.match(content, /xuaojie@m\.scnu\.edu\.cn/);
  assert.ok(og.size <= 300_000, `public/og.jpg is too large: ${og.size} bytes`);

  await assert.rejects(access(new URL("../app/_sites-preview", projectRoot)));
});
