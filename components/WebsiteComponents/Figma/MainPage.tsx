"use client"
import React, { useState } from 'react';
import { Heart, Users, Package, Mail, Phone, Menu, X, HandHeart, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';


function ImageWithFallback(props: { [x: string]: any; src: any; alt: any; style: any; className: any; }) {
  const [didError, setDidError] = useState(false)
  const { src, alt, style, className, ...rest } = props

  return didError ? (
    <div
      className={`inline-block bg-gray-100 text-center align-middle ${className ?? ''}`}
      style={style}
    >
      <div className="flex items-center justify-center w-full h-full">
        <img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODgiIGhlaWdodD0iODgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgc3Ryb2tlPSIjMDAwIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBvcGFjaXR5PSIuMyIgZmlsbD0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIzLjciPjxyZWN0IHg9IjE2IiB5PSIxNiIgd2lkdGg9IjU2IiBoZWlnaHQ9IjU2IiByeD0iNiIvPjxwYXRoIGQ9Im0xNiA1OCAxNi0xOCAzMiAzMiIvPjxjaXJjbGUgY3g9IjUzIiBjeT0iMzUiIHI9IjciLz48L3N2Zz4KCg==" alt="Error loading image" {...rest} data-original-url={src} />
      </div>
    </div>
  ) : (
    <img src={src} alt={alt} className={className} style={style} {...rest} onError={() => setDidError(true)} />
  )
}

export default function Component() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm z-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-2">
              <Heart className="w-7 h-7 text-orange-500 fill-orange-500" />
              <span className="text-xl text-gray-900">The Arizona Project</span>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              <button onClick={() => scrollToSection('about')} className="text-gray-600 hover:text-orange-500 transition-colors">
                About
              </button>
              <button onClick={() => scrollToSection('program')} className="text-gray-600 hover:text-orange-500 transition-colors">
                Program
              </button>
              <button onClick={() => scrollToSection('volunteer')} className="text-gray-600 hover:text-orange-500 transition-colors">
                Volunteer
              </button>
              <button onClick={() => scrollToSection('donate')} className="text-gray-600 hover:text-orange-500 transition-colors">
                Donate
              </button>
              <button onClick={() => scrollToSection('contact')} className="text-gray-600 hover:text-orange-500 transition-colors">
                Contact
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <div className="md:hidden py-4 border-t border-gray-100">
              <div className="flex flex-col gap-4">
                <button onClick={() => scrollToSection('about')} className="text-gray-600 hover:text-orange-500 transition-colors text-left">
                  About
                </button>
                <button onClick={() => scrollToSection('program')} className="text-gray-600 hover:text-orange-500 transition-colors text-left">
                  Program
                </button>
                <button onClick={() => scrollToSection('volunteer')} className="text-gray-600 hover:text-orange-500 transition-colors text-left">
                  Volunteer
                </button>
                <button onClick={() => scrollToSection('donate')} className="text-gray-600 hover:text-orange-500 transition-colors text-left">
                  Donate
                </button>
                <button onClick={() => scrollToSection('contact')} className="text-gray-600 hover:text-orange-500 transition-colors text-left">
                  Contact
                </button>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden mt-16">
        <div className="absolute inset-0 z-0">
          <ImageWithFallback 
                      src="https://images.unsplash.com/photo-1556543365-e08680c86612?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYXBweSUyMGRpdmVyc2UlMjBzdHVkZW50cyUyMGVhdGluZyUyMGx1bmNoJTIwc2Nob29sfGVufDF8fHx8MTc3ODk2NzM2MXww&ixlib=rb-4.1.0&q=80&w=1080"
                      alt="Students enjoying lunch"
                      className="w-full h-full object-cover" style={undefined}          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50"></div>
        </div>
        
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl mb-6">
            No Student Should Go Hungry
          </h1>
          <p className="text-xl sm:text-2xl mb-8 text-gray-100">
            We provide free lunches to students across Arizona
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              onClick={() => scrollToSection('donate')}
              className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-6 text-lg"
            >
              Support Us <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button 
              onClick={() => scrollToSection('about')}
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-gray-900 px-8 py-6 text-lg"
            >
              Learn More
            </Button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-orange-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center text-white">
            <div>
              <div className="text-5xl mb-2">1,000+</div>
              <div className="text-xl text-orange-100">Students Served</div>
            </div>
            <div>
              <div className="text-5xl mb-2">50+</div>
              <div className="text-xl text-orange-100">Schools Reached</div>
            </div>
            <div>
              <div className="text-5xl mb-2">200+</div>
              <div className="text-xl text-orange-100">Active Volunteers</div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl sm:text-5xl text-gray-900 mb-6">About Us</h2>
              <p className="text-lg text-gray-600 mb-6">
                The Arizona Project is dedicated to ensuring that every student has access to nutritious meals during the school day. Through third party funding and generous community support, we hope that no student has to go hungry.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                Founded with a simple mission: to remove the barrier of hunger so students can focus on learning and growing. We believe that proper nutrition is essential for academic success and overall well-being.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Card className="border-orange-200">
                  <CardContent className="pt-6">
                    <Heart className="w-8 h-8 text-orange-500 mb-3" />
                    <h3 className="text-lg mb-2 text-gray-900">Our Mission</h3>
                    <p className="text-gray-600">Feed every student in need</p>
                  </CardContent>
                </Card>
                <Card className="border-orange-200">
                  <CardContent className="pt-6">
                    <HandHeart className="w-8 h-8 text-orange-500 mb-3" />
                    <h3 className="text-lg mb-2 text-gray-900">Our Vision</h3>
                    <p className="text-gray-600">Zero hungry students in Arizona</p>
                  </CardContent>
                </Card>
              </div>
            </div>
            <div className="relative h-96 lg:h-full rounded-lg overflow-hidden shadow-2xl">
              <ImageWithFallback 
                              src="https://images.unsplash.com/photo-1675999656701-c141e77262c2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGlsZHJlbiUyMHNtaWxpbmclMjBzY2hvb2wlMjBjYWZldGVyaWF8ZW58MXx8fHwxNzc4OTY3MzYyfDA&ixlib=rb-4.1.0&q=80&w=1080"
                              alt="Children smiling"
                              className="w-full h-full object-cover" style={undefined}              />
            </div>
          </div>
        </div>
      </section>

      {/* Program Section */}
      <section id="program" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl text-gray-900 mb-6">Our Program</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We deliver free lunches to students who need them the most. Our goal is to reach as many students as possible. Via donations and volunteers, we will be able to expand our reach.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="border-none shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="pt-8 text-center">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Package className="w-8 h-8 text-orange-500" />
                </div>
                <h3 className="text-2xl mb-4 text-gray-900">Meal Preparation</h3>
                <p className="text-gray-600">
                  Fresh, nutritious meals prepared daily by our dedicated team and volunteers, ensuring quality and care in every lunch.
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="pt-8 text-center">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Users className="w-8 h-8 text-orange-500" />
                </div>
                <h3 className="text-2xl mb-4 text-gray-900">Direct Delivery</h3>
                <p className="text-gray-600">
                  Lunches delivered directly to partner schools across Arizona, ensuring students receive meals when they need them most.
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="pt-8 text-center">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Heart className="w-8 h-8 text-orange-500" />
                </div>
                <h3 className="text-2xl mb-4 text-gray-900">Community Impact</h3>
                <p className="text-gray-600">
                  Building stronger communities by ensuring every child has the nutrition they need to learn, play, and thrive.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Volunteer Section */}
      <section id="volunteer" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative h-96 lg:h-full rounded-lg overflow-hidden shadow-2xl order-2 lg:order-1">
              <ImageWithFallback 
                              src="https://images.unsplash.com/photo-1599059813005-11265ba4b4ce?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2b2x1bnRlZXJzJTIwY29tbXVuaXR5JTIwc2VydmljZSUyMGZvb2R8ZW58MXx8fHwxNzc4OTY3MzYyfDA&ixlib=rb-4.1.0&q=80&w=1080"
                              alt="Volunteers working together"
                              className="w-full h-full object-cover" style={undefined}              />
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-4xl sm:text-5xl text-gray-900 mb-6">Get Involved</h2>
              <p className="text-lg text-gray-600 mb-6">
                Want to help? Join us as a volunteer! You can assist with meal prep, delivery, or outreach. Every helping hand makes a difference in the lives of students across Arizona.
              </p>
              <div className="bg-orange-50 border-l-4 border-orange-500 p-6 mb-8">
                <h3 className="text-xl mb-3 text-gray-900">Volunteer Opportunities:</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="text-orange-500 mt-1">•</span>
                    <span>Meal preparation in our kitchen facilities</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-orange-500 mt-1">•</span>
                    <span>Lunch delivery to local schools</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-orange-500 mt-1">•</span>
                    <span>Community outreach and fundraising</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-orange-500 mt-1">•</span>
                    <span>Administrative support and coordination</span>
                  </li>
                </ul>
              </div>
              <Button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-6 text-lg">
                Sign Up to Volunteer
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Donate Section */}
      <section id="donate" className="py-20 bg-gradient-to-br from-orange-500 to-orange-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Heart className="w-16 h-16 mx-auto mb-6 fill-white" />
          <h2 className="text-4xl sm:text-5xl mb-6">Make a Difference Today</h2>
          <p className="text-xl mb-8 text-orange-100">
            Your support helps us provide nutritious meals to students in need across Arizona. Every donation, no matter the size, directly impacts a child's ability to learn and grow.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8 max-w-2xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <div className="text-3xl mb-2">$25</div>
              <div className="text-orange-100">Feeds 5 students</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <div className="text-3xl mb-2">$50</div>
              <div className="text-orange-100">Feeds 10 students</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <div className="text-3xl mb-2">$100</div>
              <div className="text-orange-100">Feeds 20 students</div>
            </div>
          </div>
          <Button className="bg-white text-orange-500 hover:bg-gray-100 px-8 py-6 text-lg">
            Donate Now
          </Button>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl sm:text-5xl text-gray-900 mb-6">Contact Us</h2>
            <p className="text-xl text-gray-600">
              Have questions? Want to learn more? We'd love to hear from you.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="border-orange-200 shadow-lg">
              <CardContent className="pt-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-orange-500" />
                  </div>
                  <div>
                    <h3 className="text-xl mb-2 text-gray-900">Email</h3>
                    <a href="mailto:thearizonaprojectinfo@gmail.com" className="text-orange-500 hover:text-orange-600 transition-colors">
                      thearizonaprojectinfo@gmail.com
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-orange-200 shadow-lg">
              <CardContent className="pt-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-orange-500" />
                  </div>
                  <div>
                    <h3 className="text-xl mb-2 text-gray-900">Phone</h3>
                    <a href="tel:4803997143" className="text-orange-500 hover:text-orange-600 transition-colors">
                      (480) 399-7143
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-2">
              <Heart className="w-6 h-6 text-orange-500 fill-orange-500" />
              <span className="text-lg text-white">The Arizona Project</span>
            </div>
            <div className="flex gap-8">
              <button onClick={() => scrollToSection('about')} className="hover:text-orange-500 transition-colors">
                About
              </button>
              <button onClick={() => scrollToSection('program')} className="hover:text-orange-500 transition-colors">
                Program
              </button>
              <button onClick={() => scrollToSection('volunteer')} className="hover:text-orange-500 transition-colors">
                Volunteer
              </button>
              <button onClick={() => scrollToSection('donate')} className="hover:text-orange-500 transition-colors">
                Donate
              </button>
              <button onClick={() => scrollToSection('contact')} className="hover:text-orange-500 transition-colors">
                Contact
              </button>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center">
            <p>© 2026 The Arizona Project. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
