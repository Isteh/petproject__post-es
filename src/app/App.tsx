import { FC } from 'react'
import { classNames } from 'shared/lib/classNames'
import { useTheme } from 'app/providers/ThemeProvider'
import { AppRouter } from 'app/providers/router'

const App: FC = () => {
    const { theme, toggleTheme } = useTheme()

    return <div className={classNames('app', theme)} >
        <AppRouter />
        <button
            onClick={toggleTheme}>change theme</button>
    </div >
}

export default App