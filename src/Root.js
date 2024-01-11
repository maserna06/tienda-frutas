import { Outlet } from "react-router-dom"

import MainContainer from "./components/layout/MainContainer";
import Header from "./components/layout/Header";

export default function Root() {
    return (
        <>
            <Header />
            <MainContainer Outlet={ Outlet }/>
        </>
    );
}