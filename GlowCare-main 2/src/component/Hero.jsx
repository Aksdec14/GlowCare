import React from 'react';
import image from '../assets/images/4981311.jpg';
import { UserCheck, Heart, Layers, Sun } from 'lucide-react';

const Hero = () => {
  return (
    <div id="home" className="pt-16 md:pt-20 bg-white text-gray-800">
      <section>
        <div className="max-w-screen-xl px-4 py-8 mx-auto sm:px-6 lg:px-8 lg:py-16 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Text Section */}
          <div className="lg:col-span-7 text-center lg:text-left space-y-6">
            <h1 className="text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl">
              Discover what your skin truly needs.
            </h1>
            <p className="text-gray-600 text-base md:text-lg lg:text-xl max-w-2xl mx-auto lg:mx-0">
              Personalized insights and care, powered by science and designed for you.
            </p>

            {/* Feature List with Icons */}
            <div className="mt-6 space-y-3">
              <div className="flex items-center gap-3">
                <UserCheck className="w-6 h-6 text-blue-600" />
                <span className="text-gray-700 text-lg">Personalized recommendations for your skin type</span>
              </div>
              <div className="flex items-center gap-3">
                <Heart className="w-6 h-6 text-pink-500" />
                <span className="text-gray-700 text-lg">Trusted advice from dermatology experts</span>
              </div>
              <div className="flex items-center gap-3">
                <Layers className="w-6 h-6 text-purple-500" />
                <span className="text-gray-700 text-lg">Step-by-step skincare routines</span>
              </div>
              <div className="flex items-center gap-3">
                <Sun className="w-6 h-6 text-yellow-400" />
                <span className="text-gray-700 text-lg">Daily protection and preventive care tips</span>
              </div>
            </div>

            <div className="mt-6">
              <a
                href="#chat"
                className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-white rounded-lg bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:ring-blue-300 transition"
              >
                Get started
                <svg
                  className="w-5 h-5 ml-2 -mr-1"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </a>
            </div>
          </div>

          {/* Image Section */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <img
              src={image}
              alt="mockup"
              className="w-full h-auto max-w-md sm:max-w-lg lg:max-w-full"
            />
          </div>
          
        </div>
      </section>
    </div>
  );
};

export default Hero;
