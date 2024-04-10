import { FC } from 'react'
import { classNames } from 'shared/lib/classNames'
import { useTheme } from 'app/providers/ThemeProvider'
import { AppRouter } from 'app/providers/router'
import { NavBar } from 'widgets/NavBar'

const App: FC = () => {
    const { theme } = useTheme()

    return <div className={classNames('app', theme)} >
        <NavBar />
        <AppRouter />
    </div >
}

export default App