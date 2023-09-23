import React from "react";
import Facebook from "../../public/assets/Icon/facebook.svg";
import Twitter from "../../public/assets/Icon/twitter.svg";
import Instagram from "../../public/assets/Icon/instagram.svg";
const Footer = () => {
  return (
    <div className="bg-white-300 pt-44 pb-24">
      <div className="max-w-screen-xl w-full mx-auto px-6 sm:px-8 lg:px-16 grid grid-rows-6 sm:grid-rows-1 grid-flow-row sm:grid-flow-col grid-cols-3 sm:grid-cols-12 gap-4">
        <div className="row-span-2 sm:col-span-4 col-start-1 col-end-4 sm:col-end-5 flex flex-col items-start ">
          <img src="/assets/logo.svg" className="h-12  w-auto mb-6" />

          <p className="mb-4 text-justify">
            A Starting Point é uma empresa especializada em marketing digital,
            desenvolvimento de aplicativos e websites de alta performance.
          </p>
          <div className="flex w-full mt-2 mb-8 -mx-2">
            <a href={"http://www.facebook.com/startingpoint"} target="_blank">
              <div className="mx-2 cursor-pointer bg-white-500 rounded-full items-center justify-center flex p-2 shadow-md">
                <Facebook className="h-6 w-6" />
              </div>
            </a>
            <a href={"http://www.twitter.com/startingpoint"} target="_blank">
              <div className="mx-2 cursor-pointer bg-white-500 rounded-full items-center justify-center flex p-2 shadow-md">
                <Twitter className="h-6 w-6" />
              </div>
            </a>
            <a href={"http://www.instagram.com/startingpoint"} target="_blank">
              <div className="mx-2 cursor-pointer bg-white-500 rounded-full items-center justify-center flex p-2 shadow-md">
                <Instagram className="h-6 w-6" />
              </div>
            </a>
            <a href={"http://www.linkedin.com/startingpoint"} target="_blank">
              <div className="mx-2 cursor-pointer bg-white-500 rounded-full items-center justify-center flex p-2 shadow-md">
                <Instagram className="h-6 w-6" />
              </div>
            </a>
          </div>
          <p className="text-gray-400">
            ©{new Date().getFullYear()} - Starting Point Technology Solutions -
            Services, LDA
          </p>
        </div>
        <div className=" row-span-2 sm:col-span-2 sm:col-start-9 sm:col-end-11 flex flex-col">
          <p className="text-black-600 mb-4 font-medium text-lg">
            Projectos Originais
          </p>
          <ul className="text-black-500 ">
            <li className="my-2 hover:text-blue-500 cursor-pointer transition-all">
              <a href={"#"} target="_blank">
                TáPago?
              </a>
            </li>
            <li className="my-2 hover:text-blue-500 cursor-pointer transition-all">
              <a href={"#"} target="_blank">
                Convite Digital
              </a>
            </li>
            <li className="my-2 hover:text-blue-500 cursor-pointer transition-all">
              <a href={"#"} target="_blank">
                Karona
              </a>
            </li>
            <li className="my-2 hover:text-blue-500 cursor-pointer transition-all">
              <a href={"https://quino.netlify.app"} target="_blank">
                Quino
              </a>
            </li>
            <li className="my-2 hover:text-blue-500 cursor-pointer transition-all">
              <a href={"#"} target="_blank">
                ReporterX
              </a>
            </li>
            <li className="my-2 hover:text-blue-500 cursor-pointer transition-all">
              <a href={"#"} target="_blank">
                Interview
              </a>
            </li>
          </ul>
        </div>

        <div className="row-span-2 sm:col-span-2 sm:col-start-11 sm:col-end-13 flex flex-col">
          <p className="text-black-600 mb-4 font-medium text-lg">
            Principais Parceiros
          </p>
          <ul className="text-black-500">
            <li className="my-2 hover:text-blue-500 cursor-pointer transition-all">
              SafeTech{" "}
            </li>
            <li className="my-2 hover:text-blue-500 cursor-pointer transition-all">
              Beehive{" "}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
