import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-[#111] text-white">
      <div className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-4 gap-8 text-sm">

        {/* Get in touch section */}
        <div>
          <div className="flex items-center gap-2 mb-4">
            <img src="https://sitacorp.com/img/logo-sitacorp.png" alt="icon" className="h-6" />
            <h3 className="text-xl font-semibold text-cyan-400">Get in touch</h3>
          </div>
          <p className="text-lg text-cyan-300 font-medium mb-2">(732) 906 7806 x 3000</p>
          <a href="mailto:info@sitacorp.com" className="text-cyan-400 hover:underline">info@sitacorp.com</a>
          <p className="mt-3">
            347 Elizabeth Ave, Ste 100-200, <br />
            Somerset, NJ 08873-0037, USA.
          </p>
        </div>

        {/* Industries */}
        <div>
          <h4 className="font-semibold mb-4">Industries</h4>
          <ul className="space-y-2">
            <li>Consumer Goods</li>
            <li>Manufacturing</li>
            <li>Financial Services</li>
            <li>Healthcare</li>
            <li>Retail</li>
            <li>Public Sector</li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h4 className="font-semibold mb-4">Services</h4>
          <ul className="space-y-2">
            <li>Strategic Consulting</li>
            <li>Business Transformation</li>
            <li>Managed Services</li>
            <li>Testing</li>
          </ul>
        </div>

        {/* Company */}
        <div>
          <h4 className="font-semibold mb-4">Company</h4>
          <ul className="space-y-2">
            <li>About Sitacorp</li>
            <li>Customers</li>
            <li>Partners</li>
            <li>Careers</li>
            <li>Contact Us</li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800 py-6 px-6 flex flex-col md:flex-row justify-between items-center text-xs text-gray-400">
        <div className="flex items-center gap-2 mb-2 md:mb-0">
          <img src="https://sitacorp.com/img/logo-sitacorp.png" alt="Sitacorp Logo" className="h-5" />
          <span>© Copyright 1993–2025, Sita Corp. All rights reserved.</span>
        </div>
        <div className="flex gap-6">
          <a href="#" className="hover:underline">Privacy</a>
          <a href="#" className="hover:underline">Legal</a>
          <a href="#" className="hover:underline">Sitemap</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
