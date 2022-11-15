import { createContext, useReducer, useState } from "react";

export const ColorModeContext = createContext({
    mode: '',
    setMode: () => { alert('Configurar primeiro'); },
    toggleMode: () => { alert('Configurar primeiro'); },
});

export default function ColorModeProvider({ children, initialMode }) {
    const [mode, setMode] = useState(initialMode);
    const colorModeReducer = (state, action) => {
        switch (action.type) {
            case 'dark':
                return setMode('dark');
            case 'light':
                return setMode('light');
            case 'warm':
                return setMode('warm');
            case 'cold':
                return setMode('cold');
            case 'vintage':
                return setMode('vintage');
            case 'red':
                return setMode('vibrant');
            default:
                return state;
        }
    };

    const [modes, dispatchModes] = useReducer(colorModeReducer, initialMode);

    function toggleMode() {
        mode === 'dark' ? dispatchModes({ type: 'red' }) : dispatchModes({ type: 'dark' });
    }

    return (
        <ColorModeContext.Provider value={{ mode: mode, setMode: setMode, toggleMode: toggleMode }}>
            {children}
        </ColorModeContext.Provider>
    );
}