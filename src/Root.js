import { Outlet } from "react-router-dom"

import MainContainer from "./layout/MainContainer";
import Header from "./layout/Header";

export default function Root() {
    return (
        <>
            <Header />
            <MainContainer Outlet={ Outlet }/>
        </>
    );
}