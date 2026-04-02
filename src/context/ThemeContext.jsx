import { createContext, useContext, useEffect, useState } from "react";

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    document.documentElement.classList.remove("light", "dark");
    document.documentElement.classList.add(theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => (prev === "dark" ? "light" : "dark"));
  };

  const setPrimaryColor = (color) => {
    // Expecting RGB format like "250 204 21"
    console.log("ThemeContext: setting --primary to", color);
    document.documentElement.style.setProperty("--primary", color);
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, setPrimaryColor }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);