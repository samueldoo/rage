
import Footer from "../footer/page";
import Header from "../header/page";
import { IoIosArrowRoundForward } from "react-icons/io";

const DonationSteps = () => {
  return (
    <main
      style={{
        backgroundImage: 'url("dona.jpg")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: '',
      }}
    >
      <Header />
      <section className="py-[5.4%]">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-[5%] text-center">
            Steps to Make a Donation
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-6">
            <div className="bg-gray-300 shadow-md rounded-md p-6 text-center">
              <h3 className="text-xl font-bold mb-4">Step 1</h3>
              <p className="text-gray-600">
                Choose the cause you want to support and the amount you wish to donate.
              </p>
            </div>
            <div className="bg-gray-300 shadow-md rounded-md p-6 text-center">
              <h3 className="text-xl font-bold mb-4">Step 2</h3>
              <p className="text-gray-600">
                Select your preferred payment method and provide the necessary details.
              </p>
            </div>
            <div className="bg-gray-300 shadow-md rounded-md p-6 text-center">
              <h3 className="text-xl font-bold mb-4">Step 3</h3>
              <p className="text-gray-600">
                Review and confirm your donation details, then complete the transaction.
              </p>
            </div>
          </div>
          <div className="text-center mt-[5%]">
            <a
              href="/donateNow"
              className="inline-flex items-center gap-1 bg-gray-600 text-white py-2 px-6 rounded-md hover:bg-gray-700"
            >
              Donate Now <IoIosArrowRoundForward />
            </a>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
};

export default DonationSteps;
