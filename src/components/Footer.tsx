import { Link } from "react-router-dom";
import { ShieldCheck, Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-secondary dark:bg-slate-950 text-secondary-foreground border-t dark:border-slate-800">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center space-x-2">
              <ShieldCheck className="h-6 w-6 text-primary" />
              <span className="text-xl font-bold tracking-tight text-white dark:text-primary">
                ClicksPay<span className="text-primary dark:text-white">Agency</span>
              </span>
            </Link>
            <p className="text-sm text-secondary-foreground/70 dark:text-slate-400 max-w-xs">
              Your Secure Gateway to Seamless Transactions. We bridge the gap for individuals and businesses with reliable payment solutions.
            </p>
            <div className="flex space-x-4">
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm text-secondary-foreground/70">
              <li><Link to="/" className="hover:text-primary transition-colors">Home</Link></li>
              <li><Link to="/landing" className="hover:text-primary transition-colors">Services</Link></li>
              <li><Link to="/calculator" className="hover:text-primary transition-colors">Currency Converter</Link></li>
              <li><Link to="/support" className="hover:text-primary transition-colors">Support Center</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-bold text-lg mb-4">Services</h3>
            <ul className="space-y-2 text-sm text-secondary-foreground/70">
              <li><a href="#" className="hover:text-primary transition-colors">Crypto Exchange</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Payment Agent Services</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Bill Payments</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Utility Settlements</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Secure Disbursements</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-bold text-lg mb-4">Contact Us</h3>
            <ul className="space-y-4 text-sm text-secondary-foreground/70">
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-primary shrink-0" />
                <span>+260 974 136 458</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-secondary-foreground/10 text-center text-xs text-secondary-foreground/50">
          <p>© {new Date().getFullYear()} Clickspay. All rights reserved. Your Secure Gateway to Seamless Transactions.</p>
        </div>
      </div>
    </footer>
  );
}
