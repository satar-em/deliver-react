import {Outlet} from "react-router-dom";

export default function (props:any) {
    return(
        <div className="container text-center border">
            home child 1
            <Outlet/>
        </div>
    )
}