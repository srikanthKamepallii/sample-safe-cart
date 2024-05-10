import './blogstyle.component.css';
import img1 from '../assets/blogimg-1.webp';
import img2 from '../assets/blogimg-2.webp';
import img3 from '../assets/blog-3.webp';
import img4 from '../assets/blog-4.webp';
import img5 from '../assets/blog-5.webp';
import img6 from '../assets/blog-6.webp';
export function BlogStyle() {
        return (
            <div>
                <div className="blog-head">
                    <h1>Blog</h1>
                    <h4>Blog Grid Style</h4>
                </div>
                <div className='blog-flex'>
                    <div className='blog-card'>
                        <div>
                            <img src={img1} />
                        </div>
                        <div className='blog-simble'>
                            <i class="bi bi-calendar3 m-2 p-2"></i>
                            <label>  Mon Junu 2020  </label>
                            <i class="bi bi-tag ms-5 p-3"></i>
                            <label>Startup Business</label>
                        </div>
                        <h3>New organization are added seal there</h3>
                        <p>Was drawing natural fat respect husband. An as noisy an offer drawn blush...</p>
                        <button className='blog-btn'>Read More</button>
                    </div>
                    <div className='blog-card'>
                        <div>
                            <img src={img2} />
                        </div>
                        <div className='blog-simble'>
                            <i class="bi bi-calendar3 m-2 p-2"></i>
                            <label>  Fri Junu 2020  </label>
                            <i class="bi bi-tag ms-5 p-3"></i>
                            <label>Ecommerce</label>
                        </div>
                        <h3>Was drawing natural fat respect husband</h3>
                        <p>Was drawing natural fat respect husband. An as noisy an offer drawn blush...</p>
                        <button className='blog-btn'>Read More</button>
                    </div>
                    <div className='blog-card'>
                        <div>
                            <img src={img3} />
                        </div>
                        <div className='blog-simble'>
                            <i class="bi bi-calendar3 m-2 p-2"></i>
                            <label>  Mon Junu 2020  </label>
                            <i class="bi bi-tag ms-5 p-3"></i>
                            <label>Startup Business</label>
                        </div>
                        <h3>New organization are added seal there</h3>
                        <p>Was drawing natural fat respect husband. An as noisy an offer drawn blush...</p>
                        <button className='blog-btn'>Read More</button>
                    </div>
                    <div className='blog-card'>
                        <div>
                            <img src={img4} />
                        </div>
                        <div className='blog-simble'>
                            <i class="bi bi-calendar3 m-2 p-2"></i>
                            <label>  Mon Junu 2020  </label>
                            <i class="bi bi-tag ms-5 p-3"></i>
                            <label>Startup Business</label>
                        </div>
                        <h3>New organization are added seal there</h3>
                        <p>Was drawing natural fat respect husband. An as noisy an offer drawn blush...</p>
                        <button className='blog-btn'>Read More</button>
                    </div>
                    <div className='blog-card'>
                        <div>
                            <img src={img5} />
                        </div>
                        <div className='blog-simble'>
                            <i class="bi bi-calendar3 m-2 p-2"></i>
                            <label>  Mon Junu 2020  </label>
                            <i class="bi bi-tag ms-5 p-3"></i>
                            <label>Startup Business</label>
                        </div>
                        <h3>New organization are added seal there</h3>
                        <p>Was drawing natural fat respect husband. An as noisy an offer drawn blush...</p>
                        <button className='blog-btn'>Read More</button>
                    </div>
                    <div className='blog-card'>
                        <div>
                            <img src={img6} />
                        </div>
                        <div className='blog-simble'>
                            <i class="bi bi-calendar3 m-2 p-2"></i>
                            <label>  Mon Junu 2020  </label>
                            <i class="bi bi-tag ms-5 p-3"></i>
                            <label>Startup Business</label>
                        </div>
                        <h3>New organization are added seal there</h3>
                        <p>Was drawing natural fat respect husband. An as noisy an offer drawn blush...</p>
                        <button className='blog-btn'>Read More</button>
                    </div>

                </div>
            </div>
        )
    }