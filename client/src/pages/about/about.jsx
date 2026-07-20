import { FaGraduationCap, FaUsers, FaBookOpen, FaBullseye } from "react-icons/fa";

function About() {
  return (
    <div className="bg-gray-50 min-h-screen">

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-700 to-blue-500 text-white py-24">
        <div className="max-w-6xl mx-auto px-6 text-center">

          <h1 className="text-6xl font-extrabold mb-6">
            About Apex Tuitions
          </h1>

          <p className="text-xl leading-9 max-w-4xl mx-auto">
            Empowering academic excellence through unwavering dedication,
            conceptual clarity, and a profoundly student-centric learning
            environment where every learner is encouraged to realize
            their highest potential.
          </p>

        </div>
      </section>

      {/* About */}
      <section className="max-w-6xl mx-auto py-20 px-6">

        <div className="grid md:grid-cols-2 gap-16 items-center">

          <div>

            <h2 className="text-4xl font-bold text-blue-700 mb-6">
              Our Philosophy
            </h2>

            <p className="text-gray-700 leading-9 text-lg mb-6">
              Apex Tuitions was established with a singular aspiration:
              to cultivate an educational ecosystem where intellectual
              curiosity, disciplined learning, and consistent academic
              progression converge harmoniously.
            </p>

            <p className="text-gray-700 leading-9 text-lg">
              We believe that exceptional education transcends conventional
              classroom instruction. Through meticulous mentoring,
              personalized attention, periodic assessments, and structured
              guidance, we endeavour to nurture confident, responsible,
              and academically accomplished students.
            </p>

          </div>

          <div className="bg-white rounded-2xl shadow-xl p-10">

            <h3 className="text-3xl font-bold text-blue-700 mb-8">
              Why Parents Trust Us
            </h3>

            <ul className="space-y-5 text-lg text-gray-700">

              <li>✔ Individual attention for every learner.</li>

              <li>✔ Comprehensive conceptual understanding.</li>

              <li>✔ Weekly assessments and performance analysis.</li>

              <li>✔ Continuous communication with parents.</li>

              <li>✔ Affordable fee structure without compromising quality.</li>

              <li>✔ Consistent commitment towards academic excellence.</li>

            </ul>

          </div>

        </div>

      </section>

      {/* Features */}
      <section className="bg-white py-20">

        <div className="max-w-6xl mx-auto px-6">

          <h2 className="text-4xl font-bold text-center text-blue-700 mb-14">
            What Distinguishes Apex Tuitions
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

            <div className="bg-blue-50 rounded-xl p-8 shadow hover:shadow-xl transition">

              <FaGraduationCap className="text-5xl text-blue-700 mb-5" />

              <h3 className="text-2xl font-bold mb-3">
                Academic Excellence
              </h3>

              <p className="text-gray-600 leading-7">
                A curriculum meticulously designed to strengthen
                conceptual foundations and examination preparedness.
              </p>

            </div>

            <div className="bg-blue-50 rounded-xl p-8 shadow hover:shadow-xl transition">

              <FaUsers className="text-5xl text-blue-700 mb-5" />

              <h3 className="text-2xl font-bold mb-3">
                Personal Mentorship
              </h3>

              <p className="text-gray-600 leading-7">
                Every student receives individualized guidance
                tailored to their academic strengths and challenges.
              </p>

            </div>

            <div className="bg-blue-50 rounded-xl p-8 shadow hover:shadow-xl transition">

              <FaBookOpen className="text-5xl text-blue-700 mb-5" />

              <h3 className="text-2xl font-bold mb-3">
                Structured Learning
              </h3>

              <p className="text-gray-600 leading-7">
                Regular assignments, periodic evaluations, and
                systematic revision ensure sustained academic growth.
              </p>

            </div>

            <div className="bg-blue-50 rounded-xl p-8 shadow hover:shadow-xl transition">

              <FaBullseye className="text-5xl text-blue-700 mb-5" />

              <h3 className="text-2xl font-bold mb-3">
                Result-Oriented
              </h3>

              <p className="text-gray-600 leading-7">
                Every initiative is strategically aligned with
                measurable academic improvement and holistic development.
              </p>

            </div>

          </div>

        </div>

      </section>

      {/* Mission & Vision */}

      <section className="py-20 bg-gray-100">

        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-10">

          <div className="bg-white rounded-xl shadow-lg p-10">

            <h2 className="text-3xl font-bold text-blue-700 mb-6">
              Our Mission
            </h2>

            <p className="text-gray-700 text-lg leading-9">
              To inspire academic confidence by providing an engaging,
              disciplined, and intellectually enriching learning
              environment where every student is empowered to achieve
              excellence through perseverance and knowledge.
            </p>

          </div>

          <div className="bg-white rounded-xl shadow-lg p-10">

            <h2 className="text-3xl font-bold text-blue-700 mb-6">
              Our Vision
            </h2>

            <p className="text-gray-700 text-lg leading-9">
              To emerge as one of the most respected and trusted
              educational institutions by consistently delivering
              exceptional academic guidance, fostering lifelong
              learning, and shaping responsible future citizens.
            </p>

          </div>

        </div>

      </section>

      {/* Footer Quote */}

      <section className="bg-blue-700 text-white py-16">

        <div className="max-w-5xl mx-auto text-center px-6">

          <h2 className="text-4xl font-bold mb-6">
            "Education is not merely the acquisition of knowledge,
            but the cultivation of character, confidence, and
            the courage to pursue excellence."
          </h2>

          <p className="text-xl">
            — Apex Tuitions
          </p>

        </div>

      </section>

    </div>
  );
}

export default About;