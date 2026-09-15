import { useEffect, useState } from "react";
import type { SceneName } from "@/lib/love/content";
import { cn } from "@/lib/utils";

const CASTS: Record<
  SceneName,
  Array<{ src: string; className: string; tilt: string; depth: number }>
> = {
  envelope: [
    {
      src: "/art/panda-letter.jpg",
      className: "left-[-28px] top-[10%] w-[86px] md:left-6 md:w-32 floaty",
      tilt: "-8deg",
      depth: 18,
    },
    {
      src: "/art/capy-orange.jpg",
      className: "right-[-30px] top-[20%] w-[90px] md:right-8 md:w-36 floaty-delay",
      tilt: "7deg",
      depth: 22,
    },
  ],
  intro: [
    {
      src: "/art/panda-heart.jpg",
      className: "left-[-26px] bottom-[8%] w-[84px] md:left-8 md:w-28 floaty-slow",
      tilt: "-6deg",
      depth: 16,
    },
    {
      src: "/art/capy-water.jpg",
      className: "right-[-24px] top-[14%] hidden w-28 md:block md:right-10 floaty",
      tilt: "5deg",
      depth: 20,
    },
  ],
  gallery: [
    {
      src: "/art/panda-shy.jpg",
      className: "left-[-22px] top-[12%] w-[78px] md:left-6 md:w-28 floaty",
      tilt: "-5deg",
      depth: 14,
    },
    {
      src: "/art/capy-orange.jpg",
      className: "right-[-26px] bottom-[10%] w-[82px] md:right-8 md:w-32 floaty-delay",
      tilt: "8deg",
      depth: 20,
    },
  ],
  quiz: [
    {
      src: "/art/panda-shy.jpg",
      className: "right-[-28px] top-[16%] w-[86px] md:right-10 md:w-32 floaty-slow",
      tilt: "6deg",
      depth: 18,
    },
    {
      src: "/art/capy-water.jpg",
      className: "left-[-22px] bottom-[8%] hidden w-28 md:block md:left-8 floaty",
      tilt: "-4deg",
      depth: 14,
    },
  ],
  proposal: [
    {
      src: "/art/panda-heart.jpg",
      className: "left-[-26px] top-[12%] w-[88px] md:left-8 md:w-32 floaty",
      tilt: "-7deg",
      depth: 16,
    },
    {
      src: "/art/capy-orange.jpg",
      className: "right-[-28px] bottom-[12%] w-[90px] md:right-10 md:w-36 floaty-delay",
      tilt: "6deg",
      depth: 22,
    },
  ],
  yes: [
    {
      src: "/art/panda-heart.jpg",
      className: "left-[-24px] top-[8%] w-[80px] md:left-6 md:w-28 floaty",
      tilt: "-8deg",
      depth: 14,
    },
    {
      src: "/art/capy-orange.jpg",
      className: "right-[-26px] top-[16%] w-[84px] md:right-8 md:w-32 floaty-delay",
      tilt: "7deg",
      depth: 20,
    },
    {
      src: "/art/panda-shy.jpg",
      className: "bottom-[6%] left-[-18px] hidden w-24 md:block md:left-12 floaty-slow",
      tilt: "-4deg",
      depth: 12,
    },
    {
      src: "/art/capy-water.jpg",
      className: "bottom-[8%] right-[-16px] hidden w-24 md:block md:right-14 floaty",
      tilt: "5deg",
      depth: 16,
    },
  ],
};

export function FloatingAnimals({ scene }: { scene: SceneName }) {
  const [shift, setShift] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const fine = window.matchMedia("(pointer: fine)").matches;
    if (!fine) return;
    const onMove = (e: PointerEvent) => {
      setShift({
        x: (e.clientX / window.innerWidth - 0.5) * 2,
        y: (e.clientY / window.innerHeight - 0.5) * 2,
      });
    };
    window.addEventListener("pointermove", onMove, { passive: true });
    return () => window.removeEventListener("pointermove", onMove);
  }, []);

  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
      {CASTS[scene].map((animal) => (
        <img
          key={`${scene}-${animal.src}-${animal.className}`}
          src={animal.src}
          alt=""
          className={cn(
            "absolute rounded-full object-cover opacity-80 shadow-letter md:opacity-95",
            animal.className,
          )}
          style={{
            ["--tilt" as string]: animal.tilt,
            translate: `${shift.x * animal.depth}px ${shift.y * animal.depth}px`,
          }}
        />
      ))}
    </div>
  );
}
