import React, { createContext, useContext, useState, cloneElement, useEffect } from 'react';
import { Button } from "../";
import { Theme } from './theme/Theme';
import { LightTheme, DarkTheme } from './theme';
import { Variant } from '../';

const ThemeContext = createContext<Theme>(LightTheme);

export const OasisProvider = ({ children }: { children: React.ReactNode }) => {
    const [theme, setTheme] = useState<Theme> (LightTheme);
    
    let themes: Theme[] = [LightTheme, DarkTheme];

    const toggleTheme = () => {
      let next: number = (themes.indexOf(theme) + 1 < themes.length) ? themes.indexOf(theme) + 1 : ((themes.indexOf(theme) + 1) - themes.length);
      setTheme(_ => (themes[next]));
      console.log(next)
    };

    useEffect(() => {
      document.body.style.color = theme.textColor;
      document.body.style.backgroundColor = theme.backgroundColor;
    }, [theme]);

    return (
      <ThemeContext.Provider 
        value={theme}>
        <div>
          {children}
        </div>

        <Button
          type={Variant.LIGHT}
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            position: "absolute",
            margin: "2rem",
            height: "2.7rem",
            width: "2.7rem",
            bottom: 0,
            right: 0,
          }}
          onClick={toggleTheme}
          >
            {theme.icon}
          </Button>
      </ThemeContext.Provider>
    );
};

export const useTheme = (): Theme => {
  return useContext<Theme> (ThemeContext);
};

export type { Theme };
export type StyleSheet = (theme?: Theme) => React.CSSProperties;

export default OasisProvider;
