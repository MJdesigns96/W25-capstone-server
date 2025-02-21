export default function Banner() {
    return(
        <div className="row-fluid">
            <div id="carouselExample" className="carousel slide bg-info-subtle row py-2" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active" data-bs-interval="10000">
                        <h3 className="d-block w-100 my-1">Free Shipping on all Orders</h3>
                    </div>
                    <div className="carousel-item" data-bs-interval="10000">
                        <h3 className="d-block w-100 my-1">Sustainable and Fashionable</h3>
                    </div>
                    <div className="carousel-item" data-bs-interval="10000">
                        <h3 className="d-block w-100 my-1">1% of all profits go towards charities</h3>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" style={{filter: "invert(100%)"}} aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                    <span className="carousel-control-next-icon" style={{filter: "invert(100%)"}} aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    )
}