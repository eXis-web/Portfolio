import React from "react";
import ClothingShop from "../assets/portfolio/ClothingShop.jpg";
import Cinemania from "../assets/portfolio/Cinemania.jpg";
import AwesomeCube from "../assets/portfolio/AwesomeCube.jpg";
import calculator from "../assets/portfolio/calculator.jpg";
import PhoneBook from "../assets/portfolio/PhoneBook.jpg";
import imageFinder from "../assets/portfolio/imageFinder.jpg";

const Portfolio = () => {
  // Array containing portfolio items with their details
  const portfolios = [
    {
      id: 1,
      src: ClothingShop,
      link: 'https://cloth1ngshop.netlify.app/',
      repo: 'https://github.com/eXis-web/Clothing-Shop'
    },
    {
      id: 2,
      src: Cinemania,
      link: 'https://exis-web.github.io/Cinemania/',
      repo: 'https://github.com/eXis-web/Cinemania'
    },
    {
      id: 3,
      src: AwesomeCube,
      link: 'https://awesome-cubes.netlify.app',
      repo: 'https://github.com/eXis-web/CubeShop'
    },
    {
      id: 4,
      src: imageFinder,
      link: 'https://exis-web.github.io/goit-js-hw-11/',
      repo: 'https://github.com/eXis-web/goit-js-hw-11'
    },
    {
      id: 5,
      src: PhoneBook,
      link: 'https://exis-web.github.io/react-hw-phonebook/',
      repo: 'https://github.com/eXis-web/react-hw-phonebook'
    },
    {
      id: 6,
      src: calculator,
      link: 'https://exis-web.github.io/Calculator/',
      repo: 'https://github.com/eXis-web/Calculator'
    },
  ];

  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen portfolio"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          {/* Portfolio section title */}
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Portfolio
          </p>
          {/* Portfolio section description */}
          <p className="py-6">Check out some of my work right here</p>
        </div>

        {/* Portfolio items grid */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {/* Map through portfolio items and display each */}
          {portfolios.map(({ id, src, link, repo }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              {/* Portfolio item image */}
              <img
                src={src}
                alt="projects"
                className="rounded-md duration-200 hover:scale-105"
              />
              {/* Buttons to view demo and GitHub repository */}
              <div className="flex items-center justify-center">
                {/* Button to view demo */}
                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105" onClick={ () => window.open(link, '_blank')}>
                  Demo
                </button>
                {/* Button to view GitHub repository */}
                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105" onClick={ () => window.open(repo, '_blank')}>
                  GitHub
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio

//here is the code for the portfolio