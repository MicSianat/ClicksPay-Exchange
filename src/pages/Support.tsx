import React, { useState } from "react";
import { motion } from "motion/react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { 
  Accordion, 
  AccordionContent, 
  AccordionItem, 
  AccordionTrigger 
} from "@/components/ui/accordion";
import { 
  Phone, 
  MessageSquare, 
  Clock, 
  HelpCircle,
  Send
} from "lucide-react";
import { toast } from "sonner";

const faqs = [
  {
    question: "How long does a transaction take to process?",
    answer: "Most local transactions are processed within 30 minutes. International transfers may take 1-3 business days depending on the destination and compliance requirements."
  },
  {
    question: "How do I get started with Clickspay?",
    answer: "Getting started is easy! Simply message us on our official business WhatsApp line. Our team will guide you through the process and help you with your first transaction."
  },
  {
    question: "Is Clickspay Trustworthy?",
    answer: "Yes, ClicksPay Exchange operates in full transparency and is an authorized payment agent powered by deriv."
  },
  {
    question: "How do I track my payment?",
    answer: "You can track your payment by messaging our support team on WhatsApp with your transaction reference number. We provide real-time updates on all processed transactions."
  },
  {
    question: "What are the transaction fees?",
    answer: "Our fees are competitive and vary based on the transaction type and amount. You can see a full breakdown before confirming any payment."
  }
];

export default function Support() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      toast.success("Message sent! Our support team will get back to you within 24 hours.");
      setIsSubmitting(false);
      (e.target as HTMLFormElement).reset();
    }, 1500);
  };

  return (
    <div className="container mx-auto px-4 py-12 md:py-20">
      <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold text-secondary dark:text-white">How can we <span className="text-primary">help you?</span></h1>
          <p className="text-slate-600 dark:text-slate-400 text-lg">
            Whether you have a question about our services or need technical assistance, our team is here for you.
          </p>
        </motion.div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        {/* Contact Info */}
        <div className="lg:col-span-1 space-y-8">
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-secondary dark:text-white">Contact Information</h2>
            <div className="space-y-4">
              <div className="flex items-start gap-4 p-4 bg-white dark:bg-slate-800 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-700">
                <div className="h-10 w-10 bg-primary/10 rounded-xl flex items-center justify-center shrink-0">
                  <Phone className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="font-bold text-secondary dark:text-white">Call Us</p>
                  <p className="text-sm text-slate-500 dark:text-slate-400">+260 974 136 458</p>
                </div>
              </div>
              <div className="flex items-start gap-4 p-4 bg-white dark:bg-slate-800 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-700">
                <div className="h-10 w-10 bg-primary/10 rounded-xl flex items-center justify-center shrink-0">
                  <Clock className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="font-bold text-secondary dark:text-white">Working Hours</p>
                  <p className="text-sm text-slate-500 dark:text-slate-400">Mon - Fri: 08:00 - 18:00</p>
                  <p className="text-sm text-slate-500 dark:text-slate-400">Sat: 09:00 - 13:00</p>
                </div>
              </div>
            </div>
          </div>

          <Card className="bg-secondary text-white border-none rounded-3xl overflow-hidden">
            <CardContent className="p-8 space-y-4">
              <MessageSquare className="h-10 w-10 text-primary" />
              <h3 className="text-xl font-bold">WhatsApp Support</h3>
              <p className="text-white/70 text-sm leading-relaxed">
                Need an immediate answer? Chat with us on WhatsApp for real-time assistance and transaction processing.
              </p>
              <Button
                render={<a href="https://wa.me/260974136458" target="_blank" rel="noopener noreferrer" />}
                nativeButton={false}
                className="w-full bg-primary hover:bg-primary/90 rounded-full"
              >
                Message on WhatsApp
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Contact Form & FAQ */}
        <div className="lg:col-span-2 space-y-12">
          <Card className="border-none shadow-xl rounded-[2rem] overflow-hidden bg-white dark:bg-slate-800">
            <CardHeader className="bg-slate-50 dark:bg-slate-900/50 border-b dark:border-slate-700 p-8">
              <CardTitle className="text-2xl dark:text-white">Send us a Message</CardTitle>
              <CardDescription className="dark:text-slate-400">Fill out the form below and we'll get back to you as soon as possible.</CardDescription>
            </CardHeader>
            <CardContent className="p-8">
              <form onSubmit={handleContactSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="dark:text-slate-300">Full Name</Label>
                    <Input id="name" placeholder="John Doe" required className="dark:bg-slate-900 dark:border-slate-700" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email" className="dark:text-slate-300">Email Address</Label>
                    <Input id="email" type="email" placeholder="john@example.com" required className="dark:bg-slate-900 dark:border-slate-700" />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="subject" className="dark:text-slate-300">Subject</Label>
                  <Input id="subject" placeholder="How can we help?" required className="dark:bg-slate-900 dark:border-slate-700" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message" className="dark:text-slate-300">Message</Label>
                  <Textarea id="message" placeholder="Tell us more about your inquiry..." className="min-h-[150px] dark:bg-slate-900 dark:border-slate-700" required />
                </div>
                <Button type="submit" disabled={isSubmitting} className="w-full h-12 bg-primary hover:bg-primary/90 rounded-xl font-bold">
                  {isSubmitting ? "Sending..." : "Send Message"} <Send className="ml-2 h-4 w-4" />
                </Button>
              </form>
            </CardContent>
          </Card>

          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <HelpCircle className="h-8 w-8 text-primary" />
              <h2 className="text-2xl font-bold text-secondary dark:text-white">Frequently Asked Questions</h2>
            </div>
            <Accordion type="single" collapsible className="w-full space-y-4">
              {faqs.map((faq, idx) => (
                <AccordionItem key={idx} value={`item-${idx}`} className="border rounded-2xl px-6 bg-white dark:bg-slate-800 dark:border-slate-700 overflow-hidden shadow-sm">
                  <AccordionTrigger className="hover:no-underline font-bold text-secondary dark:text-white py-6">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-slate-600 dark:text-slate-400 pb-6 leading-relaxed">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </div>
  );
}
