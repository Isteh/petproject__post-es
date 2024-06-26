import { FC, Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'
import { routeConfig } from 'shared/config/routeConfig'

const AppRouter: FC = () => {
    return <Suspense fallback={<div>Loading...</div>}>
        <Routes>
            {Object.values(routeConfig).map(route => <Route {...route} key={route.path} />)}
        </Routes>
    </Suspense>
}

export default AppRouter