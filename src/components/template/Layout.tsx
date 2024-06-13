
import { Outlet } from "react-router-dom";
import NavBar from "./NavBar";
import Footer from "./Footer"
const Layout : React.FC = () => {
    return (
    <>
        <NavBar />
        <Outlet />
        <Footer />
    </>);
};
export default Layout;