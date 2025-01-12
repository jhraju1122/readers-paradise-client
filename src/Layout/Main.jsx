 import { Outlet } from 'react-router-dom';
import Footer from '../pages/Shared/Footer/Footer';
import Footer2 from '../pages/Shared/Footer/Footer2';
import Navbar from '../pages/Shared/Navbar/Navbar';

const Main = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
            <Footer2></Footer2>
        </div>
    );
};

export default Main;