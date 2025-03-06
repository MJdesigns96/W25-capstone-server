import promo1 from '../assets/promo - 1.png';
import promo2 from '../assets/promo - 2.png';
import promo3 from '../assets/promo - 3.png';

export default function Hero() {
    return (
        <>
            <div id="carouselExampleIndicators" className="carousel slide bg-dark mb-5 p-0" style={{height:"50vh"}}>
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img className='rounded object-fit-fill' style={{maxHeight:"50vh"}} src={promo1} alt="promotional image 1" />
                    </div>
                    <div className="carousel-item">
                        <img className='rounded object-fit-fill' style={{maxHeight:"50vh"}} src={promo2} alt="promotional image 2" />
                    </div>
                    <div className="carousel-item">
                        <img className='rounded object-fit-fill' style={{maxHeight:"50vh"}} src={promo3} alt="promotional image 3" />
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </>
    )
}