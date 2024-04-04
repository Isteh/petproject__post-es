import './styles/globals.scss'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { MainPageAsync, TestPageAsync } from "./main/Main.async";
import { Suspense } from "react";
import { createRoot } from 'react-dom/client';
import App from './App';
import ThemeProvider from './themes/ThemeProvider';

const container = document.querySelector('.root')
const root = createRoot(container)

root.render(

    <BrowserRouter>
        <ThemeProvider>
            <App>
                <Suspense fallback={<div>Loading...</div>}>
                    <Routes>
                        <Route path="/" element={<MainPageAsync />} />
                        <Route path="/test" element={<TestPageAsync />} />
                    </Routes>
                </Suspense>
            </App>
        </ThemeProvider>
    </BrowserRouter>
)