import MyBookShelfLogo from "../assets/images/MyBookShelfLogo.png";
import HomeIcon from '../assets/images/icons/ic_home.svg'
import SearchIcon from '../assets/images/icons/ic_search.svg'
import MyShelfIcon from '../assets/images/icons/ic_bookshelf.svg'
import ContributeIcon from '../assets/images/icons/ic_give.svg'

export default function Sidebar() {
    return <div className="d-flex flex-column flex-shrink-0 p-5" style={{ width: "306px", }}>
    <a href="/" className="d-flex align-items-center justify-content-center link-dark text-decoration-none">
      <img
        className="form-logo"
        src={MyBookShelfLogo}
        alt=""
        srcSet=""
        width={150}
      />
    </a>
    <div style={{ marginTop: "100px" }} />
    <div className="flex-grow-1">
    <ul className="nav nav-pills">
      <li className="nav-item">
        <a href="#" className="d-flex align-items-center nav-link link-dark align-items-center" aria-current="page">
          <img className="me-3" src={HomeIcon} alt="" srcSet="" />
          Home
        </a>
      </li>
      <li>
        <a href="#" className="d-flex align-items-center nav-link link-dark mt-4">
          <img className="me-3" src={SearchIcon} alt="" srcSet="" />
          Search
        </a>
      </li>
      <li>
        <a href="#" className="d-flex align-items-center nav-link link-active mt-4">
          <img className="me-3" src={MyShelfIcon} alt="" srcSet="" />
          My Shelf
        </a>
      </li>
      <li>
        <a href="#" className="d-flex align-items-center nav-link link-dark mt-4">
          <img className="me-3" src={ContributeIcon} alt="" srcSet="" />
          Contribure
        </a>
      </li>
    </ul>
    </div>
    <ul className="nav nav-pills flex-column">
      <li>
        <a href="#" className="nav-link link-dark mt-2">
          About
        </a>
      </li>
      <li>
        <a href="#" className="nav-link link-dark mt-2">
          Support
        </a>
      </li>
      <li>
        <a href="#" className="nav-link link-dark mt-2">
          Terms & Condition
        </a>
      </li>
    </ul>
  </div>
}