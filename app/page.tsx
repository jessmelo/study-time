"use client";
import React, { useState, useEffect } from 'react';
import { Coming_Soon } from 'next/font/google'

const coming_soon = Coming_Soon({
  subsets: ['latin'],
  weight: '400'
})

export default function Home() {
  const [secondsLeft, setSecondsLeft] = useState(1800); // 30 minutes in seconds
  const [timerActive, setTimerActive] = useState(false);

  useEffect(() => {
    let intervalId: number | undefined;
    if (timerActive) {
      intervalId = window.setInterval(() => {
        setSecondsLeft((prevSeconds) => prevSeconds > 0 ? prevSeconds - 1 : 0);
      }, 1000);
    } else {
      clearInterval(intervalId);
    }
    return () => clearInterval(intervalId);
  }, [timerActive]);
  
  const startTimer = () => {
    if (!timerActive && secondsLeft === 0) {
      // Reset timer if it finished and is being restarted
      setSecondsLeft(1800);
    }
    setTimerActive(true);
  };
  
  const pauseTimer = () => {
    setTimerActive(false);
  };
  
  const resetTimer = () => {
    setTimerActive(false);
    setSecondsLeft(1800); // Reset to 30 minutes
  };

  return (
    <main className="flex flex-col justify-left sm:w-[80%] w-[90%] mx-5 bg-orange-200 opacity-90 sm:mx-10 my-10 p-6">
      <h1 className={`${coming_soon.className} text-4xl`}>Study Time</h1>
      <p className="text-zinc-600">A simple app to organize your studies.</p>

      <div>
        <p className="mb-2">Time left:</p>
        <div className="p-6 bg-lime-200 border border-slate-700 sm:w-[25rem] w-[100%] text-4xl mb-4">
          {Math.floor(secondsLeft / 60)}:{String(secondsLeft % 60).padStart(2, '0')}
        </div>

        <div className="flex flex-row justify-left space-x-2">
          <button className="p-2 rounded-full bg-red-300 hover:bg-red-400" onClick={startTimer}>Start</button>
          <button className="p-2 rounded-full bg-red-300 hover:bg-red-400" onClick={pauseTimer}>Pause</button>
          <button className="p-2 rounded-full bg-red-300 hover:bg-red-400" onClick={resetTimer}>Reset</button>
        </div>
      </div>
    </main>
  );
}
