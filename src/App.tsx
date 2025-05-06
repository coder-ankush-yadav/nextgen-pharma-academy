import React, { useState } from 'react';
import { GraduationCap, Phone, Users, ChevronDown, ScrollText, FileQuestion, BookOpen, IndianRupee, CheckCircle, Menu, X, Clock, MessageCircle, MessageSquare, Facebook, Instagram, Twitter, Youtube, School, Award, Briefcase, Mail, Lightbulb, Microscope } from 'lucide-react';

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="bg-white shadow-lg fixed w-full z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <div className="flex items-center space-x-2">
                <img src="/nextgenlogo-removebg-preview.png" alt="NextGen Pharma Academy Logo" className="h-10 w-10" />
                <span className="text-xl font-bold text-gray-800 hidden sm:inline">NextGen Pharma Academy</span>
                <span className="text-xl font-bold text-gray-800 sm:hidden">NextGen</span>
              </div>
            </div>
            <div className="hidden lg:flex items-center space-x-6">
              <a href="#home" className="text-gray-600 hover:text-blue-600 font-medium px-2 py-1 hover:bg-blue-50 rounded-md transition duration-300">Home</a>
              <a href="#admission" className="text-gray-600 hover:text-blue-600 font-medium px-2 py-1 hover:bg-blue-50 rounded-md transition duration-300">Admission</a>
              <a href="#courses" className="text-gray-600 hover:text-blue-600 font-medium px-2 py-1 hover:bg-blue-50 rounded-md transition duration-300">Courses</a>
              <a href="#fees" className="text-gray-600 hover:text-blue-600 font-medium px-2 py-1 hover:bg-blue-50 rounded-md transition duration-300">Fees</a>
              <a href="#faq" className="text-gray-600 hover:text-blue-600 font-medium px-2 py-1 hover:bg-blue-50 rounded-md transition duration-300">FAQ</a>
              <a href="#contact" className="text-gray-600 hover:text-blue-600 font-medium px-2 py-1 hover:bg-blue-50 rounded-md transition duration-300">Contact</a>
              <a href="#enquiry-form" className="text-gray-600 hover:text-blue-600 font-medium px-2 py-1 hover:bg-blue-50 rounded-md transition duration-300">Enquiry</a>
              <a href="#about" className="text-gray-600 hover:text-blue-600 font-medium px-2 py-1 hover:bg-blue-50 rounded-md transition duration-300">About</a>
            </div>
            
            {/* Medium screen navigation - dropdown style */}
            <div className="hidden md:flex lg:hidden items-center">
              <div className="relative group">
                <button className="flex items-center space-x-1 text-gray-600 hover:text-blue-600 focus:outline-none">
                  <span className="font-medium">Menu</span>
                  <ChevronDown className="h-4 w-4" />
                </button>
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-50 hidden group-hover:block">
                  <a href="#home" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600">Home</a>
                  <a href="#admission" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600">Admission</a>
                  <a href="#courses" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600">Courses</a>
                  <a href="#fees" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600">Fees</a>
                  <a href="#faq" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600">FAQ</a>
                  <a href="#contact" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600">Contact</a>
                  <a href="#enquiry-form" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600">Enquiry Form</a>
                  <a href="#about" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600">About</a>
                </div>
              </div>
            </div>
            
            {/* Mobile menu button */}
            <div className="md:hidden flex items-center">
              <button 
                onClick={toggleMobileMenu}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-600 hover:text-blue-600 hover:bg-blue-50 focus:outline-none transition duration-300"
                aria-expanded={mobileMenuOpen ? "true" : "false"}
              >
                <span className="sr-only">Open main menu</span>
                {mobileMenuOpen ? (
                  <X className="block h-6 w-6" aria-hidden="true" />
                ) : (
                  <Menu className="block h-6 w-6" aria-hidden="true" />
                )}
              </button>
            </div>
          </div>
        </div>
        
        {/* Mobile menu */}
        <div className={`md:hidden transition-all duration-300 ease-in-out ${mobileMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white shadow-lg border-t border-gray-100">
            <a 
              href="#home" 
              className="flex items-center px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-blue-50"
              onClick={toggleMobileMenu}
            >
              <div className="bg-blue-50 p-2 rounded-full mr-3">
                <GraduationCap className="h-5 w-5 text-blue-600" />
              </div>
              Home
            </a>
            <a 
              href="#admission" 
              className="flex items-center px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-blue-50"
              onClick={toggleMobileMenu}
            >
              <div className="bg-blue-50 p-2 rounded-full mr-3">
                <FileQuestion className="h-5 w-5 text-blue-600" />
              </div>
              Admission
            </a>
            <a 
              href="#courses" 
              className="flex items-center px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-blue-50"
              onClick={toggleMobileMenu}
            >
              <div className="bg-blue-50 p-2 rounded-full mr-3">
                <BookOpen className="h-5 w-5 text-blue-600" />
              </div>
              Courses
            </a>
            <a 
              href="#fees" 
              className="flex items-center px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-blue-50"
              onClick={toggleMobileMenu}
            >
              <div className="bg-blue-50 p-2 rounded-full mr-3">
                <IndianRupee className="h-5 w-5 text-blue-600" />
              </div>
              Fees
            </a>
            <a 
              href="#faq" 
              className="flex items-center px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-blue-50"
              onClick={toggleMobileMenu}
            >
              <div className="bg-blue-50 p-2 rounded-full mr-3">
                <FileQuestion className="h-5 w-5 text-blue-600" />
              </div>
              FAQ
            </a>
            <a 
              href="#contact" 
              className="flex items-center px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-blue-50"
              onClick={toggleMobileMenu}
            >
              <div className="bg-blue-50 p-2 rounded-full mr-3">
                <Phone className="h-5 w-5 text-blue-600" />
              </div>
              Contact
            </a>
            <a 
              href="#enquiry-form" 
              className="flex items-center px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-blue-50"
              onClick={toggleMobileMenu}
            >
              <div className="bg-blue-50 p-2 rounded-full mr-3">
                <ScrollText className="h-5 w-5 text-blue-600" />
              </div>
              Enquiry Form
            </a>
            <a 
              href="#about" 
              className="flex items-center px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-blue-50"
              onClick={toggleMobileMenu}
            >
              <div className="bg-blue-50 p-2 rounded-full mr-3">
                <Users className="h-5 w-5 text-blue-600" />
              </div>
              About
            </a>
            
            <div className="pt-4 pb-2 border-t border-gray-200">
              <div className="flex items-center px-3">
                <div className="bg-blue-600 p-2 rounded-full">
                  <Phone className="h-5 w-5 text-white" />
                </div>
                <div className="ml-3">
                  <p className="text-base font-medium text-gray-700">Quick Contact</p>
                  <p className="text-sm text-blue-600 font-semibold">+91 82918 07935</p>
                </div>
              </div>
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
            <p className="text-xl text-white mb-8">
              No Entrance Exam Required - Start Your Pharmacy Career Today!
            </p>
            <div className="bg-blue-600/20 p-4 rounded-lg mb-6 border border-blue-400">
              <p className="text-white text-lg font-medium">
                Exclusive: Direct Admission Without Any Entrance Exam - Limited Seats Available!
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

      {/* Courses Section */}
      <section id="courses" className="py-20 bg-gradient-to-b from-white to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-block p-3 bg-blue-100 rounded-full mb-4">
              <GraduationCap className="h-12 w-12 text-blue-600" />
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mb-2">D.Pharmacy Program</h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto mb-4"></div>
            <p className="mt-4 text-gray-700 max-w-3xl mx-auto text-lg">
              A comprehensive 2-year diploma program designed to prepare you for a successful career in the pharmaceutical industry
            </p>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-lg max-w-4xl mx-auto mb-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">Why Choose D.Pharmacy?</h3>
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="bg-blue-50 p-5 rounded-lg text-center">
                <div className="bg-blue-100 w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-4">
                  <GraduationCap className="h-8 w-8 text-blue-600" />
                </div>
                <h4 className="text-lg font-bold text-gray-900 mb-2">Quick Entry to Profession</h4>
                <p className="text-gray-700">Start your pharmacy career in just 2 years compared to 4+ years for B.Pharm</p>
              </div>
              <div className="bg-blue-50 p-5 rounded-lg text-center">
                <div className="bg-blue-100 w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-4">
                  <IndianRupee className="h-8 w-8 text-blue-600" />
                </div>
                <h4 className="text-lg font-bold text-gray-900 mb-2">High Demand Field</h4>
                <p className="text-gray-700">Pharmaceutical industry is growing at 15% annually with constant need for qualified professionals</p>
              </div>
              <div className="bg-blue-50 p-5 rounded-lg text-center">
                <div className="bg-blue-100 w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-4">
                  <Users className="h-8 w-8 text-blue-600" />
                </div>
                <h4 className="text-lg font-bold text-gray-900 mb-2">Multiple Career Paths</h4>
                <p className="text-gray-700">Work in retail, hospitals, manufacturing, quality control, or pursue higher education</p>
              </div>
            </div>

            <div className="border-t border-gray-200 pt-8 mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">Program Highlights</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                    <span><strong>PCI Approved:</strong> Nationally recognized diploma</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                    <span><strong>Industry-Aligned:</strong> Curriculum designed with industry inputs</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                    <span><strong>Hands-on Training:</strong> Well-equipped modern laboratories</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                    <span><strong>Expert Faculty:</strong> Learn from industry professionals</span>
                  </li>
                </ul>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                    <span><strong>Guest Lectures:</strong> Insights from industry leaders</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                    <span><strong>Industrial Visits:</strong> Exposure to real-world operations</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                    <span><strong>Placement Support:</strong> 90%+ placement record</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                    <span><strong>Internship Opportunities:</strong> With leading pharmaceutical companies</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-blue-50 p-6 rounded-lg">
              <h4 className="text-xl font-bold text-gray-900 mb-3">Career Prospects After D.Pharmacy</h4>
              <div className="grid md:grid-cols-3 gap-4 text-sm">
                <div className="bg-white p-3 rounded shadow-sm">
                  <h5 className="font-bold text-blue-600 mb-2">Retail Pharmacy</h5>
                  <p className="text-gray-700">Work as a registered pharmacist in medical stores and pharmacy chains</p>
                </div>
                <div className="bg-white p-3 rounded shadow-sm">
                  <h5 className="font-bold text-blue-600 mb-2">Hospital Pharmacy</h5>
                  <p className="text-gray-700">Manage medication dispensing and inventory in hospitals</p>
                </div>
                <div className="bg-white p-3 rounded shadow-sm">
                  <h5 className="font-bold text-blue-600 mb-2">Manufacturing</h5>
                  <p className="text-gray-700">Work in production and quality control departments</p>
                </div>
                <div className="bg-white p-3 rounded shadow-sm">
                  <h5 className="font-bold text-blue-600 mb-2">Marketing</h5>
                  <p className="text-gray-700">Pharmaceutical sales and marketing roles</p>
                </div>
                <div className="bg-white p-3 rounded shadow-sm">
                  <h5 className="font-bold text-blue-600 mb-2">Higher Education</h5>
                  <p className="text-gray-700">Pursue B.Pharm through lateral entry and other advanced degrees</p>
                </div>
                <div className="bg-white p-3 rounded shadow-sm">
                  <h5 className="font-bold text-blue-600 mb-2">Entrepreneurship</h5>
                  <p className="text-gray-700">Start your own retail pharmacy business</p>
                </div>
              </div>
            </div>
          </div>

          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Comprehensive Course Structure</h3>
          <div className="grid md:grid-cols-2 gap-8 mt-8">
            {/* First Year */}
            <div className="bg-white p-8 rounded-xl shadow-lg transform hover:scale-105 transition duration-300 border-t-4 border-blue-600">
              <div className="mb-6 relative">
                <div className="absolute top-0 right-0 bg-blue-600 text-white py-1 px-3 text-sm font-bold rounded-bl-lg">
                  YEAR 1
                </div>
                <img 
                  src="https://images.pexels.com/photos/3683098/pexels-photo-3683098.jpeg"
                  alt="First Year Studies"
                  className="w-full h-48 object-cover rounded-lg mb-4"
                />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">First Year Subjects</h3>
              <p className="text-gray-700 mb-4">Foundation courses focusing on basic pharmaceutical sciences and principles:</p>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <ChevronDown className="h-5 w-5 text-blue-600 mr-2 mt-0.5" />
                  <div>
                    <span className="font-semibold">Pharmaceutics I:</span> Basic dispensing and formulation techniques
                  </div>
                </li>
                <li className="flex items-start">
                  <ChevronDown className="h-5 w-5 text-blue-600 mr-2 mt-0.5" />
                  <div>
                    <span className="font-semibold">Pharmaceutical Chemistry I:</span> Inorganic and organic pharmaceutical compounds
                  </div>
                </li>
                <li className="flex items-start">
                  <ChevronDown className="h-5 w-5 text-blue-600 mr-2 mt-0.5" />
                  <div>
                    <span className="font-semibold">Pharmacognosy:</span> Study of medicinal plants and natural products
                  </div>
                </li>
                <li className="flex items-start">
                  <ChevronDown className="h-5 w-5 text-blue-600 mr-2 mt-0.5" />
                  <div>
                    <span className="font-semibold">Biochemistry & Clinical Pathology:</span> Biological processes and disease diagnosis
                  </div>
                </li>
                <li className="flex items-start">
                  <ChevronDown className="h-5 w-5 text-blue-600 mr-2 mt-0.5" />
                  <div>
                    <span className="font-semibold">Human Anatomy & Physiology:</span> Structure and function of human body
                  </div>
                </li>
                <li className="flex items-start">
                  <ChevronDown className="h-5 w-5 text-blue-600 mr-2 mt-0.5" />
                  <div>
                    <span className="font-semibold">Health Education & Community Pharmacy:</span> Public health and community service
                  </div>
                </li>
              </ul>
            </div>

            {/* Second Year */}
            <div className="bg-white p-8 rounded-xl shadow-lg transform hover:scale-105 transition duration-300 border-t-4 border-green-600">
              <div className="mb-6 relative">
                <div className="absolute top-0 right-0 bg-green-600 text-white py-1 px-3 text-sm font-bold rounded-bl-lg">
                  YEAR 2
                </div>
                <img 
                  src="https://images.pexels.com/photos/4033148/pexels-photo-4033148.jpeg"
                  alt="Second Year Studies"
                  className="w-full h-48 object-cover rounded-lg mb-4"
                />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Second Year Subjects</h3>
              <p className="text-gray-700 mb-4">Advanced courses focusing on clinical and practical aspects of pharmacy:</p>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <ChevronDown className="h-5 w-5 text-green-600 mr-2 mt-0.5" />
                  <div>
                    <span className="font-semibold">Pharmaceutics II:</span> Advanced pharmaceutical formulations and manufacturing
                  </div>
                </li>
                <li className="flex items-start">
                  <ChevronDown className="h-5 w-5 text-green-600 mr-2 mt-0.5" />
                  <div>
                    <span className="font-semibold">Pharmaceutical Chemistry II:</span> Medicinal chemistry and drug synthesis
                  </div>
                </li>
                <li className="flex items-start">
                  <ChevronDown className="h-5 w-5 text-green-600 mr-2 mt-0.5" />
                  <div>
                    <span className="font-semibold">Pharmacology & Toxicology:</span> Drug action, effects, and adverse reactions
                  </div>
                </li>
                <li className="flex items-start">
                  <ChevronDown className="h-5 w-5 text-green-600 mr-2 mt-0.5" />
                  <div>
                    <span className="font-semibold">Pharmaceutical Jurisprudence:</span> Pharmacy laws and regulations
                  </div>
                </li>
                <li className="flex items-start">
                  <ChevronDown className="h-5 w-5 text-green-600 mr-2 mt-0.5" />
                  <div>
                    <span className="font-semibold">Drug Store and Business Management:</span> Pharmacy operations and management
                  </div>
                </li>
                <li className="flex items-start">
                  <ChevronDown className="h-5 w-5 text-green-600 mr-2 mt-0.5" />
                  <div>
                    <span className="font-semibold">Hospital and Clinical Pharmacy:</span> Hospital drug distribution and patient care
                  </div>
                </li>
              </ul>
            </div>
          </div>

          <div className="text-center mt-12">
            <a href="#enquiry-form" className="inline-block bg-gradient-to-r from-blue-600 to-blue-700 text-white px-8 py-3 rounded-full hover:shadow-lg transform hover:scale-105 transition duration-300 font-bold">
              Apply for D.Pharmacy Program
            </a>
            <p className="mt-3 text-gray-600">Limited seats available for 2025 batch. Apply now to secure your admission.</p>
          </div>
        </div>
      </section>

      {/* Fees Section */}
      <section id="fees" className="py-20 bg-gradient-to-b from-white to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-block p-3 bg-blue-100 rounded-full mb-4 animate-pulse">
              <IndianRupee className="h-12 w-12 text-blue-600" />
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mb-2">Affordable Fee Structure</h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto mb-4"></div>
            <p className="mt-4 text-blue-700 font-medium text-xl max-w-2xl mx-auto">
              Invest in Your Future with Transparent Pricing & Flexible Payment Options
            </p>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-xl max-w-4xl mx-auto border-t-4 border-blue-600 relative overflow-hidden">
            <div className="absolute top-0 right-0 bg-blue-600 text-white py-1 px-4 rounded-bl-lg font-bold transform rotate-0 shadow-lg">
              2025 ADMISSION OPEN
            </div>
            
            <div className="mb-10 text-center">
              <span className="inline-block bg-red-100 text-red-800 text-sm font-semibold px-3 py-1 rounded-full mb-2">LIMITED TIME OFFER</span>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Special 2025 Batch Pricing</h3>
              <p className="text-green-600 font-medium text-lg">Secure Your Seat Before Fees Increase!</p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-lg transform hover:scale-105 transition duration-300 border border-gray-100 relative">
                <div className="absolute -top-4 -left-4 bg-blue-600 text-white p-2 rounded-full w-16 h-16 flex items-center justify-center shadow-lg">
                  <div className="text-center">
                    <div className="text-xs">BEST</div>
                    <div className="text-sm font-bold">VALUE</div>
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-6 pl-10">Annual Fee Breakdown</h3>
                <ul className="space-y-4">
                  <li className="flex justify-between pb-3 border-b border-gray-100">
                    <span className="font-medium">First Year Fees</span>
                    <span className="font-semibold text-lg">₹80,000</span>
                  </li>
                  <li className="flex justify-between pb-3 border-b border-gray-100">
                    <span className="font-medium">Second Year Fees</span>
                    <span className="font-semibold text-lg">₹80,000</span>
                  </li>
                  <li className="flex justify-between pt-2 bg-blue-50 p-3 rounded-lg">
                    <span className="font-bold">Total Program Fees</span>
                    <span className="font-bold text-blue-600 text-xl">₹1,60,000</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-lg transform hover:scale-105 transition duration-300 border border-gray-100 relative">
                <div className="absolute -top-4 -right-4 bg-green-600 text-white p-2 rounded-full w-16 h-16 flex items-center justify-center shadow-lg">
                  <div className="text-center">
                    <div className="text-xs">EASY</div>
                    <div className="text-sm font-bold">EMI</div>
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-6 pr-10">Flexible Payment Options</h3>
                <ul className="space-y-4">
                  <li className="flex justify-between pb-3 border-b border-gray-100">
                    <span className="font-medium">Admission Fee</span>
                    <span className="font-semibold text-lg">₹50,000</span>
                  </li>
                  <li className="flex justify-between pb-3 border-b border-gray-100">
                    <span className="font-medium">Monthly Installments</span>
                    <span className="font-semibold text-lg">₹10,000 × 11</span>
                  </li>
                  <li className="flex justify-between pt-2 bg-green-50 p-3 rounded-lg text-sm">
                    <span className="font-medium">✓ No hidden charges</span>
                    <span className="font-medium">✓ Easy EMI available</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="mt-10 bg-gradient-to-r from-blue-50 to-blue-100 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">All-Inclusive Package Benefits</h3>
              <ul className="grid md:grid-cols-2 gap-4 text-gray-700">
                <li className="flex items-start bg-white p-3 rounded-lg shadow-sm">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span><strong>Personalized Guidance:</strong> One-on-one admission counseling</span>
                </li>
                <li className="flex items-start bg-white p-3 rounded-lg shadow-sm">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span><strong>Expert Faculty:</strong> Learn from industry professionals</span>
                </li>
                <li className="flex items-start bg-white p-3 rounded-lg shadow-sm">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span><strong>Progress Tracking:</strong> Regular performance assessment</span>
                </li>
                <li className="flex items-start bg-white p-3 rounded-lg shadow-sm">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span><strong>Industry Exposure:</strong> Field visits and guest lectures</span>
                </li>
                <li className="flex items-start bg-white p-3 rounded-lg shadow-sm">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span><strong>Placement Support:</strong> Interview preparation and job assistance</span>
                </li>
                <li className="flex items-start bg-white p-3 rounded-lg shadow-sm">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span><strong>24/7 Support:</strong> Round-the-clock doubt resolution</span>
                </li>
              </ul>
              <div className="mt-8 text-center">
                <a href="#enquiry-form" className="inline-block bg-gradient-to-r from-blue-600 to-blue-700 text-white px-8 py-3 rounded-full hover:shadow-lg transform hover:scale-105 transition duration-300 font-bold">
                  Get Personalized Fee Details
                </a>
                <p className="mt-3 text-sm text-gray-500">Limited seats available for 2025 batch. Apply now to secure your admission.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-block p-3 bg-blue-100 rounded-full mb-4">
              <FileQuestion className="h-12 w-12 text-blue-600" />
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mb-2">Frequently Asked Questions</h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto mb-4"></div>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Find answers to common questions about our D.Pharmacy program, admission process, and career opportunities
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-4">
              {/* FAQ Item 1 */}
              <div className="bg-white rounded-xl shadow-md overflow-hidden border-l-4 border-blue-600 hover:shadow-lg transition duration-300">
                <div className="p-6">
                  <div className="flex items-start">
                    <div className="bg-blue-100 p-2 rounded-full mr-4">
                      <FileQuestion className="h-6 w-6 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">Is entrance exam required for admission?</h3>
                      <p className="text-gray-700">
                        <span className="font-semibold text-blue-600">No, no entrance exam is required.</span> We offer direct admission based on your 12th standard marks. This makes our admission process straightforward and stress-free compared to other pharmacy programs that require competitive entrance exams like GPAT.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* FAQ Item 2 */}
              <div className="bg-white rounded-xl shadow-md overflow-hidden border-l-4 border-blue-600 hover:shadow-lg transition duration-300">
                <div className="p-6">
                  <div className="flex items-start">
                    <div className="bg-blue-100 p-2 rounded-full mr-4">
                      <FileQuestion className="h-6 w-6 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">What is the duration of D.Pharmacy course?</h3>
                      <p className="text-gray-700">
                        The D.Pharmacy program is a <span className="font-semibold text-blue-600">2-year course</span> divided into two academic years. Each academic year consists of theoretical classes, practical sessions, and industry exposure to ensure comprehensive learning.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* FAQ Item 3 */}
              <div className="bg-white rounded-xl shadow-md overflow-hidden border-l-4 border-blue-600 hover:shadow-lg transition duration-300">
                <div className="p-6">
                  <div className="flex items-start">
                    <div className="bg-blue-100 p-2 rounded-full mr-4">
                      <FileQuestion className="h-6 w-6 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">What are the career opportunities after D.Pharmacy?</h3>
                      <p className="text-gray-700">
                        D.Pharmacy graduates have diverse career paths including:
                      </p>
                      <ul className="mt-2 space-y-1 text-gray-700 list-disc pl-5">
                        <li>Retail pharmacist in medical stores</li>
                        <li>Hospital pharmacy department</li>
                        <li>Pharmaceutical companies (manufacturing, quality control)</li>
                        <li>Government health departments</li>
                        <li>Opportunity to pursue B.Pharm through lateral entry</li>
                        <li>Self-employment by opening your own pharmacy</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              {/* FAQ Item 4 */}
              <div className="bg-white rounded-xl shadow-md overflow-hidden border-l-4 border-blue-600 hover:shadow-lg transition duration-300">
                <div className="p-6">
                  <div className="flex items-start">
                    <div className="bg-blue-100 p-2 rounded-full mr-4">
                      <FileQuestion className="h-6 w-6 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">Are hostel facilities available?</h3>
                      <p className="text-gray-700">
                        Yes, we provide <span className="font-semibold text-blue-600">separate hostel facilities for boys and girls</span> with modern amenities. Our hostels include furnished rooms, 24/7 security, mess facilities, Wi-Fi, recreation areas, and regular transportation to campus.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* FAQ Item 5 */}
              <div className="bg-white rounded-xl shadow-md overflow-hidden border-l-4 border-blue-600 hover:shadow-lg transition duration-300">
                <div className="p-6">
                  <div className="flex items-start">
                    <div className="bg-blue-100 p-2 rounded-full mr-4">
                      <FileQuestion className="h-6 w-6 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">What is the admission process?</h3>
                      <p className="text-gray-700">Our streamlined admission process involves:</p>
                      <ol className="mt-2 space-y-1 text-gray-700 list-decimal pl-5">
                        <li>Submit application through our online form</li>
                        <li>Document verification (12th marksheet, ID proof, etc.)</li>
                        <li>Merrit-based selection (based on 12th PCB/PCM marks)</li>
                        <li>Admission fee payment</li>
                        <li>Orientation and commencement of classes</li>
                      </ol>
                    </div>
                  </div>
                </div>
              </div>

              {/* FAQ Item 6 */}
              <div className="bg-white rounded-xl shadow-md overflow-hidden border-l-4 border-blue-600 hover:shadow-lg transition duration-300">
                <div className="p-6">
                  <div className="flex items-start">
                    <div className="bg-blue-100 p-2 rounded-full mr-4">
                      <FileQuestion className="h-6 w-6 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">Is the institute government approved?</h3>
                      <p className="text-gray-700">
                        Yes, NextGen Pharma Academy is <span className="font-semibold text-blue-600">approved by the Pharmacy Council of India (PCI)</span> and affiliated with the relevant authorities. Our D.Pharmacy degree is recognized nationwide, allowing graduates to register as pharmacists and practice anywhere in India.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* FAQ Item 7 */}
              <div className="bg-white rounded-xl shadow-md overflow-hidden border-l-4 border-blue-600 hover:shadow-lg transition duration-300">
                <div className="p-6">
                  <div className="flex items-start">
                    <div className="bg-blue-100 p-2 rounded-full mr-4">
                      <FileQuestion className="h-6 w-6 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">What is the fee structure for D.Pharmacy?</h3>
                      <p className="text-gray-700">
                        The total program fee is ₹1,60,000 for the entire 2-year program. We offer flexible payment options including installment plans. For detailed fee information, please visit our <a href="#fees" className="text-blue-600 underline hover:text-blue-800">Fees Section</a> or contact our admission office.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* FAQ Item 8 */}
              <div className="bg-white rounded-xl shadow-md overflow-hidden border-l-4 border-blue-600 hover:shadow-lg transition duration-300">
                <div className="p-6">
                  <div className="flex items-start">
                    <div className="bg-blue-100 p-2 rounded-full mr-4">
                      <FileQuestion className="h-6 w-6 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">Do you provide placement assistance?</h3>
                      <p className="text-gray-700">
                        Yes, we have a dedicated placement cell that provides comprehensive placement assistance. We maintain strong ties with leading pharmaceutical companies, hospital chains, and retail pharmacy networks. Our placement activities include campus interviews, resume building workshops, and interview preparation sessions.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-12 text-center">
              <p className="text-gray-700 mb-4">Still have questions? We're here to help!</p>
              <a href="#enquiry-form" className="inline-block bg-blue-600 text-white px-8 py-3 rounded-full hover:bg-blue-700 hover:shadow-lg transition duration-300">
                Ask Your Question
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gradient-to-b from-white to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-block p-3 bg-blue-100 rounded-full mb-4">
              <Phone className="h-12 w-12 text-blue-600" />
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mb-2">Get In Touch</h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto mb-4"></div>
            <p className="text-gray-700 max-w-3xl mx-auto text-lg">
              Have questions about admissions or our D.Pharmacy program? Our team is here to help you every step of the way
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <div className="bg-white p-10 rounded-xl shadow-xl transform hover:shadow-2xl transition duration-300 border-t-4 border-blue-600 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-40 h-40 bg-blue-50 rounded-full -mt-20 -mr-20 z-0"></div>
              <div className="absolute bottom-0 left-0 w-40 h-40 bg-blue-50 rounded-full -mb-20 -ml-20 z-0"></div>
              
              <div className="relative z-10">
                <div className="grid md:grid-cols-3 gap-8 mb-10">
                  <div className="bg-gradient-to-br from-blue-50 to-white p-6 rounded-xl shadow-sm hover:shadow-md transition duration-300 text-center">
                    <div className="bg-white p-4 rounded-full inline-block mb-4 shadow-sm">
                      <Phone className="h-8 w-8 text-blue-600" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Call Us</h3>
                    <p className="text-xl font-semibold text-blue-600">+91 82918 07935</p>
                    <p className="text-gray-600 mt-1 text-sm">Mon-Sat, 9:00 AM - 5:00 PM</p>
                    <a href="tel:+918291807935" className="mt-4 inline-block text-blue-600 hover:text-blue-800 font-medium text-sm">
                      <Phone className="h-4 w-4 inline mr-1" /> Tap to Call
                    </a>
                  </div>
                  
                  <div className="bg-gradient-to-br from-blue-50 to-white p-6 rounded-xl shadow-sm hover:shadow-md transition duration-300 text-center">
                    <div className="bg-white p-4 rounded-full inline-block mb-4 shadow-sm">
                      <Mail className="h-8 w-8 text-blue-600" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Email Us</h3>
                    <p className="text-blue-600 font-semibold break-all">nextgenpharmaacademy@gmail.com</p>
                    <p className="text-gray-600 mt-1 text-sm">24-hour response time</p>
                    <a href="mailto:nextgenpharmaacademy@gmail.com" className="mt-4 inline-block text-blue-600 hover:text-blue-800 font-medium text-sm">
                      <Mail className="h-4 w-4 inline mr-1" /> Send Email
                    </a>
                  </div>
                  
                  <div className="bg-gradient-to-br from-blue-50 to-white p-6 rounded-xl shadow-sm hover:shadow-md transition duration-300 text-center">
                    <div className="bg-white p-4 rounded-full inline-block mb-4 shadow-sm">
                      <MessageSquare className="h-8 w-8 text-blue-600" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">WhatsApp</h3>
                    <p className="text-xl font-semibold text-blue-600">+91 82918 07935</p>
                    <p className="text-gray-600 mt-1 text-sm">Instant messaging support</p>
                    <a href="https://wa.me/918291807935" target="_blank" rel="noopener noreferrer" className="mt-4 inline-block text-blue-600 hover:text-blue-800 font-medium text-sm">
                      <MessageSquare className="h-4 w-4 inline mr-1" /> Chat Now
                    </a>
                  </div>
                </div>
                
                <div className="bg-blue-50 p-6 rounded-lg">
                  <div className="flex flex-col md:flex-row items-center justify-between">
                    <div className="mb-6 md:mb-0">
                      <h4 className="text-lg font-bold text-gray-900 mb-2">Office Hours</h4>
                      <div className="space-y-1 text-gray-700">
                        <div className="flex items-center">
                          <Clock className="h-4 w-4 text-blue-600 mr-2" />
                          <span>Monday - Friday: 9:00 AM - 5:00 PM</span>
                        </div>
                        <div className="flex items-center">
                          <Clock className="h-4 w-4 text-blue-600 mr-2" />
                          <span>Saturday: 9:00 AM - 1:00 PM</span>
                        </div>
                        <div className="flex items-center">
                          <Clock className="h-4 w-4 text-blue-600 mr-2" />
                          <span>Sunday: Closed</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex flex-col items-center">
                      <h4 className="text-lg font-bold text-gray-900 mb-3">Quick Admission Enquiry</h4>
                      <a href="#enquiry-form" className="inline-block bg-gradient-to-r from-blue-600 to-blue-700 text-white px-6 py-3 rounded-full hover:shadow-lg transform hover:scale-105 transition duration-300 font-bold">
                        Fill Admission Form
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-16 text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Connect With Us</h3>
            <div className="flex justify-center space-x-6">
              <a href="#" className="bg-blue-600 text-white p-3 rounded-full hover:bg-blue-700 transition duration-300 hover:scale-110 transform">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="#" className="bg-pink-600 text-white p-3 rounded-full hover:bg-pink-700 transition duration-300 hover:scale-110 transform">
                <Instagram className="h-6 w-6" />
              </a>
              <a href="#" className="bg-blue-400 text-white p-3 rounded-full hover:bg-blue-500 transition duration-300 hover:scale-110 transform">
                <Twitter className="h-6 w-6" />
              </a>
              <a href="#" className="bg-red-600 text-white p-3 rounded-full hover:bg-red-700 transition duration-300 hover:scale-110 transform">
                <Youtube className="h-6 w-6" />
              </a>
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
            <div className="cookie-notice bg-blue-50 p-3 rounded-md mb-4 text-sm text-center">
              <p>This form works best with cookies enabled. Please enable cookies for the best experience.</p>
            </div>
            
            {/* Direct contact options as fallback */}
            <div className="mb-6 bg-gray-50 p-4 rounded-lg">
              <p className="text-center text-gray-700 mb-3">You can also reach us directly:</p>
              <div className="flex flex-wrap justify-center gap-4">
                <a href="tel:+918291807935" className="flex items-center bg-white px-4 py-2 rounded-md shadow-sm hover:shadow-md transition-all">
                  <Phone className="h-5 w-5 text-blue-600 mr-2" />
                  <span className="font-medium">+91 82918 07935</span>
                </a>
                <a href="mailto:nextgenpharmaacademy@gmail.com" className="flex items-center bg-white px-4 py-2 rounded-md shadow-sm hover:shadow-md transition-all">
                  <Mail className="h-5 w-5 text-blue-600 mr-2" />
                  <span className="font-medium">Email Us</span>
                </a>
                <a href="https://wa.me/918291807935" target="_blank" rel="noopener noreferrer" className="flex items-center bg-white px-4 py-2 rounded-md shadow-sm hover:shadow-md transition-all">
                  <MessageSquare className="h-5 w-5 text-blue-600 mr-2" />
                  <span className="font-medium">WhatsApp</span>
                </a>
              </div>
            </div>
            
            {/* Form container with fallback */}
            <div className="form-container relative">
              {/* No JavaScript warning */}
              <noscript>
                <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-4">
                  <p className="text-yellow-700">
                    JavaScript is required to load the form. Please enable JavaScript or contact us directly using the options above.
                  </p>
                </div>
              </noscript>
              
              {/* Form loading state */}
              <div className="form-loading text-center py-8">
                <div className="inline-block animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-blue-600 mb-4"></div>
                <p className="text-lg font-medium text-gray-700">Loading form...</p>
                <p className="mt-2 text-sm text-gray-500">
                  If the form doesn't load, please <a href="https://docs.google.com/forms/d/e/1FAIpQLSdpftpzqhYe0W_22oCnoSNqYcxgsQq8zPwbWEhueqAeD_XYHg/viewform" target="_blank" rel="noopener noreferrer" className="text-blue-600 font-semibold">click here</a> to open it directly.
                </p>
              </div>
              
              {/* The iframe with sandbox attribute to prevent console errors */}
              <div className="form-iframe-container" style={{ height: "1968px", overflow: "hidden" }}>
                <iframe 
                  src="https://docs.google.com/forms/d/e/1FAIpQLSdpftpzqhYe0W_22oCnoSNqYcxgsQq8zPwbWEhueqAeD_XYHg/viewform?embedded=true" 
                  width="100%" 
                  height="100%" 
                  frameBorder="0" 
                  marginHeight={0} 
                  marginWidth={0}
                  loading="lazy"
                  title="Admission Enquiry Form"
                  sandbox="allow-scripts allow-forms allow-same-origin allow-popups allow-popups-to-escape-sandbox"
                  onLoad={() => {
                    const formContainer = document.querySelector('.form-loading');
                    if (formContainer && formContainer instanceof HTMLElement) {
                      formContainer.style.display = 'none';
                    }
                    const iframeContainer = document.querySelector('.form-iframe-container');
                    if (iframeContainer && iframeContainer instanceof HTMLElement) {
                      iframeContainer.style.display = 'block';
                    }
                  }}
                >
                  <p>Loading form...</p>
                </iframe>
              </div>
            </div>
            
            <div className="mt-6 text-center">
              <p className="text-sm text-gray-500">Your information is secure and will only be used to contact you regarding admissions.</p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-block p-3 bg-blue-100 rounded-full mb-4">
              <Users className="h-12 w-12 text-blue-600" />
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mb-2">About NextGen Pharma Academy</h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto mb-4"></div>
            <p className="text-gray-700 max-w-3xl mx-auto text-lg">
              Shaping the future of pharmacy education with excellence, innovation, and industry-focused training
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div className="relative" style={{ zIndex: 1 }}>
              <img 
                src="https://images.pexels.com/photos/4021779/pexels-photo-4021779.jpeg"
                alt="Laboratory Research"
                className="rounded-lg shadow-xl relative"
                style={{ zIndex: 1 }}
              />
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-blue-600 rounded-lg" style={{ zIndex: 0 }}></div>
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-blue-100 rounded-lg" style={{ zIndex: 0 }}></div>
            </div>
            <div className="order-2 md:order-1">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Our Mission</h3>
              <p className="mb-4">
                At NextGen Pharma Academy, our mission is to provide exceptional pharmacy education that combines theoretical knowledge with practical skills, preparing students to excel in the dynamic pharmaceutical industry.
              </p>
              <p className="mb-6">
                We are committed to fostering innovation, ethical practice, and professional excellence in our students, enabling them to make meaningful contributions to healthcare and society.
              </p>
              
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h3>
              <p className="mb-4">
                To be recognized as a center of excellence in pharmacy education, known for producing highly skilled, industry-ready professionals who lead and transform the pharmaceutical sector.
              </p>
              <p className="mb-4">
                We envision a future where our graduates are at the forefront of pharmaceutical innovation, patient care, and healthcare advancement.
              </p>
            </div>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-lg mb-16">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Why Choose NextGen Pharma Academy?</h3>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-blue-100 w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-4">
                  <Award className="h-8 w-8 text-blue-600" />
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-2">Excellence in Education</h4>
                <p className="text-gray-700">
                  PCI-approved curriculum delivered by experienced faculty with industry background
                </p>
              </div>
              <div className="text-center">
                <div className="bg-blue-100 w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-4">
                  <Microscope className="h-8 w-8 text-blue-600" />
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-2">State-of-the-Art Facilities</h4>
                <p className="text-gray-700">
                  Modern laboratories, well-stocked library, and digital learning resources
                </p>
              </div>
              <div className="text-center">
                <div className="bg-blue-100 w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-4">
                  <Briefcase className="h-8 w-8 text-blue-600" />
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-2">Industry Connections</h4>
                <p className="text-gray-700">
                  Strong ties with pharmaceutical companies for internships and placements
                </p>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Our Approach to Education</h3>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-green-100 p-2 rounded-full mr-4 mt-1">
                    <BookOpen className="h-5 w-5 text-green-600" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-gray-900 mb-1">Comprehensive Curriculum</h4>
                    <p className="text-gray-700">
                      Our curriculum is carefully designed to cover all aspects of pharmaceutical sciences, from basic principles to advanced applications, ensuring a well-rounded education.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-green-100 p-2 rounded-full mr-4 mt-1">
                    <Microscope className="h-5 w-5 text-green-600" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-gray-900 mb-1">Hands-on Training</h4>
                    <p className="text-gray-700">
                      We emphasize practical training through laboratory sessions, workshops, and industry visits, allowing students to apply theoretical knowledge in real-world scenarios.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-green-100 p-2 rounded-full mr-4 mt-1">
                    <Users className="h-5 w-5 text-green-600" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-gray-900 mb-1">Personalized Attention</h4>
                    <p className="text-gray-700">
                      With small batch sizes and dedicated mentors, we ensure that each student receives individualized guidance and support throughout their academic journey.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-green-100 p-2 rounded-full mr-4 mt-1">
                    <Lightbulb className="h-5 w-5 text-green-600" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-gray-900 mb-1">Industry-Aligned Learning</h4>
                    <p className="text-gray-700">
                      Our curriculum is regularly updated based on industry feedback to ensure that our students are equipped with the skills and knowledge demanded by employers.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="order-1 md:order-2">
              <img 
                src="https://images.pexels.com/photos/3825586/pexels-photo-3825586.jpeg"
                alt="Students in Laboratory"
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>

          <div className="mt-16 text-center">
            <a href="#enquiry-form" className="inline-block bg-gradient-to-r from-blue-600 to-blue-700 text-white px-8 py-3 rounded-full hover:shadow-lg transform hover:scale-105 transition duration-300 font-bold">
              Join NextGen Pharma Academy
            </a>
            <p className="mt-3 text-gray-600">Take the first step towards a rewarding career in pharmacy</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center mb-8">
            <img src="/nextgenlogo-removebg-preview.png" alt="NextGen Pharma Academy Logo" className="h-10 w-10" />
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