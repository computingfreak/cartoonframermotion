export type StoryAnimationOption = {
  id: string;
  title: string;
  cartoonInspiration: string;
  ageRange: string;
  storyline: string;
  immersiveMoments: string[];
  motionHighlights: string[];
};

export const storyAnimationOptions: StoryAnimationOption[] = [
  {
    id: "space-rangers",
    title: "Galaxy Rescue Rangers",
    cartoonInspiration: "Toy Story / Buzz-style cosmic adventure",
    ageRange: "5-10",
    storyline:
      "A team of brave toy astronauts zips through a neon galaxy to rescue lost star creatures before a meteor storm arrives.",
    immersiveMoments: [
      "Warp jump tunnel with layered parallax stars",
      "Meteor dodge sequence with camera shake and blur",
      "Celebration finale where constellations form kids' names"
    ],
    motionHighlights: [
      "Framer Motion variants for ship, stars, and meteor swarms",
      "useScroll + useTransform for cinematic depth",
      "AnimatePresence for chapter-by-chapter transitions"
    ]
  },
  {
    id: "ocean-magic",
    title: "The Hidden Reef Orchestra",
    cartoonInspiration: "Finding Nemo-style ocean friendship",
    ageRange: "4-9",
    storyline:
      "A shy fish discovers magical sound shells that awaken a sleepy reef, turning currents into glowing musical ribbons.",
    immersiveMoments: [
      "Bioluminescent coral pulses with beat-synced glow",
      "Jellyfish lantern dance with floating path animations",
      "Final underwater concert with layered ripple waves"
    ],
    motionHighlights: [
      "Staggered children variants for schools of fish",
      "SVG pathLength animations for musical current trails",
      "Spring-based bobbing for buoyant underwater feel"
    ]
  },
  {
    id: "forest-fairytale",
    title: "Red Hood and the Whispering Woods",
    cartoonInspiration: "Little Red Riding Hood reimagined",
    ageRange: "6-11",
    storyline:
      "Red Hood teams up with friendly woodland sprites to outsmart a tricky wolf and restore light to the enchanted forest.",
    immersiveMoments: [
      "Forest layers reveal with depth-aware fog transitions",
      "Wolf chase sequence with dynamic path morphing",
      "Kindness ending where fireflies paint the sky"
    ],
    motionHighlights: [
      "Shared layout transitions for character spotlight swaps",
      "Motion values for interactive lantern tracking",
      "Timeline-like sequencing via variant orchestration"
    ]
  },
  {
    id: "castle-coco",
    title: "Coco and the Clockwork Castle",
    cartoonInspiration: "Disney/Pixar-inspired whimsical mystery",
    ageRange: "7-12",
    storyline:
      "A young inventor explores a living castle where each room is powered by imagination and moving gears.",
    immersiveMoments: [
      "Rotating gear city with layered mechanical choreography",
      "Portal room where doors transform into story worlds",
      "Final puzzle unlock with synchronized light beams"
    ],
    motionHighlights: [
      "Repeat + reverse loops for ambient machine life",
      "3D-feel card rotation through rotateX/rotateY transforms",
      "Per-room entry/exit scenes driven by AnimatePresence"
    ]
  },
  {
    id: "sky-pirates",
    title: "Sky Pirates of Rainbow Cove",
    cartoonInspiration: "Adventure Time / Peter Pan sky whimsy",
    ageRange: "5-10",
    storyline:
      "Friendly sky pirates chase rainbow wind maps to reunite floating islands and bring back lost laughter.",
    immersiveMoments: [
      "Cloud surfing with velocity-reactive motion blur",
      "Airship battles using playful non-violent dodge mechanics",
      "Rainbow bridge formation tying all islands together"
    ],
    motionHighlights: [
      "Physics-like spring chains for rope and sail motion",
      "Scroll chapters with progressive world-building",
      "Confetti particle bursts on milestone moments"
    ]
  }
];
