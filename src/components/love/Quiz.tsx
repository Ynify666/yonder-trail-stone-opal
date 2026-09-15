import { ArrowRight } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useState, type FormEvent } from "react";
import { Button } from "@/components/ui/button";
import { QUESTIONS, matchesAnswer } from "@/lib/love/content";
import { cn } from "@/lib/utils";
import { Scene } from "./Scene";

export function Quiz({ onNext }: { onNext: () => void }) {
  const [qIndex, setQIndex] = useState(0);
  const [value, setValue] = useState("");
  const [status, setStatus] = useState<"idle" | "wrong" | "right">("idle");
  const [tries, setTries] = useState(0);
  const question = QUESTIONS[qIndex];
  const last = qIndex === QUESTIONS.length - 1;

  function submit(e: FormEvent) {
    e.preventDefault();
    if (status === "right") return;
    const ok = matchesAnswer(value, question.id);
    if (ok) {
      setStatus("right");
      window.setTimeout(() => {
        if (last) {
          onNext();
          return;
        }
        setQIndex((i) => i + 1);
        setValue("");
        setStatus("idle");
        setTries(0);
      }, 980);
      return;
    }
    setStatus("wrong");
    setTries((n) => n + 1);
  }

  return (
    <Scene>
      <p className="font-script text-xl text-muted">маленькая проверка</p>
      <h2 className="font-display mb-1 text-center text-3xl font-medium tracking-tight">
        Два вопроса
      </h2>
      <p className="mb-4 text-center text-sm text-muted">
        {qIndex + 1} из {QUESTIONS.length}
      </p>

      <form
        onSubmit={submit}
        className={cn(
          "letter-card w-full rounded-[32px] px-6 py-6 md:px-8",
          status === "wrong" && "shake-x",
        )}
        key={`${qIndex}-${tries}`}
      >
        <div className="portrait-ring mx-auto mb-4 w-fit">
          <div className="relative size-16">
            <AnimatePresence mode="wait" initial={false}>
              <motion.img
                key={status === "right" ? "heart" : "shy"}
                src={status === "right" ? "/art/panda-heart.jpg" : "/art/panda-shy.jpg"}
                alt=""
                initial={{ opacity: 0, scale: 0.88, filter: "blur(4px)" }}
                animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                exit={{ opacity: 0, scale: 0.88, filter: "blur(4px)" }}
                transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
                className="absolute inset-0 size-16 rounded-full object-cover"
              />
            </AnimatePresence>
          </div>
        </div>
        <p className="font-display text-center text-xl leading-snug">{question.prompt}</p>

        <label className="sr-only" htmlFor="secret">
          Ответ
        </label>
        <input
          id="secret"
          value={value}
          onChange={(e) => {
            setValue(e.target.value);
            if (status === "wrong") setStatus("idle");
          }}
          placeholder={question.placeholder}
          autoComplete="off"
          autoCapitalize="off"
          spellCheck={false}
          className="mt-5 h-12 w-full rounded-2xl bg-surface-2 px-4 text-center font-script text-2xl text-fg outline-none ring-1 ring-fg/8 placeholder:text-faint focus:ring-2 focus:ring-primary/40"
        />

        {status === "wrong" && (
          <p className="mt-3 text-center text-sm text-primary">
            не угадала, милафка
            {tries >= 2 ? ` — ${question.hint}` : ""}
          </p>
        )}
        {status === "right" && (
          <p className="mt-3 text-center text-sm text-sage">да. только наше.</p>
        )}

        <div className="mt-5 flex justify-center">
          <Button type="submit" disabled={!value.trim() || status === "right"} className="pl-6 pr-5">
            {status === "right" ? (last ? "к главному" : "ещё один") : "проверить"}
            <ArrowRight className="size-4" />
          </Button>
        </div>
      </form>
    </Scene>
  );
}
