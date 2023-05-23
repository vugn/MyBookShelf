export default function CategoryNav() {
    return <ul className="d-flex flex-row align-items-center ps-0 mt-5">
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
}