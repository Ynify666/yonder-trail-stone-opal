import { Heart } from "lucide-react";
import { useRef, useState, type PointerEvent } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Scene } from "./Scene";

function Burst() {
  const bits = Array.from({ length: 10 }, (_, i) => {
    const a = (i / 10) * Math.PI * 2;
    return {
      id: i,
      tx: `${Math.cos(a) * (70 + (i % 3) * 18)}px`,
      ty: `${Math.sin(a) * (52 + (i % 2) * 16) - 20}px`,
    };
  });
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 z-30">
      {bits.map((b) => (
        <Heart
          key={b.id}
          className="heart-burst size-4 fill-primary text-primary"
          style={{ ["--tx" as string]: b.tx, ["--ty" as string]: b.ty }}
        />
      ))}
    </div>
  );
}

export function Proposal({ onYes }: { onYes: () => void }) {
  const playRef = useRef<HTMLDivElement>(null);
  const noRef = useRef<HTMLButtonElement>(null);
  const [pos, setPos] = useState<{ x: number; y: number } | null>(null);
  const [flees, setFlees] = useState(0);
  const [burst, setBurst] = useState(false);

  function flee(e: PointerEvent<HTMLButtonElement>) {
    e.preventDefault();
    e.stopPropagation();
    const play = playRef.current;
    const btn = noRef.current;
    if (!play || !btn) return;
    const pr = play.getBoundingClientRect();
    const br = btn.getBoundingClientRect();
    const maxX = Math.max(8, pr.width - br.width - 8);
    const maxY = Math.max(8, pr.height - br.height - 8);
    const cx = pos?.x ?? br.left - pr.left;
    const cy = pos?.y ?? br.top - pr.top;
    let x = 8 + Math.random() * maxX;
    let y = 8 + Math.random() * maxY;
    if (Math.hypot(x - cx, y - cy) < 90) {
      x = (x + maxX * 0.5) % maxX;
      y = (y + maxY * 0.55) % maxY;
    }
    setPos({ x, y });
    setFlees((n) => n + 1);
  }

  function accept() {
    if (burst) return;
    setBurst(true);
    window.setTimeout(onYes, 640);
  }

  return (
    <Scene>
      <div className="portrait-ring mb-5">
        <img
          src="/art/friends.jpg"
          alt=""
          className="size-28 rounded-full object-cover md:size-32"
        />
      </div>
      <p className="font-script text-2xl text-muted">Каданес</p>
      <h2 className="font-display mb-2 text-center text-3xl font-medium tracking-tight md:text-[2.5rem]">
        Будешь ли ты моей девушкой?
      </h2>
      <p className="mb-6 max-w-sm text-center text-sm leading-relaxed text-muted">
        Готова убежать со мной?
      </p>

      <div className="relative">
        {burst && <Burst />}
        <Button
          variant="yes"
          size="lg"
          onClick={accept}
          className={cn("relative z-20 gap-2 px-10", !burst && "yes-pulse")}
        >
          <Heart className="size-5 fill-primary-fg" />
          Да
        </Button>
      </div>

      <div ref={playRef} className="relative mt-3 h-40 w-full md:h-44">
        <button
          ref={noRef}
          type="button"
          aria-label="Нет — но эта кнопка убегает"
          onPointerEnter={flee}
          onPointerDown={flee}
          onClick={(e) => e.preventDefault()}
          className={cn(
            "absolute z-10 h-11 min-w-[5.5rem] touch-none rounded-full bg-surface-2 px-5 text-sm font-semibold text-muted shadow-letter",
            pos ? "" : "top-3 left-1/2 -translate-x-1/2",
          )}
          style={
            pos
              ? {
                  left: pos.x,
                  top: pos.y,
                  transform: `rotate(${flees % 2 === 0 ? -8 : 8}deg)`,
                  transition:
                    "left 280ms cubic-bezier(0.22, 1, 0.36, 1), top 280ms cubic-bezier(0.22, 1, 0.36, 1), transform 280ms cubic-bezier(0.22, 1, 0.36, 1)",
                }
              : {
                  transition:
                    "left 280ms cubic-bezier(0.22, 1, 0.36, 1), top 280ms cubic-bezier(0.22, 1, 0.36, 1), transform 280ms cubic-bezier(0.22, 1, 0.36, 1)",
                }
          }
        >
          Нет
        </button>
      </div>

      {flees >= 4 && (
        <p className="font-script -mt-2 text-center text-lg text-primary">
          нет здесь не живёт. только да.
        </p>
      )}
    </Scene>
  );
}
