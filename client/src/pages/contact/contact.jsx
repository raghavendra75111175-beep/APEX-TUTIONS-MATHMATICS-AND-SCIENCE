import Navbar from "../../components/layout/Navbar";
import Footer from "../../components/layout/Footer";

function Contact() {
  return (
    <>
      <Navbar />

      {/* Hero */}

      <section className="bg-gradient-to-r from-blue-50 to-white py-20">

        <div className="text-center">

          <h1 className="text-5xl font-bold">
            Contact Apex Tuitions
          </h1>

          <p className="mt-5 text-xl text-gray-600">
            We'd love to hear from you.
          </p>

        </div>

      </section>

      {/* Contact */}

      <section className="py-20 bg-gray-100">

        <div className="max-w-7xl mx-auto px-8 grid md:grid-cols-2 gap-12">

          {/* Left */}

          <div className="bg-white rounded-xl shadow-lg p-10">

            <h2 className="text-3xl font-bold mb-8">

              Contact Information

            </h2>

            <div className="space-y-8">

              <div>

                <h3 className="text-xl font-semibold">
                  📞 Phone
                </h3>

                <p className="text-gray-600 mt-2">
                  +91 9701234524
                </p>

              </div>

              <div>

                <h3 className="text-xl font-semibold">
                  📧 Email
                </h3>

                <p className="text-gray-600 mt-2">
                  rkreddy9i@gmail.com
                </p>

              </div>

              <div>

                <h3 className="text-xl font-semibold">
                  📍 Address
                </h3>

                <p className="text-gray-600 mt-2">
                  Hyderabad, Telangana , Badangpet, Sitameadows, Road no 5
                </p>

              </div>

            </div>

          </div>

          {/* Right */}

          <div className="bg-white rounded-xl shadow-lg p-10">

            <h2 className="text-3xl font-bold mb-8">

              Send a Message

            </h2>

            <form className="space-y-5">

              <input
                type="text"
                placeholder="Your Name"
                className="w-full border rounded-lg p-4"
              />

              <input
                type="email"
                placeholder="Email"
                className="w-full border rounded-lg p-4"
              />

              <input
                type="text"
                placeholder="Phone Number"
                className="w-full border rounded-lg p-4"
              />

              <textarea
                rows="5"
                placeholder="Message"
                className="w-full border rounded-lg p-4"
              ></textarea>

              <button
                className="bg-blue-700 text-white px-8 py-4 rounded-lg hover:bg-blue-800"
              >
                Send Message
              </button>

            </form>

          </div>

        </div>

      </section>

      <Footer />
    </>
  );
}

export default Contact;