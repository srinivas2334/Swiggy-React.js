// Footer.js
import React from "react";

// Main Footer Component
export default function Footer({ children }) {
  return (
    <footer className="bg-gray-100 text-gray-800 py-10 mt-25">
      <div className="container  grid grid-cols-1 md:grid-cols-6 gap-8  w-[70%] mx-auto">
        {children}
      </div>
      <hr className="my-6 border-gray-300" />
      <div className="text-center mt-4">
        
        <div className="flex justify-center items-center gap-4">
          <p className="mb-2 font-bold text-2xl ">For better experience, download the Swiggy app now</p>
          <img
            src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_200,h_65/icon-AppStore_lg30tv"
            alt="App Store"
            className="h-20 cursor-pointer"
          />
          <img
            src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_200,h_65/icon-GooglePlay_1_zixjxl"
            alt="Google Play"
            className="h-20 cursor-pointer"
          />
        </div>
      </div>
    </footer>
  );
}

// Compound Components
Footer.Logo = function FooterLogo({ src, alt }) {
  return (
    <div className="col-span-2 md:col-span-2 flex flex-col items-start">
      <img src={src} alt={alt} className="h-20 mb-2" />
      <span>© 2025 {alt} Limited</span>
    </div>
  );
};

Footer.Section = function FooterSection({ title, children }) {
  return (
    <div className="flex flex-col gap-2">
      <h4 className="text-lg font-bold">{title}</h4>
      {children}
    </div>
  );
};

Footer.Link = function FooterLink({ children, href }) {
  return (
    <a href={href} className="text-lg text-gray-500 hover:text-green-600 transition">
      {children}
    </a>
  );
};

Footer.Social = function FooterSocial({ children }) {
  return <div className="flex gap-2 text-lg">{children}</div>;
};

Footer.SocialIcon = function FooterSocialIcon({ icon, href }) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer">
      {icon}
    </a>
  );
};
