import { IconBrandTwitterFilled, IconPhoneFilled } from "@tabler/icons-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="py-4 text-sm border-t ">
      <div className="container px-6 mx-auto">
        <div className="flex justify-between">
          <Link
            href="https://www.bestbrainexams.com/"
            target="_blank"
            className="flex items-center gap-2 text-xl "
          >
            <Image src="/logo.svg" alt="logo" width={24} height={24} />
            <h1 className="hidden sm:flex">Bestbrain</h1>
          </Link>
          <nav
            aria-labelledby="footer-social-links"
            className="col-span-2 text-right md:col-span-4 lg:col-span-6"
          >
            <h2 className="sr-only" id="footer-social-links">
              Social Media Links
            </h2>
            <ul className="flex items-center justify-end gap-4">
              <li>
                <Link
                  href="https://web.facebook.com/bestbrain.examinationskonsortium.77"
                  target="_blank"
                  className="transition-colors duration-300 hover:text-indigo-500 "
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 48 48"
                    height="16"
                    width="16"
                    className="w-4 h-4 shrink-0"
                    role="graphics-symbol"
                  >
                    <title id="title-tb01">Facebook</title>
                    <desc id="desc-tb01">A facebook logo</desc>
                    <path
                      fill="currentColor"
                      fillRule="evenodd"
                      d="M37.2491 3.30238C37.0498 2.18649 36.0513 1.49746 34.9878 1.50395C32.2606 1.5206 29.7927 1.60328 27.6333 1.96988C25.4705 2.33708 23.584 2.99414 22.038 4.18283C18.9929 6.52415 17.4377 10.7872 17.3724 18.3217H11.9552C10.9254 18.3217 9.94522 18.9739 9.74313 20.0674C9.51312 21.312 9.33088 23.311 9.75643 25.8014C9.95527 26.9651 10.9939 27.7324 12.1233 27.7324H17.3703V44.3867C17.3703 45.2169 17.8349 46.0595 18.7834 46.2403C19.5015 46.3773 20.6304 46.5002 22.375 46.5002C24.1168 46.5002 25.347 46.3777 26.1718 46.2437C27.2507 46.0684 27.8777 45.1191 27.8777 44.1186V27.7324H34.9316C36.0256 27.7324 37.0562 27.009 37.2608 25.8665C37.6736 23.5618 37.4742 21.4753 37.2437 20.1563C37.0465 19.0284 36.0444 18.3217 34.9653 18.3217H27.8795C27.8917 16.7111 27.9661 15.4564 28.1447 14.4728C28.341 13.3921 28.6547 12.6875 29.1044 12.2048C29.5502 11.7263 30.1817 11.4104 31.1284 11.2121C32.0832 11.0121 33.3126 10.9408 34.9123 10.9193C36.0128 10.9045 37.0511 10.1718 37.2541 9.01765C37.6718 6.64193 37.4794 4.59202 37.2491 3.30238Z"
                      clipRule="evenodd"
                    />
                  </svg>
                </Link>
              </li>
              <li>
                <Link
                  href="tel:+233249273049"
                  target="_blank"
                  className="transition-colors duration-300 hover:text-emerald-600"
                >
                  <IconPhoneFilled className="h-4 w-4 " />
                </Link>
              </li>
              <li>
                <a
                  href="https://twitter.com/bestbrainghana"
                  target="_blank"
                  className="transition-colors duration-300 hover:text-blue-500"
                >
                  <IconBrandTwitterFilled className="h-4 w-4 " />
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
