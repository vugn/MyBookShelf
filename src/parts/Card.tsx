import Button from "../elements/Button";
import { BookModel } from "../models/BookModel";

export default function Card(props: BookModel) {
    return <div className="book col row mt-3 me-3">
    <div className="card flex-row justify-content-between mb-3 pt-3 pb-3 border-0" >
      <div className="card-header p-0 border-0 bg-white">
      <img className="" src={props.image} alt="" />
        <div className="card-footer bg-white border-0 p-0" style={{
          fontSize: '12px',
          width: '123px'
        }}>
          <div className="book-title mt-3">
            <p>{props.Title}</p>
            <span style={{ fontSize: '10px' }}>{props.author}, {new Date(props.published).getFullYear().toString()}</span>
          </div>
          <div className="book-rating mt-2">
            <span style={{ fontSize: '10px' }}>{props.rating}<span className="max-rating">/100</span></span>
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
          <Button className="btn mt-4" isEbook>E-Book</Button>
          <div className="btn-group">
            <Button className="btn mt-3 pe-4 px-4" isOutlined>Read</Button>
            <Button className="btn mt-3" isOutlined>
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
              </Button>
          </div>
        </div>
      </div>
    </div>
  </div>
}