import React, { useState } from 'react';
import { Pill, GraduationCap, Phone, Users, ChevronDown, ScrollText, FileQuestion, BookOpen, IndianRupee, CheckCircle, Menu, X } from 'lucide-react';

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="bg-white shadow-lg fixed w-full z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <div className="flex items-center space-x-2">
                <img src="/nextgenlogo-removebg-preview.png" alt="NextGen Pharma Academy Logo" className="h-10 w-10" />
                <span className="text-xl font-bold text-gray-800">NextGen Pharma Academy</span>
              </div>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#home" className="text-gray-600 hover:text-blue-600">Home</a>
              <a href="#admission" className="text-gray-600 hover:text-blue-600">Admission</a>
              <a href="#courses" className="text-gray-600 hover:text-blue-600">Courses</a>
              <a href="#fees" className="text-gray-600 hover:text-blue-600">Fees</a>
              <a href="#faq" className="text-gray-600 hover:text-blue-600">FAQ</a>
              <a href="#contact" className="text-gray-600 hover:text-blue-600">Contact</a>
              <a href="#enquiry-form" className="text-gray-600 hover:text-blue-600">Enquiry Form</a>
              <a href="#about" className="text-gray-600 hover:text-blue-600">About</a>
            </div>
            <div className="md:hidden flex items-center">
              <button 
                onClick={toggleMobileMenu}
                className="text-gray-600 hover:text-blue-600 focus:outline-none"
              >
                {mobileMenuOpen ? (
                  <X className="h-6 w-6" />
                ) : (
                  <Menu className="h-6 w-6" />
                )}
              </button>
            </div>
          </div>
        </div>
        
        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white shadow-lg">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <a 
                href="#home" 
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50"
                onClick={toggleMobileMenu}
              >
                Home
              </a>
              <a 
                href="#admission" 
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50"
                onClick={toggleMobileMenu}
              >
                Admission
              </a>
              <a 
                href="#courses" 
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50"
                onClick={toggleMobileMenu}
              >
                Courses
              </a>
              <a 
                href="#fees" 
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50"
                onClick={toggleMobileMenu}
              >
                Fees
              </a>
              <a 
                href="#faq" 
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50"
                onClick={toggleMobileMenu}
              >
                FAQ
              </a>
              <a 
                href="#contact" 
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50"
                onClick={toggleMobileMenu}
              >
                Contact
              </a>
              <a 
                href="#enquiry-form" 
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50"
                onClick={toggleMobileMenu}
              >
                Enquiry Form
              </a>
              <a 
                href="#about" 
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50"
                onClick={toggleMobileMenu}
              >
                About
              </a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-16 relative">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.pexels.com/photos/3683074/pexels-photo-3683074.jpeg"
            alt="Laboratory Background"
            className="w-full h-full object-cover brightness-50"
          />
        </div>
        <div className="relative z-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Shape Your Future in Pharmacy
            </h1>
            <p className="text-xl text-white mb-8">
              No Entrance Exam Required - Start Your Pharmacy Career Today!
            </p>
            <div className="bg-blue-600/20 p-4 rounded-lg mb-6 border border-blue-400">
              <p className="text-white text-lg font-medium">
                ★ Exclusive: Direct Admission Based on 12th Marks
              </p>
            </div>
            <div className="space-x-4">
              <a href="#courses" className="inline-block bg-blue-600 text-white px-8 py-3 rounded-full hover:bg-blue-700 transition duration-300">
                Explore Our Programs
              </a>
              <a href="#enquiry-form" className="inline-block bg-green-600 text-white px-8 py-3 rounded-full hover:bg-green-700 transition duration-300">
                Enquire Now
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Admission Section */}
      <section id="admission" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <BookOpen className="h-12 w-12 text-blue-600 mx-auto mb-4" />
            <h2 className="text-3xl font-bold text-gray-900">Simple Admission Process</h2>
            <p className="mt-4 text-blue-600 font-medium">No Entrance Exam - Direct Admission Based on 12th Marks</p>
          </div>

          <div className="bg-blue-50 p-8 rounded-xl shadow-lg max-w-3xl mx-auto">
            <h3 className="text-xl font-bold text-gray-900 mb-6 text-center">
              Key Benefits of Our Program
            </h3>
            <ul className="space-y-4 text-gray-700">
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-1" />
                <span><strong>Save Time:</strong> Skip lengthy exam preparation and start learning immediately</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-1" />
                <span><strong>Reduced Stress:</strong> No competitive exam pressure or uncertainty</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-1" />
                <span><strong>Equal Opportunity:</strong> Admission based on 12th marks, not test-taking ability</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-1" />
                <span><strong>Faster Start:</strong> Begin your pharmacy career without delay</span>
              </li>
            </ul>

            <div className="mt-8 bg-white p-6 rounded-lg">
              <h4 className="text-lg font-bold text-gray-900 mb-4">Basic Eligibility</h4>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-center"><ChevronDown className="h-4 w-4 text-blue-600 mr-2" />Passed 10+2 with Physics, Chemistry & Biology/Mathematics</li>
                <li className="flex items-center"><ChevronDown className="h-4 w-4 text-blue-600 mr-2" />Minimum 45% aggregate marks (40% for reserved categories)</li>
                <li className="flex items-center"><ChevronDown className="h-4 w-4 text-blue-600 mr-2" />No entrance exam score required</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Fees Section */}
      <section id="fees" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <IndianRupee className="h-12 w-12 text-blue-600 mx-auto mb-4" />
            <h2 className="text-3xl font-bold text-gray-900">Transparent Fee Structure</h2>
            <p className="mt-4 text-gray-600">Complete support from admission to placement</p>
          </div>

          <div className="bg-blue-50 p-8 rounded-xl shadow-lg max-w-3xl mx-auto">
            <div className="mb-8 text-center">
              <h3 className="text-xl font-bold text-gray-900 mb-2">The Only Academy Providing</h3>
              <p className="text-blue-600 font-medium">End-to-End Support Throughout Your Journey</p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-lg">
                <h3 className="text-lg font-bold text-gray-900 mb-4">Annual Fee Breakdown</h3>
                <ul className="space-y-3">
                  <li className="flex justify-between pb-2 border-b border-gray-100">
                    <span>First Year Fees</span>
                    <span className="font-semibold">₹80,000</span>
                  </li>
                  <li className="flex justify-between pb-2 border-b border-gray-100">
                    <span>Second Year Fees</span>
                    <span className="font-semibold">₹80,000</span>
                  </li>
                  <li className="flex justify-between pt-2">
                    <span className="font-bold">Total Program Fees</span>
                    <span className="font-bold text-blue-600">₹1,60,000</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-lg">
                <h3 className="text-lg font-bold text-gray-900 mb-4">Installment Options</h3>
                <ul className="space-y-3">
                  <li className="flex justify-between pb-2 border-b border-gray-100">
                    <span>Admission Fee</span>
                    <span className="font-semibold">₹50,000</span>
                  </li>
                  <li className="flex justify-between pb-2 border-b border-gray-100">
                    <span>Monthly Installments (11 months)</span>
                    <span className="font-semibold">₹10,000/month</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="mt-8 bg-white p-6 rounded-lg">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Our Unique Support Includes</h3>
              <ul className="grid md:grid-cols-2 gap-4 text-gray-600">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <span>Personalized admission guidance</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <span>Dedicated academic mentoring</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <span>Regular progress tracking</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <span>Industry exposure programs</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <span>Placement preparation workshops</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <span>24/7 doubt resolution support</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Courses Section */}
      <section id="courses" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <GraduationCap className="h-12 w-12 text-blue-600 mx-auto mb-4" />
            <h2 className="text-3xl font-bold text-gray-900">D.Pharmacy Program</h2>
            <p className="mt-4 text-gray-600">2 Years Comprehensive Course Structure</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mt-12">
            {/* First Year */}
            <div className="bg-white p-8 rounded-xl shadow-lg transform hover:scale-105 transition duration-300">
              <div className="mb-6">
                <img 
                  src="https://images.pexels.com/photos/3683098/pexels-photo-3683098.jpeg"
                  alt="First Year Studies"
                  className="w-full h-48 object-cover rounded-lg mb-4"
                />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">First Year Subjects</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-center"><ChevronDown className="h-4 w-4 text-blue-600 mr-2" />Pharmaceutics I</li>
                <li className="flex items-center"><ChevronDown className="h-4 w-4 text-blue-600 mr-2" />Pharmaceutical Chemistry I</li>
                <li className="flex items-center"><ChevronDown className="h-4 w-4 text-blue-600 mr-2" />Pharmacognosy</li>
                <li className="flex items-center"><ChevronDown className="h-4 w-4 text-blue-600 mr-2" />Biochemistry & Clinical Pathology</li>
                <li className="flex items-center"><ChevronDown className="h-4 w-4 text-blue-600 mr-2" />Human Anatomy & Physiology</li>
                <li className="flex items-center"><ChevronDown className="h-4 w-4 text-blue-600 mr-2" />Health Education & Community Pharmacy</li>
              </ul>
            </div>

            {/* Second Year */}
            <div className="bg-white p-8 rounded-xl shadow-lg transform hover:scale-105 transition duration-300">
              <div className="mb-6">
                <img 
                  src="https://images.pexels.com/photos/4033148/pexels-photo-4033148.jpeg"
                  alt="Second Year Studies"
                  className="w-full h-48 object-cover rounded-lg mb-4"
                />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Second Year Subjects</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-center"><ChevronDown className="h-4 w-4 text-blue-600 mr-2" />Pharmaceutics II</li>
                <li className="flex items-center"><ChevronDown className="h-4 w-4 text-blue-600 mr-2" />Pharmaceutical Chemistry II</li>
                <li className="flex items-center"><ChevronDown className="h-4 w-4 text-blue-600 mr-2" />Pharmacology & Toxicology</li>
                <li className="flex items-center"><ChevronDown className="h-4 w-4 text-blue-600 mr-2" />Pharmaceutical Jurisprudence</li>
                <li className="flex items-center"><ChevronDown className="h-4 w-4 text-blue-600 mr-2" />Drug Store and Business Management</li>
                <li className="flex items-center"><ChevronDown className="h-4 w-4 text-blue-600 mr-2" />Hospital and Clinical Pharmacy</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <FileQuestion className="h-12 w-12 text-blue-600 mx-auto mb-4" />
            <h2 className="text-3xl font-bold text-gray-900">Frequently Asked Questions</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Is entrance exam required for admission?</h3>
                <p className="text-gray-600">No, we offer direct admission based on your 12th standard marks. No entrance examination is required.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">What is the duration of D.Pharmacy course?</h3>
                <p className="text-gray-600">The D.Pharmacy program is a 2-year course divided into two academic years.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">What are the career opportunities?</h3>
                <p className="text-gray-600">Graduates can work in retail pharmacies, hospitals, pharmaceutical companies, or pursue higher education.</p>
              </div>
            </div>
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Are hostel facilities available?</h3>
                <p className="text-gray-600">Yes, we provide separate hostel facilities for boys and girls with modern amenities.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">What is the admission process?</h3>
                <p className="text-gray-600">Submit your application through our online form, followed by document verification and merit-based admission.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Is the institute government approved?</h3>
                <p className="text-gray-600">Yes, we are approved by the Pharmacy Council of India (PCI) and affiliated with the relevant authorities.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Phone className="h-12 w-12 text-blue-600 mx-auto mb-4" />
            <h2 className="text-3xl font-bold text-gray-900">Contact Us</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="space-y-6 text-gray-600">
                <div>
                  <h3 className="font-semibold text-gray-900 text-lg mb-2">Address</h3>
                  <p>123 Education Street, Medical District</p>
                  <p>Mumbai, Maharashtra 400001</p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 text-lg mb-2">Contact Information</h3>
                  <p>Phone: +91 (123) 456-7890</p>
                  <p>Email: admissions@nextgenpharma.edu</p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 text-lg mb-2">Office Hours</h3>
                  <p>Monday - Friday: 9:00 AM - 5:00 PM</p>
                  <p>Saturday: 9:00 AM - 1:00 PM</p>
                </div>
              </div>
            </div>
            <div>
              <img 
                src="https://images.pexels.com/photos/3938022/pexels-photo-3938022.jpeg"
                alt="Campus"
                className="w-full h-full object-cover rounded-xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Enquiry Form Section */}
      <section id="enquiry-form" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <ScrollText className="h-12 w-12 text-blue-600 mx-auto mb-4" />
            <h2 className="text-3xl font-bold text-gray-900">Admission Enquiry</h2>
            <p className="mt-4 text-gray-600">Fill out the form below to get in touch with our admission team</p>
          </div>
          <div className="max-w-4xl mx-auto bg-white p-8 rounded-xl shadow-lg">
            <div className="w-full overflow-hidden">
              <iframe 
                src="https://docs.google.com/forms/d/e/1FAIpQLSdpftpzqhYe0W_22oCnoSNqYcxgsQq8zPwbWEhueqAeD_XYHg/viewform?embedded=true" 
                width="100%" 
                height="1968" 
                frameBorder="0" 
                marginHeight={0} 
                marginWidth={0}
                loading="lazy"
                title="Admission Enquiry Form"
                style={{ fontFamily: 'Roboto, sans-serif' }}
              >
                Loading…
              </iframe>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Users className="h-12 w-12 text-blue-600 mx-auto mb-4" />
            <h2 className="text-3xl font-bold text-gray-900">About Us</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src="https://images.pexels.com/photos/4021779/pexels-photo-4021779.jpeg"
                alt="Laboratory Research"
                className="rounded-lg shadow-xl"
              />
            </div>
            <div className="prose lg:prose-xl text-gray-600">
              <p className="mb-4">
                NextGen Pharma Academy is a premier institution dedicated to shaping the future of pharmacy education. 
                We provide comprehensive training in pharmaceutical sciences with state-of-the-art facilities and 
                experienced faculty members.
              </p>
              <p className="mb-4">
                Our focus is on delivering quality education that combines theoretical knowledge with practical 
                training, preparing students for successful careers in the pharmaceutical industry.
              </p>
              <p className="mb-4">
                At NextGen Pharma Academy, we believe in a student-centered approach to education. Our curriculum 
                is designed to meet the evolving needs of the pharmaceutical industry, ensuring that our graduates 
                are well-equipped to face the challenges of the modern healthcare system.
              </p>
              <p>
                Our faculty consists of experienced professionals with extensive industry experience, providing 
                students with insights into real-world pharmaceutical practices. We also maintain strong ties with 
                leading pharmaceutical companies, creating opportunities for internships and placements.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center mb-8">
            <Pill className="h-8 w-8 text-blue-400" />
            <span className="ml-2 text-xl font-bold">NextGen Pharma Academy</span>
          </div>
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li><a href="#home" className="text-gray-400 hover:text-white">Home</a></li>
                <li><a href="#courses" className="text-gray-400 hover:text-white">Courses</a></li>
                <li><a href="#about" className="text-gray-400 hover:text-white">About</a></li>
                <li><a href="#admission" className="text-gray-400 hover:text-white">Admission</a></li>
                <li><a href="#faq" className="text-gray-400 hover:text-white">FAQ</a></li>
                <li><a href="#contact" className="text-gray-400 hover:text-white">Contact</a></li>
                <li><a href="#fees" className="text-gray-400 hover:text-white">Fees</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Contact</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Mumbai, Maharashtra</li>
                <li>Phone: +91 82918 07935</li>
                <li>Email: nextgenpharmaacademy@gmail.com</li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Office Hours</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Monday - Friday: 9:00 AM - 5:00 PM</li>
                <li>Saturday: 9:00 AM - 1:00 PM</li>
                <li>Sunday: Closed</li>
              </ul>
            </div>
          </div>
          <div className="text-center text-gray-400 border-t border-gray-800 pt-8">
            <p> 2025 NextGen Pharma Academy. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;