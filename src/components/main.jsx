import transition from '../utils/transition'
import { FaFacebook, FaLinkedin, FaGithub } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
function Main() {
    return (
        <div className="lg:shadow-md lg:w-11/12 lg:mx-auto md:shadow-md md:w-11/12 md:mx-auto w-full">
          <div className="lg:flex items-center p-8 mt-12">
            {/* First Section */}
            <div className=" p-6 lg:mb-6 md:mb-6 w-full h-full md:h-[50vh] lg:h-[50vh] flex flex-col items-center">
              <div className="img-wrapper mb-4">
                  <motion.img
                  initial={{opacity:0}}
                  animate={{opacity:1}}
                  transition={{duration:.5}}
                  className="rounded-t-full mr-4"
                  src="src/assets/photo_2023-08-30_16-40-54.jpg"
                  alt="Profile"
                />
              </div>
              <div className="flex flex-col items-center w-full gap-5 h-full mt-4">
                <div>
                  <h2 className="text-xl font-semibold text-center">Habiba Yasser</h2>
                  <p className="text-gray-600">Mobile App Developer</p>
                </div>
                <Link to={'/contact'} className="justify-center flex w-6/12 btn border border-gray-700 text-gray-700 px-4 py-2 rounded mr-4">
                 Send Email
                </Link>
                <div className="flex justify-around w-6/12">
                <a href="https://www.facebook.com/habibaa.yasser.1?mibextid=LQQJ4d" className="mr-2">
                <FaFacebook className="text-3xl text-gray-600 hover:text-blue-500" />
                </a>
                <a href="https://www.linkedin.com/in/habiba-yasser-21b995166" className="mr-2">
                <FaLinkedin className="text-3xl text-gray-600 hover:text-blue-500" />
                </a>
                <a href="https://github.com/Habiba554" className="mr-2">
                <FaGithub className="text-3xl text-gray-600 hover:text-blue-500" />
                </a>
                </div>
              </div>
            </div>
    
            {/* Second Section */}
            <div className='p-6 lg:mb-6 md:mb-6 w-full lg:h-[55vh]'>
            <div className=" p-6 w-full h-full flex flex-col justify-between">
              <div className="mb-4 hidden lg:block md:block">
                <h2 className="text-5xl font-semibold mb-10">About Me</h2>
                <p className='text-xl'>
                I'm a passionate and dedicated software developer with a strong foundation in mobile and web technologies. With a focus on mobile app development, I have experience building applications using Flutter, a powerful framework that allows me to create elegant and efficient cross-platform solutions.
                </p>
              </div>
              <div className="flex w-11/12 justify-around">
                  <a
                      href={'src/assets/Copy6-Habiba_yasser_resume 1.pdf'}
                      download={'resume 1.pdf'}
                      className="btn border border-gray-700 text-gray-700 px-4 py-2 rounded"
                    >
                  Resume
                </a>
                < Link to={'/portfolio'} className="btn border border-gray-700 text-gray-700 px-4 py-2 rounded">
                  Portfolio
                </Link>
              </div>
            </div>
            </div>
          </div>
        </div>
      );
  }
  
  export default transition(Main) ;
  