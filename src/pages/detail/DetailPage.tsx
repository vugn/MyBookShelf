/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import { getUserData, isAuthenticated } from "../../configs/token";
import { useNavigate, useParams } from "react-router-dom";
import '../../assets/scss/detail.scss'
import Sidebar from "../../parts/Sidebar";
import Search from "../../parts/Search";
import AccountSummary from "../../parts/AccountSummary";
import Arrow from "../../assets/images/icons/ic_back.svg";
import ReviewIcon from "../../assets/images/icons/ic_review.svg";
import NotesIcon from "../../assets/images/icons/ic_notes.svg";
import ShareIcon from "../../assets/images/icons/ic_share.svg";
import Button from "../../elements/Button";

const DetailPage = () => {
    const navigate = useNavigate();
    const params = useParams();

    useEffect(() => {
        if (!isAuthenticated()) {
            navigate('/login', { replace: true })
        }
    }, [])

    return (
        <>
            <div className="dashboard-container d-flex rounded-4  bg-light">
                <Sidebar />

                <div className="d-flex flex-column flex-grow-1 p-5 bg-secondary-color rounded-4 main-area-container" style={{ width: "306px", }}>
                    <div className="d-flex flex-row justify-content-between">
                        <Search />
                        <AccountSummary {...getUserData()?.user} />
                    </div>

                    <div className="mt-4 d-flex align-items-center" >
                        <Button className="btn p-0" type="link" href="/" isExternal>
                            <div className="d-flex flex-row align-items-center">
                                <img src={Arrow} alt="" />
                                <p className="ms-2 flex-shrink-1">Back to results</p>
                            </div>
                        </Button>
                    </div>

                    {/* Main Content */}

                    <div className="detail-container d-flex flex-row mt-4">

                        {/* Image Section */}
                        <div className="img-container bg-white rounded-2 p-4" style={{ 
                            height: '26em'
                         }}>
                            <img src="https://placehold.co/209x277" alt="" />
                            <div className="accesibility-container d-flex flex-row justify-content-evenly align-items-center mt-4 mb-2">
                                <div className="content d-flex flex-column align-items-center">
                                    <img src={ReviewIcon} alt="" width={32} />
                                    <span style={{
                                        fontWeight: '700',
                                        fontSize: '11px',
                                        color: "#333333"
                                    }}>Review</span>
                                </div>

                                <div className="content d-flex flex-column align-items-center">
                                    <img src={NotesIcon} alt="" width={32} />
                                    <span style={{
                                        fontWeight: '700',
                                        fontSize: '11px',
                                        color: "#333333"
                                    }}>Notes</span>
                                </div>

                                <div className="content d-flex flex-column align-items-center">
                                    <img src={ShareIcon} alt="" width={32} />
                                    <span style={{
                                        fontWeight: '700',
                                        fontSize: '11px',
                                        color: "#333333"
                                    }}>Share</span>
                                </div>
                            </div>
                        </div>
                        <div className="me-5"></div>
                        {/* Detail Section */}
                        <div className="detail-container d-flex flex-column">
                            <h1 className="fs-2">Don’t Make Me Think </h1>
                            <h2 className="mt-3">By <a className="link-underline-dark link-dark">Steven Kurg</a>, 2000</h2>
                            <span className="mt-4" style={{
                                color: '#9A9A9A'
                            }}>Second Edition</span>

                            {/* Status Seciont */}
                            <div className="book-status-container d-flex d-row align-items-center mt-4">
                                <div className="star-ratings" >
                                    <div className="star-ratings-top" style={{ width: "50%" }}><span>★</span><span>★</span><span>★</span><span>★</span><span>★</span></div>
                                    <div className="star-ratings-bottom"><span>★</span><span>★</span><span>★</span><span>★</span><span>★</span></div>
                                </div>
                                <p className="ms-2" style={{ fontWeight: '500', fontSize: '14' }}><span>5.0</span> Ratings</p>
                                <p className="ms-3" style={{ fontWeight: '500', fontSize: '14' }}><span>25</span> Currently Reading</p>
                                <p className="ms-3" style={{ fontWeight: '500', fontSize: '14' }}><span>119</span> Have Read</p>
                            </div>
                            {/* End Status Section */}

                            {/* Button Section */}
                            <div className="button-container mt-5 d-flex align-items-center justify-content-between" style={{ 
                                width: '30em'
                             }}>
                                <Button className='btn mt-5 pe-5 ps-5 pb-5 pt-3' isOrange isLarge>Baca Buku</Button>
                                <Button className='btn mt-5 dropdown-toggle' isSecondary>Add to list</Button>
                            </div>
                            {/* End Button Section */}

                            {/* Desc Section */}
                            <div className="desc-container mt-5">
                                <p className="mt-5">Previews available in: <a href="" style={{ color: '#F27851' }}>English</a></p>
                                <p className="mt-4">
                                Since Don’t Make Me Think was first published in 2000, hundreds of thousands of Web designers and developers have relied on usability guru Steve Krug’s guide to help them understand the principles of intuitive navigation and information design. Witty, commonsensical, and eminently practical, it’s one of the best-loved and most...  <a href="" style={{ color: '#F27851' }}>Read more</a>
                                </p>
                            </div>
                            {/* End Desc Section */}

                            {/* Book Information Section */}
                            <div className="book-information-container mt-5 bg-white p-5 rounded-2" style={{ width: '33em' }}>

                             <h1 className="fs-3 fw-semibold">Book Details</h1>
                             <h2 className="fs-5 fw-semibold mt-5">Published in</h2>
                             <h3 className="fs-6 fw-semibold mt-4">United States</h3>
                             

                             <h2 className="fs-5 fw-semibold mt-5">Edition Notes</h2>
                             <div className="row row-cols-2 mt-2">
                                <div className="col mt-3"><p className="fw-semibold">Series</p></div>
                                <div className="col mt-3"><p className="fw-semibold">Dover large print classics</p></div>
                                <div className="col mt-3"><p className="fw-semibold">Genre</p></div>
                                <div className="col mt-3"><p className="fw-semibold">Fiction.</p></div>
                             </div>

                             <h2 className="fs-5 fw-semibold mt-5" style={{ color: '#666666' }}>Classifications</h2>
                             <div className="row row-cols-2 mt-2">
                                <div className="col mt-3"><p className="fw-semibold" style={{ color: '#666666', width: '10em' }} >Dewey Decimal Class</p></div>
                                <div className="col mt-3"><p className="fw-semibold">823/.8</p></div>
                                <div className="col mt-3"><p className="fw-semibold" style={{ color: '#666666' }} >Library of Congress</p></div>
                                <div className="col mt-3"><p className="fw-semibold">PR5485 .A1 2002</p></div>
                             </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default DetailPage;
