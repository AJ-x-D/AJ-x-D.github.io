export default function WebAnalytics() {
  const token = process.env.NEXT_PUBLIC_CLOUDFLARE_WEB_ANALYTICS_TOKEN;

  if (process.env.NODE_ENV !== 'production' || !token) {
    return null;
  }

  return (
    <>
      <script
        id="analytics-diagnostics"
        dangerouslySetInnerHTML={{
          __html: `(() => {
            if (!new URLSearchParams(location.search).has('analytics-check')) return;
            const messages = ['检测已启动'];
            let output;
            const log = (message) => {
              messages.push(message);
              if (output) output.textContent = messages.join('\\n');
            };
            document.addEventListener('DOMContentLoaded', () => {
              output = document.createElement('pre');
              output.setAttribute('lang', 'zh-CN');
              output.style.cssText = 'position:fixed;bottom:12px;left:12px;right:12px;z-index:2147483647;max-height:45vh;overflow:auto;white-space:pre-wrap;padding:16px;background:#fff;color:#111;border:2px solid #2563eb;border-radius:8px;font:14px/1.6 sans-serif;box-shadow:0 4px 20px #0003';
              output.textContent = messages.join('\\n');
              document.body.appendChild(output);
            });
            const originalOpen = XMLHttpRequest.prototype.open;
            XMLHttpRequest.prototype.open = function(method, url, ...args) {
              if (String(url).includes('cloudflareinsights.com')) {
                log('开始上传访问数据');
                this.addEventListener('loadend', () => log('上传响应：HTTP ' + this.status));
                this.addEventListener('error', () => log('上传发生网络错误'));
              }
              return originalOpen.call(this, method, url, ...args);
            };
            document.addEventListener('load', (event) => {
              if (event.target instanceof HTMLScriptElement && event.target.src.includes('cloudflareinsights.com')) {
                log('统计脚本已加载');
                log('统计配置已初始化：' + Boolean(window.__cfBeacon && window.__cfBeacon.token));
              }
            }, true);
            document.addEventListener('error', (event) => {
              if (event.target instanceof HTMLScriptElement && event.target.src.includes('cloudflareinsights.com')) log('统计脚本下载失败');
            }, true);
            window.addEventListener('error', (event) => {
              if (event.message) log('脚本错误：' + event.message);
            });
            setTimeout(() => log('15 秒检查完成，请将上面的文字发给我'), 15000);
          })();`,
        }}
      />
    <script
      id="cloudflare-web-analytics"
      src="https://static.cloudflareinsights.com/beacon.min.js"
      type="module"
      defer
      data-cf-beacon={JSON.stringify({ token, spa: true })}
    />
    </>
  );
}
