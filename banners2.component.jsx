import './banners2.component.css';
import img1 from '../assets/companyname1.webp';
import img2 from '../assets/companyname2.webp';
import img3 from '../assets/companyname3.webp';
import img4 from '../assets/companyname4.webp';
import img5 from '../assets/companyname5.webp';
import lady from '../assets/banner2.webp';
import guy from '../assets/banner2-2.webp';
import hands from '../assets/banner2-3.webp';
export function BannersDown() {
    return (
        <div>
            <div className='companynames'>
                <img src={img1} id='banner2img' />
                <img src={img2} id='banner2img' />
                <img src={img3} id='banner2img' />
                <img src={img4} id='banner2img' />
                <img src={img5} id='banner2img' />
            </div>
            <div className='ban-downs'>
                <div>
                    <div className='ban-lady'>
                        <div className='winter-door'>
                            <h1>Winter ON the Door</h1>
                            <h2><i class="bi bi-check2 p-2"></i>Skin Care</h2>
                            <h2><i class="bi bi-check2 p-2"></i>Fashion Wear</h2>
                            <h2><i class="bi bi-check2 p-2"></i>Electronic Items</h2>
                            <h2><i class="bi bi-check2 p-2"></i>Furniture</h2>
                            <button id='btn-lady'>Get offers</button>
                        </div>
                        <div>
                            <img src={lady} />
                        </div>
                    </div>
                </div>
            
                    <div className='guy-hand'>
                        <div className='ban-guy'>
                            <div>
                                <img src={guy} id='guy-img' />
                            </div>

                            <div>
                                <h2 className='winter-door'>ENJOY YOUR TEXAS STYLE WINTER FASHION 2023</h2>
                                <button id='btn-guy'>View Products</button>
                            </div>
                        </div>
                        <div className='ban-hand'>
                            <div>
                                <h2 className='winter-door'>NAILS CARE? GET YOUR WINTER KIT NOW</h2>
                                <button id='btn-hand'>View Product</button>
                            </div>
                            <div>
                                <img src={hands} id='guy-img' />
                            </div>
                        </div>
                    </div>
            </div>
        </div>
    )
}