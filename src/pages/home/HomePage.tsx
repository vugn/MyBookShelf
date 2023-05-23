import { useEffect } from "react";
import Button from "../../elements/Button";
import { getToken, getUserData, isAuthenticated } from "../../configs/token";
import MyBookShelfLogo from "../../assets/images/MyBookShelfLogo.png";
import HomeIcon from '../../assets/images/icons/ic_home.svg'
import SearchIcon from '../../assets/images/icons/ic_search.svg'
import MyShelfIcon from '../../assets/images/icons/ic_bookshelf.svg'
import ContributeIcon from '../../assets/images/icons/ic_give.svg'
import { useNavigate } from "react-router-dom";
import '../../assets/scss/dashboard.scss'

const HomePage = () => {
  const navigate = useNavigate();

  const handleRemoveUser = () => {
    localStorage.removeItem("token");
  };

  useEffect(() => {
    if (!isAuthenticated()) {
      navigate('/login', { replace: true })
    }
  })

  return (
    <>
      <div className="dashboard-container d-flex rounded-4  bg-light">
        <div className="d-flex flex-column flex-shrink-0 p-5" style={{ width: "306px", }}>
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
          <ul className="nav nav-pills flex-column ">
            <li className="nav-item">
              <a href="#" className="nav-link link-dark " aria-current="page">
                <img className="me-3" src={HomeIcon} alt="" srcSet="" />
                Home
              </a>
            </li>
            <li>
              <a href="#" className="nav-link link-dark mt-4">
                <img className="me-3" src={SearchIcon} alt="" srcSet="" />
                Search
              </a>
            </li>
            <li>
              <a href="#" className="nav-link link-active mt-4">
                <img className="me-3" src={MyShelfIcon} alt="" srcSet="" />
                My Shelf
              </a>
            </li>
            <li>
              <a href="#" className="nav-link link-dark mt-4">
                <img className="me-3" src={ContributeIcon} alt="" srcSet="" />
                Contribure
              </a>
            </li>
          </ul>
          <div style={{ marginTop: "442px" }} />
          <ul className="nav nav-pills flex-column ">
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

        <div className="d-flex flex-column flex-grow-1 p-5 bg-secondary-color rounded-4 main-area-container" style={{ width: "306px", }}>
          <div className="d-flex flex-row justify-content-between">
            <div className="input-group mb-3 shadow-sm rounded-pill" style={{ width: "440px", }}>
              <button className="btn btn-outline-secondary dropdown-toggle rounded-start-pill border border-0" type="button" data-bs-toggle="dropdown" aria-expanded="false">All</button>
              <input type="text" className="form-control border border-0 focus-ring focus-ring-warning" aria-label="Search Input" />
              <button className="btn btn-outline-0 bg-white border border-0" type="button" id="button-addon2">
                <svg width="24" height="23" viewBox="0 0 24 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <mask id="mask0_67_1377" style={{ maskType: "alpha" }} maskUnits="userSpaceOnUse" x="0" y="0" width="24" height="23">
                    <rect x="0.5" width="23" height="23" fill="#F76B56" />
                  </mask>
                  <g mask="url(#mask0_67_1377)">
                    <path d="M18.6125 19.4542L13.2458 14.0875C12.7667 14.4708 12.2156 14.7743 11.5927 14.9979C10.9698 15.2215 10.3069 15.3333 9.60417 15.3333C7.86319 15.3333 6.38992 14.7305 5.18433 13.525C3.97811 12.3187 3.375 10.8451 3.375 9.10417C3.375 7.36319 3.97811 5.8896 5.18433 4.68338C6.38992 3.47779 7.86319 2.875 9.60417 2.875C11.3451 2.875 12.8187 3.47779 14.025 4.68338C15.2305 5.8896 15.8333 7.36319 15.8333 9.10417C15.8333 9.80694 15.7215 10.4698 15.4979 11.0927C15.2743 11.7156 14.9708 12.2667 14.5875 12.7458L19.9781 18.1365C20.1538 18.3122 20.2417 18.5278 20.2417 18.7833C20.2417 19.0389 20.1458 19.2625 19.9542 19.4542C19.7785 19.6299 19.5549 19.7177 19.2833 19.7177C19.0118 19.7177 18.7882 19.6299 18.6125 19.4542ZM9.60417 13.4167C10.8021 13.4167 11.8205 12.9976 12.6593 12.1593C13.4976 11.3205 13.9167 10.3021 13.9167 9.10417C13.9167 7.90625 13.4976 6.88786 12.6593 6.049C11.8205 5.21078 10.8021 4.79167 9.60417 4.79167C8.40625 4.79167 7.38786 5.21078 6.549 6.049C5.71078 6.88786 5.29167 7.90625 5.29167 9.10417C5.29167 10.3021 5.71078 11.3205 6.549 12.1593C7.38786 12.9976 8.40625 13.4167 9.60417 13.4167Z" fill="#F76B56" />
                  </g>
                </svg>
              </button>
              <span className="input-group-text bg-white p-0 border border-0" >|</span>
              <button className="btn btn-outline-0 bg-white border border-0" style={{
                borderRadius: "0 100px 100px 0"
              }} type="button" id="button-addon2">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5.53953 3.34814C5.53953 3.60701 5.32969 3.81689 5.07078 3.81689H1.99945C1.6602 3.81689 1.38418 4.07283 1.38418 4.38736V7.33189C1.38418 7.59076 1.1743 7.80064 0.91543 7.80064C0.656523 7.80064 0.44668 7.59076 0.44668 7.33189V4.38736C0.44668 3.55588 1.14324 2.87939 1.99945 2.87939H5.07082C5.32969 2.87939 5.53953 3.08928 5.53953 3.34814ZM19.0846 12.1995C18.8257 12.1995 18.6158 12.4094 18.6158 12.6682V15.6128C18.6158 15.9274 18.3398 16.1833 18.0006 16.1833H14.9292C14.6703 16.1833 14.4604 16.3931 14.4604 16.652C14.4604 16.9109 14.6703 17.1208 14.9292 17.1208H18.0006C18.8568 17.1208 19.5533 16.4443 19.5533 15.6128V12.6682C19.5533 12.4094 19.3435 12.1995 19.0846 12.1995ZM4.9757 16.1832H1.90434C1.56504 16.1832 1.28906 15.9273 1.28906 15.6128V12.6682C1.28906 12.4093 1.07922 12.1994 0.820312 12.1994C0.561406 12.1994 0.351562 12.4093 0.351562 12.6682V15.6128C0.351562 16.4442 1.04812 17.1207 1.90434 17.1207H4.9757C5.23461 17.1207 5.44445 16.9108 5.44445 16.652C5.44445 16.3931 5.23461 16.1832 4.9757 16.1832ZM18.0957 2.87939H15.0243C14.7654 2.87939 14.5555 3.08928 14.5555 3.34814C14.5555 3.60701 14.7654 3.81689 15.0243 3.81689H18.0957C18.435 3.81689 18.7109 4.07283 18.7109 4.38736V7.33189C18.7109 7.59076 18.9208 7.80064 19.1797 7.80064C19.4386 7.80064 19.6484 7.59076 19.6484 7.33189V4.38736C19.6484 3.55588 18.9519 2.87939 18.0957 2.87939ZM4.43691 12.5312V7.62049C4.43691 7.36158 4.22707 7.15174 3.96816 7.15174C3.70926 7.15174 3.49941 7.36158 3.49941 7.62049V12.5312C3.49941 12.7901 3.70926 12.9999 3.96816 12.9999C4.22707 12.9999 4.43691 12.7901 4.43691 12.5312ZM7.98938 7.15174C7.73047 7.15174 7.52063 7.36158 7.52063 7.62049V12.5312C7.52063 12.7901 7.73047 12.9999 7.98938 12.9999C8.24828 12.9999 8.45813 12.7901 8.45813 12.5312V7.62049C8.45813 7.36158 8.24828 7.15174 7.98938 7.15174ZM12.0106 7.15174C11.7517 7.15174 11.5419 7.36158 11.5419 7.62049V12.5312C11.5419 12.7901 11.7517 12.9999 12.0106 12.9999C12.2695 12.9999 12.4794 12.7901 12.4794 12.5312V7.62049C12.4794 7.36158 12.2695 7.15174 12.0106 7.15174ZM16.5006 12.5312V7.62049C16.5006 7.36158 16.2907 7.15174 16.0318 7.15174C15.7729 7.15174 15.5631 7.36158 15.5631 7.62049V12.5312C15.5631 12.7901 15.7729 12.9999 16.0318 12.9999C16.2907 12.9999 16.5006 12.7901 16.5006 12.5312Z" fill="#F76B56" />
                </svg>
              </button>
            </div>

            <div className="bg-white rounded-pill shadow-sm btn-group" style={{ height: "41px" }}>
              <button style={{ height: "41px" }} className="pe-4 d-flex align-items-center btn btn-outline-secondary rounded-pill border border-0 dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                <img src={getUserData()?.user['image']} style={{
                  width: "32px",
                  borderRadius: "100%"
                }} alt="" srcSet="" />
                <p className="pe-3 ps-3 mb-0">{getUserData()?.user['firstName']} {getUserData()?.user['lastName']}</p>
              </button>
              <ul className="dropdown-menu">
                <li><a className="dropdown-item" href="#">Profile</a></li>
                <li><a className="dropdown-item" href="#">Invite Friends</a></li>
                <li><hr className="dropdown-divider" /></li>
                <li><a className="dropdown-item" href="#">Log Out</a></li>
              </ul>
            </div>
          </div>
          <h2 className="mt-5 fs-1">Your <span className="shelf-color">Shelf</span></h2>
<<<<<<< HEAD
          <ul className="d-flex flex-row align-items-center ps-0 mt-5">
            <li className="nav-item">
              <a href="#" className="nav-link link-active me-5 category-link" aria-current="page">
                All Books
              </a>
            </li>
            <li>
              <a href="/login" className="nav-link link-dark me-5 category-link">
                Favourite
              </a>
            </li>
            <li>
              <a href="#" className="nav-link link-dark me-5 category-link">
                Borrowed Books
              </a>
            </li>
            <li>
              <a href="#" className="nav-link link-dark me-5 category-link">
                E-Books
              </a>
            </li>
            <li>
              <a href="#" className="nav-link link-dark me-5 category-link">
                Audio Books
              </a>
            </li>
            <li>
              <a href="#" className="nav-link link-dark category-link">
                Articles & Journals
              </a>
            </li>
          </ul>
          <div className="mt-2 row">
            <div className="book row col mt-3">
              <div className="card flex-row justify-content-between col-sm-5 mb-3 mb-sm-0 pt-3 pb-3 border-0" style={{
                width: '308px',
              }}>
                <div className="card-header p-0 border-0 bg-white">
                  <img src="https://via.placeholder.com/123x170" alt="" />
                  <div className="card-footer bg-white border-0 p-0" style={{
                    fontSize: '12px',
                    width: '123px'
                  }}>
                    <div className="book-title mt-3">
                      <p> Don’t Make Me think</p>
                      <span style={{ fontSize: '10px' }}>Steve Krug, 2000</span>
                    </div>
                    <div className="book-rating mt-2">
                      <span style={{ fontSize: '10px' }}>4.5<span className="max-rating">/5</span></span>
                    </div>
                  </div>
                </div>
                <div className="card-block px-2 bg-white">
                  <h4 className="card-title base-color" style={{
                    fontSize: "15px",
                    fontWeight: "400"
                  }}>Borrowed on</h4>
                  <h6 className="card-subtitle base-color mt-3" style={{
                    fontSize: "10px",
                    fontWeight: "400"
                  }}>
                    11 Mar 2023 09:00 AM
                  </h6>
                  <p className="card-text mt-3" style={{
                    fontSize: "15px",
                    fontWeight: "400"
                  }}>Submission Due</p>
                  <p className="card-text base-color mt-3" style={{
                    fontSize: "10px",
                    fontWeight: "400"
                  }}>
                    14 Mar 2023
                  </p>
                  <div className="d-flex flex-column">
                    <button className="btn btn-secondary mt-4">Borrowed</button>
                    <div className="btn-group">
                      <button className="btn-outline-primary btn mt-3">Read</button>
                      <button className="btn btn-outline-primary mt-3">
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <g clipPath="url(#clip0_72_2643)">
                            <path d="M12.4281 9.56519H11.1654C10.8168 9.56519 10.5341 9.8549 10.5341 10.2123V14.742C10.5341 15.0993 10.8168 15.389 11.1654 15.389H12.4281C12.7767 15.389 13.0594 15.0993 13.0594 14.742V10.2123C13.0594 9.8549 12.7767 9.56519 12.4281 9.56519Z" fill="#F76B56" />
                            <path d="M14.322 10.5359H13.6907V14.4185H14.322C14.4895 14.4185 14.65 14.3503 14.7684 14.2289C14.8868 14.1076 14.9533 13.943 14.9533 13.7714V11.183C14.9533 11.0114 14.8868 10.8468 14.7684 10.7254C14.65 10.6041 14.4895 10.5359 14.322 10.5359Z" fill="#F76B56" />
                            <path d="M4.22101 9.56519H2.95839C2.60972 9.56519 2.32707 9.8549 2.32707 10.2123V14.742C2.32707 15.0993 2.60972 15.389 2.95839 15.389H4.22101C4.56968 15.389 4.85233 15.0993 4.85233 14.742V10.2123C4.85233 9.8549 4.56968 9.56519 4.22101 9.56519Z" fill="#F76B56" />
                            <path d="M0.433136 11.1831V13.7715C0.433136 13.9431 0.499649 14.1077 0.618043 14.229C0.736438 14.3504 0.897014 14.4186 1.06445 14.4186H1.69576V10.536H1.06445C0.897014 10.536 0.736438 10.6042 0.618043 10.7255C0.499649 10.8469 0.433136 11.0115 0.433136 11.1831ZM11.9136 6.60488C11.9986 6.88638 12.1465 7.14373 12.3453 7.35656C12.5442 7.56939 12.7887 7.73187 13.0594 7.83113C13.0594 6.37235 12.494 4.97333 11.4877 3.94182C10.4813 2.91031 9.11643 2.33081 7.69324 2.33081C6.27004 2.33081 4.90514 2.91031 3.89879 3.94182C2.89244 4.97333 2.32708 6.37235 2.32708 7.83113C2.59721 7.73144 2.84104 7.56878 3.03934 7.35598C3.23765 7.14317 3.38499 6.88604 3.46975 6.60488C4.75763 2.35993 10.6415 2.37611 11.9136 6.60488Z" fill="#F76B56" />
                            <path d="M12.8258 2.68658C8.2835 -1.96927 0.433136 1.31797 0.433136 7.94747V10.0635C0.808767 9.84346 1.08654 9.88875 1.69576 9.88875C1.69576 7.83746 1.43061 5.68263 3.45397 3.60222C7.19133 -0.23829 13.6907 2.44716 13.6907 7.94747V9.88875C14.3031 9.88875 14.584 9.84669 14.9533 10.0635C14.9533 7.80511 15.269 5.17466 12.8258 2.68658Z" fill="#F76B56" />
                          </g>
                          <defs>
                            <clipPath id="clip0_72_2643">
                              <path d="M0.117477 0.182373H15.269V15.7127H0.117477V0.182373Z" fill="white" />
                            </clipPath>
                          </defs>
                        </svg>

=======

          <ul className="d-flex flex-row align-items-center ps-0 mt-4">
            <li className="nav-item">
              <a href="#" className="nav-link link-active me-5 category-link" aria-current="page">
                All Books
              </a>
            </li>
            <li>
              <a href="/login" className="nav-link link-dark me-5 category-link">
                Favourite
              </a>
            </li>
            <li>
              <a href="#" className="nav-link link-dark me-5 category-link">
                Borrowed Books
              </a>
            </li>
            <li>
              <a href="#" className="nav-link link-dark me-5 category-link">
                E-Books
              </a>
            </li>
            <li>
              <a href="#" className="nav-link link-dark me-5 category-link">
                Audio Books
              </a>
            </li>
            <li>
              <a href="#" className="nav-link link-dark category-link">
                Articles & Journals
              </a>
            </li>
          </ul>
          <div className="mt-2 row">
            <div className="book row col mt-3">
              <div className="card flex-row justify-content-between col-sm-5 mb-3 mb-sm-0 pt-3 pb-3 border-0" style={{
                width: '308px',
              }}>
                <div className="card-header p-0 border-0 bg-white">
                  <img src="https://via.placeholder.com/123x170" alt="" />
                  <div className="card-footer bg-white border-0 p-0" style={{
                    fontSize: '12px',
                    width: '123px'
                  }}>
                    <div className="book-title mt-3">
                      <p> Don’t Make Me think</p>
                      <span style={{ fontSize: '10px' }}>Steve Krug, 2000</span>
                    </div>
                    <div className="book-rating mt-2">
                      <span style={{ fontSize: '10px' }}>4.5<span className="max-rating">/5</span></span>
                    </div>
                  </div>
                </div>
                <div className="card-block px-2 bg-white">
                  <h4 className="card-title base-color" style={{
                    fontSize: "15px",
                    fontWeight: "400"
                  }}>Borrowed on</h4>
                  <h6 className="card-subtitle base-color mt-3" style={{
                    fontSize: "10px",
                    fontWeight: "400"
                  }}>
                    11 Mar 2023 09:00 AM
                  </h6>
                  <p className="card-text mt-3" style={{
                    fontSize: "15px",
                    fontWeight: "400"
                  }}>Submission Due</p>
                  <p className="card-text base-color mt-3" style={{
                    fontSize: "10px",
                    fontWeight: "400"
                  }}>
                    14 Mar 2023
                  </p>
                  <div className="d-flex flex-column">
                    <button className="btn btn-secondary mt-4">Borrowed</button>
                    <div className="btn-group">
                      <button className="btn-outline-primary btn mt-3">Read</button>
                      <button className="btn btn-outline-primary mt-3">
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <g clipPath="url(#clip0_72_2643)">
                            <path d="M12.4281 9.56519H11.1654C10.8168 9.56519 10.5341 9.8549 10.5341 10.2123V14.742C10.5341 15.0993 10.8168 15.389 11.1654 15.389H12.4281C12.7767 15.389 13.0594 15.0993 13.0594 14.742V10.2123C13.0594 9.8549 12.7767 9.56519 12.4281 9.56519Z" fill="#F76B56" />
                            <path d="M14.322 10.5359H13.6907V14.4185H14.322C14.4895 14.4185 14.65 14.3503 14.7684 14.2289C14.8868 14.1076 14.9533 13.943 14.9533 13.7714V11.183C14.9533 11.0114 14.8868 10.8468 14.7684 10.7254C14.65 10.6041 14.4895 10.5359 14.322 10.5359Z" fill="#F76B56" />
                            <path d="M4.22101 9.56519H2.95839C2.60972 9.56519 2.32707 9.8549 2.32707 10.2123V14.742C2.32707 15.0993 2.60972 15.389 2.95839 15.389H4.22101C4.56968 15.389 4.85233 15.0993 4.85233 14.742V10.2123C4.85233 9.8549 4.56968 9.56519 4.22101 9.56519Z" fill="#F76B56" />
                            <path d="M0.433136 11.1831V13.7715C0.433136 13.9431 0.499649 14.1077 0.618043 14.229C0.736438 14.3504 0.897014 14.4186 1.06445 14.4186H1.69576V10.536H1.06445C0.897014 10.536 0.736438 10.6042 0.618043 10.7255C0.499649 10.8469 0.433136 11.0115 0.433136 11.1831ZM11.9136 6.60488C11.9986 6.88638 12.1465 7.14373 12.3453 7.35656C12.5442 7.56939 12.7887 7.73187 13.0594 7.83113C13.0594 6.37235 12.494 4.97333 11.4877 3.94182C10.4813 2.91031 9.11643 2.33081 7.69324 2.33081C6.27004 2.33081 4.90514 2.91031 3.89879 3.94182C2.89244 4.97333 2.32708 6.37235 2.32708 7.83113C2.59721 7.73144 2.84104 7.56878 3.03934 7.35598C3.23765 7.14317 3.38499 6.88604 3.46975 6.60488C4.75763 2.35993 10.6415 2.37611 11.9136 6.60488Z" fill="#F76B56" />
                            <path d="M12.8258 2.68658C8.2835 -1.96927 0.433136 1.31797 0.433136 7.94747V10.0635C0.808767 9.84346 1.08654 9.88875 1.69576 9.88875C1.69576 7.83746 1.43061 5.68263 3.45397 3.60222C7.19133 -0.23829 13.6907 2.44716 13.6907 7.94747V9.88875C14.3031 9.88875 14.584 9.84669 14.9533 10.0635C14.9533 7.80511 15.269 5.17466 12.8258 2.68658Z" fill="#F76B56" />
                          </g>
                          <defs>
                            <clipPath id="clip0_72_2643">
                              <path d="M0.117477 0.182373H15.269V15.7127H0.117477V0.182373Z" fill="white" />
                            </clipPath>
                          </defs>
                        </svg>

>>>>>>> 431a860e4a66bc695abd106a63d1df6de6e21421
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
