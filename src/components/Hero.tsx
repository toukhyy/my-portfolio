import { Link } from 'react-router-dom';
import { FiArrowRight } from 'react-icons/fi';

const Hero = () => {
  return (
    <section className="bg-animatedwavesCurvedLight dark:bg-animatedwavesCurvedDark bg-no-repeat bg-bottom">
      <div className="mx-auto max-w-5xl h-screen flex flex-col items-center justify-center">
        <div className="px-4 mx-2 flex flex-col items-center space-y-5 md:space-y-6 lg:space-y-8">
          {/* text */}
          <div className="text-2xl md:text-4xl lg:text-5xl text-center md:font-semibold ">
            <p className="md:mb-1">
              Hi, I'm{' '}
              <span className="font-semibold md:font-bold text-transparent bg-gradient-to-br from-red-600 to-orange-500 bg-clip-text">
                Abdelrahman El Toukhy.
              </span>
            </p>
            <p className="text-sm font-normal md:font-normal md:text-xl lg:text-2xl">
              Full Stack Web Developer.
            </p>
          </div>
          {/* View my work */}
          <Link
            to="#"
            className="text-gray-600 border-2 border-gray-500 py-1 md:py-1.5 lg:py-2 rounded-md px-3 md:px-6 lg:px-10 hover:border-orange-500 shadow-md hover:text-orange-500 duration-200 dark:border-white dark:hover:border-orange-500 md:font-semibold group dark:text-white dark:hover:text-orange-500"
          >
            <div className="flex items-end justify-center space-x-1 md:space-x-2 lg:space-x-3">
              <span className="text-sm md:text-base lg:text-lg">
                View my work
              </span>
              <FiArrowRight className="h-4 w-4 md:h-5 md:w-5 lg:h-7 lg:w-7 group-hover:rotate-90 transition-transform duration-300 text-gray-500 dark:text-white group-hover:text-orange-500" />
            </div>
          </Link>

          {/* <div className="flex space-x-4 font-semibold">
            <Link
              to="#"
              className="border-2 border-darkGrey-500 text-center py-1.5 rounded-full w-28  hover:border-orange-500 shadow-md hover:text-orange-500 duration-200 dark:border-white dark:hover:border-orange-500 "
            >
              My work
            </Link>

            <Link
              to="/contact"
              className="border-2 border-orange-300 text-center py-1.5 rounded-full w-28 
            bg-orange-600 hover:border-orange-900  duration-200 dark:border-white dark:hover:border-orange-500 shadow-md dark:hover:bg-orange-100 dark:hover:text-orange-500 text-orange-100 hover:text-orange-900"
            >
              Hire me
            </Link>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default Hero;