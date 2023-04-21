import { Outlet } from "react-router-dom";
import TopHeader from "../components/TopHeader";
import Container from "../components/Container";

const MainLayout = () => {
    return (
        <Container>
            <TopHeader/>
            <Outlet/>
        </Container>
    );
};

export default MainLayout;