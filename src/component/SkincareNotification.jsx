import React, { useState, useEffect } from "react";
import { Bell, X, Sun, Droplet, Moon, Coffee } from "lucide-react";

const schedule = [
  { id: 1, message: "Apply sunscreen before stepping out!", icon: <Sun size={20} className="text-yellow-500" /> },
  { id: 2, message: "Stay hydrated! Drink water.", icon: <Droplet size={20} className="text-blue-500" /> },
  { id: 3, message: "Evening cleanse: Remove dirt and makeup.", icon: <Coffee size={20} className="text-brown-500" /> },
  { id: 4, message: "Night routine: Moisturize before sleeping.", icon: <Moon size={20} className="text-purple-500" /> },
];

export default function SkincareNotification() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setVisible(true); // show notification
      setCurrentIndex((prev) => (prev + 1) % schedule.length);

      // auto-hide after 5 seconds
      setTimeout(() => setVisible(false), 5000);
    }, 10000); // every 10 seconds

    return () => clearInterval(interval);
  }, []);

  const dismissNotification = () => setVisible(false);

  if (!visible) return null;

  const current = schedule[currentIndex];

  return (
    <div className="fixed bottom-6 right-6 bg-white border border-gray-200 shadow-xl rounded-xl p-4 flex items-center gap-3 w-80 animate-slide-up">
      {current.icon || <Bell className="text-blue-600" size={20} />}
      <p className="flex-1 text-gray-800 font-medium">{current.message}</p>
      <button onClick={dismissNotification}>
        <X className="text-gray-500 hover:text-gray-800" size={18} />
      </button>
    </div>
  );
}
