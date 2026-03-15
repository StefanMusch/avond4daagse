export default function Bunting({
  colors = ["#E6007E", "#9B1B5A", "#8CB808", "#2B9AC8"],
}: {
  colors?: string[];
}) {
  return (
    <svg
      className="w-full h-16 md:h-20"
      viewBox="0 0 1200 80"
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      <path
        d="M0,8 Q300,2 600,8 Q900,14 1200,8"
        fill="none"
        stroke="#9B1B5A"
        strokeWidth="2"
        opacity="0.4"
      />
      {Array.from({ length: 18 }).map((_, i) => {
        const x = 35 + i * 65;
        const sag = Math.sin((i / 17) * Math.PI) * 6;
        const color = colors[i % colors.length];
        return (
          <polygon
            key={i}
            points={`${x - 14},${8 + sag} ${x + 14},${8 + sag} ${x},${42 + sag}`}
            fill={color}
            opacity="0.85"
            style={{
              transform: `rotate(${Math.sin(i * 0.7) * 8}deg)`,
              transformOrigin: `${x}px ${8 + sag}px`,
            }}
          />
        );
      })}
    </svg>
  );
}
