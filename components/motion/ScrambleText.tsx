"use client";

import { useEffect, useRef } from "react";
import { motion, useInView, useMotionValue, useTransform, animate } from "motion/react";
import { cn } from "@/utils/ClassName";

interface ScrambleTextProps {
  text: string;
  duration?: number;
  delay?: number;
  characterSet?: keyof typeof CHARACTER_SETS;
  characters?: string;
  scrambleSpeed?: number;
  className?: string;
}

export const CHARACTER_SETS = {
  default: "!<>-_\\/[]{}—=+*^?#________",
  cyberpunk: "ｱｲｳｴｵｶｷｸｹｺｻｼｽｾｿﾀﾁﾂﾃﾄﾅﾆﾇﾈﾉﾊﾋﾌﾍﾎﾏﾐﾑﾒﾓﾔﾕﾖﾗﾘﾙﾚﾛﾜﾝ░▒▓█▀▄▌▐∆∇∑∞∫≈≠≤≥µΩ!<>-_\\/[]{}—=+*^?#$@%&",
  binary: "01",
  matrix: "0123456789$+-*/=%\"'#&_(),.;:?!\\|{}<>[]^~",
  alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
};

export default function ScrambleText({
  text,
  duration = 0.8,
  delay = 0,
  characterSet = "default",
  characters,
  scrambleSpeed = 50,
  className,
}: ScrambleTextProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-10%" });
  
  // SEO ve Hydration hatası olmaması için başlangıçta değer metnin tam uzunluğu olarak ayarlanır.
  const progress = useMotionValue(text.length);
  const hasAnimated = useRef(false);
  const lastUpdateTime = useRef(0);
  const scrambledRef = useRef("");

  const activeCharacters = characters || CHARACTER_SETS[characterSet];

  useEffect(() => {
    if (isInView && !hasAnimated.current) {
      hasAnimated.current = true;
      progress.set(0); // Animasyon başladığında progress'i 0'a çek
      animate(progress, text.length, { type: "tween", duration, delay, ease: "easeInOut" });
    }
  }, [isInView, text.length, duration, delay, progress]);

  const displayText = useTransform(progress, (latest) => {
    if (latest >= text.length) return text; // Animasyon bitince veya SSR sırasında gerçek metni dön

    const revealedLength = Math.floor(latest);
    const revealed = text.slice(0, revealedLength);

    const now = Date.now();
    if (now - lastUpdateTime.current >= scrambleSpeed || !scrambledRef.current) {
      lastUpdateTime.current = now;
      let scrambled = "";
      for (let i = 0; i < text.length; i++) {
        scrambled += activeCharacters[Math.floor(Math.random() * activeCharacters.length)];
      }
      scrambledRef.current = scrambled;
    }

    return revealed + scrambledRef.current.slice(revealedLength);
  });

  return (
    <motion.span ref={ref} className={className}>
      {displayText}
    </motion.span>
  );
}