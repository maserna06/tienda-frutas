import { Outlet } from "react-router-dom"

import MainContainer from "./components/layout/MainContainer";
import Header from "./components/layout/Header";
import {Container} from "react-bootstrap";

export default function Root() {
    return (
        <Container>
            <Header />
            <MainContainer Outlet={ Outlet }/>
        </Container>
    );
}