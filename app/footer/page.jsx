import { FaFacebookF, FaInstagram  } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
    return (
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto flex justify-between items-center">
          <div className="logo">
            <span className="text-2xl font-bold ml-4">R.A.G.E</span>
          </div>
          <div className="mr-4">
            <ul className="flex space-x-4">
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <FaFacebookF />
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <FaXTwitter />
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <FaInstagram />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    );
  };
  
  export default Footer;
