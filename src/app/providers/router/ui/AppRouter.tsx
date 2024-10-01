import { FC, Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'
import { routeConfig } from 'shared/config/routeConfig'
import { PageLoader } from 'widgets/PageLoader'

const AppRouter: FC = () => {
    return <Suspense fallback={<PageLoader />}>
        <Routes>
            {Object.values(routeConfig).map(route => <Route {...route} key={route.path} />)}
        </Routes>
    </Suspense>
}

export default AppRouter