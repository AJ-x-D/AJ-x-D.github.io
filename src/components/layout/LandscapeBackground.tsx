import styles from './LandscapeBackground.module.css';

// Layered ink washes inspired by LingDong-/shan-shui-inf.
// Original schematic geometry, generated once; only the mist is animated.
function noise(x: number, seed: number) {
  const random = (n: number) => {
    const value = Math.sin(n * 127.1 + seed * 311.7) * 43758.5453;
    return value - Math.floor(value);
  };
  const whole = Math.floor(x);
  const fraction = x - whole;
  const blend = fraction * fraction * (3 - 2 * fraction);
  return random(whole) * (1 - blend) + random(whole + 1) * blend;
}

function ridge(depth: number) {
  const gaussian = (x: number, center: number, width: number) =>
    Math.exp(-(((x - center) / width) ** 2));
  const points = Array.from({ length: 281 }, (_, index) => {
    const x = -120 + index * 7;
    const peaks =
      240 * gaussian(x, 50 + depth * 27, 130) +
      180 * gaussian(x, 280 - depth * 19, 75) +
      100 * gaussian(x, 430 - depth * 30, 105) +
      265 * gaussian(x, 1530 - depth * 21, 150) +
      175 * gaussian(x, 1310 + depth * 13, 76);
    const texture = noise(x / 62, depth) * 27 + noise(x / 23, depth + 5) * 12 + noise(x / 9, depth + 9) * 4;
    const y = 670 + depth * 82 - peaks - texture;
    return `${index ? 'L' : 'M'}${x},${y.toFixed(2)}`;
  }).join(' ');
  return `${points} L1840,1100 L-120,1100 Z`;
}

const mountains = Array.from({ length: 3 }, (_, index) => ridge(index));

export default function LandscapeBackground() {
  return (
    <div className={styles.backdrop} aria-hidden="true">
      <div className={styles.sky} />
      {mountains.map((mountain, index) => (
        <svg key={index} className={`${styles.layer} ${styles[`ridge${index}`]}`}
          viewBox="0 0 1600 1000" preserveAspectRatio="none" focusable="false">
          <defs>
            <linearGradient id={`landscape-ink-${index}`} x1="0" y1="0" x2="0.15" y2="1">
              <stop offset="0%" stopColor="currentColor" stopOpacity="0.9" />
              <stop offset="100%" stopColor="currentColor" stopOpacity="0.12" />
            </linearGradient>
          </defs>
          <path d={mountain} fill={`url(#landscape-ink-${index})`} />
        </svg>
      ))}
      <div className={styles.mist} />
      <div className={styles.readingVeil} />
    </div>
  );
}
