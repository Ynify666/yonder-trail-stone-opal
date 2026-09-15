import { AnimatePresence } from "motion/react";
import { useEffect, useState } from "react";
import { SCENE_BG, type SceneName } from "@/lib/love/content";
import { Atmosphere } from "./Atmosphere";
import { Celebration } from "./Celebration";
import { Envelope } from "./Envelope";
import { FloatingAnimals } from "./FloatingAnimals";
import { Gallery } from "./Gallery";
import { HeartRain } from "./HeartRain";
import { Intro } from "./Intro";
import { Proposal } from "./Proposal";
import { Quiz } from "./Quiz";
import { Steps } from "./Steps";

const STEP_INDEX: Partial<Record<SceneName, number>> = {
  intro: 0,
  gallery: 1,
  quiz: 2,
  proposal: 3,
};

export function LoveApp() {
  const [scene, setScene] = useState<SceneName>("envelope");
  const step = STEP_INDEX[scene];

  useEffect(() => {
    Object.values(SCENE_BG).forEach((src) => {
      const img = new Image();
      img.src = src;
    });
  }, []);

  return (
    <main data-scene={scene} className="relative min-h-dvh overflow-x-hidden">
      <Atmosphere scene={scene} />
      <div className="paper-grain" />
      <FloatingAnimals scene={scene} />
      {scene === "yes" && <HeartRain />}
      {step !== undefined && <Steps index={step} />}

      <AnimatePresence mode="wait">
        {scene === "envelope" && <Envelope key="envelope" onOpen={() => setScene("intro")} />}
        {scene === "intro" && <Intro key="intro" onNext={() => setScene("gallery")} />}
        {scene === "gallery" && <Gallery key="gallery" onNext={() => setScene("quiz")} />}
        {scene === "quiz" && <Quiz key="quiz" onNext={() => setScene("proposal")} />}
        {scene === "proposal" && <Proposal key="proposal" onYes={() => setScene("yes")} />}
        {scene === "yes" && <Celebration key="yes" />}
      </AnimatePresence>
    </main>
  );
}
