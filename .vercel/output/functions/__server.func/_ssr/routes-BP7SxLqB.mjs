import { i as __toESM } from "../_runtime.mjs";
import { L as require_react, v as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { i as ArrowLeft, n as Heart, r as ArrowRight } from "../_libs/lucide-react.mjs";
import { r as AnimatePresence, t as useReducedMotion } from "../_libs/framer-motion+[...].mjs";
import { t as motion } from "../_libs/motion.mjs";
import { n as clsx, t as cva } from "../_libs/class-variance-authority+clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-BP7SxLqB.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var SCENE_BG = {
	envelope: "/art/bg-desk.jpg",
	intro: "/art/bg-paper.jpg",
	gallery: "/art/bg-lights.jpg",
	quiz: "/art/bg-bamboo.jpg",
	proposal: "/art/bg-blossom.jpg",
	yes: "/art/bg-meadow.jpg"
};
var PHOTOS = [
	{
		src: "/photos/01-shinjo.png",
		caption: "Самая красивая сигна",
		tilt: -3.2
	},
	{
		src: "/photos/02-forehead.jpg",
		caption: "Shinjo на лбу и взгляд тигрицы",
		tilt: 2.4
	},
	{
		src: "/photos/03-blue.jpg",
		caption: "холодный свет — и всё равно ты",
		tilt: -1.6
	},
	{
		src: "/photos/04-portrait.jpg",
		caption: "Kadaness. просто ты.",
		tilt: 2.8
	},
	{
		src: "/photos/05-death-note.jpg",
		caption: "Black Edition и живой взгляд",
		tilt: -2.2
	},
	{
		src: "/photos/06-eyes.jpg",
		caption: "мне хватает одних глаз",
		tilt: 1.4
	}
];
var QUESTIONS = [{
	id: "signa",
	prompt: "Какой приз сподвиг нас к ещё большему общению?",
	hint: "коротко, на «Си»…",
	placeholder: "одно слово"
}, {
	id: "bdsm",
	prompt: "Наше любимое слово?",
	hint: "то самое странное, только наше",
	placeholder: "ты знаешь"
}];
function matchesAnswer(input, kind) {
	const s = input.trim().toLowerCase().replace(/ё/g, "е").replace(/[\s\-_.!?,]/g, "");
	if (kind === "signa") return s.includes("сигна") || s.includes("signa");
	return s.includes("бдсм") || s.includes("bdsm");
}
var INTRO_LINES = [
	{
		kind: "body",
		text: "Я мог бы просто сказать тебе об этом. Но мне кажется что нужно как то необычно это сделать — с пандами, капибарами и всяким глупым, с которого угораем ток мы."
	},
	{
		kind: "name",
		text: "Каданес. Kanades. Моя милафка."
	},
	{
		kind: "body",
		text: "Дальше будут твои фотографии. Потом два вопроса. И один самый главный."
	}
];
var CELEBRATION_LETTER = "Яра. Ты — самая милая и застенчивая девушка, которую я встречал. Панда будет рядом с тобой, капибара будет рядом со мной, и ты теперь тоже будешь рядом со мной. Спасибо, что ты — ты.";
var SCENE_FX = {
	envelope: ["mote"],
	intro: ["petal", "mote"],
	gallery: ["spark", "mote"],
	quiz: ["firefly", "mote"],
	proposal: ["blossom", "firefly"],
	yes: [
		"petal",
		"blossom",
		"spark"
	]
};
function hash(i, salt) {
	const x = Math.sin(i * 12.9898 + salt * 78.233) * 43758.5453;
	return x - Math.floor(x);
}
function buildBits(kinds, reduce) {
	if (reduce) return [];
	const bits = [];
	kinds.forEach((kind, k) => {
		const n = kind === "mote" ? 14 : kind === "spark" ? 12 : 10;
		for (let i = 0; i < n; i++) {
			const a = hash(i, k + 1);
			const b = hash(i, k + 7);
			bits.push({
				id: `${kind}-${i}`,
				kind,
				left: `${(a * 96 + 2).toFixed(2)}%`,
				top: kind === "mote" || kind === "spark" || kind === "firefly" ? `${(b * 88 + 4).toFixed(2)}%` : "-8%",
				duration: `${(kind === "mote" ? 6 : kind === "firefly" ? 8 : kind === "spark" ? 2.2 : 9) + b * 5}s`,
				delay: `${(a * 7).toFixed(2)}s`,
				drift: `${((a > .5 ? 1 : -1) * (18 + b * 36)).toFixed(0)}px`,
				spin: `${(140 + a * 200).toFixed(0)}deg`,
				opacity: .35 + b * .5
			});
		}
	});
	return bits;
}
function Atmosphere({ scene }) {
	const reduce = useReducedMotion();
	const bits = (0, import_react.useMemo)(() => buildBits(SCENE_FX[scene], Boolean(reduce)), [scene, reduce]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		"aria-hidden": "true",
		className: "pointer-events-none absolute inset-0 overflow-hidden",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "absolute inset-0 overflow-hidden",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatePresence, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.img, {
					src: SCENE_BG[scene],
					alt: "",
					initial: { opacity: 0 },
					animate: { opacity: 1 },
					exit: { opacity: 0 },
					transition: {
						duration: reduce ? .2 : .9,
						ease: [
							.22,
							1,
							.36,
							1
						]
					},
					className: "scene-photo"
				}, SCENE_BG[scene]) })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "scene-fog" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "scene-vignette" }),
			!reduce && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "light-leak" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "fx-layer",
				children: bits.map((bit) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: `fx-bit fx-${bit.kind}`,
					style: {
						left: bit.left,
						top: bit.top,
						animationDuration: bit.duration,
						animationDelay: `-${bit.delay}`,
						opacity: bit.kind === "mote" ? bit.opacity : void 0,
						["--drift"]: bit.drift,
						["--spin"]: bit.spin
					}
				}, bit.id))
			})
		]
	});
}
function cn(...inputs) {
	return twMerge(clsx(inputs));
}
function Scene({ children, className, wide = false }) {
	const reduce = useReducedMotion();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.section, {
		initial: reduce ? { opacity: 0 } : {
			opacity: 0,
			y: 18,
			filter: "blur(8px)"
		},
		animate: reduce ? { opacity: 1 } : {
			opacity: 1,
			y: 0,
			filter: "blur(0px)"
		},
		exit: reduce ? { opacity: 0 } : {
			opacity: 0,
			y: -12,
			filter: "blur(5px)"
		},
		transition: {
			duration: reduce ? .16 : .55,
			ease: [
				.22,
				1,
				.36,
				1
			]
		},
		className: cn("relative z-10 mx-auto flex min-h-dvh w-full flex-col items-center justify-center px-5 pt-16 pb-28", wide ? "max-w-xl" : "max-w-lg", className),
		children
	});
}
function Celebration() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Scene, {
		wide: true,
		className: "justify-start pt-20 md:justify-center",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "portrait-ring mb-5",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: "/art/friends.jpg",
					alt: "",
					className: "size-28 rounded-full object-cover"
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "font-script text-2xl text-primary",
				children: "тогда официально"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "font-display mb-6 text-center text-3xl font-medium tracking-tight md:text-4xl",
				children: "Я люблю тебя, милафка."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
				className: "letter-card w-full rounded-[32px] px-6 py-7 md:px-8",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-center text-[15px] leading-relaxed text-muted md:text-base",
						children: CELEBRATION_LETTER
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-script mt-5 text-center text-2xl text-fg",
						children: "теперь ты официально моя милафка"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-4 flex justify-center gap-1.5",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Heart, { className: "size-4 fill-primary text-primary" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Heart, { className: "size-4 fill-primary text-primary" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Heart, { className: "size-4 fill-primary text-primary" })
						]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-8 grid w-full grid-cols-3 gap-2.5",
				children: PHOTOS.map((photo, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
					initial: {
						opacity: 0,
						y: 12,
						rotate: photo.tilt
					},
					animate: {
						opacity: 1,
						y: 0,
						rotate: photo.tilt * .4
					},
					transition: {
						delay: .1 * i,
						duration: .45,
						ease: [
							.22,
							1,
							.36,
							1
						]
					},
					className: "polaroid polaroid-mini",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: photo.src,
						alt: photo.caption
					})
				}, photo.src))
			})
		]
	});
}
function Envelope({ onOpen }) {
	const [opening, setOpening] = (0, import_react.useState)(false);
	const [tilt, setTilt] = (0, import_react.useState)({
		x: 0,
		y: 0
	});
	function open() {
		if (opening) return;
		setOpening(true);
		setTilt({
			x: 0,
			y: 0
		});
		window.setTimeout(onOpen, 1080);
	}
	function onMove(e) {
		if (opening) return;
		const r = e.currentTarget.getBoundingClientRect();
		const px = (e.clientX - r.left) / r.width - .5;
		const py = (e.clientY - r.top) / r.height - .5;
		setTilt({
			x: py * -8,
			y: px * 12
		});
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Scene, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "font-script mb-1 text-2xl text-muted",
			children: "личное"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
			className: "font-display mb-8 text-center text-4xl font-medium tracking-tight text-fg md:text-5xl",
			children: "Для Каданес"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "portrait-ring mb-6",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: "/art/panda-letter.jpg",
				alt: "",
				className: "size-24 rounded-full object-cover md:size-28"
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
			type: "button",
			onClick: open,
			onPointerMove: onMove,
			onPointerLeave: () => setTilt({
				x: 0,
				y: 0
			}),
			"aria-label": "Открыть письмо для Каданес",
			className: "envelope-stage group relative",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: cn("envelope", opening && "is-open"),
				style: {
					transform: opening ? void 0 : `rotateX(${tilt.x}deg) rotateY(${tilt.y}deg) translateY(${tilt.x === 0 && tilt.y === 0 ? 0 : -6}px)`,
					transition: "transform 400ms cubic-bezier(0.22, 1, 0.36, 1)"
				},
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "envelope-letter",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-script text-2xl text-primary",
							children: "Каданес"
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "envelope-pocket" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "envelope-flap" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: cn("wax-seal", !opening && "seal-pulse"),
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Heart, {
							className: "size-6 fill-primary-fg text-primary-fg",
							strokeWidth: 1.6
						})
					})
				]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "font-script mt-8 text-center text-xl text-muted",
			children: opening ? "открываю…" : "нажми на печать"
		})
	] });
}
var CASTS = {
	envelope: [{
		src: "/art/panda-letter.jpg",
		className: "left-[-28px] top-[10%] w-[86px] md:left-6 md:w-32 floaty",
		tilt: "-8deg",
		depth: 18
	}, {
		src: "/art/capy-orange.jpg",
		className: "right-[-30px] top-[20%] w-[90px] md:right-8 md:w-36 floaty-delay",
		tilt: "7deg",
		depth: 22
	}],
	intro: [{
		src: "/art/panda-heart.jpg",
		className: "left-[-26px] bottom-[8%] w-[84px] md:left-8 md:w-28 floaty-slow",
		tilt: "-6deg",
		depth: 16
	}, {
		src: "/art/capy-water.jpg",
		className: "right-[-24px] top-[14%] hidden w-28 md:block md:right-10 floaty",
		tilt: "5deg",
		depth: 20
	}],
	gallery: [{
		src: "/art/panda-shy.jpg",
		className: "left-[-22px] top-[12%] w-[78px] md:left-6 md:w-28 floaty",
		tilt: "-5deg",
		depth: 14
	}, {
		src: "/art/capy-orange.jpg",
		className: "right-[-26px] bottom-[10%] w-[82px] md:right-8 md:w-32 floaty-delay",
		tilt: "8deg",
		depth: 20
	}],
	quiz: [{
		src: "/art/panda-shy.jpg",
		className: "right-[-28px] top-[16%] w-[86px] md:right-10 md:w-32 floaty-slow",
		tilt: "6deg",
		depth: 18
	}, {
		src: "/art/capy-water.jpg",
		className: "left-[-22px] bottom-[8%] hidden w-28 md:block md:left-8 floaty",
		tilt: "-4deg",
		depth: 14
	}],
	proposal: [{
		src: "/art/panda-heart.jpg",
		className: "left-[-26px] top-[12%] w-[88px] md:left-8 md:w-32 floaty",
		tilt: "-7deg",
		depth: 16
	}, {
		src: "/art/capy-orange.jpg",
		className: "right-[-28px] bottom-[12%] w-[90px] md:right-10 md:w-36 floaty-delay",
		tilt: "6deg",
		depth: 22
	}],
	yes: [
		{
			src: "/art/panda-heart.jpg",
			className: "left-[-24px] top-[8%] w-[80px] md:left-6 md:w-28 floaty",
			tilt: "-8deg",
			depth: 14
		},
		{
			src: "/art/capy-orange.jpg",
			className: "right-[-26px] top-[16%] w-[84px] md:right-8 md:w-32 floaty-delay",
			tilt: "7deg",
			depth: 20
		},
		{
			src: "/art/panda-shy.jpg",
			className: "bottom-[6%] left-[-18px] hidden w-24 md:block md:left-12 floaty-slow",
			tilt: "-4deg",
			depth: 12
		},
		{
			src: "/art/capy-water.jpg",
			className: "bottom-[8%] right-[-16px] hidden w-24 md:block md:right-14 floaty",
			tilt: "5deg",
			depth: 16
		}
	]
};
function FloatingAnimals({ scene }) {
	const [shift, setShift] = (0, import_react.useState)({
		x: 0,
		y: 0
	});
	(0, import_react.useEffect)(() => {
		if (!window.matchMedia("(pointer: fine)").matches) return;
		const onMove = (e) => {
			setShift({
				x: (e.clientX / window.innerWidth - .5) * 2,
				y: (e.clientY / window.innerHeight - .5) * 2
			});
		};
		window.addEventListener("pointermove", onMove, { passive: true });
		return () => window.removeEventListener("pointermove", onMove);
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		"aria-hidden": "true",
		className: "pointer-events-none absolute inset-0 overflow-hidden",
		children: CASTS[scene].map((animal) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
			src: animal.src,
			alt: "",
			className: cn("absolute rounded-full object-cover opacity-80 shadow-letter md:opacity-95", animal.className),
			style: {
				["--tilt"]: animal.tilt,
				translate: `${shift.x * animal.depth}px ${shift.y * animal.depth}px`
			}
		}, `${scene}-${animal.src}-${animal.className}`))
	});
}
var buttonVariants = cva("inline-flex items-center justify-center gap-2 font-sans font-semibold tracking-tight transition-[transform,background-color,box-shadow,color] duration-150 ease-out select-none disabled:pointer-events-none disabled:opacity-50 active:not-disabled:scale-[0.96] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary", {
	variants: {
		variant: {
			primary: "bg-primary text-primary-fg shadow-[0_8px_24px_-10px_rgba(196,92,106,0.7)] hover:brightness-[1.04]",
			ghost: "bg-transparent text-fg hover:bg-surface-2",
			paper: "bg-surface text-fg shadow-[0_1px_0_rgba(58,42,36,0.06),0_10px_28px_-16px_rgba(58,42,36,0.35)] hover:shadow-[0_1px_0_rgba(58,42,36,0.08),0_14px_32px_-14px_rgba(58,42,36,0.4)]",
			yes: "bg-primary text-primary-fg shadow-[0_10px_28px_-10px_rgba(196,92,106,0.75)] hover:brightness-[1.05]",
			no: "bg-surface-2 text-muted"
		},
		size: {
			md: "h-12 min-h-12 px-6 text-base rounded-full",
			lg: "h-14 min-h-14 px-8 text-lg rounded-full",
			sm: "h-11 min-h-11 px-5 text-sm rounded-full"
		}
	},
	defaultVariants: {
		variant: "primary",
		size: "md"
	}
});
function Button({ className, variant, size, type = "button", ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
		type,
		className: cn(buttonVariants({
			variant,
			size
		}), className),
		...props
	});
}
function Gallery({ onNext }) {
	const [index, setIndex] = (0, import_react.useState)(0);
	const startX = (0, import_react.useRef)(0);
	const photo = PHOTOS[index];
	const last = index === PHOTOS.length - 1;
	function go(dir) {
		setIndex((i) => Math.min(PHOTOS.length - 1, Math.max(0, i + dir)));
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Scene, {
		wide: true,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "font-script text-xl text-muted",
				children: "несколько кадров"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "font-display mb-6 text-center text-3xl font-medium tracking-tight md:text-4xl",
				children: "Ты"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative mx-auto w-full max-w-[280px] touch-pan-y md:max-w-[300px]",
				onPointerDown: (e) => {
					startX.current = e.clientX;
				},
				onPointerUp: (e) => {
					const dx = e.clientX - startX.current;
					if (dx > 48) go(-1);
					if (dx < -48) go(1);
				},
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						"aria-hidden": "true",
						className: "pointer-events-none absolute inset-x-4 top-4 bottom-10 rounded-[6px] bg-surface shadow-letter",
						style: { transform: "rotate(-7deg) translate(-10px, 6px)" }
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						"aria-hidden": "true",
						className: "pointer-events-none absolute inset-x-4 top-4 bottom-10 rounded-[6px] bg-surface shadow-letter",
						style: { transform: "rotate(6deg) translate(12px, 4px)" }
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatePresence, {
						mode: "wait",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.figure, {
							initial: {
								opacity: 0,
								rotate: photo.tilt - 7,
								y: 16,
								scale: .97
							},
							animate: {
								opacity: 1,
								rotate: photo.tilt,
								y: 0,
								scale: 1
							},
							exit: {
								opacity: 0,
								rotate: photo.tilt + 7,
								y: -10,
								scale: .98
							},
							transition: {
								duration: .4,
								ease: [
									.22,
									1,
									.36,
									1
								]
							},
							className: "polaroid relative z-10",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "washi-tape" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
									src: photo.src,
									alt: photo.caption
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("figcaption", {
									className: "font-script absolute right-3 bottom-3 left-3 text-center text-[19px] leading-tight text-fg",
									children: photo.caption
								})
							]
						}, photo.src)
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-5 flex items-center gap-1.5",
				children: PHOTOS.map((p, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					"aria-label": `Фото ${i + 1}`,
					onClick: () => setIndex(i),
					className: cn("size-2 rounded-full transition-[transform,background-color] duration-200", i === index ? "scale-125 bg-primary" : "bg-faint/80 hover:bg-muted")
				}, p.src))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-5 flex items-center gap-3",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						onClick: () => go(-1),
						disabled: index === 0,
						"aria-label": "Предыдущее фото",
						className: cn("grid size-11 place-items-center rounded-full bg-surface shadow-letter transition-[opacity,transform] duration-150 ease-out active:not-disabled:scale-[0.96]", index === 0 && "opacity-40"),
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowLeft, { className: "size-4" })
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "font-sans min-w-14 text-center text-sm tabular-nums text-muted",
						children: [
							index + 1,
							" / ",
							PHOTOS.length
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						onClick: () => go(1),
						disabled: last,
						"aria-label": "Следующее фото",
						className: cn("grid size-11 place-items-center rounded-full bg-surface shadow-letter transition-[opacity,transform] duration-150 ease-out active:not-disabled:scale-[0.96]", last && "opacity-40"),
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "size-4" })
					})
				]
			}),
			last ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
				onClick: onNext,
				className: "mt-7 pl-6 pr-5",
				children: ["Дальше - Вопросы.", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "size-4" })]
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-6 text-center text-sm text-muted",
				children: "листни или нажми стрелку"
			})
		]
	});
}
function HeartRain() {
	const hearts = (0, import_react.useMemo)(() => Array.from({ length: 18 }, (_, i) => ({
		id: i,
		left: `${(i * 17 + 5) % 100}%`,
		size: 10 + i * 5 % 18,
		duration: `${6.5 + i % 7}s`,
		delay: `${i * .32 % 6}s`,
		drift: `${(i % 2 === 0 ? 22 : -18) + i % 9}px`,
		opacity: .3 + i % 5 * .12
	})), []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		"aria-hidden": "true",
		className: "pointer-events-none fixed inset-0 z-[6] overflow-hidden",
		children: hearts.map((h) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Heart, {
			className: "heart-fall fill-primary text-primary",
			style: {
				left: h.left,
				width: h.size,
				height: h.size,
				opacity: h.opacity,
				animationDuration: h.duration,
				animationDelay: `-${h.delay}`,
				["--drift"]: h.drift
			}
		}, h.id))
	});
}
function Intro({ onNext }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Scene, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
		className: "letter-card w-full rounded-[32px] px-6 py-8 md:px-9 md:py-10",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "portrait-ring mx-auto mb-5 w-fit",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: "/art/panda-heart.jpg",
					alt: "",
					className: "size-24 rounded-full object-cover"
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "font-display text-center text-3xl font-medium tracking-tight md:text-4xl",
				children: "Привет, милафка."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-6 space-y-5",
				children: INTRO_LINES.map((line, i) => line.kind === "name" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.p, {
					initial: {
						opacity: 0,
						y: 12,
						filter: "blur(4px)"
					},
					animate: {
						opacity: 1,
						y: 0,
						filter: "blur(0px)"
					},
					transition: {
						delay: .22 + i * .2,
						duration: .5,
						ease: [
							.22,
							1,
							.36,
							1
						]
					},
					className: "font-script text-center text-[1.85rem] leading-snug text-fg md:text-[2.1rem]",
					children: line.text
				}, line.text) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.p, {
					initial: {
						opacity: 0,
						y: 12,
						filter: "blur(4px)"
					},
					animate: {
						opacity: 1,
						y: 0,
						filter: "blur(0px)"
					},
					transition: {
						delay: .22 + i * .2,
						duration: .5,
						ease: [
							.22,
							1,
							.36,
							1
						]
					},
					className: "text-center text-[15px] leading-relaxed text-muted md:text-base",
					children: line.text
				}, line.text))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-8 flex justify-center",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
					onClick: onNext,
					className: "pl-6 pr-5",
					children: ["К твоим фото.", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "size-4" })]
				})
			})
		]
	}) });
}
function Burst() {
	const bits = Array.from({ length: 10 }, (_, i) => {
		const a = i / 10 * Math.PI * 2;
		return {
			id: i,
			tx: `${Math.cos(a) * (70 + i % 3 * 18)}px`,
			ty: `${Math.sin(a) * (52 + i % 2 * 16) - 20}px`
		};
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		"aria-hidden": "true",
		className: "pointer-events-none absolute inset-0 z-30",
		children: bits.map((b) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Heart, {
			className: "heart-burst size-4 fill-primary text-primary",
			style: {
				["--tx"]: b.tx,
				["--ty"]: b.ty
			}
		}, b.id))
	});
}
function Proposal({ onYes }) {
	const playRef = (0, import_react.useRef)(null);
	const noRef = (0, import_react.useRef)(null);
	const [pos, setPos] = (0, import_react.useState)(null);
	const [flees, setFlees] = (0, import_react.useState)(0);
	const [burst, setBurst] = (0, import_react.useState)(false);
	function flee(e) {
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
			x = (x + maxX * .5) % maxX;
			y = (y + maxY * .55) % maxY;
		}
		setPos({
			x,
			y
		});
		setFlees((n) => n + 1);
	}
	function accept() {
		if (burst) return;
		setBurst(true);
		window.setTimeout(onYes, 640);
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Scene, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "portrait-ring mb-5",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: "/art/friends.jpg",
				alt: "",
				className: "size-28 rounded-full object-cover md:size-32"
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "font-script text-2xl text-muted",
			children: "Каданес"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
			className: "font-display mb-2 text-center text-3xl font-medium tracking-tight md:text-[2.5rem]",
			children: "Будешь ли ты моей девушкой?"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "mb-6 max-w-sm text-center text-sm leading-relaxed text-muted",
			children: "Готова убежать со мной?"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "relative",
			children: [burst && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Burst, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
				variant: "yes",
				size: "lg",
				onClick: accept,
				className: cn("relative z-20 gap-2 px-10", !burst && "yes-pulse"),
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Heart, { className: "size-5 fill-primary-fg" }), "Да"]
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			ref: playRef,
			className: "relative mt-3 h-40 w-full md:h-44",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				ref: noRef,
				type: "button",
				"aria-label": "Нет — но эта кнопка убегает",
				onPointerEnter: flee,
				onPointerDown: flee,
				onClick: (e) => e.preventDefault(),
				className: cn("absolute z-10 h-11 min-w-[5.5rem] touch-none rounded-full bg-surface-2 px-5 text-sm font-semibold text-muted shadow-letter", pos ? "" : "top-3 left-1/2 -translate-x-1/2"),
				style: pos ? {
					left: pos.x,
					top: pos.y,
					transform: `rotate(${flees % 2 === 0 ? -8 : 8}deg)`,
					transition: "left 280ms cubic-bezier(0.22, 1, 0.36, 1), top 280ms cubic-bezier(0.22, 1, 0.36, 1), transform 280ms cubic-bezier(0.22, 1, 0.36, 1)"
				} : { transition: "left 280ms cubic-bezier(0.22, 1, 0.36, 1), top 280ms cubic-bezier(0.22, 1, 0.36, 1), transform 280ms cubic-bezier(0.22, 1, 0.36, 1)" },
				children: "Нет"
			})
		}),
		flees >= 4 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "font-script -mt-2 text-center text-lg text-primary",
			children: "нет здесь не живёт. только да."
		})
	] });
}
function Quiz({ onNext }) {
	const [qIndex, setQIndex] = (0, import_react.useState)(0);
	const [value, setValue] = (0, import_react.useState)("");
	const [status, setStatus] = (0, import_react.useState)("idle");
	const [tries, setTries] = (0, import_react.useState)(0);
	const question = QUESTIONS[qIndex];
	const last = qIndex === QUESTIONS.length - 1;
	function submit(e) {
		e.preventDefault();
		if (status === "right") return;
		if (matchesAnswer(value, question.id)) {
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
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Scene, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "font-script text-xl text-muted",
			children: "маленькая проверка"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
			className: "font-display mb-1 text-center text-3xl font-medium tracking-tight",
			children: "Два вопроса"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
			className: "mb-4 text-center text-sm text-muted",
			children: [
				qIndex + 1,
				" из ",
				QUESTIONS.length
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
			onSubmit: submit,
			className: cn("letter-card w-full rounded-[32px] px-6 py-6 md:px-8", status === "wrong" && "shake-x"),
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "portrait-ring mx-auto mb-4 w-fit",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "relative size-16",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatePresence, {
							mode: "wait",
							initial: false,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.img, {
								src: status === "right" ? "/art/panda-heart.jpg" : "/art/panda-shy.jpg",
								alt: "",
								initial: {
									opacity: 0,
									scale: .88,
									filter: "blur(4px)"
								},
								animate: {
									opacity: 1,
									scale: 1,
									filter: "blur(0px)"
								},
								exit: {
									opacity: 0,
									scale: .88,
									filter: "blur(4px)"
								},
								transition: {
									duration: .28,
									ease: [
										.22,
										1,
										.36,
										1
									]
								},
								className: "absolute inset-0 size-16 rounded-full object-cover"
							}, status === "right" ? "heart" : "shy")
						})
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "font-display text-center text-xl leading-snug",
					children: question.prompt
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
					className: "sr-only",
					htmlFor: "secret",
					children: "Ответ"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
					id: "secret",
					value,
					onChange: (e) => {
						setValue(e.target.value);
						if (status === "wrong") setStatus("idle");
					},
					placeholder: question.placeholder,
					autoComplete: "off",
					autoCapitalize: "off",
					spellCheck: false,
					className: "mt-5 h-12 w-full rounded-2xl bg-surface-2 px-4 text-center font-script text-2xl text-fg outline-none ring-1 ring-fg/8 placeholder:text-faint focus:ring-2 focus:ring-primary/40"
				}),
				status === "wrong" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "mt-3 text-center text-sm text-primary",
					children: ["не угадала, милафка", tries >= 2 ? ` — ${question.hint}` : ""]
				}),
				status === "right" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-3 text-center text-sm text-sage",
					children: "да. только наше."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-5 flex justify-center",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
						type: "submit",
						disabled: !value.trim() || status === "right",
						className: "pl-6 pr-5",
						children: [status === "right" ? last ? "к главному" : "ещё один" : "проверить", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "size-4" })]
					})
				})
			]
		}, `${qIndex}-${tries}`)
	] });
}
var LABELS = [
	"письмо",
	"фото",
	"вопросы",
	"вопрос"
];
function Steps({ index }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "pointer-events-none absolute top-4 left-1/2 z-30 flex -translate-x-1/2 pt-[env(safe-area-inset-top)]",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "steps-pill flex items-center gap-1 rounded-full px-3 py-1.5",
			children: LABELS.map((label, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
				className: "flex items-center",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Heart, {
					"aria-hidden": "true",
					className: cn("size-3.5 transition-[color,fill,transform] duration-300 ease-out", i <= index ? "fill-primary text-primary scale-110" : "fill-transparent text-faint")
				}), i < LABELS.length - 1 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: cn("mx-1 block h-px w-4 transition-colors duration-300", i < index ? "bg-primary/50" : "bg-faint/60") })]
			}, label))
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
			className: "sr-only",
			children: [
				"Шаг ",
				index + 1,
				" из ",
				LABELS.length
			]
		})]
	});
}
var STEP_INDEX = {
	intro: 0,
	gallery: 1,
	quiz: 2,
	proposal: 3
};
function LoveApp() {
	const [scene, setScene] = (0, import_react.useState)("envelope");
	const step = STEP_INDEX[scene];
	(0, import_react.useEffect)(() => {
		Object.values(SCENE_BG).forEach((src) => {
			const img = new Image();
			img.src = src;
		});
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		"data-scene": scene,
		className: "relative min-h-dvh overflow-x-hidden",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Atmosphere, { scene }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "paper-grain" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FloatingAnimals, { scene }),
			scene === "yes" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeartRain, {}),
			step !== void 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Steps, { index: step }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AnimatePresence, {
				mode: "wait",
				children: [
					scene === "envelope" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Envelope, { onOpen: () => setScene("intro") }, "envelope"),
					scene === "intro" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Intro, { onNext: () => setScene("gallery") }, "intro"),
					scene === "gallery" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Gallery, { onNext: () => setScene("quiz") }, "gallery"),
					scene === "quiz" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Quiz, { onNext: () => setScene("proposal") }, "quiz"),
					scene === "proposal" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Proposal, { onYes: () => setScene("yes") }, "proposal"),
					scene === "yes" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Celebration, {}, "yes")
				]
			})
		]
	});
}
function Home() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoveApp, {});
}
//#endregion
export { Home as component };
