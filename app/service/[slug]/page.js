'use client'
import Layout from "@/components/layout/Layout"
import Link from "next/link"
import { notFound } from "next/navigation"
import servicesData from "@/lib/services.json"

export default function ServiceDetails({ params }) {
    const { slug } = params
    const service = servicesData.find(s => s.slug === slug)

    if (!service) {
        return notFound()
    }

    return (
        <Layout headerStyle={2} footerStyle={1} breadcrumbTitle={service.title}>
            {/*Start Service Details*/}
            <section className="service-details">
                <div className="container">
                    <div className="row">
                        {/*Start Service Details Sidebar*/}
                        <div className="col-xl-4 col-lg-5">
                            <div className="service-details__sidebar">
                                {/*Start Service Details Sidebar Single*/}
                                <div className="service-details__sidebar-single bg-white">
                                    <h3 className="service-details__sidebar-title">Our Services</h3>
                                    <ul className="service-details__sidebar-categories-list">
                                        {servicesData.map((s) => (
                                            <li key={s.id} className={s.slug === slug ? "active" : ""}>
                                                <Link href={`/service/${s.slug}`}>{s.title} <span className="icon-right-arrow21"></span></Link>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                {/*End Service Details Sidebar Single*/}

                                {/*Start Service Details Sidebar Single*/}
                                <div className="service-details__sidebar-single text-center mt-5 mb-5 p-5 bg-light rounded">
                                    <h3>Need Transport Help ?</h3>
                                    <p className="mt-3">Prefer speaking with a human to filling out a form? call corporate office and we will connect you with a team member who can help.</p>
                                    <h2 className="mt-4"><a href="tel:6668880000">666 888 0000</a></h2>
                                </div>
                                {/*End Service Details Sidebar Single*/}

                            </div>
                        </div>
                        {/*End Service Details Sidebar*/}

                        {/*Start Service Details Content*/}
                        <div className="col-xl-8 col-lg-7">
                            <div className="service-details__content">
                                <div className="service-details__content-img1">
                                    <img src={`/${service.image}`} alt={service.title} />
                                </div>
                                <div className="service-details__content-text1">
                                    <h2>{service.title}</h2>
                                    <p>{service.short_description}</p>
                                    <p className="mt-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                                </div>

                                <div className="service-details__content-text2">
                                    <h3>Features of {service.title}</h3>
                                    <ul className="list-unstyled mt-3">
                                        <li className="mb-2"><span className="icon-right-arrow21 text-primary me-2"></span> Fast and reliable service</li>
                                        <li className="mb-2"><span className="icon-right-arrow21 text-primary me-2"></span> Real-time tracking</li>
                                        <li className="mb-2"><span className="icon-right-arrow21 text-primary me-2"></span> Expert team and handling</li>
                                        <li className="mb-2"><span className="icon-right-arrow21 text-primary me-2"></span> 24/7 customer support</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        {/*End Service Details Content*/}
                    </div>
                </div>
            </section>
            {/*End Service Details*/}
        </Layout>
    )
}
