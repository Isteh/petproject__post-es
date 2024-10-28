import { FC, ReactNode, useMemo, useState } from 'react';
import { LOCAL_STORAGE_THEME, APP_THEMES, ThemeContext } from '../lib/ThemeContext';

const defaultTheme = localStorage.getItem(LOCAL_STORAGE_THEME) as APP_THEMES || APP_THEMES.LIGHT;

const ThemeProvider: FC<{ children: ReactNode }> = ({ children }) => {
    const [theme, setTheme] = useState<APP_THEMES>(defaultTheme);

    const defaultProps = useMemo(() => ({
        theme,
        setTheme
    }), [theme]);

    return <ThemeContext.Provider value={defaultProps}>
        {children}
    </ThemeContext.Provider>;
};

export default ThemeProvider;