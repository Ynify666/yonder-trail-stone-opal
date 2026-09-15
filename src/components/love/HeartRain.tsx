import { Heart } from "lucide-react";
import { useMemo } from "react";

export function HeartRain() {
  const hearts = useMemo(
    () =>
      Array.from({ length: 18 }, (_, i) => ({
        id: i,
        left: `${(i * 17 + 5) % 100}%`,
        size: 10 + ((i * 5) % 18),
        duration: `${6.5 + (i % 7)}s`,
        delay: `${(i * 0.32) % 6}s`,
        drift: `${(i % 2 === 0 ? 22 : -18) + (i % 9)}px`,
        opacity: 0.3 + ((i % 5) * 0.12),
      })),
    [],
  );

  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 z-[6] overflow-hidden">
      {hearts.map((h) => (
        <Heart
          key={h.id}
          className="heart-fall fill-primary text-primary"
          style={{
            left: h.left,
            width: h.size,
            height: h.size,
            opacity: h.opacity,
            animationDuration: h.duration,
            animationDelay: `-${h.delay}`,
            ["--drift" as string]: h.drift,
          }}
        />
      ))}
    </div>
  );
}
