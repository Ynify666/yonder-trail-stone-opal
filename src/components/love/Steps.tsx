import { Heart } from "lucide-react";
import { cn } from "@/lib/utils";

const LABELS = ["письмо", "фото", "вопросы", "вопрос"] as const;

export function Steps({ index }: { index: number }) {
  return (
    <div className="pointer-events-none absolute top-4 left-1/2 z-30 flex -translate-x-1/2 pt-[env(safe-area-inset-top)]">
      <div className="steps-pill flex items-center gap-1 rounded-full px-3 py-1.5">
        {LABELS.map((label, i) => (
          <span key={label} className="flex items-center">
            <Heart
              aria-hidden="true"
              className={cn(
                "size-3.5 transition-[color,fill,transform] duration-300 ease-out",
                i <= index
                  ? "fill-primary text-primary scale-110"
                  : "fill-transparent text-faint",
              )}
            />
            {i < LABELS.length - 1 && (
              <span
                className={cn(
                  "mx-1 block h-px w-4 transition-colors duration-300",
                  i < index ? "bg-primary/50" : "bg-faint/60",
                )}
              />
            )}
          </span>
        ))}
      </div>
      <span className="sr-only">
        Шаг {index + 1} из {LABELS.length}
      </span>
    </div>
  );
}
