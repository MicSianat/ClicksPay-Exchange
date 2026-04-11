import React from "react";
import { motion } from "motion/react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Globe, 
  CheckCircle2,
  ArrowRight,
  Bitcoin,
  Wallet,
  ShieldCheck,
  Zap
} from "lucide-react";

export default function Landing() {
  return (
    <div className="min-h-[calc(100vh-4rem)] flex flex-col bg-white dark:bg-slate-900 transition-colors duration-300">
      {/* Hero Section with Image */}
      <section className="relative py-20 overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2 space-y-8">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
              >
                <h1 className="text-4xl md:text-6xl font-bold text-secondary dark:text-white leading-tight">
                  Professional <span className="text-primary">Financial Solutions</span> for the Digital Age
                </h1>
                <p className="mt-6 text-xl text-slate-600 dark:text-slate-400 leading-relaxed">
                  We buy and sell crypto and offer comprehensive payment agency services. Your trusted partner for seamless digital and traditional transactions.
                </p>
                <div className="pt-4">
                  <Button
                    render={<a href="https://wa.me/260974136458" target="_blank" rel="noopener noreferrer" />}
                    nativeButton={false}
                    size="lg"
                    className="bg-primary hover:bg-primary/90 text-white px-8 h-14 text-lg rounded-full"
                  >
                    Get Started on WhatsApp <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </div>
              </motion.div>
            </div>
            <div className="lg:w-1/2 relative">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="relative z-10 rounded-[2rem] overflow-hidden shadow-2xl border-8 border-white"
              >
                <img 
                  src="https://images.pexels.com/photos/7129682/pexels-photo-7129682.jpeg" 
                  alt="Professional working on laptop" 
                  className="w-full h-auto object-cover"
                  referrerPolicy="no-referrer"
                />
              </motion.div>
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-primary/10 rounded-full blur-2xl" />
              <div className="absolute -top-6 -right-6 w-32 h-32 bg-secondary/10 rounded-full blur-2xl" />
            </div>
          </div>
        </div>
      </section>

      {/* Services Detail */}
      <section className="py-20 bg-slate-50 dark:bg-slate-800/50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <h2 className="text-sm font-bold uppercase tracking-widest text-primary">Our Expertise</h2>
            <h3 className="text-4xl font-bold text-secondary dark:text-white">Tailored Financial Services</h3>
            <p className="text-slate-600 dark:text-slate-400">Secure, fast, and reliable solutions for your everyday financial needs.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Crypto Service */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <Card className="h-full border-none shadow-lg hover:shadow-xl transition-shadow rounded-3xl overflow-hidden bg-white dark:bg-slate-800">
                <CardContent className="p-8 space-y-6">
                  <div className="h-16 w-16 bg-primary/10 rounded-2xl flex items-center justify-center">
                    <Bitcoin className="h-8 w-8 text-primary" />
                  </div>
                  <div className="space-y-2">
                    <h4 className="text-2xl font-bold text-secondary dark:text-white">Crypto Exchange</h4>
                    <p className="text-primary font-medium">Buy & Sell Cryptocurrency</p>
                  </div>
                  <p className="text-slate-600 dark:text-slate-400">
                    We provide a secure and straightforward way to buy and sell major cryptocurrencies. Get competitive rates and instant settlements.
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-center gap-3 text-slate-600 dark:text-slate-400">
                      <CheckCircle2 className="h-5 w-5 text-primary shrink-0" />
                      <span>Instant Buy/Sell options</span>
                    </li>
                    <li className="flex items-center gap-3 text-slate-600 dark:text-slate-400">
                      <CheckCircle2 className="h-5 w-5 text-primary shrink-0" />
                      <span>Secure wallet transfers</span>
                    </li>
                    <li className="flex items-center gap-3 text-slate-600 dark:text-slate-400">
                      <CheckCircle2 className="h-5 w-5 text-primary shrink-0" />
                      <span>Competitive market rates</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </motion.div>

            {/* Payment Agency Service */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <Card className="h-full border-none shadow-lg hover:shadow-xl transition-shadow rounded-3xl overflow-hidden bg-white dark:bg-slate-800">
                <CardContent className="p-8 space-y-6">
                  <div className="h-16 w-16 bg-secondary/10 dark:bg-slate-700 rounded-2xl flex items-center justify-center">
                    <Globe className="h-8 w-8 text-secondary dark:text-primary" />
                  </div>
                  <div className="space-y-2">
                    <h4 className="text-2xl font-bold text-secondary dark:text-white">Payment Agency</h4>
                    <p className="text-primary font-medium">Authorized Agent Services</p>
                  </div>
                  <p className="text-slate-600 dark:text-slate-400">
                    As authorized agents, we bridge the gap for your daily financial transactions, ensuring accessibility and convenience.
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-center gap-3 text-slate-600 dark:text-slate-400">
                      <CheckCircle2 className="h-5 w-5 text-primary shrink-0" />
                      <span>Cash-in and Cash-out services</span>
                    </li>
                    <li className="flex items-center gap-3 text-slate-600 dark:text-slate-400">
                      <CheckCircle2 className="h-5 w-5 text-primary shrink-0" />
                      <span>Bill & Utility payments</span>
                    </li>
                    <li className="flex items-center gap-3 text-slate-600 dark:text-slate-400">
                      <CheckCircle2 className="h-5 w-5 text-primary shrink-0" />
                      <span>Secure disbursements</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center text-center space-y-4 p-6">
              <ShieldCheck className="h-12 w-12 text-primary" />
              <h4 className="text-xl font-bold text-secondary dark:text-white">Secure Transactions</h4>
              <p className="text-slate-500 dark:text-slate-400">Bank-grade encryption for all your digital assets and payments.</p>
            </div>
            <div className="flex flex-col items-center text-center space-y-4 p-6">
              <Zap className="h-12 w-12 text-primary" />
              <h4 className="text-xl font-bold text-secondary dark:text-white">Fast Processing</h4>
              <p className="text-slate-500 dark:text-slate-400">Quick settlements and immediate confirmations on all orders.</p>
            </div>
            <div className="flex flex-col items-center text-center space-y-4 p-6">
              <Wallet className="h-12 w-12 text-primary" />
              <h4 className="text-xl font-bold text-secondary dark:text-white">Reliable Service</h4>
              <p className="text-slate-500 dark:text-slate-400">A trusted name in payment agency and crypto exchange services.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-secondary text-white text-center">
        <div className="container mx-auto px-4 space-y-8">
          <h2 className="text-4xl font-bold">Ready to Trade or Pay?</h2>
          <p className="text-xl text-white/70 max-w-2xl mx-auto">
            Join our growing community of satisfied clients. Message us on WhatsApp for instant service.
          </p>
          <Button
            render={<a href="https://wa.me/260974136458" target="_blank" rel="noopener noreferrer" />}
            nativeButton={false}
            size="lg"
            className="bg-primary hover:bg-primary/90 text-white px-10 h-14 text-lg rounded-full"
          >
            Contact Us on WhatsApp
          </Button>
        </div>
      </section>
    </div>
  );
}
