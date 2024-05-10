import './about.component.css';
import img1 from '../assets/about-img1.png';
import img2 from '../assets/about-img2.png';
import draftimg from '../assets/Drafting Compass.svg';
import drumstrick from '../assets/drumstrick.png';
import filldrip from '../assets/fill-drip.png';
import img3 from '../assets/about-img3.png';
import sliderimg1 from '../assets/slider-1.png';
import slider2 from '../assets/slider2.png';
import slider3 from '../assets/slider-3.png';
import Slider from 'react-slick';
export function About() {
    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1
    };
    return (
        <div className='about'>
            <div className="about-card">
                <h1>About</h1>
                <h5>About</h5>
            </div>
            <div className='about-flex row' >
                <div className='col-6 md-12 sx-12'>
                    <h2 id='about-text'>
                        This is how we do. Learn something about us and our services
                    </h2>
                    <h5 id='about-text2'>
                        There’s a voice that keeps on calling me. Down the road, that’s where I’ll always be. Every stop I make, I make a new friend. Can’t stay for long, just turn around and I’m gone again. Maybe tomorrow, I’ll want to settle down, Until tomorrow, I’ll just keep moving on.
                    </h5>
                    <h5 id='about-text2'>
                        Top Cat! The most effectual Top Cat! Who’s intellectual close friends get to call him T.C., providing it's with dignity.
                        fasdkfjlasdjflkajldsfjlkadsjlfjaldjflkajdlfjalsdkjflkajsdlkjflaksdjflkajsdlkf
                    </h5>
                </div>
                <div className='col-6 md-12 sx-12'>
                    <img src={img1} id='about-img' />
                </div>
            </div>
            <h5 id='about-text3'>fadsfkhaksdfhkjahsdkfhakjsdhfkahdskj</h5>
            <h5 id='about-text3'>fadskjfhkasdjhfkjhasdkjfha</h5>
            <h5 id='about-text3'>fasdhfkahsdkfhkasdhfkjashdkfjh</h5>
            <h5 id='about-text3'>fasdbkfhaskdfhkasdhfkashdfkjasdhjkf</h5>
            <div className='about-flex'>
                <div>
                    <img src={img2} id='about-img2' />
                </div>
                <div>
                    <h2 id='about-text'>
                        We Provide Express & secure home delivery
                    </h2>
                    <h5 id='about-text4'>
                        here’s a voice that keeps on calling me. Down the road, that’s where I’ll always be. Every stop I make, I make a new friend. Can’t stay for long, just turn around and I’m gone again. Maybe tomorrow, I’ll want to settle down, Until tomorrow, I’ll just keep moving on.
                    </h5>
                    <h5 id='about-text4'>
                        Top Cat! The most effectual Top Cat! Who’s intellectual close friends get to call him T.C., providing it’s with dignity.
                    </h5>
                </div>
            </div>
            <div className='about-flex'>
                <div >
                    <h1 id='advantage'>Our Advantages</h1>
                    <div className='aboutdownicons d-flex'>
                        <div className='abouticons d-flex '>
                            <div>
                                <svg xmlns="http://www.w3.org/2000/svg" width="70" height="70" fill="currentColor" class="bi bi-truck" viewBox="0 0 16 16">
                                    <path d="M0 3.5A1.5 1.5 0 0 1 1.5 2h9A1.5 1.5 0 0 1 12 3.5V5h1.02a1.5 1.5 0 0 1 1.17.563l1.481 1.85a1.5 1.5 0 0 1 .329.938V10.5a1.5 1.5 0 0 1-1.5 1.5H14a2 2 0 1 1-4 0H5a2 2 0 1 1-3.998-.085A1.5 1.5 0 0 1 0 10.5zm1.294 7.456A2 2 0 0 1 4.732 11h5.536a2 2 0 0 1 .732-.732V3.5a.5.5 0 0 0-.5-.5h-9a.5.5 0 0 0-.5.5v7a.5.5 0 0 0 .294.456M12 10a2 2 0 0 1 1.732 1h.768a.5.5 0 0 0 .5-.5V8.35a.5.5 0 0 0-.11-.312l-1.48-1.85A.5.5 0 0 0 13.02 6H12zm-9 1a1 1 0 1 0 0 2 1 1 0 0 0 0-2m9 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2" />
                                </svg>
                            </div>
                            <div>
                                <label id='icon-text'><b>Free Shipping</b></label><br></br>
                                <label id='icon-text2'>Free Shopping on all online order</label>
                            </div>
                        </div>
                        <div className='abouticons d-flex '>
                            <div>
                                <img src={drumstrick} id='draft-icon' />
                            </div>
                            <div>
                                <label id='icon-text'><b>100% Secure Payment</b></label><br></br>
                                <label id='icon-text2'>We Ensure Secure Transections</label>
                            </div>
                        </div>
                    </div>
                    <div className='aboutdownicons d-flex'>
                        <div className='abouticons d-flex '>
                            <div>
                                <img src={draftimg} id='draft-icon' />
                            </div>
                            <div>
                                <label id='icon-text'><b>Fresh Product</b></label><br></br>
                                <label id='icon-text2'>We provide 100% Original item</label>
                            </div>
                        </div>
                        <div className='abouticons d-flex'>
                            <div>
                                <img src={filldrip} id='draft-icon' />
                            </div>
                            <div>
                                <label id='icon-text'><b>24/7 Support Center</b></label><br></br>
                                <label id='icon-text2'>We are available in 24 hours</label>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <img src={img3} id='about-img3' />
                </div>
            </div>
            <div >
                <h1>Clints Says</h1>
            </div>
            <Slider {...settings}>
                <div>
                    <div className='c-slider'>
                        <div className='crfull'>
                            <p>
                                Did shy say mention enabled through elderly improve. As at so believe account evening behaved hearted is. House is tiled we aware. Did shy say mention enabled.
                            </p>
                        </div>
                        <div className='c-img'>
                            <img src={sliderimg1} className='slider-img' />
                        </div>
                        <div className='c-down'>
                            <h4>Jerry R. Kuhn</h4>
                            <p1>Student,Oxford University</p1>
                        </div>
                    </div>
                </div>
                <div>
                    <div className='c-slider'>
                        <div className='crfull'>
                            <p>
                                Did shy say mention enabled through elderly improve. As at so believe account evening behaved hearted is. House is tiled we aware. Did shy say mention enabled.
                            </p>
                        </div>
                        <div className='c-img'>
                            <img src={slider2} className='slider-img' />
                        </div>
                        <div className='c-down'>
                            <h4>Melinda Watson</h4>
                            <p1>Student,Oxford University</p1>
                        </div>
                    </div>
                </div>
                <div>
                    <div className='c-slider'>
                        <div className='crfull'>
                            <p>
                                Did shy say mention enabled through elderly improve. As at so believe account evening behaved hearted is. House is tiled we aware. Did shy say mention enabled.
                            </p>
                        </div>
                        <div className='c-img'>
                            <img src={slider3} className='slider-img' />
                        </div>
                        <div className='c-down'>
                            <h4>Graham Ortega</h4>
                            <p1>Student,Oxford University</p1>
                        </div>
                    </div>
                </div>
                <div>
                    <div className='c-slider'>
                        <div className='crfull'>
                            <p>
                                Did shy say mention enabled through elderly improve. As at so believe account evening behaved hearted is. House is tiled we aware. Did shy say mention enabled.
                            </p>
                        </div>
                        <div className='c-img'>
                            <img src={sliderimg1} className='slider-img' />
                        </div>
                        <div className='c-down'>
                            <h4>Jerry R. Kuhn</h4>
                            <p1>Student,Oxford University</p1>
                        </div>
                    </div>
                </div>
                <div>
                    <div className='c-slider'>
                        <div className='crfull'>
                            <p>
                                Did shy say mention enabled through elderly improve. As at so believe account evening behaved hearted is. House is tiled we aware. Did shy say mention enabled.
                            </p>
                        </div>
                        <div className='c-img'>
                            <img src={slider2} className='slider-img' />
                        </div>
                        <div className='c-down'>
                            <h4>Melinda Watson</h4>
                            <p1>Student,Oxford University</p1>
                        </div>
                    </div>
                </div>
                <div>
                    <div className='c-slider'>
                        <div className='crfull'>
                            <p>
                                Did shy say mention enabled through elderly improve. As at so believe account evening behaved hearted is. House is tiled we aware. Did shy say mention enabled.
                            </p>
                        </div>
                        <div className='c-img'>
                            <img src={slider3} className='slider-img' />
                        </div>
                        <div className='c-down'>
                            <h4>Graham Ortega</h4>
                            <p1>Student,Oxford University</p1>
                        </div>
                    </div>
                </div>
            </Slider>
        </div>

    )
}