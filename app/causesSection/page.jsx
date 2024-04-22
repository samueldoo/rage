
import Footer from "../footer/page";
import Header from "../header/page";

const CausesSection = () => {
  return (
    <main>
      <Header />
      <section className="py-[5%]">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-8 text-center">Our Causes</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white shadow-md rounded-md p-6">
              <img
                src="imgs.jpg"
                alt="Cause 1"
                className="w-full h-48 object-cover mb-4"
              />
              <h3 className="text-xl font-bold mb-2">Education for All</h3>
              <p className="text-gray-600">
                Providing free education to underprivileged children in Nigeria.
              </p>
            </div>
            <div className="bg-white shadow-md rounded-md p-6">
              <img
                src="skill.jpg"
                alt="Cause 2"
                className="w-full h-48 object-cover mb-4"
              />
              <h3 className="text-xl font-bold mb-2">Skill Development</h3>
              <p className="text-gray-600">
                Teaching practical skills to help children become self-sufficient.
              </p>
            </div>
            <div className="bg-white shadow-md rounded-md p-6">
              <img
                src="emp.jpg"
                alt="Cause 3"
                className="w-full h-48 object-cover mb-4"
              />
              <h3 className="text-xl font-bold mb-2">Community Empowerment</h3>
              <p className="text-gray-600">
                Empowering local communities through education and resources.
              </p>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
};

export default CausesSection;