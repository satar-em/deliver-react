import {Outlet} from "react-router-dom";

export default function (props: any) {
    return (
        <div className="border container text-center">
            home
            <Outlet/>
        </div>
    )
}