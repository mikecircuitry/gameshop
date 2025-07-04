'use client'
import Link from "next/link";
import {useCart} from "@/contexts/cartContext";

export default function NavBar() {
    const { cartItemCount } = useCart();

    return (
        <nav className="navbar bg-body-tertiary bg-dark" data-bs-theme="dark">
            <div className="container-fluid">
                <Link className="navbar-brand" href="/">
                    <img src="https://gmedia.playstation.com/is/image/SIEPDC/dualsense-controller-product-thumbnail-01-en-14sep21?$facebook$" alt="Logo" width="30" height="24"
                         className="d-inline-block align-text-top"/>
                    My Game Shop
                </Link>
                <Link className="navbar-brand text-white" href="/cart">
                    {/*<img src="https://cdn-icons-png.flaticon.com/512/1170/1170678.png" alt="Cart" width="30" height="24"*/}
                    {/*     className="d-inline-block align-text-top"/>*/}
                    <i className="bi bi-cart text-white"></i>
                    Cart
                    {cartItemCount > 0 && (
                        <span
                            className="position-absolutex top-0 start-100 translate-middle badge rounded-pill bg-danger">
                            {cartItemCount}
                        </span>
                    )}
                </Link>

                {/*<Link className="navbar-brand" href="/game">*/}
                {/*    <img src="https://gmedia.playstation.com/is/image/SIEPDC/dualsense-controller-product-thumbnail-01-en-14sep21?$facebook$" alt="Logo" width="30" height="24"*/}
                {/*         className="d-inline-block align-text-top"/>*/}
                {/*    My Game Shop*/}
                {/*</Link>*/}
            </div>
        </nav>

    );
}