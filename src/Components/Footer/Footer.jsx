
import React from 'react';

const Footer = () => {
  return (
    <div>
      <footer className="footer p-10 bg-gradient-to-r from-pink-500 to-violet-500 text-white">
        <div className="flex items-center justify-between mb-8">
          <img src="https://i.ibb.co/f2YbNWG/a8e152ea86a0f346f14a90c42c342c6b.jpg" className="w-20 rounded-md" alt="" />
          <p className="font-semibold text-lg">Dance World<br />Providing reliable tech since 1992</p>
        </div>
        <div className="flex flex-col">
          <span className="footer-title">Services</span>
          <a className="link link-hover">Branding</a>
          <a className="link link-hover">Design</a>
          <a className="link link-hover">Marketing</a>
          <a className="link link-hover">Advertisement</a>
        </div>
        <div className="flex flex-col">
          <span className="footer-title">Company</span>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Jobs</a>
          <a className="link link-hover">Press kit</a>
        </div>
        <div className="flex flex-col">
          <span className="footer-title">Legal</span>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
