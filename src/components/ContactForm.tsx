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
      <div className="w-full max-w-2xl bg-zinc-900 border border-green-900/50 p-8 rounded-3xl shadow-2xl">
        <h2 className="text-3xl font-bold mb-6 text-center">Get Your <span className="text-green-500">Quote</span></h2>
        
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <input 
              {...register('name', { required: true })} 
              placeholder="Your Name"
              className="w-full bg-black/50 border border-white/10 rounded-lg p-4 focus:border-green-500 focus:outline-none transition"
            />
            <input 
              {...register('phone', { required: true })} 
              placeholder="Phone Number"
              className="w-full bg-black/50 border border-white/10 rounded-lg p-4 focus:border-green-500 focus:outline-none transition"
            />
          </div>
          <input 
            {...register('email', { required: true })} 
            type="email" 
            placeholder="Email Address"
            className="w-full bg-black/50 border border-white/10 rounded-lg p-4 focus:border-green-500 focus:outline-none transition"
          />
          <textarea 
            {...register('message', { required: true })} 
            rows={4} 
            placeholder="Tell us about your requirement (Dimensions, Type, etc.)"
            className="w-full bg-black/50 border border-white/10 rounded-lg p-4 focus:border-green-500 focus:outline-none transition"
          ></textarea>
          
          <motion.button 
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            disabled={status === 'loading'}
            className="w-full bg-green-600 text-black font-bold py-4 rounded-lg hover:bg-green-500 transition disabled:opacity-50"
          >
            {status === 'loading' ? 'Sending...' : 'Send Inquiry'}
          </motion.button>
          
          {status === 'success' && <p className="text-green-400 text-center">Message sent successfully! Check your WhatsApp.</p>}
          {status === 'error' && <p className="text-red-400 text-center">Something went wrong. Please call us directly.</p>}
        </form>
      </div>
    </section>
  );
}