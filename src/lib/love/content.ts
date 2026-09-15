export type SceneName =
  | "envelope"
  | "intro"
  | "gallery"
  | "quiz"
  | "proposal"
  | "yes";

export const SCENE_BG: Record<SceneName, string> = {
  envelope: "/art/bg-desk.jpg",
  intro: "/art/bg-paper.jpg",
  gallery: "/art/bg-lights.jpg",
  quiz: "/art/bg-bamboo.jpg",
  proposal: "/art/bg-blossom.jpg",
  yes: "/art/bg-meadow.jpg",
};

export const PHOTOS = [
  {
    src: "/photos/01-shinjo.png",
    caption: "Самая красивая сигна",
    tilt: -3.2,
  },
  {
    src: "/photos/02-forehead.jpg",
    caption: "Shinjo на лбу и взгляд тигрицы",
    tilt: 2.4,
  },
  {
    src: "/photos/03-blue.jpg",
    caption: "холодный свет — и всё равно ты",
    tilt: -1.6,
  },
  {
    src: "/photos/04-portrait.jpg",
    caption: "Kadaness. просто ты.",
    tilt: 2.8,
  },
  {
    src: "/photos/05-death-note.jpg",
    caption: "Black Edition и живой взгляд",
    tilt: -2.2,
  },
  {
    src: "/photos/06-eyes.jpg",
    caption: "мне хватает одних глаз",
    tilt: 1.4,
  },
] as const;

export const QUESTIONS = [
  {
    id: "signa" as const,
    prompt: "Какой приз сподвиг нас к ещё большему общению?",
    hint: "коротко, на «Си»…",
    placeholder: "одно слово",
  },
  {
    id: "bdsm" as const,
    prompt: "Наше любимое слово?",
    hint: "то самое странное, только наше",
    placeholder: "ты знаешь",
  },
];

export function matchesAnswer(input: string, kind: "signa" | "bdsm"): boolean {
  const s = input
    .trim()
    .toLowerCase()
    .replace(/ё/g, "е")
    .replace(/[\s\-_.!?,]/g, "");
  if (kind === "signa") {
    return s.includes("сигна") || s.includes("signa");
  }
  return s.includes("бдсм") || s.includes("bdsm");
}

export const INTRO_LINES = [
  {
    kind: "body" as const,
    text: "Я мог бы просто сказать тебе об этом. Но мне кажется что нужно как то необычно это сделать — с пандами, капибарами и всяким глупым, с которого угораем ток мы.",
  },
  {
    kind: "name" as const,
    text: "Каданес. Kanades. Моя милафка.",
  },
  {
    kind: "body" as const,
    text: "Дальше будут твои фотографии. Потом два вопроса. И один самый главный.",
  },
];

export const CELEBRATION_LETTER =
  "Яра. Ты — самая милая и застенчивая девушка, которую я встречал. Панда будет рядом с тобой, капибара будет рядом со мной, и ты теперь тоже будешь рядом со мной. Спасибо, что ты — ты.";
