/* eslint-disable @typescript-eslint/no-non-null-assertion */
/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
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
import Button from "../../elements/button";
import { BookModel } from "../../models/BookModel";
import getDetailBookData from '../../configs/axios/data/detail_book_data'
import DetailStatus from "../../parts/DetailStatus";
import DetailInformation from "../../parts/DetailInformation";

const DetailPage = () => {
    const [detailBookData, setDetailBookData] = useState<BookModel>()

    const navigate = useNavigate();
    const params = useParams();

    const handleUndefinedParam = () => {
        if (isNaN(+params.id!)) {
            navigate('/', { replace: true })
        }
    }

    const fetchData = async () => {
        getDetailBookData.getDetailBookData(params.id ?? '').then((res) => {
            setDetailBookData(res.data[0])
        }).catch((err) => {
            console.log(err)
        })
    }

    useEffect(() => {
        handleUndefinedParam()
        fetchData()
        if (!isAuthenticated()) {
            navigate('/login', { replace: true })
        }
    }, [])

    return (
        <>
        {/* Frame */}
            <div className="dashboard-container d-flex rounded-4  bg-light">
                <Sidebar />

                <div className="d-flex flex-column flex-grow-1 p-5 bg-secondary-color rounded-4 main-area-container" style={{ width: "306px", }}>
                    <div className="d-flex flex-row justify-content-between">
                        <Search />
                        <AccountSummary {...getUserData()?.user} />
                    </div>

                    <div className="mt-4 d-flex align-items-center" >
                        <Button className="btn p-0" type="link" href="/">
                            <div className="d-flex flex-row align-items-center">
                                <img src={Arrow} alt="" />
                                <p className="ms-2 flex-shrink-1">Back to results</p>
                            </div>
                        </Button>
                    </div>

                    {
                        detailBookData != undefined ? <div className="detail-container d-flex flex-row mt-4">

                            {/* Image Section */}
                            <div className="img-container bg-white rounded-2 p-4" style={{
                                height: '26em'
                            }}>
                                <img src={detailBookData?.image} width={209} height={277} style={{ objectFit: 'cover' }} alt="" />
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
                            {/* End Image Section */}

                            <div className="me-5"></div>

                            {/* Detail Section */}
                            <div className="detail-container  d-flex flex-column">
                                <DetailStatus {...detailBookData!}/>

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
                                    <p className="mt-4">{detailBookData?.description}  <a href="" style={{ color: '#F27851' }}>Read more</a>
                                    </p>
                                </div>
                                {/* End Desc Section */}

                                {/* Book Information Section */}
                                <DetailInformation/>
                                {/* End Book Information Section */}
                            </div>
                        </div> : <div />
                    }
                    {/* Main Content */}


                </div>
            </div>
        </>
    );
};

export default DetailPage;
