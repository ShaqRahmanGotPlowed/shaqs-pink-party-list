
import React, { useState, useEffect } from "react";

interface CountdownTimerProps {
  targetDate: Date;
}

const CountdownTimer: React.FC<CountdownTimerProps> = ({ targetDate }) => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const difference = +targetDate - +new Date();
      
      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  return (
    <div className="flex flex-wrap justify-center gap-4">
      <div className="flex flex-col items-center p-4 bg-white/10 backdrop-blur-lg rounded-lg w-20 h-24 shadow-lg border border-party-pink/30">
        <span className="text-3xl font-bold text-party-black">{timeLeft.days}</span>
        <span className="text-xs text-party-black/70">Days</span>
      </div>
      <div className="flex flex-col items-center p-4 bg-white/10 backdrop-blur-lg rounded-lg w-20 h-24 shadow-lg border border-party-pink/30">
        <span className="text-3xl font-bold text-party-black">{timeLeft.hours}</span>
        <span className="text-xs text-party-black/70">Hours</span>
      </div>
      <div className="flex flex-col items-center p-4 bg-white/10 backdrop-blur-lg rounded-lg w-20 h-24 shadow-lg border border-party-pink/30">
        <span className="text-3xl font-bold text-party-black">{timeLeft.minutes}</span>
        <span className="text-xs text-party-black/70">Minutes</span>
      </div>
      <div className="flex flex-col items-center p-4 bg-white/10 backdrop-blur-lg rounded-lg w-20 h-24 shadow-lg border border-party-pink/30">
        <span className="text-3xl font-bold text-party-black">{timeLeft.seconds}</span>
        <span className="text-xs text-party-black/70">Seconds</span>
      </div>
    </div>
  );
};

export default CountdownTimer;
