import { UserModel } from "../models/UserModel";

export default function AccountSummary(props: UserModel) {
    return <div className="bg-white rounded-pill shadow-sm btn-group" style={{ height: "41px" }}>
        <button style={{ height: "41px" }} className="pe-4 d-flex align-items-center btn btn-outline-secondary rounded-pill border border-0 dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
            <img src={props['image']} style={{
                width: "32px",
                borderRadius: "100%"
            }} alt="" srcSet="" />
            <p className="pe-3 ps-3 mb-0">{props['firstName']} {props['lastName']}</p>
        </button>
        <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="#">Profile</a></li>
            <li><a className="dropdown-item" href="#">Invite Friends</a></li>
            <li><hr className="dropdown-divider" /></li>
            <li><a className="dropdown-item" href="#">Log Out</a></li>
        </ul>
    </div>
}