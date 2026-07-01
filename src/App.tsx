import { useState, useEffect } from 'react';
import {
  Phone,
  MapPin,
  Clock,
  BookOpen,
  Shield,
  Zap,
  Droplets,
  Volume2,
  Heart,
  Award,
  Sparkles,
  CheckCircle2,
  ChevronRight,
  Menu,
  X,
  MessageCircle,
  BookMarked,
  Building2,
  Instagram,
  Facebook,
  Twitter,
  ArrowUp,
  Star,
  Wind,
  Battery,
  Bath,
  SofaIcon
} from 'lucide-react';

// Loading Component
const LoadingScreen = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 2;
      });
    }, 20);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 bg-dark-blue flex flex-col items-center justify-center z-50">
      <div className="text-center">
        <div className="flex items-center justify-center gap-4 mb-8">
          <BookOpen className="w-12 h-12 text-royal-gold animate-pulse" />
          <h1 className="text-3xl md:text-4xl font-bold text-white">
            Anant <span className="text-gradient-gold">Gyan</span> Library
          </h1>
        </div>
        <div className="w-64 h-1 bg-white/20 rounded-full overflow-hidden mb-4">
          <div
            className="h-full gradient-gold rounded-full transition-all duration-100"
            style={{ width: `${progress}%` }}
          />
        </div>
        <p className="text-white/60 text-sm">Loading premium experience...</p>
      </div>
    </div>
  );
};

// Announcement Bar Component
const AnnouncementBar = () => {
  return (
    <div className="bg-gradient-to-r from-dark-blue via-dark-blue to-dark-blue py-3 overflow-hidden relative">
      <div className="announcement-scroll whitespace-nowrap flex">
        {[...Array(3)].map((_, i) => (
          <div key={i} className="flex items-center gap-8 px-4">
            <span className="flex items-center gap-2 text-white">
              <Sparkles className="w-4 h-4 text-royal-gold" />
              Admissions Open
            </span>
            <span className="text-royal-gold">•</span>
            <span className="flex items-center gap-2 text-white">
              <Star className="w-4 h-4 text-royal-gold" />
              Limited Seats Available
            </span>
            <span className="text-royal-gold">•</span>
            <span className="flex items-center gap-2 text-white">
              <CheckCircle2 className="w-4 h-4 text-royal-gold" />
              Register Online Today
            </span>
            <span className="text-royal-gold">•</span>
          </div>
        ))}
      </div>
    </div>
  );
};

// Navigation Component
const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Why Us', href: '#why-us' },
    { name: 'Fee Structure', href: '#pricing' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Admission', href: '#admission' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <>
      <AnnouncementBar />
      <nav
        className={`fixed w-full z-40 transition-all duration-300 ${
          scrolled
            ? 'bg-white/95 backdrop-blur-md shadow-lg py-3'
            : 'bg-transparent py-5'
        }`}
        style={{ top: scrolled ? 0 : '48px' }}
      >
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <a href="#home" className="flex items-center gap-3">
              <div className={`p-2 rounded-xl ${scrolled ? 'bg-dark-blue' : 'bg-white/10 backdrop-blur-sm'}`}>
                <BookOpen className={`w-7 h-7 ${scrolled ? 'text-royal-gold' : 'text-royal-gold'}`} />
              </div>
              <div>
                <h1 className={`text-xl font-bold ${scrolled ? 'text-dark-blue' : 'text-white'}`}>
                  Anant <span className="text-royal-gold">Gyan</span>
                </h1>
                <p className={`text-xs ${scrolled ? 'text-gray-500' : 'text-white/70'}`}>Library</p>
              </div>
            </a>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className={`font-medium text-sm relative group ${
                    scrolled ? 'text-gray-700 hover:text-royal-gold' : 'text-white/90 hover:text-royal-gold-light'
                  }`}
                >
                  {link.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-royal-gold transition-all group-hover:w-full" />
                </a>
              ))}
              <a
                href="https://wa.me/917209279921"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-gradient-to-r from-[25D366] to-[128C7E] text-white px-5 py-2.5 rounded-full font-medium text-sm hover:shadow-lg hover:scale-105 transition-all"
              >
                <MessageCircle className="w-4 h-4" />
                WhatsApp
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`lg:hidden p-2 rounded-lg ${scrolled ? 'text-dark-blue' : 'text-white'}`}
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 bg-white shadow-xl slide-down">
            <div className="container mx-auto px-4 py-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="block py-3 text-gray-700 hover:text-royal-gold font-medium border-b border-gray-100 last:border-0"
                >
                  {link.name}
                </a>
              ))}
              <a
                href="https://wa.me/917209279921"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 flex items-center justify-center gap-2 bg-gradient-to-r from-[25D366] to-[128C7E] text-white px-5 py-3 rounded-xl font-medium"
              >
                <MessageCircle className="w-5 h-5" />
                Chat on WhatsApp
              </a>
            </div>
          </div>
        )}
      </nav>
    </>
  );
};

// Hero Section
const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="https://images.pexels.com/photos/32626661/pexels-photo-32626661.jpeg?auto=compress&cs=tinysrgb&w=1920"
          alt="Premium Study Library"
          className="w-full h-full object-cover"
        />
        <div className="hero-overlay absolute inset-0" />
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-royal-gold/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-40 right-20 w-32 h-32 bg-royal-gold/10 rounded-full blur-3xl animate-pulse" />

      <div className="relative z-10 container mx-auto px-4 md:px-6 lg:px-8 text-center">
        <div className="animate-fade-in-up">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-6">
            <Sparkles className="w-4 h-4 text-royal-gold" />
            <span className="text-white/90 text-sm">Premium Study Environment</span>
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            Anant <span className="text-gradient-gold">Gyan</span> Library
          </h1>

          <p className="text-lg md:text-xl lg:text-2xl text-white/90 max-w-3xl mx-auto mb-10 font-light">
            A Peaceful, Clean & Premium Study Environment for Serious Students.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#admission"
              className="group relative inline-flex items-center gap-2 bg-gradient-to-r from-royal-gold to-royal-gold-dark text-white px-8 py-4 rounded-full font-semibold text-lg shadow-gold hover:shadow-lg hover:scale-105 transition-all"
            >
              Register Now
              <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="https://wa.me/917209279921"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/30 text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white/20 transition-all"
            >
              <MessageCircle className="w-5 h-5" />
              Contact on WhatsApp
            </a>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <a href="#why-us" className="text-white/60">
            <div className="w-8 h-12 rounded-full border-2 border-white/30 flex items-start justify-center pt-2">
              <div className="w-1 h-2 bg-white/60 rounded-full animate-pulse" />
            </div>
          </a>
        </div>
      </div>
    </section>
  );
};

// Why Choose Us Section
const WhyChooseSection = () => {
  const features = [
    { icon: Volume2, title: 'Peaceful Environment', desc: 'Quiet atmosphere for focused studying' },
    { icon: Sparkles, title: 'Daily Cleaning', desc: 'Hygienic and sanitized study space' },
    { icon: Building2, title: 'Spacious Study Desks', desc: 'Comfortable desks with ample space' },
    { icon: SofaIcon, title: 'Comfortable Seating', desc: 'Ergonomic chairs for long study sessions' },
    { icon: Wind, title: 'Air Conditioned', desc: 'Cool environment for comfort' },
    { icon: Droplets, title: 'Drinking Water', desc: 'Clean and cold drinking water facility' },
    { icon: Shield, title: 'CCTV Security', desc: '24/7 surveillance for safety' },
    { icon: Battery, title: 'Power Backup', desc: 'Uninterrupted study sessions' },
    { icon: Zap, title: 'Mobile Charging', desc: 'Charging points at every desk' },
    { icon: Bath, title: 'Separate Washroom', desc: 'Clean restroom facilities' },
    { icon: BookMarked, title: 'Silent Study Zone', desc: 'Dedicated quiet zones' },
    { icon: Heart, title: 'Friendly Management', desc: 'Supportive and helpful staff' },
  ];

  return (
    <section id="why-us" className="py-20 md:py-32 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-2 gradient-gold" />
      <div className="absolute top-20 right-0 w-64 h-64 bg-royal-gold/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-0 w-96 h-96 bg-dark-blue/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 md:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <span className="inline-block bg-royal-gold/10 text-royal-gold px-4 py-2 rounded-full text-sm font-semibold mb-4">
            Why Choose Us
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-dark-blue mb-4">
            Features That Set Us <span className="text-gradient-gold">Apart</span>
          </h2>
          <div className="decorative-line mx-auto" />
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            Experience a premium study environment designed for serious students who value quality, comfort, and discipline.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group glass-card rounded-2xl p-6 hover-lift hover-glow"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <div className="feature-icon group-hover:scale-110">
                <feature.icon className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-semibold text-dark-blue mb-2">{feature.title}</h3>
              <p className="text-gray-600 text-sm">{feature.desc}</p>
              <div className="flex items-center gap-1 mt-3 text-royal-gold text-sm">
                <CheckCircle2 className="w-4 h-4" />
                <span>Available</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Fee Structure Section
const FeeStructureSection = () => {
  const plans = [
    {
      title: 'Single Shift',
      price: '500',
      timings: [
        '7:00 AM – 12:00 PM',
        '12:00 PM – 5:00 PM',
        '5:00 PM – 10:00 PM',
      ],
      popular: false,
    },
    {
      title: 'Double Shift',
      price: '900',
      timings: [
        '7:00 AM – 5:00 PM',
        '12:00 PM – 10:00 PM',
        '7:00 AM – 12:00 PM + 5:00 PM – 10:00 PM',
      ],
      popular: false,
    },
    {
      title: 'Full Shift',
      price: '1300',
      timings: ['7:00 AM – 10:00 PM'],
      popular: true,
    },
  ];

  return (
    <section id="pricing" className="py-20 md:py-32 bg-dark-blue relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(212, 175, 55, 0.3) 1px, transparent 0)',
          backgroundSize: '40px 40px'
        }} />
      </div>

      <div className="container mx-auto px-4 md:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <span className="inline-block bg-royal-gold/20 text-royal-gold px-4 py-2 rounded-full text-sm font-semibold mb-4">
            Pricing Plans
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            Our Fee <span className="text-gradient-gold">Structure</span>
          </h2>
          <div className="decorative-line mx-auto" />
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            Affordable pricing with flexible shift options to suit your study schedule.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative rounded-2xl p-8 ${
                plan.popular
                  ? 'bg-gradient-to-b from-royal-gold/20 to-dark-blue border-2 border-royal-gold shadow-gold transform scale-105'
                  : 'glass-card-dark'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="bg-gradient-to-r from-royal-gold to-royal-gold-dark text-white px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider flex items-center gap-1">
                    <Star className="w-3 h-3" />
                    Most Popular
                  </span>
                </div>
              )}

              <h3 className={`text-xl font-bold mb-2 ${plan.popular ? 'text-royal-gold' : 'text-white'}`}>
                {plan.title}
              </h3>

              <div className="mb-6">
                <span className="text-4xl md:text-5xl font-bold text-white">₹{plan.price}</span>
                <span className="text-gray-400 text-lg"> / Month</span>
              </div>

              <div className="mb-8">
                <p className="text-gray-400 text-sm mb-3">Available Timings</p>
                <div className="space-y-2">
                  {plan.timings.map((time, i) => (
                    <div key={i} className={`flex items-center gap-2 text-sm ${plan.popular ? 'text-white/90' : 'text-gray-300'}`}>
                      <Clock className={`w-4 h-4 ${plan.popular ? 'text-royal-gold' : 'text-gray-500'}`} />
                      {time}
                    </div>
                  ))}
                </div>
              </div>

              <a
                href="#admission"
                className={`block text-center py-3 px-6 rounded-xl font-semibold transition-all ${
                  plan.popular
                    ? 'bg-gradient-to-r from-royal-gold to-royal-gold-dark text-white hover:shadow-lg'
                    : 'bg-white/10 text-white hover:bg-white/20'
                }`}
              >
                Register Now
              </a>
            </div>
          ))}
        </div>

        {/* Fee Policy Notice */}
        <div className="mt-16 max-w-3xl mx-auto">
          <div className="glass-card rounded-2xl p-6 md:p-8 border-l-4 border-royal-gold">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-royal-gold/10 rounded-xl hidden md:block">
                <Award className="w-8 h-8 text-royal-gold" />
              </div>
              <div>
                <h4 className="text-lg font-bold text-dark-blue mb-3">Fee Policy</h4>
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-gray-600">
                    <CheckCircle2 className="w-5 h-5 text-royal-gold" />
                    <span>Fixed Fee Structure – No Hidden Charges</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600">
                    <CheckCircle2 className="w-5 h-5 text-royal-gold" />
                    <span>First Come First Serve Basis</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600">
                    <CheckCircle2 className="w-5 h-5 text-royal-gold" />
                    <span>Admission Subject to Seat Availability</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Highlights Section
const HighlightsSection = () => {
  const stats = [
    { number: '22', label: 'Study Desks', icon: Building2 },
    { number: '365', label: 'Daily Cleaning', icon: Sparkles },
    { number: '100%', label: 'Silent Environment', icon: Volume2 },
    { number: '24/7', label: 'Power Backup', icon: Battery },
  ];

  return (
    <section className="py-20 md:py-32 bg-gradient-to-br from-gray-50 via-white to-gray-100 relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/159711/books.jpg')] bg-cover bg-center opacity-5" />

      <div className="container mx-auto px-4 md:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <span className="inline-block bg-royal-gold/10 text-royal-gold px-4 py-2 rounded-full text-sm font-semibold mb-4">
            Library Highlights
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-dark-blue mb-4">
            Numbers That <span className="text-gradient-gold">Speak</span>
          </h2>
          <div className="decorative-line mx-auto" />
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="group text-center">
              <div className="glass-card rounded-2xl p-8 hover-lift">
                <div className="feature-icon mx-auto mb-4">
                  <stat.icon className="w-8 h-8" />
                </div>
                <div className="stat-number">{stat.number}</div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Premium Study Space Banner */}
        <div className="mt-16 relative rounded-3xl overflow-hidden">
          <img
            src="https://images.pexels.com/photos/1117210/books-knowledge-school-reading-1117210.jpeg?auto=compress&cs=tinysrgb&w=1920"
            alt="Premium Study Space"
            className="w-full h-64 md:h-80 object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-dark-blue/90 to-transparent flex items-center">
            <div className="container mx-auto px-8">
              <h3 className="text-2xl md:text-4xl font-bold text-white mb-4">
                Premium Study Space<br />
                <span className="text-royal-gold">Designed for Success</span>
              </h3>
              <p className="text-white/80 max-w-lg">
                Experience a distraction-free environment where you can focus on your goals and achieve academic excellence.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Online Admission Section
const AdmissionSection = () => {
  return (
    <section id="admission" className="py-20 md:py-32 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-royal-gold/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />

      <div className="container mx-auto px-4 md:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <span className="inline-block bg-royal-gold/10 text-royal-gold px-4 py-2 rounded-full text-sm font-semibold mb-4">
              Online Admission
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-dark-blue mb-4">
              Reserve Your <span className="text-gradient-gold">Seat</span>
            </h2>
            <div className="decorative-line mx-auto" />
            <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
              Fill out the online admission form to secure your seat at Anant Gyan Library.
            </p>
          </div>

          <div className="glass-card rounded-3xl p-6 md:p-8 shadow-premium">
            {/* Google Form Embed Attempt */}
            <div className="bg-white rounded-2xl overflow-hidden">
              <div className="bg-dark-blue px-6 py-4 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 rounded-full bg-red-500" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500" />
                  <div className="w-3 h-3 rounded-full bg-green-500" />
                </div>
                <span className="text-white/60 text-sm">Admission Form</span>
              </div>

              <div className="aspect-video bg-gray-100 flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="w-20 h-20 bg-royal-gold/10 rounded-full flex items-center justify-center mx-auto mb-6">
                    <BookMarked className="w-10 h-10 text-royal-gold" />
                  </div>
                  <h3 className="text-xl font-semibold text-dark-blue mb-2">Online Admission Form</h3>
                  <p className="text-gray-500 mb-6">Click below to fill out the Google Form</p>

                  <a
                    href="https://docs.google.com/forms/d/e/1FAIpQLSfTwzfYyDGB19GoDS18gernP-xQn4PUUulArnh9S3ul9uGxzQ/viewform?usp=publish-editor"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-gradient-to-r from-dark-blue to-dark-blue/90 text-white px-8 py-4 rounded-xl font-semibold text-lg hover-lift hover-glow"
                  >
                    Apply for Admission
                    <ChevronRight className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Location Section
const LocationSection = () => {
  return (
    <section className="py-20 md:py-32 bg-dark-blue relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(255,255,255,0.3) 1px, transparent 0)',
          backgroundSize: '30px 30px'
        }} />
      </div>

      <div className="container mx-auto px-4 md:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <span className="inline-block bg-royal-gold/20 text-royal-gold px-4 py-2 rounded-full text-sm font-semibold mb-4">
            Our Location
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            Visit <span className="text-gradient-gold">Us</span>
          </h2>
          <div className="decorative-line mx-auto" />
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Address Card */}
          <div className="glass-card-dark rounded-2xl p-8">
            <div className="flex items-start gap-4 mb-6">
              <div className="p-3 bg-royal-gold/20 rounded-xl">
                <MapPin className="w-8 h-8 text-royal-gold" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-2">Address</h3>
                <p className="text-gray-300 leading-relaxed">
                  Kanti Factory Road,<br />
                  Anand Path,<br />
                  Near PNB,<br />
                  Patna, Bihar
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 mb-6">
              <div className="p-3 bg-royal-gold/20 rounded-xl">
                <Clock className="w-8 h-8 text-royal-gold" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-2">Opening Hours</h3>
                <p className="text-gray-300">7:00 AM – 10:00 PM</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="p-3 bg-royal-gold/20 rounded-xl">
                <Phone className="w-8 h-8 text-royal-gold" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-2">Call Us</h3>
                <div className="space-y-1 text-gray-300">
                  <p>7209279921</p>
                  <p>9153795439</p>
                  <p>9546701617</p>
                </div>
              </div>
            </div>
          </div>

          {/* Map */}
          <div className="map-container h-full min-h-[400px] rounded-2xl overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3579.2!2d85.1!3d25.6!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjXCsDM2JzAwLjAiTiA4NcKwMDYnMDAuMCJF!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Anant Gyan Library Location"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

// Contact Section
const ContactSection = () => {
  const contacts = [
    { phone: '7209279921', label: 'Primary Contact' },
    { phone: '9153795439', label: 'Secondary Contact' },
    { phone: '9546701617', label: 'Support' },
  ];

  return (
    <section id="contact" className="py-20 md:py-32 bg-gradient-to-b from-white to-gray-50 relative">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block bg-royal-gold/10 text-royal-gold px-4 py-2 rounded-full text-sm font-semibold mb-4">
            Get in Touch
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-dark-blue mb-4">
            Contact <span className="text-gradient-gold">Us</span>
          </h2>
          <div className="decorative-line mx-auto" />
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            Have questions? We're here to help. Reach out to us through any of the following channels.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {contacts.map((contact, index) => (
            <div key={index} className="contact-card shadow-lg">
              <div className="feature-icon mx-auto">
                <Phone className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-semibold text-dark-blue mb-1">{contact.label}</h3>
              <a
                href={`tel:${contact.phone}`}
                className="text-2xl font-bold text-royal-gold hover:text-royal-gold-dark transition-colors"
              >
                {contact.phone}
              </a>
              <p className="text-gray-500 text-sm mt-2">Available 7 AM - 10 PM</p>
            </div>
          ))}
        </div>

        {/* WhatsApp CTA */}
        <div className="text-center">
          <div className="inline-block glass-card rounded-2xl p-8 md:p-12">
            <div className="flex flex-col md:flex-row items-center gap-6">
              <div className="w-20 h-20 bg-[#25D366] rounded-full flex items-center justify-center shadow-lg">
                <MessageCircle className="w-10 h-10 text-white" />
              </div>
              <div className="text-center md:text-left">
                <h3 className="text-xl font-bold text-dark-blue mb-2">Chat with us on WhatsApp</h3>
                <p className="text-gray-600 mb-4">Get instant responses to your queries</p>
                <a
                  href="https://wa.me/917209279921"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#128C7E] text-white px-8 py-3 rounded-xl font-semibold transition-all hover-lift"
                >
                  <MessageCircle className="w-5 h-5" />
                  Chat on WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Footer Component
const Footer = () => {
  return (
    <footer className="bg-dark-blue pt-16 pb-8 relative">
      <div className="absolute top-0 left-0 right-0 h-1 gradient-gold" />

      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div>
            <a href="#home" className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-royal-gold/20 rounded-xl">
                <BookOpen className="w-7 h-7 text-royal-gold" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">
                  Anant <span className="text-royal-gold">Gyan</span>
                </h3>
                <p className="text-gray-400 text-sm">Library</p>
              </div>
            </a>
            <p className="text-royal-gold font-semibold mb-2">Peace • Discipline • Success</p>
            <p className="text-gray-400 text-sm">
              A premium study environment for serious students seeking excellence.
            </p>
          </div>

          {/* Address */}
          <div>
            <h4 className="text-white font-semibold mb-4 flex items-center gap-2">
              <MapPin className="w-5 h-5 text-royal-gold" />
              Address
            </h4>
            <address className="text-gray-400 not-italic leading-relaxed">
              Kanti Factory Road,<br />
              Anand Path,<br />
              Near PNB,<br />
              Patna, Bihar
            </address>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4 flex items-center gap-2">
              <ChevronRight className="w-5 h-5 text-royal-gold" />
              Quick Links
            </h4>
            <ul className="space-y-2">
              {['Home', 'Why Us', 'Fee Structure', 'Gallery', 'Admission', 'Contact'].map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase().replace(' ', '-')}`}
                    className="text-gray-400 hover:text-royal-gold transition-colors text-sm"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Opening Hours */}
          <div>
            <h4 className="text-white font-semibold mb-4 flex items-center gap-2">
              <Clock className="w-5 h-5 text-royal-gold" />
              Opening Hours
            </h4>
            <p className="text-gray-400 mb-4">7:00 AM – 10:00 PM</p>
            <div className="space-y-2">
              <a href="tel:7209279921" className="flex items-center gap-2 text-gray-400 hover:text-royal-gold transition-colors text-sm">
                <Phone className="w-4 h-4" />
                7209279921
              </a>
              <a href="tel:9153795439" className="flex items-center gap-2 text-gray-400 hover:text-royal-gold transition-colors text-sm">
                <Phone className="w-4 h-4" />
                9153795439
              </a>
              <a href="tel:9546701617" className="flex items-center gap-2 text-gray-400 hover:text-royal-gold transition-colors text-sm">
                <Phone className="w-4 h-4" />
                9546701617
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-gray-500 text-sm">
              © {new Date().getFullYear()} Anant Gyan Library. All rights reserved.
            </p>
            <div className="flex items-center gap-4">
              <a href="#" className="text-gray-400 hover:text-royal-gold transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-royal-gold transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-royal-gold transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

// WhatsApp Float Button
const WhatsAppButton = () => {
  return (
    <a
      href="https://wa.me/917209279921"
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-float fixed bottom-6 right-6 z-50 bg-[#25D366] hover:bg-[#128C7E] text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all group"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle className="w-7 h-7 group-hover:scale-110 transition-transform" />
      <span className="absolute -top-1 -right-1 w-4 h-4 bg-royal-gold rounded-full animate-ping" />
      <span className="absolute -top-1 -right-1 w-3 h-3 bg-royal-gold rounded-full" />
    </a>
  );
};

// Scroll to Top Button
const ScrollToTop = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggleVisible = () => {
      setVisible(window.scrollY > 300);
    };
    window.addEventListener('scroll', toggleVisible);
    return () => window.removeEventListener('scroll', toggleVisible);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-6 left-6 z-50 bg-royal-gold hover:bg-royal-gold-dark text-white p-4 rounded-full shadow-lg transition-all ${
        visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'
      }`}
      aria-label="Scroll to top"
    >
      <ArrowUp className="w-5 h-5" />
    </button>
  );
};

// Main App Component
function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading for assets
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <LoadingScreen />;
  }

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <main>
        <HeroSection />
        <WhyChooseSection />
        <FeeStructureSection />
        <HighlightsSection />
        <AdmissionSection />
        <LocationSection />
        <ContactSection />
      </main>
      <Footer />
      <WhatsAppButton />
      <ScrollToTop />
    </div>
  );
}

export default App;
