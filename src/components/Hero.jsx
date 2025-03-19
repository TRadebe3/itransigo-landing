import React from 'react';

const Hero = () => {
  return (
    <div className="bg-gradient-to-r from-[#3498DB] to-[#2980B9] py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              The Future of Ride-Hailing in Cape Town
            </h1>
            <p className="text-xl text-white mb-6">
              Experience convenient, safe, and affordable transportation with iTransiGo.
            </p>
            <a 
              href="#waitlist" 
              className="px-6 py-3 bg-[#F39C12] text-white text-lg font-semibold rounded-md hover:bg-[#E67E22] transition-colors"
            >
              Join Our Waitlist
            </a>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <div className="w-full max-w-md bg-white p-6 rounded-lg shadow-lg">
              <div className="text-center mb-4">
                <div className="w-20 h-20 bg-[#3498DB] rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v1m6 11h2m-6 0h-2m0 0H8m10 0h4m-9-3h.01M9 12h.01" />
                  </svg>
                </div>
                <h2 className="text-2xl font-bold text-gray-800">Download Soon</h2>
                <p className="text-gray-600">Be the first to know when we launch!</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
