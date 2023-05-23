export default function DetailInformation() {
    return <div className="book-information-container mt-5 bg-white p-5 rounded-2" style={{ width: '33em' }}>

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
}