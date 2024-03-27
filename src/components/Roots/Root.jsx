import { Outlet } from "react-router-dom";
import Header from "../Headers/Header";


const Root = () => {
    return (
        <div className="container mx-auto my-8">
            <Header></Header>
            <Outlet></Outlet>
        </div>
    );
};

export default Root;