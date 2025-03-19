import React from 'react';

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900">How iTransiGo Works</h2>
          <p className="mt-4 text-xl text-gray-600">Getting a ride is easier than ever with our simple 3-step process.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Step 1 */}
          <div className="text-center">
            <div className="w-16 h-16 bg-[#3498DB] rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl font-bold text-white">1</span>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Download the App</h3>
            <p className="text-gray-600">Get the iTransiGo app from the App Store or Google Play Store.</p>
          </div>

          {/* Step 2 */}
          <div className="text-center">
            <div className="w-16 h-16 bg-[#3498DB] rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl font-bold text-white">2</span>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Request a Ride</h3>
            <p className="text-gray-600">Enter your destination and choose your ride option.</p>
          </div>

          {/* Step 3 */}
          <div className="text-center">
            <div className="w-16 h-16 bg-[#3498DB] rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl font-bold text-white">3</span>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Enjoy Your Journey</h3>
            <p className="text-gray-600">Track your driver in real-time and pay seamlessly through the app.</p>
          </div>
        </div>

        <div className="mt-12 text-center">
          <a href="#waitlist" className="px-6 py-3 bg-[#3498DB] text-white font-semibold rounded-md hover:bg-[#2980B9] transition-colors">
            Join the Waitlist Now
          </a>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
