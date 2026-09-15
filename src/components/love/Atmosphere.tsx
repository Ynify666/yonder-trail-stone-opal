import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { useMemo } from "react";
import { SCENE_BG, type SceneName } from "@/lib/love/content";

type FxKind = "petal" | "blossom" | "mote" | "firefly" | "spark";

const SCENE_FX: Record<SceneName, FxKind[]> = {
  envelope: ["mote"],
  intro: ["petal", "mote"],
  gallery: ["spark", "mote"],
  quiz: ["firefly", "mote"],
  proposal: ["blossom", "firefly"],
  yes: ["petal", "blossom", "spark"],
};

function hash(i: number, salt: number) {
  const x = Math.sin(i * 12.9898 + salt * 78.233) * 43758.5453;
  return x - Math.floor(x);
}

function buildBits(kinds: FxKind[], reduce: boolean) {
  if (reduce) return [];
  const bits: Array<{
    id: string;
    kind: FxKind;
    left: string;
    top: string;
    duration: string;
    delay: string;
    drift: string;
    spin: string;
    opacity: number;
  }> = [];
  kinds.forEach((kind, k) => {
    const n = kind === "mote" ? 14 : kind === "spark" ? 12 : 10;
    for (let i = 0; i < n; i++) {
      const a = hash(i, k + 1);
      const b = hash(i, k + 7);
      bits.push({
        id: `${kind}-${i}`,
        kind,
        left: `${(a * 96 + 2).toFixed(2)}%`,
        top: kind === "mote" || kind === "spark" || kind === "firefly" ? `${(b * 88 + 4).toFixed(2)}%` : "-8%",
        duration: `${(kind === "mote" ? 6 : kind === "firefly" ? 8 : kind === "spark" ? 2.2 : 9) + b * 5}s`,
        delay: `${(a * 7).toFixed(2)}s`,
        drift: `${((a > 0.5 ? 1 : -1) * (18 + b * 36)).toFixed(0)}px`,
        spin: `${(140 + a * 200).toFixed(0)}deg`,
        opacity: 0.35 + b * 0.5,
      });
    }
  });
  return bits;
}

export function Atmosphere({ scene }: { scene: SceneName }) {
  const reduce = useReducedMotion();
  const bits = useMemo(
    () => buildBits(SCENE_FX[scene], Boolean(reduce)),
    [scene, reduce],
  );

  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <AnimatePresence>
          <motion.img
            key={SCENE_BG[scene]}
            src={SCENE_BG[scene]}
            alt=""
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: reduce ? 0.2 : 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="scene-photo"
          />
        </AnimatePresence>
      </div>
      <div className="scene-fog" />
      <div className="scene-vignette" />
      {!reduce && <div className="light-leak" />}
      <div className="fx-layer">
        {bits.map((bit) => (
          <span
            key={bit.id}
            className={`fx-bit fx-${bit.kind}`}
            style={{
              left: bit.left,
              top: bit.top,
              animationDuration: bit.duration,
              animationDelay: `-${bit.delay}`,
              opacity: bit.kind === "mote" ? bit.opacity : undefined,
              ["--drift" as string]: bit.drift,
              ["--spin" as string]: bit.spin,
            }}
          />
        ))}
      </div>
    </div>
  );
}
