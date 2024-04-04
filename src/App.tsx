import classNames from 'classnames'
import { FC, ReactNode, useContext } from 'react'
import { useTheme } from './themes/useTheme'

const App: FC<{ children: ReactNode }> = ({ children }) => {
    const { theme, toggleTheme } = useTheme()

    return <div className={classNames('app', theme)} >
        <button onClick={toggleTheme}>change theme</button>
        {children}
    </div >
}

export default App