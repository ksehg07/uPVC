"use client";
import { Mail, Phone, MapPin, Clock } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Contact() {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      <Navbar />

      {/* Header */}
      <section className="pt-32 pb-12 px-6 bg-green-50">
        <div className="max-w-4xl mx-auto text-center space-y-4">
          <h1 className="text-5xl font-bold tracking-tight">
            Get in <span className="text-green-600">Touch</span>
          </h1>
          <p className="text-gray-600 text-lg">
            Have a project in mind? Visit our experience centers or drop us a
            message.
          </p>
        </div>
      </section>

      <section className="py-20 px-6 md:px-20 max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 lg:gap-24">
        {/* Contact Information Column */}
        <div className="space-y-12">
          {/* Address 1: Corporate Office */}
          <div className="flex gap-4 items-start p-6 rounded-2xl border border-gray-100 shadow-lg bg-white">
            <div className="p-3 bg-green-100 text-green-700 rounded-full shrink-0">
              <MapPin size={24} />
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2">Corporate Office</h3>
              <p className="text-gray-600 leading-relaxed">
                A-12 manak vihar extension Near amit nursing home <br />
                New Delhi, Delhi <br />
                India
              </p>
            </div>
          </div>

          {/* Address 2: Operations Unit */}
          <div className="flex gap-4 items-start p-6 rounded-2xl border border-gray-100 shadow-lg bg-white">
            <div className="p-3 bg-green-100 text-green-700 rounded-full shrink-0">
              <MapPin size={24} />
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2">Operations Unit</h3>
              <p className="text-gray-600 leading-relaxed">
                Killa no 19//1/2/1, 19//1/2/2 <br />
                Jatheri, Rai, Sonipat <br />
                Haryana - 131029
              </p>
            </div>
          </div>

          {/* Contact Details - CHANGED to grid-cols-1 for full width */}
          <div className="grid grid-cols-1 gap-6">
            <div className="p-6 rounded-2xl bg-gray-50 border border-gray-100">
              <Phone className="text-green-600 mb-4" size={24} />
              <h3 className="font-bold mb-2">Phone</h3>
              <p className="text-gray-600">
                +91 858 599 1836 <span className="mx-2 text-gray-400">/</span>{" "}
                +91 925 024 4126
              </p>
            </div>
            <div className="p-6 rounded-2xl bg-gray-50 border border-gray-100">
              <Mail className="text-green-600 mb-4" size={24} />
              <h3 className="font-bold mb-2">Email</h3>
              <p className="text-gray-600 font-medium break-all">
                accuratewindoorsolutions@gmail.com
              </p>
            </div>
          </div>
        </div>

        {/* Map Section */}
        <div className="h-[740px] w-full rounded-3xl overflow-hidden shadow-2xl border border-gray-200 bg-gray-100 relative">
          {/* Replace 'src' below with your actual Google Maps Embed Link */}
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3492.052010351552!2d77.07610397518974!3d28.926506070670914!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390daf454d9bc9f7%3A0xcb6472e8969818de!2sAccurate%20Windoor%20Solutions-uPVC%20Door%20Windows!5e0!3m2!1sen!2sin!4v1766348335350!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="grayscale hover:grayscale-0 transition duration-500"
          ></iframe>
          <div className="absolute bottom-4 left-4 bg-white px-4 py-2 rounded-lg shadow-lg text-xs font-bold text-gray-500">
            AWS Locations
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
