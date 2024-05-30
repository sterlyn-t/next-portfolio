"use client";
import React from "react";
import Typewriter from "typewriter-effect";

interface TypewriterEffectProps {
  strings: string[];
}

const TypewriterEffect = ({ strings }: TypewriterEffectProps) => {
  return (
    <Typewriter
      options={{ loop: true }}
      onInit={(typewriter) => {
        for (var string of strings) {
          typewriter.typeString(string).pauseFor(1500).deleteAll().start();
        }
      }}
    />
  );
};

export default TypewriterEffect;
