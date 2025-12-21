"use client";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import WindowAnimation from "@/components/WindowAnimation";
import Footer from "@/components/Footer";
import { Target, Lightbulb, Users, Trophy, Clock } from "lucide-react";

export default function About() {
  // Animation Variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, easeOut: true } },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const clients = [
    "Eldeco",
    "M&M",
    "Jindal Realty",
    "Bhutani Infra",
    "Ansal API",
    "Parker Infrastructure",
    "Madhuban",
    "DHBVN",
  ];

  return (
    <main className="min-h-screen bg-white text-gray-900 overflow-hidden">
      <Navbar />

      {/* Hero Section */}
      <section className="relative py-32 px-6 md:px-20 bg-green-900 text-white overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-[url('/window.svg')] opacity-5 bg-repeat rotate-12 scale-150"></div>

        <div className="max-w-7xl mx-auto relative z-10 grid md:grid-cols-2 gap-12 items-center">
          {/* Animated Text Block */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h1 className="text-6xl md:text-8xl font-bold tracking-tighter mb-6">
              DEFINE <br />
              <span className="text-green-400">YOUR VIEW.</span>
            </h1>
            <p className="text-xl text-green-100 max-w-lg leading-relaxed">
              Accurate Windoor Solutions (AWS) specializes in premium Aluminium
              and uPVC fenestration systems. We blend architectural precision
              with durability.
            </p>
          </motion.div>

          {/* Animated Visual Block */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="h-64 md:h-96 w-full bg-white/10 backdrop-blur-sm rounded-3xl border border-white/20 flex items-center justify-center relative overflow-hidden"
          >
            {/* Replaced Placeholder with Component */}
            <WindowAnimation />
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24 px-6 md:px-20 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="p-10 rounded-3xl bg-gray-50 hover:bg-green-50 transition duration-500 border border-gray-100 shadow-sm"
          >
            <div className="w-16 h-16 bg-green-100 text-green-600 rounded-2xl flex items-center justify-center mb-6">
              <Target size={32} />
            </div>
            <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              To deliver top-tier, energy-efficient doors and windows with
              exceptional service, fostering innovation, quality, and customer
              trust.
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            transition={{ delay: 0.2 }}
            className="p-10 rounded-3xl bg-gray-50 hover:bg-green-50 transition duration-500 border border-gray-100 shadow-sm"
          >
            <div className="w-16 h-16 bg-green-100 text-green-600 rounded-2xl flex items-center justify-center mb-6">
              <Lightbulb size={32} />
            </div>
            <h2 className="text-3xl font-bold mb-4">Our Vision</h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              To redefine living spaces with innovative, high-quality door and
              window solutions, ensuring durability and total customer
              satisfaction.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Client Strip (Ticker Style) */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="text-center mb-12">
          <h3 className="text-2xl font-bold">Trusted by Industry Leaders</h3>
        </div>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="flex flex-wrap justify-center gap-x-12 gap-y-8 max-w-7xl mx-auto px-6 opacity-70"
        >
          {clients.map((client, i) => (
            <motion.span
              key={i}
              variants={fadeInUp}
              className="text-xl md:text-3xl font-bold tracking-tight text-gray-500 hover:text-white transition duration-300 cursor-default"
            >
              {client}
            </motion.span>
          ))}
        </motion.div>
      </section>

      {/* Why Choose Us Highlight */}
      <section className="py-24 px-6 md:px-20 max-w-7xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-16">
          A<span className="text-green-600">WS</span> Advantage
        </h2>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          <motion.div
            variants={fadeInUp}
            className="space-y-4 p-4 rounded-2xl hover:bg-gray-50 transition"
          >
            <div className="mx-auto w-20 h-20 bg-green-100 rounded-full flex items-center justify-center text-green-600">
              <Trophy size={32} />
            </div>
            <h4 className="font-bold text-xl">Premium Quality</h4>
            <p className="text-sm text-gray-500">Partnered for Excellence</p>
          </motion.div>
          <motion.div
            variants={fadeInUp}
            className="space-y-4 p-4 rounded-2xl hover:bg-gray-50 transition"
          >
            <div className="mx-auto w-20 h-20 bg-green-100 rounded-full flex items-center justify-center text-green-600">
              <Users size={32} />
            </div>
            <h4 className="font-bold text-xl">Expert Support</h4>
            <p className="text-sm text-gray-500">Trained & Skilled Labor</p>
          </motion.div>
          <motion.div
            variants={fadeInUp}
            className="space-y-4 p-4 rounded-2xl hover:bg-gray-50 transition"
          >
            <div className="mx-auto w-20 h-20 bg-green-100 rounded-full flex items-center justify-center text-green-600">
              <Clock size={32} />
            </div>
            <h4 className="font-bold text-xl">Fast Delivery</h4>
            <p className="text-sm text-gray-500">15-30 Days Turnaround</p>
          </motion.div>
          <motion.div
            variants={fadeInUp}
            className="space-y-4 p-4 rounded-2xl hover:bg-gray-50 transition"
          >
            <div className="mx-auto w-20 h-20 bg-green-100 rounded-full flex items-center justify-center text-green-600">
              <Target size={32} />
            </div>
            <h4 className="font-bold text-xl">Cost Effective</h4>
            <p className="text-sm text-gray-500">Competitive Pricing</p>
          </motion.div>
        </motion.div>
      </section>

      <Footer />
    </main>
  );
}
