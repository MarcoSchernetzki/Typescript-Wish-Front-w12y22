import { Navigate, Route, Routes } from 'react-router-dom';
import { HomePage } from '../../../feature/pages/homePage/home.page';
import RegisterPage from '../../../feature/pages/registerPage/register.page';

export function AppRoutes() {
    return (
        <Routes>
            <Route path="home" element={<HomePage />}></Route>
            <Route path="register" element={<RegisterPage />}></Route>
            <Route path="*" element={<Navigate replace to="home" />}></Route>
        </Routes>
    );
}
