import React, { useState } from "react";

// import react slick
import Slider from "react-slick";
import Image from "next/image";
import Stars from "../public/assets/Icon/stars.svg";
import ArrowBack from "../public/assets/Icon/eva_arrow-back-fill.svg";
import ArrowNext from "../public/assets/Icon/eva_arrow-next-fill.svg";

const Testimoni = ({
  listTestimoni = [
    {
      name: "Isabel Antunes",
      image: "https://api.multiavatar.com/Binx.png",
      city: "Luanda",
      country: "Angola",
      rating: 5,
      testimonial:
        "Trabalhar com a Starting Point foi uma experiência incrível. Eles desenvolveram o nosso aplicativo móvel e superaram todas as nossas expectativas. Altamente recomendado!",
    },
    {
      name: "Carlos Mendonça",
      image: "https://api.multiavatar.com/Binx.png",
      city: "Benguela",
      country: "Angola",
      rating: 4.5,
      testimonial:
        "O trabalho da Starting Point no nosso site trouxe um aumento significativo no tráfego e nas conversões. Estamos muito satisfeitos com os resultados!",
    },
    {
      name: "Sofia Silva",
      image: "https://api.multiavatar.com/Binx.png",
      city: "Huambo",
      country: "Angola",
      rating: 5,
      testimonial:
        "A equipe de marketing da Starting Point ajudou nossa marca a se destacar nas mídias sociais. Eles são criativos, dedicados e altamente profissionais.",
    },
    {
      name: "José Pereira",
      image: "https://api.multiavatar.com/Binx.png",
      city: "Lobito",
      country: "Angola",
      rating: 4.8,
      testimonial:
        "Os desenvolvedores da Starting Point criaram um aplicativo que se tornou a espinha dorsal do nosso negócio. Eles são especialistas em tecnologia móvel.",
    },
    {
      name: "Marta Santos",
      image: "https://api.multiavatar.com/Binx.png",
      city: "Namibe",
      country: "Angola",
      rating: 4.7,
      testimonial:
        "Nossa parceria com a Starting Point nos deu um site atraente e funcional que reflete nossa marca. Eles são verdadeiros profissionais do design web.",
    },
    {
      name: "Pedro Fernandes",
      image: "https://api.multiavatar.com/Binx.png",
      city: "Malanje",
      country: "Angola",
      rating: 5,
      testimonial:
        "A Starting Point é uma equipe altamente competente e dedicada. Eles sempre entregam resultados excelentes, independentemente do desafio.",
    },
  ],
}) => {
  const settings = {
    dots: true,
    customPaging: function (i) {
      return (
        <a className="">
          <span className="mx-2 rounded-l-full rounded-r-full h-4 w-4 block cursor-pointer transition-all "></span>
        </a>
      );
    },
    dotsClass: "slick-dots w-max absolute mt-20  ",
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 2,
    responsive: [
      {
        breakpoint: 770,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  const [sliderRef, setSliderRef] = useState(null);

  return (
    <>
      <Slider
        {...settings}
        arrows={false}
        ref={setSliderRef}
        className="flex items-stretch justify-items-stretch"
      >
        {listTestimoni.map((listTestimonis, index) => (
          <div className="px-3 flex items-stretch" key={index}>
            <div className="border-2 border-gray-500 hover:border-blue-500 transition-all rounded-lg p-8 flex flex-col">
              <div className="flex flex-col xl:flex-row w-full items-stretch xl:items-center">
                <div className="flex order-2 xl:order-1">
                  <Image
                    src={listTestimonis.image}
                    height={50}
                    width={50}
                    alt="Icon People"
                  />
                  <div className="flex flex-col ml-5 text-left">
                    <p className="text-lg text-black-600 capitalize">
                      {listTestimonis.name}
                    </p>
                    <p className="text-sm text-black-500 capitalize">
                      {listTestimonis.city},{listTestimonis.country}
                    </p>
                  </div>
                </div>
                <div className="flex flex-none items-center ml-auto order-1 xl:order-2">
                  <p className="text-sm">{listTestimonis.rating}</p>
                  <span className="flex ml-4">
                    <Stars className="h-4 w-4" />
                  </span>
                </div>
              </div>
              <p className="mt-5 text-left">“{listTestimonis.testimonial}”.</p>
            </div>
          </div>
        ))}
      </Slider>
      <div className="flex w-full items-center justify-end">
        <div className="flex flex-none justify-between w-auto mt-14">
          <div
            className="mx-4 flex items-center justify-center h-14 w-14 rounded-full bg-white border-blue-500 border hover:bg-blue-500 hover:text-white-500 transition-all text-blue-500 cursor-pointer"
            onClick={sliderRef?.slickPrev}
          >
            <ArrowBack className="h-6 w-6 " />
          </div>
          <div
            className="flex items-center justify-center h-14 w-14 rounded-full bg-white border-blue-500 border hover:bg-blue-500 hover:text-white-500 transition-all text-blue-500 cursor-pointer"
            onClick={sliderRef?.slickNext}
          >
            <ArrowNext className="h-6 w-6" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Testimoni;
