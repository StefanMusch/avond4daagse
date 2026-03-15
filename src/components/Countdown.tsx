"use client";

import { useState, useEffect } from "react";

export default function Countdown() {
  const [time, setTime] = useState({ d: 0, h: 0, m: 0, s: 0 });

  useEffect(() => {
    const target = new Date("2026-06-02T18:30:00").getTime();
    const tick = () => {
      const diff = Math.max(0, target - Date.now());
      setTime({
        d: Math.floor(diff / 86400000),
        h: Math.floor((diff / 3600000) % 24),
        m: Math.floor((diff / 60000) % 60),
        s: Math.floor((diff / 1000) % 60),
      });
    };
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  const units = [
    { label: "Dagen", val: time.d, color: "#E6007E" },
    { label: "Uren", val: time.h, color: "#9B1B5A" },
    { label: "Min", val: time.m, color: "#8CB808" },
    { label: "Sec", val: time.s, color: "#2B9AC8" },
  ];

  return (
    <div className="flex gap-4 justify-center mt-8">
      {units.map((u, i) => (
        <div
          key={u.label}
          className="bg-white shadow-lg px-4 py-3 min-w-[72px] text-center border-2 border-dashed"
          style={{
            borderColor: u.color,
            borderRadius: "4px 12px 4px 12px",
            transform: `rotate(${i % 2 === 0 ? -2 : 2}deg)`,
          }}
        >
          <div
            className="font-['Quicksand'] font-bold text-3xl"
            style={{ color: u.color }}
          >
            {String(u.val).padStart(2, "0")}
          </div>
          <div className="font-['Source_Sans_3'] text-xs text-[#4A4A4A]/60 uppercase tracking-wider">
            {u.label}
          </div>
        </div>
      ))}
    </div>
  );
}
