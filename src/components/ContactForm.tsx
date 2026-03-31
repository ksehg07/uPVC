'use client';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { motion } from 'framer-motion';

export default function ContactForm() {
  const { register, handleSubmit, reset } = useForm();
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const onSubmit = async (data: any) => {
    setStatus('loading');
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      
      if (response.ok) {
        setStatus('success');
        reset();
      } else {
        setStatus('error');
      }
    } catch (error) {
      setStatus('error');
    }
  };

  return (
    <section className="py-20 px-4 flex justify-center">
      <div className="w-full max-w-2xl bg-white border border-sky-200 p-8 rounded-3xl shadow-lg">
        <h2 className="text-3xl font-bold mb-6 text-center text-gray-900">Get Your <span className="text-sky-600">Quote</span></h2>
        
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <input 
              {...register('name', { required: true })} 
              placeholder="Your Name"
              className="w-full bg-gray-50 border border-gray-200 rounded-lg p-4 focus:border-sky-600 focus:outline-none transition text-gray-900"
            />
            <input 
              {...register('phone', { required: true })} 
              placeholder="Phone Number"
              className="w-full bg-gray-50 border border-gray-200 rounded-lg p-4 focus:border-sky-600 focus:outline-none transition text-gray-900"
            />
          </div>
          <input 
            {...register('email', { required: true })} 
            type="email" 
            placeholder="Email Address"
            className="w-full bg-gray-50 border border-gray-200 rounded-lg p-4 focus:border-sky-600 focus:outline-none transition text-gray-900"
          />
          <textarea 
            {...register('message', { required: true })} 
            rows={4} 
            placeholder="Tell us about your requirement (Dimensions, Type, etc.)"
            className="w-full bg-gray-50 border border-gray-200 rounded-lg p-4 focus:border-sky-600 focus:outline-none transition text-gray-900"
          ></textarea>
          
          <motion.button 
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            disabled={status === 'loading'}
            className="w-full bg-sky-600 text-white font-bold py-4 rounded-lg hover:bg-sky-700 transition disabled:opacity-50"
          >
            {status === 'loading' ? 'Sending...' : 'Send Inquiry'}
          </motion.button>
          
          {status === 'success' && <p className="text-sky-600 text-center">Message sent successfully! Check your Mail & WhatsApp.</p>}
          {status === 'error' && <p className="text-red-600 text-center">Something went wrong. Please call us directly.</p>}
        </form>
      </div>
    </section>
  );
}