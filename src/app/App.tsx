import { FC } from 'react'
import { classNames } from 'shared/lib/classNames'
import { useTheme } from 'app/providers/ThemeProvider'
import { AppRouter } from 'app/providers/router'
import { NavBar } from 'widgets/NavBar'
import { Sidebar } from 'widgets/SideBar'

const App: FC = () => {
    const { theme } = useTheme()

    return <div className={classNames('app', theme)} >
        <NavBar />
        <div className='page-content'>
            <Sidebar />
            <AppRouter />
        </div>
    </div >
}

export default App