import { Outlet } from "react-router-dom";
import TopHeader from "../components/TopHeader";
import Container from "../components/Container";
import LeftSideBar from "../components/LeftSideBar";

const MainLayout = () => {
    return (
        <Container>
            <TopHeader/>
            <main className="grid md:grid-cols-5">
                <section>
                    <LeftSideBar/>
                </section>
                <section className="col-span-3">
                    <Outlet/>
                </section>
                <section></section>
            </main>
            
        </Container>
    );
};

export default MainLayout;