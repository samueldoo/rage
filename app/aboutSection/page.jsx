import Footer from "../footer/page";
import Header from "../header/page";
import { IoIosArrowRoundForward } from "react-icons/io";
const AboutSection = () => {
    return (
        <main>
            <Header />
      <section className=" py-[3.37%]">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="ml-4">
              <img
                src="img.jpg"
                alt="About R.A.G.E."
                className="rounded-md w-9/12"
              />
            </div>
            <div className="py-[10%] mr-8">
              <h2 className="text-3xl font-bold mb-4">About R.A.G.E.</h2>
              <p className="text-gray-600 mb-6">
                R.A.G.E. (Rights and Aid Group for Education) is a non-profit
                organization dedicated to providing free education to children in
                Nigeria. Our mission is to empower underprivileged communities by
                giving their children access to quality education and skills
                training.
              </p>
              <p className="text-gray-600 mb-6 mr-9">
                Since our inception in 2010, we have helped over 100,000 children
                across Nigeria receive an education. We believe that education is
                the key to breaking the cycle of poverty and creating a better
                future for all.
              </p>
              <div className="">
              <a
                href="#"
                className="inline-flex items-center gap-1 bg-gray-600 text-white py-2 px-4 rounded-md hover:bg-gray-500"
              >
                Learn More
                <IoIosArrowRoundForward />
              </a>
              </div>
              
            </div>
          </div>
        </div>
      </section>
      <Footer />
      </main>
    );
  };
  
  export default AboutSection;
