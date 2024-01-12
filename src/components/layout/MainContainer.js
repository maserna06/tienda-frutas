const MainContainer = (props) => {
    const Outlet = props.Outlet;
    return (
        <>
            <div className="main-container">
                <div className="xs-pd-20-10 pd-ltr-20">
                    <Outlet />
                </div>
            </div>
        </>
    )
}

export default MainContainer