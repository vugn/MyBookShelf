/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { getUserData, isAuthenticated } from "../../configs/token";
import { useNavigate } from "react-router-dom";
import '../../assets/scss/myshelf.scss'
import getBookData from '../../configs/axios/data/book_data'
import { BookModel } from "../../models/BookModel";
import Card from "../../parts/Card";
import Sidebar from "../../parts/Sidebar";
import Search from "../../parts/Search";
import AccountSummary from "../../parts/AccountSummary";
import CategoryNav from "../../parts/CategoryNav";

const MyShelfPage = () => {
  const [booksData, setBooksData] = useState<BookModel[]>([])
  const navigate = useNavigate();

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
          <h2 className="mt-5 fs-1">Your <span className="shelf-color">Shelf</span></h2>
          <CategoryNav />
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

export default MyShelfPage;
