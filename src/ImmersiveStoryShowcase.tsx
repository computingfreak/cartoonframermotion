import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useMemo, useState } from "react";
import { storyAnimationOptions } from "./storyAnimationOptions";

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

const sceneVariants = {
  initial: { opacity: 0, rotateX: -8, y: 18 },
  enter: {
    opacity: 1,
    rotateX: 0,
    y: 0,
    transition: { type: "spring", stiffness: 120, damping: 18 }
  },
  exit: {
    opacity: 0,
    y: -16,
    transition: { duration: 0.2 }
  }
};

export function ImmersiveStoryShowcase() {
  const [selectedId, setSelectedId] = useState(storyAnimationOptions[0].id);
  const shouldReduceMotion = useReducedMotion();

  const selected = useMemo(
    () => storyAnimationOptions.find((story) => story.id === selectedId) ?? storyAnimationOptions[0],
    [selectedId]
  );

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
        Pick a story world below. Each option is designed with rich Framer Motion choreography, chapter
        transitions, and cinematic micro-interactions to create safe, joyful, and emotionally engaging experiences.
      </p>

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

      <AnimatePresence mode="wait">
        <motion.article
          key={selected.id}
          variants={sceneVariants}
          initial="initial"
          animate="enter"
          exit="exit"
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
      </AnimatePresence>
    </section>
  );
}
