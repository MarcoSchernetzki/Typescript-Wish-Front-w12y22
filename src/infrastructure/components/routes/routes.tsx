import { Navigate, Route, Routes } from 'react-router-dom';
import { HomePage } from '../../../feature/pages/homePage/home.page';

export function AppRoutes() {
    return (
        <Routes>
            <Route path="home" element={<HomePage />}></Route>

            <Route path="*" element={<Navigate replace to="home" />}></Route>
        </Routes>
    );
}
