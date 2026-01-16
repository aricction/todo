"use client";
import { useTheme } from "../context/ThemeContext";

const DarkMode = () => {
  const { isDark, toggleDarkMode } = useTheme();

  return (
    <label className="flex items-center gap-2 cursor-pointer">
      <span>{isDark ? "Dark" : "Light"} Mode</span>
      <input
        type="checkbox"
        checked={isDark}
        onChange={toggleDarkMode}
      />
    </label>
  );
};

export default DarkMode;
