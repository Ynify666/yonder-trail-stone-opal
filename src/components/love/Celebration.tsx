import { Heart } from "lucide-react";
import { motion } from "motion/react";
import { CELEBRATION_LETTER, PHOTOS } from "@/lib/love/content";
import { Scene } from "./Scene";

export function Celebration() {
  return (
    <Scene wide className="justify-start pt-20 md:justify-center">
      <div className="portrait-ring mb-5">
        <img
          src="/art/friends.jpg"
          alt=""
          className="size-28 rounded-full object-cover"
        />
      </div>
      <p className="font-script text-2xl text-primary">тогда официально</p>
      <h2 className="font-display mb-6 text-center text-3xl font-medium tracking-tight md:text-4xl">
        Я люблю тебя, милафка.
      </h2>

      <article className="letter-card w-full rounded-[32px] px-6 py-7 md:px-8">
        <p className="text-center text-[15px] leading-relaxed text-muted md:text-base">
          {CELEBRATION_LETTER}
        </p>
        <p className="font-script mt-5 text-center text-2xl text-fg">
          теперь ты официально моя милафка
        </p>
        <div className="mt-4 flex justify-center gap-1.5">
          <Heart className="size-4 fill-primary text-primary" />
          <Heart className="size-4 fill-primary text-primary" />
          <Heart className="size-4 fill-primary text-primary" />
        </div>
      </article>

      <div className="mt-8 grid w-full grid-cols-3 gap-2.5">
        {PHOTOS.map((photo, i) => (
          <motion.div
            key={photo.src}
            initial={{ opacity: 0, y: 12, rotate: photo.tilt }}
            animate={{ opacity: 1, y: 0, rotate: photo.tilt * 0.4 }}
            transition={{ delay: 0.1 * i, duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
            className="polaroid polaroid-mini"
          >
            <img src={photo.src} alt={photo.caption} />
          </motion.div>
        ))}
      </div>
    </Scene>
  );
}
