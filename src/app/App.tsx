import { FC, Suspense } from 'react'
import { classNames } from 'shared/lib/classNames'
import { useTheme } from 'app/providers/ThemeProvider'
import { Route, Routes } from 'react-router-dom'
import { HomePage } from 'pages/Home'

const App: FC = () => {
    const { theme, toggleTheme } = useTheme()

    return <>
        <Suspense fallback={<div>Loading...</div>}>
            <Routes>
                <Route path="/" element={<HomePage />} />
            </Routes>
        </Suspense>
        <div className={classNames('app', theme)} >
            <button
                onClick={toggleTheme}>change theme</button>
        </div >
    </>
}

export default App