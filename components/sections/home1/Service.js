'use client'
import Link from "next/link"
import { Autoplay, Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"

const swiperOptions = {
    modules: [Autoplay, Pagination, Navigation],
    slidesPerView: 3,
    spaceBetween: 30,
    
    loop: true,

    // Navigation
    navigation: {
        nextEl: '.h1n',
        prevEl: '.h1p',
    },

    // Pagination
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    breakpoints: {
        320: {
            slidesPerView: 1,
            
        },
        575: {
            slidesPerView: 1,
            
        },
        767: {
            slidesPerView: 2,
            
        },
        991: {
            slidesPerView: 2,
            
        },
        1199: {
            slidesPerView: 3,
            
        },
        1350: {
            slidesPerView: 3,
            
        },
    }
}
export default function Service() {
    return (
        <>
        <section className="service-one">
            <div className="service-one__pattern"
                style={{ backgroundImage: 'url(assets/images/pattern/service-v1-pattern.jpg)' }} ></div>
            <div className="container">
                <div className="sec-title center text-center tg-heading-subheading animation-style2">
                    <div className="sec-title__tagline">
                        <div className="line"></div>
                        <div className="text tg-element-title">
                            <h4>Our Service</h4>
                        </div>
                        <div className="icon">
                            <span className="icon-plane2 float-bob-x3"></span>
                        </div>
                    </div>
                    <h2 className="sec-title__title tg-element-title">Provide Efficient Logistics
                        <br/> Solutions <span>Business</span></h2>
                </div>

                <div className="row">
                    <div className="">
                        <Swiper {...swiperOptions} className="service-one__carousel owl-carousel owl-theme owl-dot-style1">
                            <SwiperSlide>
                                <div className="service-one__single">
                                    <div className="service-one__single-inner">
                                        <div className="service-one__single-img">
                                            <img src="assets/images/services/services-v1-img1.png" alt="#"/>
                                        </div>

                                        <div className="service-one__single-content">
                                            <h2><Link href="international-transport">Wholesale Sourcing</Link></h2>
                                            <p>We connect you directly to top-tier global suppliers, ensuring verified product quality and competitive pricing for large-scale procurement.</p>
                                            <div className="btn-box">
                                                <Link href="international-transport">Read More <span
                                                        className="icon-right-arrow21"></span></Link>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="icon">
                                        <span className="icon-delivery-man"></span>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>  
                                <div className="service-one__single">
                                    <div className="service-one__single-inner">
                                        <div className="service-one__single-img">
                                            <img src="assets/images/services/services-v1-img2.png" alt="#"/>
                                        </div>

                                        <div className="service-one__single-content">
                                            <h2><Link href="international-transport">Customs & Clearance</Link></h2>
                                            <p>We handle the heavy lifting of import compliance, paperwork, and clearing agent coordination to ensure swift entry.</p>
                                            <div className="btn-box">
                                                <Link href="international-transport">Read More <span
                                                        className="icon-right-arrow21"></span></Link>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="icon">
                                        <span className="icon-shipment"></span>
                                    </div>
                                </div>                          
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="service-one__single">
                                    <div className="service-one__single-inner">
                                        <div className="service-one__single-img">
                                            <img src="assets/images/services/services-v1-img3.png" alt="#"/>
                                        </div>

                                        <div className="service-one__single-content">
                                            <h2><Link href="international-transport">End-to-End Logistics</Link></h2>
                                            <p>From pre-shipment inspections to final door-to-door delivery, we orchestrate the entire freight journey securely.</p>
                                            <div className="btn-box">
                                                <Link href="international-transport">Read More <span
                                                        className="icon-right-arrow21"></span></Link>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="icon">
                                        <span className="icon-international-shipping"></span>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="service-one__single">
                                    <div className="service-one__single-inner">
                                        <div className="service-one__single-img">
                                            <img src="assets/images/services/services-v1-img1.png" alt="#"/>
                                        </div>

                                        <div className="service-one__single-content">
                                            <h2><Link href="international-transport">Wholesale Sourcing</Link></h2>
                                            <p>We connect you directly to top-tier global suppliers, ensuring verified product quality and competitive pricing for large-scale procurement.</p>
                                            <div className="btn-box">
                                                <Link href="international-transport">Read More <span
                                                        className="icon-right-arrow21"></span></Link>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="icon">
                                        <span className="icon-delivery-man"></span>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>  
                                <div className="service-one__single">
                                    <div className="service-one__single-inner">
                                        <div className="service-one__single-img">
                                            <img src="assets/images/services/services-v1-img2.png" alt="#"/>
                                        </div>

                                        <div className="service-one__single-content">
                                            <h2><Link href="international-transport">Customs & Clearance</Link></h2>
                                            <p>We handle the heavy lifting of import compliance, paperwork, and clearing agent coordination to ensure swift entry.</p>
                                            <div className="btn-box">
                                                <Link href="international-transport">Read More <span
                                                        className="icon-right-arrow21"></span></Link>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="icon">
                                        <span className="icon-shipment"></span>
                                    </div>
                                </div>                          
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="service-one__single">
                                    <div className="service-one__single-inner">
                                        <div className="service-one__single-img">
                                            <img src="assets/images/services/services-v1-img3.png" alt="#"/>
                                        </div>

                                        <div className="service-one__single-content">
                                            <h2><Link href="international-transport">End-to-End Logistics</Link></h2>
                                            <p>From pre-shipment inspections to final door-to-door delivery, we orchestrate the entire freight journey securely.</p>
                                            <div className="btn-box">
                                                <Link href="international-transport">Read More <span
                                                        className="icon-right-arrow21"></span></Link>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="icon">
                                        <span className="icon-international-shipping"></span>
                                    </div>
                                </div>
                            </SwiperSlide>
                        </Swiper>
                                
                    </div>
                </div>
            </div>
        </section>
    
        </>
    )
}
