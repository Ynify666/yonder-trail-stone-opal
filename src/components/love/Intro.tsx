import { ArrowRight } from "lucide-react";
import { motion } from "motion/react";
import { Button } from "@/components/ui/button";
import { INTRO_LINES } from "@/lib/love/content";
import { Scene } from "./Scene";

export function Intro({ onNext }: { onNext: () => void }) {
  return (
    <Scene>
      <article className="letter-card w-full rounded-[32px] px-6 py-8 md:px-9 md:py-10">
        <div className="portrait-ring mx-auto mb-5 w-fit">
          <img
            src="/art/panda-heart.jpg"
            alt=""
            className="size-24 rounded-full object-cover"
          />
        </div>
        <h2 className="font-display text-center text-3xl font-medium tracking-tight md:text-4xl">
          Привет, милафка.
        </h2>
        <div className="mt-6 space-y-5">
          {INTRO_LINES.map((line, i) =>
            line.kind === "name" ? (
              <motion.p
                key={line.text}
                initial={{ opacity: 0, y: 12, filter: "blur(4px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                transition={{ delay: 0.22 + i * 0.2, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                className="font-script text-center text-[1.85rem] leading-snug text-fg md:text-[2.1rem]"
              >
                {line.text}
              </motion.p>
            ) : (
              <motion.p
                key={line.text}
                initial={{ opacity: 0, y: 12, filter: "blur(4px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                transition={{ delay: 0.22 + i * 0.2, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                className="text-center text-[15px] leading-relaxed text-muted md:text-base"
              >
                {line.text}
              </motion.p>
            ),
          )}
        </div>
        <div className="mt-8 flex justify-center">
          <Button onClick={onNext} className="pl-6 pr-5">
            К твоим фото.
            <ArrowRight className="size-4" />
          </Button>
        </div>
      </article>
    </Scene>
  );
}
