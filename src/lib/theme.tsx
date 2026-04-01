import React, { createContext, useContext, useState, useCallback, useEffect } from 'react';

type Theme = 'dark' | 'light';

interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType>({ theme: 'dark', toggleTheme: () => {} });

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [theme, setTheme] = useState<Theme>('dark');

  const toggleTheme = useCallback(() => setTheme(t => t === 'dark' ? 'light' : 'dark'), []);

  useEffect(() => {
    document.documentElement.classList.remove('light', 'dark');
    if (theme === 'light') {
      document.documentElement.classList.add('light');
    }
  }, [theme]);

  return <ThemeContext.Provider value={{ theme, toggleTheme }}>{children}</ThemeContext.Provider>;
};

export const useTheme = () => useContext(ThemeContext);
