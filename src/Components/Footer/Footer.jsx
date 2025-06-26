import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.min.css";
import "./Footer.css"; 
import { FaFacebookF, FaInstagram, FaTwitter, FaPinterestP, FaEnvelope } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();

  return (
    <section id="footer" className="relative py-10 px-4 bg-gray-800 text-white">
      <div className="container mx-auto">
        <div className="row w-full text-center justify-around text-xs-center text-sm-left text-md-left">
          <div className="col-xs-12 col-sm-4 col-md-4 mb-6">
            <h5 className="mb-2">Newsletter</h5>
            <p className="mb-4">
              Subscribe to our newsletter to stay updated on the latest trends and offers.
            </p>
            <a href="#" className="text-blue-500">Subscribe Now</a>
          </div>
          <div className="col-xs-12 col-sm-4 col-md-4 mb-6">
            <h5 className="mb-2">About Us</h5>
            <p>
              We are a leading interior design company dedicated to creating beautiful and functional spaces. With years of experience, our team of expert designers transforms your vision into reality.
            </p>
          </div>
        </div>

        <div className="row">
          <div className="col-xs-12 col-sm-12 col-md-12 mt-sm-5 mb-6">
            <ul className="list-unstyled list-inline social text-center space-x-6">
              <li className="list-inline-item">
                <a href="#"><FaFacebookF size={20} /></a>
              </li>
              <li className="list-inline-item">
                <a href="#"><FaTwitter size={20} /></a>
              </li>
              <li className="list-inline-item">
                <a href="#"><FaInstagram size={20} /></a>
              </li>
              <li className="list-inline-item">
                <a href="#"><FaPinterestP size={20} /></a>
              </li>
              <li className="list-inline-item">
                <a href="#"><FaEnvelope size={20} /></a>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex justify-center items-center mb-6">
          {/* Centered text */}
          <div className="text-center">
            <p className="mb-2">
              <a href="https://www.qubinetsinteriors.com/" className="underline text-blue-500">
                Qubinets Interiors
              </a>{" "}
              is a Registered MSP/ISO of Elavon, Inc. Georgia [a wholly owned subsidiary of U.S. Bancorp, Minneapolis, MN]
            </p>
            <p className="h6">&copy; All right Reserved. <a href="https://www.qubinetsinteriors.com" target="_blank" className="text-green-500">Qubinets Interiors</a></p>
          </div>
        </div>

        <div className="footer-bottom text-center">
          <p>&copy; 2024 Qubitnets Technology. All rights reserved.</p>
        </div>

        {/* Left-aligned buttons placed at the bottom-left corner */}
        <div className="absolute bottom-4 left-4">
          <button 
            className="term  text-white py-2 px-4 rounded hover:bg-gray-600 mb-2"
            onClick={() => {
              navigate('terms', { replace: true, state: {} });
              // window.scrollTo(0, 0);
            }}
          >
            Terms And Conditions
          </button>
          
          <button 
            className="policy  text-white py-2 px-4 rounded hover:bg-gray-600"
            onClick={() => {
              navigate('privacy', { replace: true, state: {} });
              window.scrollTo(0, 0);
            }}
          >
            Privacy Policy
          </button>
        </div>
      </div>
    </section>
  );
};

export default Footer;