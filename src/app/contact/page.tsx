// src/app/contact/page.tsx
'use client';
import React, { useState } from 'react';

const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobile: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    try {
      await new Promise(resolve => setTimeout(resolve, 2000));
      setSubmitStatus('success');
      setFormData({ name: '', email: '', mobile: '', message: '' });
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitStatus('idle'), 5000);
    }
  };

  return (
    <div className="min-h-screen bg-penta-black">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-64 h-64 bg-penta-gold/10 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-20 right-20 w-80 h-80 bg-penta-amber/10 rounded-full blur-3xl animate-pulse delay-1000" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6 text-penta-cream leading-tight">
              Let's connect and get to know each other
            </h1>
            <p className="text-lg md:text-xl text-penta-light-gray max-w-3xl leading-relaxed">
              We're here to make your journey exceptional. Whether you have questions about our services, 
              need assistance with bookings, or want to share feedback, we'd love to hear from you.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Methods Section */}
      <section className="py-16 lg:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
            
            {/* Call Us */}
            <div className="group text-center animate-fade-in-up">
              <div className="bg-gradient-dark rounded-2xl p-8 border border-penta-gold/20 hover:border-penta-gold/40 transition-all duration-300 hover:shadow-gold h-full">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-8 h-8 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-penta-cream mb-4 group-hover:text-penta-gold transition-colors duration-300">
                  Call us
                </h3>
                <p className="text-penta-light-gray mb-6 leading-relaxed">
                  Need immediate assistance? Our customer support team is available 24/7 to help you with bookings and inquiries.
                </p>
                <a 
                  href="tel:9157576555"
                  className="inline-flex items-center space-x-2 text-penta-gold hover:text-penta-warm-gold font-semibold transition-colors duration-300"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                  </svg>
                  <span>9157576555</span>
                </a>
              </div>
            </div>

            {/* Email Us */}
            <div className="group text-center animate-fade-in-up" style={{ animationDelay: '100ms' }}>
              <div className="bg-gradient-dark rounded-2xl p-8 border border-penta-gold/20 hover:border-penta-gold/40 transition-all duration-300 hover:shadow-gold h-full">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-8 h-8 text-red-600" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-penta-cream mb-4 group-hover:text-penta-gold transition-colors duration-300">
                  Email us
                </h3>
                <p className="text-penta-light-gray mb-6 leading-relaxed">
                  Send us detailed queries, feedback, or business inquiries. We'll get back to you within 24 hours.
                </p>
                <a 
                  href="mailto:info@pentacab.com"
                  className="inline-flex items-center space-x-2 text-penta-gold hover:text-penta-warm-gold font-semibold transition-colors duration-300"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                  </svg>
                  <span>info@pentacab.com</span>
                </a>
              </div>
            </div>

            {/* Social Media */}
            <div className="group text-center animate-fade-in-up" style={{ animationDelay: '200ms' }}>
              <div className="bg-gradient-dark rounded-2xl p-8 border border-penta-gold/20 hover:border-penta-gold/40 transition-all duration-300 hover:shadow-gold h-full">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-8 h-8 text-orange-600" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-penta-cream mb-4 group-hover:text-penta-gold transition-colors duration-300">
                  Social media
                </h3>
                <p className="text-penta-light-gray mb-6 leading-relaxed">
                  Follow us on social media for updates, special offers, and to connect with our community.
                </p>
                <div className="flex justify-center space-x-3">
                  {[
                    { name: 'Facebook', href: 'https://facebook.com/pentacab', color: 'hover:bg-blue-600', icon: (
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                      </svg>
                    )},
                    { name: 'Instagram', href: 'https://instagram.com/pentacab', color: 'hover:bg-pink-600', icon: (
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.988 11.987 6.62 0 11.987-5.367 11.987-11.987C24.014 5.367 18.637.001 12.017.001zM8.449 16.988c-2.458 0-4.467-2.01-4.467-4.468 0-2.458 2.009-4.467 4.467-4.467 2.458 0 4.468 2.009 4.468 4.467 0 2.458-2.01 4.468-4.468 4.468zm4.468-6.521c0-1.381-1.087-2.468-2.468-2.468-1.381 0-2.467 1.087-2.467 2.468 0 1.381 1.086 2.467 2.467 2.467 1.381 0 2.468-1.086 2.468-2.467zm5.679 6.521c-2.458 0-4.467-2.01-4.467-4.468 0-2.458 2.009-4.467 4.467-4.467 2.458 0 4.468 2.009 4.468 4.467 0 2.458-2.01 4.468-4.468 4.468z"/>
                      </svg>
                    )},
                    { name: 'Twitter', href: 'https://twitter.com/pentacab', color: 'hover:bg-blue-400', icon: (
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                      </svg>
                    )}
                  ].map((social) => (
                    <a
                      key={social.name}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`w-10 h-10 rounded-lg bg-penta-charcoal text-white flex items-center justify-center transition-all duration-300 hover:scale-110 ${social.color}`}
                      aria-label={`Follow us on ${social.name}`}
                    >
                      {social.icon}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Address Section */}
      <section className="py-16 lg:py-24 bg-penta-charcoal/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-fade-in-up">
            <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-8 h-8 text-red-600" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
              </svg>
            </div>
            <h2 className="text-3xl lg:text-4xl font-display font-bold text-penta-cream mb-6">
              Address
            </h2>
            <p className="text-lg text-penta-light-gray mb-4 leading-relaxed max-w-2xl mx-auto">
              A-1102 Kautilya 99, Nr. Taragad Underbridge, Vaishnodevi Circle S P Ring Road Tragad, Ahmedabad City, Ahmedabad, Gujarat, 382470
            </p>
            <p className="text-penta-gold font-medium">
              Visit us at our office or send mail to this address
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            
            {/* Illustration */}
            <div className="animate-slide-in-left order-2 lg:order-1">
              <div className="relative">
                {/* Decorative elements */}
                <div className="absolute top-0 right-0 w-32 h-32 opacity-20">
                  <div className="grid grid-cols-4 gap-2">
                    {Array.from({ length: 16 }).map((_, i) => (
                      <div 
                        key={i} 
                        className="w-2 h-2 bg-penta-gold rounded-full animate-pulse"
                        style={{ animationDelay: `${i * 100}ms` }}
                      />
                    ))}
                  </div>
                </div>
                
                {/* Main illustration placeholder */}
                <div className="bg-gradient-dark rounded-2xl p-8 lg:p-12 border border-penta-gold/20 text-center">
                  <div className="w-32 h-32 bg-gradient-gold rounded-full mx-auto mb-6 flex items-center justify-center">
                    <svg className="w-16 h-16 text-penta-black" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-penta-cream mb-4">Ready to Connect?</h3>
                  <p className="text-penta-light-gray">
                    We're excited to hear from you and help with all your transportation needs.
                  </p>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="animate-slide-in-right order-1 lg:order-2">
              <h2 className="text-3xl lg:text-4xl font-display font-bold text-penta-cream mb-8">
                Send us message
              </h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-penta-cream mb-2">
                      Your name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-penta-charcoal border border-penta-gold/30 rounded-lg text-penta-cream placeholder-penta-light-gray focus:border-penta-gold focus:outline-none transition-colors duration-300"
                      placeholder="Enter your full name"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-penta-cream mb-2">
                      Email address <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-penta-charcoal border border-penta-gold/30 rounded-lg text-penta-cream placeholder-penta-light-gray focus:border-penta-gold focus:outline-none transition-colors duration-300"
                      placeholder="Enter your email address"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="mobile" className="block text-sm font-medium text-penta-cream mb-2">
                    Mobile number <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="tel"
                    id="mobile"
                    name="mobile"
                    value={formData.mobile}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-penta-charcoal border border-penta-gold/30 rounded-lg text-penta-cream placeholder-penta-light-gray focus:border-penta-gold focus:outline-none transition-colors duration-300"
                    placeholder="Enter your mobile number"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-penta-cream mb-2">
                    Message <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 bg-penta-charcoal border border-penta-gold/30 rounded-lg text-penta-cream placeholder-penta-light-gray focus:border-penta-gold focus:outline-none transition-colors duration-300 resize-none"
                    placeholder="Tell us how we can help you..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-gold text-penta-black px-8 py-4 rounded-lg font-bold hover:shadow-gold-lg transition-all duration-300 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                >
                  {isSubmitting ? (
                    <span className="flex items-center justify-center space-x-2">
                      <div className="w-5 h-5 border-2 border-penta-black border-t-transparent rounded-full animate-spin" />
                      <span>Sending...</span>
                    </span>
                  ) : (
                    'Send Message'
                  )}
                </button>

                {/* Status Messages */}
                {submitStatus === 'success' && (
                  <div className="p-4 bg-green-500/20 border border-green-500/30 rounded-lg text-green-400 text-center">
                    Message sent successfully! We'll get back to you soon.
                  </div>
                )}
                
                {submitStatus === 'error' && (
                  <div className="p-4 bg-red-500/20 border border-red-500/30 rounded-lg text-red-400 text-center">
                    Something went wrong. Please try again.
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;