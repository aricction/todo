"use client";
import { useState, useEffect } from "react";

export function useLocalStorage(key, initialValue) {
  //  Read from localStorage once
  const [value, setValue] = useState(() => {
    try {
      const stored = localStorage.getItem(key);
      return stored ? JSON.parse(stored) : initialValue;
    } catch (error) {
      console.error("LocalStorage read error", error);
      return initialValue;
    }
  });

  // Write to localStorage whenever value changes
  useEffect(() => {
    try {
      localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      console.error("LocalStorage write error", error);
    }
  }, [key, value]);

  return [value, setValue];
}
