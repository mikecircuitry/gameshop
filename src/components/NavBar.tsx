"use client";
import Link from "next/link";
import { useCart } from "@/contexts/cartContext";

export default function NavBar() {
  const { cartItemCount } = useCart();

  return (
    <nav className="border-gray-200 bg-white dark:bg-gray-900">
      <div className="mx-auto flex max-w-screen-xl flex-wrap items-center justify-between p-4">
        <Link
          href="/"
          className="flex items-center space-x-3 rtl:space-x-reverse"
        >
          <img
            src="https://gmedia.playstation.com/is/image/SIEPDC/dualsense-controller-product-thumbnail-01-en-14sep21?$facebook$"
            className="h-8"
            alt="Games Are Us"
          />
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
            Games Are Us
          </span>
        </Link>

        <div className="hiddenx w-full md:block md:w-auto" id="navbar-default">
          <ul className="mt-4 flex flex-col rounded-lg border border-gray-100 bg-gray-50 p-4 font-medium md:mt-0 md:flex-row md:space-x-8 md:border-0 md:bg-white md:p-0 rtl:space-x-reverse dark:border-gray-700 dark:bg-gray-800 md:dark:bg-gray-900">
            <li>
              <a
                href="/cart"
                className="block rounded-sm px-3 py-2 text-gray-900 hover:bg-gray-100 md:border-0 md:p-0 md:hover:bg-transparent md:hover:text-blue-700 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent md:dark:hover:text-blue-500"
              >
                Cart ({cartItemCount}) items
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
