import { BookModel } from "../models/BookModel";

export default function DetailStatus(props: BookModel) {
    return <div>
            <h1 className="fs-2">{props.Title}</h1>
            <h2 className="mt-3">By <a className="link-underline-dark link-dark">{props.author}</a>, {new Date(props.published).getFullYear().toString()}</h2>
            <span className="mt-4" style={{
                color: '#9A9A9A'
            }}>Second Edition</span>

            <div className="book-status-container d-flex d-row align-items-center mt-4">
                <div className="star-ratings" >
                    <div className="star-ratings-top" style={{ width: `${props.rating}%` }}><span>★</span><span>★</span><span>★</span><span>★</span><span>★</span></div>
                    <div className="star-ratings-bottom"><span>★</span><span>★</span><span>★</span><span>★</span><span>★</span></div>
                </div>
                <p className="ms-2" style={{ fontWeight: '500', fontSize: '14' }}><span>{props.rating}</span> Ratings</p>
                <p className="ms-3" style={{ fontWeight: '500', fontSize: '14' }}><span>25</span> Currently Reading</p>
                <p className="ms-3" style={{ fontWeight: '500', fontSize: '14' }}><span>119</span> Have Read</p>
            </div>
    </div>
}