import { Navigate, Route, Routes } from 'react-router-dom';
import LoginPage from '../../../features/pages/login.page/login.page';
import RegisterPage from '../../../features/pages/register.page/register.page';
import { HomePage } from '../../../features/pages/home.page/home.page';
import InspoPage from '../../../features/pages/inspo.page/inspo.page';
import DetailsPage from '../../../features/pages/details.page/details.page';
import CreatePage from '../../../features/pages/create.page/create.page';
import UpdatePage from '../../../features/pages/update.page/update.page';

export function AppRoutes() {
    return (
        <Routes>
            <Route path="update" element={<UpdatePage />}></Route>
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
