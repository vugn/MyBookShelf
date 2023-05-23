/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import {  getUserData, isAuthenticated } from "../../configs/token";
import { useNavigate } from "react-router-dom";
import '../../assets/scss/dashboard.scss'
import getBookData from '../../configs/axios/data/book_data'
import { BookModel } from "../../models/BookModel";
import Card from "../../parts/Card";
import Sidebar from "../../parts/Sidebar";
import Search from "../../parts/Search";

const HomePage = () => {
  const [booksData, setBooksData] = useState<BookModel[]>([])
  const navigate = useNavigate();

  const handleRemoveUser = () => {
    localStorage.removeItem("token");
  };

  const fetchData = async () => {
    getBookData.getBooksData().then((res) => {
      setBooksData(res.data)
      console.log(booksData)
    }).catch((err) => {
      console.log(err)
    })
  }

  useEffect(() => {
    fetchData()
    if (!isAuthenticated()) {
      navigate('/login', { replace: true })
    }
  },[])

  return (
    <>
      <div className="dashboard-container d-flex rounded-4  bg-light">
        <Sidebar/>

        <div className="d-flex flex-column flex-grow-1 p-5 bg-secondary-color rounded-4 main-area-container" style={{ width: "306px", }}>
          <div className="d-flex flex-row justify-content-between">
           <Search/>

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
          <div className="mt-2 row row-cols-xxl-4">
            {
              booksData.map((book) => {
                return Card(book)
              })
            }

          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
