import { FC, ReactNode } from 'react'
import { useTheme } from './themes/useTheme'
import { classNames } from './helpers/classNames/classNames'

const App: FC<{ children: ReactNode }> = ({ children }) => {
    const { theme, toggleTheme } = useTheme()

    return <div className={classNames('app', theme)} >
        <button
            onClick={toggleTheme}>change theme</button>
        {children}
    </div >
}

export default App