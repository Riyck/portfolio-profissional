"use client";

import { useEffect, useState } from "react";

type Binary = {
  id: number;
  value: string;
  left: number;
  duration: number;
  delay: number;
  size: number;
  opacity: number;
};

export default function BinaryBackground() {
  const [binaries, setBinaries] = useState<Binary[]>([]);

  useEffect(() => {
    const generateBinaries = () => {
      const items: Binary[] = [];

      for (let i = 0; i < 100; i++) {
        items.push({
          id: i,
          value: Math.random() > 0.5 ? "1" : "0",
          left: Math.random() * 100,
          duration: 8 + Math.random() * 15,
          delay: Math.random() * -20,
          size: 10 + Math.random() * 10,
          opacity: 0.08 + Math.random() * 0.18,
        });
      }

      setBinaries(items);
    };

    generateBinaries();
  }, []);

  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      {binaries.map((binary) => (
        <span
          key={binary.id}
          className="absolute font-mono text-green-400"
          style={{
            left: `${binary.left}%`,
            top: "-30px",
            fontSize: `${binary.size}px`,
            opacity: binary.opacity,
            animation: `binaryFall ${binary.duration}s linear ${binary.delay}s infinite`,
          }}
        >
          {binary.value}
        </span>
      ))}

      <style jsx>{`
        @keyframes binaryFall {
          0% {
            transform: translateY(-50px);
          }

          100% {
            transform: translateY(110vh);
          }
        }
      `}</style>
    </div>
  );
}