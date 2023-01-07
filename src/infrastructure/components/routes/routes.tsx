import { Navigate, Route, Routes } from 'react-router-dom';
import CreatePage from '../../../feature/pages/create.page/create.page';
import DetailsPage from '../../../feature/pages/details.page/details.page';
import { HomePage } from '../../../feature/pages/homePage/home.page';
import InspoPage from '../../../feature/pages/inspo.page/inspo.page';
import LoginPage from '../../../feature/pages/login.page/login.page';
import RegisterPage from '../../../feature/pages/registerPage/register.page';

export function AppRoutes() {
    return (
        <Routes>
            <Route path="create" element={<CreatePage />}></Route>
            <Route path="details" element={<DetailsPage />}></Route>
            <Route path="inspo" element={<InspoPage />}></Route>
            <Route path="home" element={<HomePage />}></Route>
            <Route path="register" element={<RegisterPage />}></Route>
            <Route path="login" element={<LoginPage />}></Route>
            <Route path="" element={<LoginPage />}></Route>
            <Route path="*" element={<Navigate replace to="" />}></Route>
        </Routes>
    );
}
