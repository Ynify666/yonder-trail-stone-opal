import { ArrowLeft, ArrowRight } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { PHOTOS } from "@/lib/love/content";
import { cn } from "@/lib/utils";
import { Scene } from "./Scene";

export function Gallery({ onNext }: { onNext: () => void }) {
  const [index, setIndex] = useState(0);
  const startX = useRef(0);
  const photo = PHOTOS[index];
  const last = index === PHOTOS.length - 1;

  function go(dir: -1 | 1) {
    setIndex((i) => Math.min(PHOTOS.length - 1, Math.max(0, i + dir)));
  }

  return (
    <Scene wide>
      <p className="font-script text-xl text-muted">несколько кадров</p>
      <h2 className="font-display mb-6 text-center text-3xl font-medium tracking-tight md:text-4xl">
        Ты
      </h2>

      <div
        className="relative mx-auto w-full max-w-[280px] touch-pan-y md:max-w-[300px]"
        onPointerDown={(e) => {
          startX.current = e.clientX;
        }}
        onPointerUp={(e) => {
          const dx = e.clientX - startX.current;
          if (dx > 48) go(-1);
          if (dx < -48) go(1);
        }}
      >
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-4 top-4 bottom-10 rounded-[6px] bg-surface shadow-letter"
          style={{ transform: "rotate(-7deg) translate(-10px, 6px)" }}
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-4 top-4 bottom-10 rounded-[6px] bg-surface shadow-letter"
          style={{ transform: "rotate(6deg) translate(12px, 4px)" }}
        />
        <AnimatePresence mode="wait">
          <motion.figure
            key={photo.src}
            initial={{ opacity: 0, rotate: photo.tilt - 7, y: 16, scale: 0.97 }}
            animate={{ opacity: 1, rotate: photo.tilt, y: 0, scale: 1 }}
            exit={{ opacity: 0, rotate: photo.tilt + 7, y: -10, scale: 0.98 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="polaroid relative z-10"
          >
            <span className="washi-tape" />
            <img src={photo.src} alt={photo.caption} />
            <figcaption className="font-script absolute right-3 bottom-3 left-3 text-center text-[19px] leading-tight text-fg">
              {photo.caption}
            </figcaption>
          </motion.figure>
        </AnimatePresence>
      </div>

      <div className="mt-5 flex items-center gap-1.5">
        {PHOTOS.map((p, i) => (
          <button
            key={p.src}
            type="button"
            aria-label={`Фото ${i + 1}`}
            onClick={() => setIndex(i)}
            className={cn(
              "size-2 rounded-full transition-[transform,background-color] duration-200",
              i === index ? "scale-125 bg-primary" : "bg-faint/80 hover:bg-muted",
            )}
          />
        ))}
      </div>

      <div className="mt-5 flex items-center gap-3">
        <button
          type="button"
          onClick={() => go(-1)}
          disabled={index === 0}
          aria-label="Предыдущее фото"
          className={cn(
            "grid size-11 place-items-center rounded-full bg-surface shadow-letter transition-[opacity,transform] duration-150 ease-out active:not-disabled:scale-[0.96]",
            index === 0 && "opacity-40",
          )}
        >
          <ArrowLeft className="size-4" />
        </button>
        <p className="font-sans min-w-14 text-center text-sm tabular-nums text-muted">
          {index + 1} / {PHOTOS.length}
        </p>
        <button
          type="button"
          onClick={() => go(1)}
          disabled={last}
          aria-label="Следующее фото"
          className={cn(
            "grid size-11 place-items-center rounded-full bg-surface shadow-letter transition-[opacity,transform] duration-150 ease-out active:not-disabled:scale-[0.96]",
            last && "opacity-40",
          )}
        >
          <ArrowRight className="size-4" />
        </button>
      </div>

      {last ? (
        <Button onClick={onNext} className="mt-7 pl-6 pr-5">
          Дальше - Вопросы.
          <ArrowRight className="size-4" />
        </Button>
      ) : (
        <p className="mt-6 text-center text-sm text-muted">листни или нажми стрелку</p>
      )}
    </Scene>
  );
}
