import banner from '../assets/bannerimage-1.webp';
import homeitem from '../assets/bannerimage-2.webp';
import bannerperson from '../assets/bannerimage-3.webp';
import './banner.component.css';
export function Banner() {
    return (
        <div className='banner'>
            <div className='d-flex row'>
                <div className='image-flex'>
                    <div className='d-flex col-lg-12'>
                        <div >
                            <h4>NOVEMBERS GADGET MADNESS</h4>
                            <h2 id='header'>20% OFF</h2>
                            <button id='buttion'>GET Offer</button>
                        </div>
                        <div>
                            <img src={banner} id='ban-image' />
                        </div>
                    </div>
                </div>
                <div className='home-flex col-lg-12'>
                    <h4>HOME APPLIANCES</h4>
                    <h2>CYBER MONDAY SPECIAL</h2>
                    <img src={homeitem} />
                </div>
            </div>
            <div className='caro-slide'>
                <div id="carouselExampleIndicators" class="carousel slide">
                    <div class="carousel-indicators">
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    </div>
                    <div class="carousel-inner">
                        <div class="carousel-item active">
                            <div className='car-img'>
                                <div>
                                    <label className='car-text'>WINTER 2024 OFFER</label><br></br>
                                    <label className='car-text2'> <b>Grab the best fashion deals in this winter</b></label><br></br>
                                    <button className='car-btn'>Get Deals</button>
                                </div>
                                <div>
                                    <img id='Ban-img' src={bannerperson} class="d-block w-100" alt="..." />
                                </div>
                            </div>
                        </div>
                        <div class="carousel-item">
                            <div className='car-img'>
                                <div >
                                    <label className='car-text'>WINTER 2024 OFFER</label><br></br>
                                    <label className='car-text2'><b>Grab the best fashion deals in this winter</b></label><br></br>
                                    <button className='car-btn'>Get Deals</button>
                                </div>
                                <div>
                                    <img id='Ban-img' src={bannerperson} class="d-block w-100" alt="..." />
                                </div>
                            </div>
                        </div>
                        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span class="visually-hidden">Previous</span>
                        </button>
                        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                            <span class="carousel-control-next-icon" aria-hidden="true"></span>
                            <span class="visually-hidden">Next</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>

    )
}