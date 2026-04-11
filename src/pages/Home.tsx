import { motion } from "motion/react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { 
  ShieldCheck, 
  Zap, 
  Users, 
  Lightbulb, 
  Handshake, 
  ArrowRight, 
  CheckCircle2,
  TrendingUp,
  Globe,
  Lock,
  Bitcoin
} from "lucide-react";
import { Link } from "react-router-dom";

const coreValues = [
  { icon: ShieldCheck, title: "Integrity", desc: "Honesty & transparency in every transaction." },
  { icon: Zap, title: "Efficiency", desc: "Prompt service delivery without compromise." },
  { icon: Users, title: "Customer Focus", desc: "Prioritizing your needs above all else." },
  { icon: Lightbulb, title: "Innovation", desc: "Modern tools & solutions for modern problems." },
  { icon: Handshake, title: "Reliability", desc: "Consistent trust you can depend on." },
  { icon: ShieldCheck, title: "Professionalism", desc: "Maintaining high standards of conduct." },
];

const services = [
  {
    title: "Crypto Exchange",
    subtitle: "Buy & Sell Cryptocurrency",
    features: [
      "Instant Buy/Sell options",
      "Secure wallet transfers",
      "Competitive market rates"
    ],
    icon: Bitcoin
  },
  {
    title: "Payment Agent Services",
    subtitle: "Bridging the gap for customers",
    features: [
      "Authorized cash-in and cash-out",
      "Bill payments and utility settlements",
      "Secure transfers and disbursements"
    ],
    icon: Globe
  }
];

export default function Home() {
  return (
    <div className="flex flex-col w-full">
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 overflow-hidden bg-secondary">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,#00B5AD_0%,transparent_50%)]" />
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight">
                Your Secure Gateway to <span className="text-primary">Seamless Transactions</span>
              </h1>
            </motion.div>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-lg md:text-xl text-secondary-foreground/80"
            >
              Clickspay provides secure, efficient, and customer-friendly transaction and payment support services that promote financial inclusion.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              <Button
                render={<a href="https://wa.me/260974136458" target="_blank" rel="noopener noreferrer" />}
                nativeButton={false}
                size="lg"
                className="bg-primary hover:bg-primary/90 text-white px-8 h-14 text-lg rounded-full"
              >
                WhatsApp Us Now <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                render={<Link to="/landing" />}
                nativeButton={false}
                size="lg"
                variant="outline"
                className="bg-white/10 text-white border-white/20 hover:bg-white/20 h-14 px-8 text-lg rounded-full"
              >
                Explore Services
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-20 bg-slate-50 dark:bg-slate-900/50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-slate-800 p-8 rounded-3xl shadow-sm border border-slate-100 dark:border-slate-700 space-y-4"
            >
              <div className="h-12 w-12 bg-primary/10 rounded-2xl flex items-center justify-center">
                <TrendingUp className="h-6 w-6 text-primary" />
              </div>
              <h2 className="text-3xl font-bold text-secondary dark:text-white">Our Vision</h2>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                To become a trusted and leading provider of crypto exchange and payment agent services, known for reliability, accessibility, efficiency, and customer satisfaction.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-slate-800 p-8 rounded-3xl shadow-sm border border-slate-100 dark:border-slate-700 space-y-4"
            >
              <div className="h-12 w-12 bg-primary/10 rounded-2xl flex items-center justify-center">
                <Zap className="h-6 w-6 text-primary" />
              </div>
              <h2 className="text-3xl font-bold text-secondary dark:text-white">Our Mission</h2>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                To provide secure, efficient, and customer-friendly crypto and payment support services that promote convenience, accessibility, and financial inclusion for individuals and businesses.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
            <h2 className="text-sm font-bold uppercase tracking-widest text-primary">Our Business Activities</h2>
            <h3 className="text-4xl font-bold text-secondary dark:text-white">Comprehensive Payment Solutions</h3>
            <p className="text-slate-600 dark:text-slate-400">We offer a range of services designed to make your financial life easier and more secure.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {services.map((service, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
              >
                <Card className="h-full border-none shadow-lg hover:shadow-xl transition-shadow rounded-3xl overflow-hidden bg-white dark:bg-slate-800">
                  <CardContent className="p-8 space-y-6">
                    <div className="h-14 w-14 bg-secondary dark:bg-slate-700 rounded-2xl flex items-center justify-center">
                      <service.icon className="h-7 w-7 text-primary" />
                    </div>
                    <div className="space-y-2">
                      <h4 className="text-2xl font-bold text-secondary dark:text-white">{service.title}</h4>
                      <p className="text-primary font-medium">{service.subtitle}</p>
                    </div>
                    <ul className="space-y-3">
                      {service.features.map((feature, fIdx) => (
                        <li key={fIdx} className="flex items-center gap-3 text-slate-600 dark:text-slate-400">
                          <CheckCircle2 className="h-5 w-5 text-primary shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-secondary text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
            <div className="lg:col-span-1 space-y-6">
              <h2 className="text-sm font-bold uppercase tracking-widest text-primary">Strategic Direction</h2>
              <h3 className="text-4xl font-bold">Our Core Values</h3>
              <p className="text-secondary-foreground/70 leading-relaxed">
                These principles guide everything we do, from how we build our technology to how we support our clients every single day.
              </p>
              <div className="pt-4">
                <Link to="/support">
                  <Button 
                    variant="outline" 
                    className="bg-white/10 border-white/20 text-white hover:bg-white/20 rounded-full px-8"
                  >
                    Learn More About Us
                  </Button>
                </Link>
              </div>
            </div>
            
            <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-6">
              {coreValues.map((value, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.05 }}
                  className="bg-white/5 p-6 rounded-2xl border border-white/10 hover:bg-white/10 transition-colors group"
                >
                  <value.icon className="h-8 w-8 text-primary mb-4 group-hover:scale-110 transition-transform" />
                  <h4 className="text-xl font-bold mb-2">{value.title}</h4>
                  <p className="text-sm text-secondary-foreground/60">{value.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Trust & Security */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="bg-primary/5 dark:bg-primary/10 rounded-[3rem] p-8 md:p-16 flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2 space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-bold">
                <Lock className="h-4 w-4" /> Secure & Compliant
              </div>
              <h2 className="text-4xl font-bold text-secondary dark:text-white">Your Security is Our Top Priority</h2>
              <p className="text-slate-600 dark:text-slate-400 text-lg">
                We use graded encryption and follow strict compliance standards to ensure your data and transactions are always protected.
              </p>
              <div className="grid grid-cols-2 gap-6 pt-4">
                <div className="space-y-2">
                  <h4 className="font-bold text-secondary dark:text-white">256-bit Encryption</h4>
                  <p className="text-sm text-slate-500 dark:text-slate-400">Industry standard data protection</p>
                </div>
                <div className="space-y-2">
                  <h4 className="font-bold text-secondary dark:text-white">Fraud Prevention</h4>
                  <p className="text-sm text-slate-500 dark:text-slate-400">Real-time monitoring systems</p>
                </div>
              </div>
            </div>
            <div className="md:w-1/2 relative">
              <div className="aspect-square bg-primary/10 rounded-full absolute -top-10 -right-10 w-64 h-64 blur-3xl" />
              <div className="relative z-10 bg-white dark:bg-slate-800 p-8 rounded-3xl shadow-2xl border border-slate-100 dark:border-slate-700">
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-secondary dark:text-white">Security Status</span>
                    <span className="px-3 py-1 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 rounded-full text-xs font-bold">ACTIVE</span>
                  </div>
                  <div className="space-y-4">
                    {[1, 2, 3].map((i) => (
                      <div key={i} className="h-4 bg-slate-100 dark:bg-slate-700 rounded-full w-full overflow-hidden">
                        <motion.div 
                          initial={{ width: 0 }}
                          whileInView={{ width: `${80 + i * 5}%` }}
                          className="h-full bg-primary"
                        />
                      </div>
                    ))}
                  </div>
                  <div className="pt-4 flex items-center gap-4">
                    <div className="h-12 w-12 rounded-full bg-slate-100 dark:bg-slate-700 flex items-center justify-center">
                      <ShieldCheck className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm font-bold text-secondary dark:text-white">Verified Deriv Payment Agent</p>
                      <p className="text-xs text-slate-500 dark:text-slate-400">Deriv Username: ClicksPay Exchange</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-primary text-white text-center">
        <div className="container mx-auto px-4 space-y-8">
          <h2 className="text-4xl md:text-5xl font-bold max-w-3xl mx-auto">Ready to Experience Seamless Transactions?</h2>
          <p className="text-xl text-white/80 max-w-2xl mx-auto">
            Contact us today on WhatsApp to get started with our secure payment agent services.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              render={<a href="https://wa.me/260974136458" target="_blank" rel="noopener noreferrer" />}
              nativeButton={false}
              size="lg"
              className="bg-white text-secondary hover:bg-slate-100 px-10 h-14 text-lg rounded-full"
            >
              WhatsApp Us
            </Button>
            <Button
              render={<Link to="/support" />}
              nativeButton={false}
              size="lg"
              variant="outline"
              className="bg-white/10 border-white/40 text-white hover:bg-white/20 h-14 px-10 text-lg rounded-full"
            >
              Contact Support
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
