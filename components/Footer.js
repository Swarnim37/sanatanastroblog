import Link from "next/link";
import Image from "next/image";
import { AiFillFacebook, AiFillTwitterSquare } from "react-icons/ai";

const Footer = () => {
  return (
    <div>
      <header className="text-black-600 body-font bg-orange-500 sticky-top shadow-xl top-0 sticky overflow-hidden z-10 font-abc mt-16 ">
        <div className=" container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center cursor-pointer ">
          <Link href="/">
            <div className="logo ">
              <Image
                width={200}
                height={40}
                src="/img/logosvg.svg"
                alt="logo"
              />
              <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0 ">
                <span className="ml-3 text-xl">Sanatan Astrology</span>
              </a>
            </div>
          </Link>

          <>
            <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center font-bold ">
              <Link href="/">
                <a className="mr-5 hover:text-gray-900">Home</a>
              </Link>
              <Link href="https://www.sanatanved.com/">
                <a target="_blank" className="mr-5 hover:text-gray-900">
                  Main-Website
                </a>
              </Link>
              <Link href="https://www.sanatanved.com/services">
                <a target="_blank" className="mr-5 hover:text-gray-900">
                  Services
                </a>
              </Link>
              <Link href="https://www.sanatanved.com/courses">
                <a target="_blank" className="mr-5 hover:text-gray-900">
                  Courses
                </a>
              </Link>

              <Link href="https://www.sanatanved.com/contact">
                <a target="_blank" className="mr-5 hover:text-gray-900">
                  Contact
                </a>
              </Link>
            </nav>
          </>
        </div>

        <div className="bg-orange-500 mt-0 ">
          <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
            <p className="text-gray-900 text-sm text-center sm:text-left">
              © 2022 Sanatan Astrology
            </p>
            <span className="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start">
              <Link href="/cookiepolicy">
                <a className="text-gray-1000 mr-6">Cookies Policy</a>
              </Link>
              <Link href="https://www.facebook.com/Sanatan-Vedic-Astrology-106720835429910">
                <a className="text-gray-900 mt-1">
                  <AiFillFacebook />
                </a>
              </Link>
              <Link href="https://twitter.com/SanatanAstro3">
                <a className="ml-3 text-gray-900 mt-1 ">
                  <AiFillTwitterSquare />
                </a>
              </Link>
            </span>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Footer;
