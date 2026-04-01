import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useMemo, useState } from "react";
import { storyAnimationOptions } from "./storyAnimationOptions";

type SceneVisualConfig = {
  skyGradient: string;
  ambientColor: string;
  particles: { size: number; left: string; top: string; duration: number; delay: number }[];
  ribbons: { width: string; top: string; duration: number; delay: number; rotate: number; opacity: number }[];
};

const sceneVisuals: Record<string, SceneVisualConfig> = {
  "space-rangers": {
    skyGradient: "linear-gradient(160deg, #1e1b4b 0%, #312e81 35%, #0f172a 100%)",
    ambientColor: "rgba(129, 140, 248, 0.45)",
    particles: [
      { size: 12, left: "8%", top: "24%", duration: 7, delay: 0 },
      { size: 18, left: "78%", top: "18%", duration: 9, delay: 1.2 },
      { size: 10, left: "56%", top: "67%", duration: 6.3, delay: 0.5 },
      { size: 15, left: "30%", top: "72%", duration: 8.1, delay: 1.8 }
    ],
    ribbons: [
      { width: "42%", top: "22%", duration: 8, delay: 0, rotate: -8, opacity: 0.32 },
      { width: "48%", top: "56%", duration: 10, delay: 1.1, rotate: 12, opacity: 0.26 }
    ]
  },
  "ocean-magic": {
    skyGradient: "linear-gradient(160deg, #083344 0%, #0f766e 40%, #0f172a 100%)",
    ambientColor: "rgba(45, 212, 191, 0.38)",
    particles: [
      { size: 20, left: "14%", top: "65%", duration: 7.5, delay: 0.4 },
      { size: 14, left: "42%", top: "30%", duration: 6.8, delay: 0 },
      { size: 24, left: "72%", top: "62%", duration: 8.5, delay: 1.3 },
      { size: 12, left: "82%", top: "25%", duration: 6.2, delay: 0.8 }
    ],
    ribbons: [
      { width: "56%", top: "28%", duration: 9, delay: 0.2, rotate: 4, opacity: 0.3 },
      { width: "62%", top: "62%", duration: 11, delay: 1.6, rotate: -5, opacity: 0.25 }
    ]
  },
  "forest-fairytale": {
    skyGradient: "linear-gradient(150deg, #14532d 0%, #166534 42%, #052e16 100%)",
    ambientColor: "rgba(134, 239, 172, 0.33)",
    particles: [
      { size: 18, left: "9%", top: "56%", duration: 7, delay: 0.5 },
      { size: 12, left: "34%", top: "22%", duration: 6.5, delay: 0 },
      { size: 22, left: "68%", top: "44%", duration: 8.8, delay: 1.1 },
      { size: 14, left: "84%", top: "72%", duration: 7.3, delay: 0.9 }
    ],
    ribbons: [
      { width: "52%", top: "35%", duration: 8.2, delay: 0.4, rotate: -9, opacity: 0.22 },
      { width: "44%", top: "70%", duration: 9.3, delay: 1.5, rotate: 7, opacity: 0.2 }
    ]
  },
  "castle-coco": {
    skyGradient: "linear-gradient(150deg, #422006 0%, #7c2d12 38%, #1f2937 100%)",
    ambientColor: "rgba(251, 146, 60, 0.35)",
    particles: [
      { size: 16, left: "15%", top: "32%", duration: 6.2, delay: 0.1 },
      { size: 22, left: "38%", top: "68%", duration: 8.4, delay: 1.4 },
      { size: 14, left: "62%", top: "22%", duration: 7.1, delay: 0.7 },
      { size: 20, left: "81%", top: "58%", duration: 9, delay: 0 }
    ],
    ribbons: [
      { width: "46%", top: "24%", duration: 9.4, delay: 0.4, rotate: -6, opacity: 0.24 },
      { width: "58%", top: "66%", duration: 11, delay: 1.8, rotate: 8, opacity: 0.23 }
    ]
  },
  "sky-pirates": {
    skyGradient: "linear-gradient(145deg, #0c4a6e 0%, #0369a1 35%, #7e22ce 100%)",
    ambientColor: "rgba(125, 211, 252, 0.35)",
    particles: [
      { size: 22, left: "7%", top: "70%", duration: 8.1, delay: 0.6 },
      { size: 16, left: "28%", top: "18%", duration: 7, delay: 0.1 },
      { size: 14, left: "58%", top: "56%", duration: 6.7, delay: 1.2 },
      { size: 20, left: "84%", top: "28%", duration: 8.8, delay: 0 }
    ],
    ribbons: [
      { width: "58%", top: "26%", duration: 8.8, delay: 0, rotate: -10, opacity: 0.28 },
      { width: "66%", top: "60%", duration: 10.6, delay: 1.3, rotate: 11, opacity: 0.25 }
    ]
  }
};

const cardVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.96 },
  show: (index: number) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      delay: index * 0.08,
      duration: 0.5,
      ease: [0.16, 1, 0.3, 1]
    }
  })
};

export function ImmersiveStoryShowcase() {
  const [selectedId, setSelectedId] = useState(storyAnimationOptions[0].id);
  const shouldReduceMotion = useReducedMotion();

  const selected = useMemo(
    () => storyAnimationOptions.find((story) => story.id === selectedId) ?? storyAnimationOptions[0],
    [selectedId]
  );
  const selectedVisual = sceneVisuals[selected.id];

  return (
    <section
      style={{
        minHeight: "100vh",
        padding: "2rem",
        background:
          "radial-gradient(circle at top, rgba(90, 120, 255, 0.35), rgba(16, 24, 48, 1) 60%), #0f172a",
        color: "#e2e8f0",
        fontFamily: "Inter, system-ui, sans-serif"
      }}
    >
      <motion.h1
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45 }}
        style={{ fontSize: "clamp(1.8rem, 3vw, 3rem)", marginBottom: "1rem" }}
      >
        Pixar-Like Immersive Storytelling Options for Kids
      </motion.h1>

      <p style={{ maxWidth: 800, lineHeight: 1.6, marginBottom: "1.5rem", color: "#bfdbfe" }}>
        Pick a story world below. Each option now includes a live animated mini-scene with floating particles,
        cinematic light ribbons, and layered transitions so the storytelling feels immediate and immersive.
      </p>

      <AnimatePresence mode="wait">
        <motion.div
          key={`${selected.id}-scene`}
          initial={{ opacity: 0, scale: 0.98, y: 8 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 1.02, y: -6 }}
          transition={{ duration: 0.5 }}
          style={{
            position: "relative",
            borderRadius: 18,
            minHeight: 240,
            overflow: "hidden",
            border: "1px solid rgba(148, 163, 184, 0.35)",
            background: selectedVisual.skyGradient,
            boxShadow: "0 18px 40px rgba(15, 23, 42, 0.45)",
            marginBottom: "1.2rem"
          }}
        >
          <motion.div
            aria-hidden
            animate={
              shouldReduceMotion
                ? undefined
                : {
                    opacity: [0.25, 0.45, 0.25],
                    scale: [0.95, 1.08, 0.95]
                  }
            }
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            style={{
              position: "absolute",
              width: 300,
              height: 300,
              borderRadius: "999px",
              filter: "blur(45px)",
              background: selectedVisual.ambientColor,
              top: -90,
              left: -50
            }}
          />

          {selectedVisual.ribbons.map((ribbon, index) => (
            <motion.div
              key={`ribbon-${selected.id}-${index}`}
              aria-hidden
              animate={
                shouldReduceMotion
                  ? undefined
                  : {
                      x: ["-8%", "6%", "-8%"],
                      opacity: [ribbon.opacity * 0.65, ribbon.opacity, ribbon.opacity * 0.65]
                    }
              }
              transition={{ duration: ribbon.duration, repeat: Infinity, ease: "easeInOut", delay: ribbon.delay }}
              style={{
                position: "absolute",
                left: "-8%",
                top: ribbon.top,
                width: ribbon.width,
                height: 32,
                transform: `rotate(${ribbon.rotate}deg)`,
                borderRadius: 999,
                background: "linear-gradient(90deg, rgba(255,255,255,0.08), rgba(191,219,254,0.35), rgba(255,255,255,0.08))",
                backdropFilter: "blur(2px)"
              }}
            />
          ))}

          {selectedVisual.particles.map((particle, index) => (
            <motion.div
              key={`particle-${selected.id}-${index}`}
              aria-hidden
              animate={
                shouldReduceMotion
                  ? undefined
                  : {
                      y: [0, -20, 0],
                      x: [0, index % 2 === 0 ? 10 : -10, 0],
                      opacity: [0.55, 1, 0.55]
                    }
              }
              transition={{ duration: particle.duration, repeat: Infinity, delay: particle.delay, ease: "easeInOut" }}
              style={{
                position: "absolute",
                left: particle.left,
                top: particle.top,
                width: particle.size,
                height: particle.size,
                borderRadius: "50%",
                background: "rgba(226, 232, 240, 0.95)",
                boxShadow: "0 0 18px rgba(255, 255, 255, 0.9)"
              }}
            />
          ))}

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            style={{
              position: "absolute",
              left: 18,
              bottom: 16,
              right: 18,
              borderRadius: 12,
              background: "rgba(2, 6, 23, 0.45)",
              border: "1px solid rgba(148, 163, 184, 0.35)",
              padding: "0.7rem"
            }}
          >
            <strong style={{ display: "block", marginBottom: 4 }}>{selected.title}</strong>
            <span style={{ color: "#bfdbfe", fontSize: "0.92rem" }}>{selected.storyline}</span>
          </motion.div>
        </motion.div>
      </AnimatePresence>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(230px, 1fr))", gap: "0.8rem" }}>
        {storyAnimationOptions.map((story, index) => (
          <motion.button
            key={story.id}
            custom={index}
            variants={cardVariants}
            initial="hidden"
            animate="show"
            whileHover={shouldReduceMotion ? undefined : { y: -6, scale: 1.01 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => setSelectedId(story.id)}
            style={{
              textAlign: "left",
              border: story.id === selected.id ? "1px solid #93c5fd" : "1px solid rgba(148, 163, 184, 0.4)",
              borderRadius: "12px",
              background: story.id === selected.id ? "rgba(30, 64, 175, 0.35)" : "rgba(15, 23, 42, 0.55)",
              color: "#e2e8f0",
              padding: "0.9rem",
              cursor: "pointer"
            }}
          >
            <strong style={{ display: "block", marginBottom: 6 }}>{story.title}</strong>
            <span style={{ fontSize: "0.85rem", color: "#cbd5e1" }}>{story.cartoonInspiration}</span>
          </motion.button>
        ))}
      </div>

      <motion.article
        key={selected.id}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.35 }}
        style={{
          marginTop: "1.25rem",
          borderRadius: 14,
          padding: "1rem",
          background: "rgba(15, 23, 42, 0.75)",
          border: "1px solid rgba(148, 163, 184, 0.35)",
          boxShadow: "0 20px 40px rgba(0, 0, 0, 0.25)"
        }}
      >
        <h2 style={{ marginTop: 0 }}>{selected.title}</h2>
        <p style={{ marginBottom: "0.6rem", color: "#dbeafe" }}>{selected.storyline}</p>
        <p style={{ marginBottom: "0.3rem" }}>
          <strong>Recommended Age:</strong> {selected.ageRange}
        </p>

        <h3 style={{ marginBottom: "0.25rem", marginTop: "0.9rem" }}>Immersive Scenes</h3>
        <ul>
          {selected.immersiveMoments.map((moment) => (
            <li key={moment}>{moment}</li>
          ))}
        </ul>

        <h3 style={{ marginBottom: "0.25rem", marginTop: "0.9rem" }}>Framer Motion Techniques</h3>
        <ul>
          {selected.motionHighlights.map((technique) => (
            <li key={technique}>{technique}</li>
          ))}
        </ul>
      </motion.article>
    </section>
  );
}
