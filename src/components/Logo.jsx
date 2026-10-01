// Sheep logo (inline SVG) + site name.
export default function Logo({ size = 40 }) {
  return (
    <span className="logo">
      <svg width={size} height={size} viewBox="0 0 64 64" aria-hidden="true">
        <rect x="20" y="46" width="5" height="12" rx="2" fill="#1B5E20" />
        <rect x="39" y="46" width="5" height="12" rx="2" fill="#1B5E20" />
        <g fill="#E8F5E9" stroke="#2E7D32" strokeWidth="3">
          <circle cx="16" cy="32" r="10" /><circle cx="24" cy="21" r="10" />
          <circle cx="38" cy="20" r="10" /><circle cx="49" cy="30" r="10" />
          <circle cx="44" cy="43" r="10" /><circle cx="20" cy="43" r="10" />
          <circle cx="32" cy="34" r="14" stroke="none" />
        </g>
        <ellipse cx="32" cy="38" rx="10" ry="12" fill="#1B5E20" />
        <ellipse cx="20" cy="33" rx="5" ry="3" fill="#1B5E20" transform="rotate(-25 20 33)" />
        <ellipse cx="44" cy="33" rx="5" ry="3" fill="#1B5E20" transform="rotate(25 44 33)" />
        <circle cx="28" cy="36" r="2" fill="#fff" /><circle cx="36" cy="36" r="2" fill="#fff" />
        <ellipse cx="32" cy="43" rx="3" ry="2" fill="#2E7D32" />
      </svg>
      <span className="logo-text">CHEAP</span>
    </span>
  );
}
