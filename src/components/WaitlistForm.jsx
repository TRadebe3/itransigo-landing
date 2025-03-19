import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { collection, addDoc } from 'firebase/firestore';
import { db } from '../firebase';

const WaitlistForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState('');
  
  const { register, handleSubmit, formState: { errors }, reset } = useForm();
  
  const onSubmit = async (data) => {
    setIsSubmitting(true);
    setError('');
    
    try {
      await addDoc(collection(db, "waitlist"), {
        ...data,
        createdAt: new Date()
      });
      
      setIsSuccess(true);
      reset();
    } catch (err) {
      console.error("Error adding to waitlist: ", err);
      setError('Something went wrong. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };
  
  return (
    <section id="waitlist" className="py-16 bg-gray-50">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-900">Join Our Waitlist</h2>
          <p className="mt-4 text-xl text-gray-600">Be among the first to experience the future of ride-hailing in Cape Town.</p>
        </div>
        
        {isSuccess ? (
          <div className="bg-green-50 border border-green-200 text-green-700 p-4 rounded-md">
            <p className="text-center font-medium">Thank you for joining our waitlist! We'll notify you when we launch.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit(onSubmit)} className="bg-white p-8 rounded-lg shadow-md">
            {error && (
              <div className="mb-4 bg-red-50 border border-red-200 text-red-700 p-4 rounded-md">
                <p>{error}</p>
              </div>
            )}
            
            <div className="mb-4">
              <label htmlFor="name" className="block text-gray-700 font-medium mb-2">Full Name</label>
              <input
                type="text"
                id="name"
                className={`w-full px-4 py-2 border rounded-md ${errors.name ? 'border-red-500' : 'border-gray-300'}`}
                placeholder="Enter your full name"
                {...register("name", { required: "Name is required" })}
              />
              {errors.name && <p className="mt-1 text-red-500 text-sm">{errors.name.message}</p>}
            </div>
            
            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-700 font-medium mb-2">Email Address</label>
              <input
                type="email"
                id="email"
                className={`w-full px-4 py-2 border rounded-md ${errors.email ? 'border-red-500' : 'border-gray-300'}`}
                placeholder="Enter your email address"
                {...register("email", { 
                  required: "Email is required",
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: "Invalid email address"
                  }
                })}
              />
              {errors.email && <p className="mt-1 text-red-500 text-sm">{errors.email.message}</p>}
            </div>
            
            <div className="mb-4">
              <label htmlFor="phone" className="block text-gray-700 font-medium mb-2">Phone Number</label>
              <input
                type="tel"
                id="phone"
                className={`w-full px-4 py-2 border rounded-md ${errors.phone ? 'border-red-500' : 'border-gray-300'}`}
                placeholder="Enter your phone number (e.g., +27 XX XXX XXXX)"
                {...register("phone", { 
                  required: "Phone number is required",
                  pattern: {
                    value: /^(\+27|0)[6-8][0-9]{8}$/,
                    message: "Please enter a valid South African phone number"
                  }
                })}
              />
              {errors.phone && <p className="mt-1 text-red-500 text-sm">{errors.phone.message}</p>}
            </div>
            
            <button 
              type="submit" 
              disabled={isSubmitting}
              className={`w-full py-3 px-4 bg-[#3498DB] text-white font-semibold rounded-md hover:bg-[#2980B9] transition-colors ${isSubmitting ? 'opacity-75 cursor-not-allowed' : ''}`}
            >
              {isSubmitting ? 'Submitting...' : 'Join Waitlist'}
            </button>
          </form>
        )}
      </div>
    </section>
  );
};

export default WaitlistForm;
