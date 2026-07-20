import { Link } from "react-router-dom";
import Navbar from "../../components/layout/Navbar";
import SubjectCard from "../../components/cards/SubjectCard";
import FeatureCard from "../../components/cards/FeatureCard";
import StatCard from "../../components/cards/StatCard";
import TeacherCard from "../../components/cards/TeacherCard";
import TestimonialCard from "../../components/cards/TestimonialCard";
import GalleryCard from "../../components/cards/GalleryCard";
import Footer from "../../components/layout/Footer";


import gallery1 from "../../assets/gallery/gallery1.jpg";
import gallery2 from "../../assets/gallery/gallery2.jpg";
import gallery3 from "../../assets/gallery/gallery3.jpg";
import gallery4 from "../../assets/gallery/gallery4.jpg";
import gallery5 from "../../assets/gallery/gallery5.jpg";
import gallery6 from "../../assets/gallery/gallery6.jpg";
import hero from "../../assets/images/hero.png";

function Home() {
  return (
    <div>
      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      {/* Hero Section */}

<section className="bg-gradient-to-r from-blue-50 via-white to-blue-100 py-20">

  <div className="max-w-7xl mx-auto px-8 grid grid-cols-1 md:grid-cols-2 items-center gap-12">

    {/* Left Side */}

    <div>

      <p className="text-blue-700 font-semibold text-lg mb-3">
        Welcome to Apex Tuitions
      </p>

      <h1 className="text-5xl md:text-6xl font-extrabold leading-tight text-gray-900">

        Best Offline Coaching

        <span className="block text-blue-700">
          For School Students
        </span>

      </h1>

      <p className="mt-6 text-lg text-gray-600 leading-8">

        Learn Mathematics, Science, English and Social Studies
        from experienced teachers with personal attention,
        weekly tests, doubt-clearing sessions and excellent
        academic results.

      </p>

      <div className="mt-10 flex flex-wrap gap-4">

<Link
  to="/enroll"
  className="bg-blue-700 text-white px-8 py-4 rounded-lg hover:bg-blue-800"
>
  Enroll Now
</Link>

<Link
  to="/contact"
  className="border-2 border-blue-700 text-blue-700 px-8 py-4 rounded-lg hover:bg-blue-700 hover:text-white transition duration-300"
>
  Contact Us
</Link>

      </div>

    </div>

    {/* Right Side */}

    <div className="flex justify-center">

      <img
        src={hero}
        alt="Students Learning"
        className="w-full max-w-lg"
      />

    </div>

  </div>

</section>

      {/* Statistics */}
      <section className="py-16 bg-white">
        <h1 className="text-4xl font-bold text-center mb-12">
          Our Achievements
        </h1>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 px-10">
          <StatCard number="500+" title="Students" />
          <StatCard number="95%" title="Results" />
          <StatCard number="10+" title="Years Experience" />
          <StatCard number="50+" title="Weekly Tests" />
        </div>
      </section>

      {/* Subjects */}
      <section className="py-16 bg-gray-100">
        <h1 className="text-4xl font-bold text-center mb-12">
          Subjects We Teach
        </h1>

        <div className="flex flex-wrap justify-center gap-8">
          <SubjectCard icon="📘" title="Mathematics" />
          <SubjectCard icon="🧪" title="Science" />
          <SubjectCard icon="📖" title="English" />
          <SubjectCard icon="🌍" title="Social Studies" />
        </div>
      </section>

      {/* Features */}
      <section className="py-16 bg-white">
        <h1 className="text-4xl font-bold text-center mb-12">
          Why Choose Apex Tuitions?
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-10">
          <FeatureCard
            icon="👨‍🏫"
            title="Experienced Teachers"
            description="Learn from qualified and experienced faculty."
          />

          <FeatureCard
            icon="👥"
            title="Small Batches"
            description="Individual attention for every student."
          />

          <FeatureCard
            icon="📝"
            title="Weekly Tests"
            description="Regular assessments to track progress."
          />

          <FeatureCard
            icon="🎯"
            title="Personal Attention"
            description="Focused guidance based on each student's needs."
          />

          <FeatureCard
            icon="💯"
            title="Excellent Results"
            description="Helping students achieve top scores consistently."
          />

          <FeatureCard
            icon="💰"
            title="Affordable Fees"
            description="Quality education at reasonable fees."
          />
        </div>
      </section>

      {/* Teacher */}
      <TeacherCard />

      {/* Testimonials */}
      <section className="py-16 bg-gray-100">
        <h1 className="text-4xl font-bold text-center mb-12">
          What Our Students Say
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-10">
          <TestimonialCard
            name="Rahul"
            className="Class 10"
            review="Apex Tuitions helped me improve my Mathematics score from 65% to 94%."
          />

          <TestimonialCard
            name="Priya"
            className="Class 9"
            review="Weekly tests helped me stay confident during exams."
          />

          <TestimonialCard
            name="Arjun"
            className="Class 8"
            review="The teachers explain every topic clearly and patiently."
          />
        </div>
      </section>

      {/* Gallery */}
      <section className="py-16 bg-white">
        <h1 className="text-4xl font-bold text-center mb-12">
          Our Classroom Gallery
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-10">
          <GalleryCard image={gallery1} title="Mathematics Class" />
          <GalleryCard image={gallery2} title="Science Session" />
          <GalleryCard image={gallery3} title="Weekly Test" />
          <GalleryCard image={gallery4} title="Interactive Learning" />
          <GalleryCard image={gallery5} title="Student Activities" />
          <GalleryCard image={gallery6} title="Classroom Environment" />
        </div>
      </section>
        <Footer />

    </div>
  );
}

export default Home;