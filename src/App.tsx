import { GraduationCap, Phone, Users, ChevronDown, Building2, Clock } from 'lucide-react';
import logo from '../dist/assets/nextgenlogo-removebg-preview.png';

function App() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="bg-white shadow-lg fixed w-full z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <div className="flex items-center space-x-2">
                <img src={logo} alt="NextGen Pharma Academy Logo" className="h-8 w-8" />
                <span className="text-xl font-bold text-gray-800">NextGen Pharma Academy</span>
              </div>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#home" className="text-gray-600 hover:text-blue-600">Home</a>
              <a href="#courses" className="text-gray-600 hover:text-blue-600">Courses</a>
              <a href="#about" className="text-gray-600 hover:text-blue-600">About</a>
              <a href="#contact" className="text-gray-600 hover:text-blue-600">Contact</a>
            </div>
          </div>
        </div>
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
            <p className="text-xl text-gray-200 mb-8">
              Excellence in D.Pharmacy Education | Professional Development | Industry-Ready Skills
            </p>
            <a href="#courses" className="inline-block bg-blue-600 text-white px-8 py-3 rounded-full hover:bg-blue-700 transition duration-300">
              Explore Our Programs
            </a>
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
              <p>
                Our focus is on delivering quality education that combines theoretical knowledge with practical 
                training, preparing students for successful careers in the pharmaceutical industry.
              </p>
              <div className="grid grid-cols-2 gap-4 mt-8">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <Building2 className="h-6 w-6 text-blue-600 mb-2" />
                  <h3 className="font-semibold text-gray-900">Modern Facilities</h3>
                  <p className="text-sm text-gray-600">State-of-the-art laboratories and classrooms</p>
                </div>
                <div className="bg-blue-50 p-4 rounded-lg">
                  <Clock className="h-6 w-6 text-blue-600 mb-2" />
                  <h3 className="font-semibold text-gray-900">Expert Faculty</h3>
                  <p className="text-sm text-gray-600">Experienced professionals as mentors</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-blue-50 p-6 rounded-xl text-center">
              <img 
                src="https://images.pexels.com/photos/3938022/pexels-photo-3938022.jpeg"
                alt="Laboratory"
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <h3 className="text-xl font-bold text-gray-900 mb-2">Modern Laboratories</h3>
              <p className="text-gray-600">State-of-the-art facilities for practical training</p>
            </div>
            <div className="bg-blue-50 p-6 rounded-xl text-center">
              <img 
                src="https://images.pexels.com/photos/4033151/pexels-photo-4033151.jpeg"
                alt="Research"
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <h3 className="text-xl font-bold text-gray-900 mb-2">Research Focus</h3>
              <p className="text-gray-600">Emphasis on research and innovation</p>
            </div>
            <div className="bg-blue-50 p-6 rounded-xl text-center">
              <img 
                src="https://images.pexels.com/photos/3938023/pexels-photo-3938023.jpeg"
                alt="Industry"
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <h3 className="text-xl font-bold text-gray-900 mb-2">Industry Connect</h3>
              <p className="text-gray-600">Strong ties with pharmaceutical industry</p>
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
                  <p>Malad East</p>
                  <p>Mumbai, Maharashtra 400097</p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 text-lg mb-2">Contact Information</h3>
                  <p>Phone: +91 7977899574</p>
                  <p>Email: nextgenpharmaacademy@gmail.com</p>
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

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center mb-8">
            <img src={logo} alt="NextGen Pharma Academy Logo" className="h-8 w-8" />
            <span className="ml-2 text-xl font-bold">NextGen Pharma Academy</span>
          </div>
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li><a href="#home" className="text-gray-400 hover:text-white">Home</a></li>
                <li><a href="#courses" className="text-gray-400 hover:text-white">Courses</a></li>
                <li><a href="#about" className="text-gray-400 hover:text-white">About</a></li>
                <li><a href="#contact" className="text-gray-400 hover:text-white">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Contact</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Malad East</li>
                <li>Mumbai, Maharashtra 400097</li>
                <li>+91 7977899574</li>
                <li>nextgenpharmaacademy@gmail.com</li>
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