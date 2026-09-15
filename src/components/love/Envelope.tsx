import { Heart } from "lucide-react";
import { useState, type PointerEvent } from "react";
import { cn } from "@/lib/utils";
import { Scene } from "./Scene";

export function Envelope({ onOpen }: { onOpen: () => void }) {
  const [opening, setOpening] = useState(false);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  function open() {
    if (opening) return;
    setOpening(true);
    setTilt({ x: 0, y: 0 });
    window.setTimeout(onOpen, 1080);
  }

  function onMove(e: PointerEvent<HTMLButtonElement>) {
    if (opening) return;
    const r = e.currentTarget.getBoundingClientRect();
    const px = (e.clientX - r.left) / r.width - 0.5;
    const py = (e.clientY - r.top) / r.height - 0.5;
    setTilt({ x: py * -8, y: px * 12 });
  }

  return (
    <Scene>
      <p className="font-script mb-1 text-2xl text-muted">личное</p>
      <h1 className="font-display mb-8 text-center text-4xl font-medium tracking-tight text-fg md:text-5xl">
        Для Каданес
      </h1>

      <div className="portrait-ring mb-6">
        <img
          src="/art/panda-letter.jpg"
          alt=""
          className="size-24 rounded-full object-cover md:size-28"
        />
      </div>

      <button
        type="button"
        onClick={open}
        onPointerMove={onMove}
        onPointerLeave={() => setTilt({ x: 0, y: 0 })}
        aria-label="Открыть письмо для Каданес"
        className="envelope-stage group relative"
      >
        <div
          className={cn("envelope", opening && "is-open")}
          style={{
            transform: opening
              ? undefined
              : `rotateX(${tilt.x}deg) rotateY(${tilt.y}deg) translateY(${tilt.x === 0 && tilt.y === 0 ? 0 : -6}px)`,
            transition: "transform 400ms cubic-bezier(0.22, 1, 0.36, 1)",
          }}
        >
          <div className="envelope-letter">
            <p className="font-script text-2xl text-primary">Каданес</p>
          </div>
          <div className="envelope-pocket" />
          <div className="envelope-flap" />
          <div className={cn("wax-seal", !opening && "seal-pulse")}>
            <Heart className="size-6 fill-primary-fg text-primary-fg" strokeWidth={1.6} />
          </div>
        </div>
      </button>

      <p className="font-script mt-8 text-center text-xl text-muted">
        {opening ? "открываю…" : "нажми на печать"}
      </p>
    </Scene>
  );
}
