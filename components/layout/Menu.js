import Link from "next/link"
// import { useRouter } from "next/router"

export default function Menu() {
    // const router = useRouter()


    return (
        <>


            <ul className="main-menu__list">
                <li>
                    <Link href="/">Home </Link>
                </li>
                <li>
                    <Link href="/about">About Us</Link>
                </li>
                <li className="dropdown">
                    <Link href="/service">Services</Link>
                    <ul>
                        <li><Link href="/service/international-transport">International Transport</Link></li>
                        <li><Link href="/service/local-truck-transport">Local Truck Transport</Link></li>
                        <li><Link href="/service/fast-personal-delivery">Fast Personal Delivery</Link></li>
                        <li><Link href="/service/safe-ocean-transport">Safe Ocean Transport</Link></li>
                        <li><Link href="/service/warehouse-facility">Warehouse Facility</Link></li>
                        <li><Link href="/service/emergency-transport">Emergency Transport</Link></li>
                    </ul>
                </li>
                <li>
                    <Link href="/products">Products</Link>
                </li>
                <li>
                    <Link href="/testimonial">Testimonials</Link>
                </li>
                <li>
                    <Link href="/faq">Faq</Link>
                </li>
                <li>
                    <Link href="/contact">Contact</Link>
                </li>
            </ul>
        </>
    )
}
