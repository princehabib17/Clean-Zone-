import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'motion/react';
import { DayPicker } from 'react-day-picker';
import { format } from 'date-fns';
import { 
  Sparkles, 
  MapPin, 
  Calendar, 
  Clock, 
  CheckCircle2, 
  ShieldCheck, 
  Sofa, 
  Bug, 
  Building2, 
  Paintbrush, 
  Star,
  ArrowRight,
  Menu,
  X,
  Phone,
  Mail,
  ChevronRight
} from 'lucide-react';
import 'react-day-picker/dist/style.css';
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// --- DATA & IMAGERY ---
const SERVICES = [
  {
    id: 'disinfection',
    title: 'Disinfection & Sanitization',
    desc: 'Virus and bacteria-free zones designed to provide a safe space.',
    icon: ShieldCheck,
    img: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=800&q=80',
    color: 'text-blue-500 bg-blue-50',
  },
  {
    id: 'sofa',
    title: 'Sofa & Mattress Care',
    desc: 'Keep your bed, mattress, and upholstery looking fresh and comfortable.',
    icon: Sofa,
    img: 'https://images.unsplash.com/photo-1550226891-ef816aed4a98?auto=format&fit=crop&w=800&q=80',
    color: 'text-emerald-500 bg-emerald-50',
  },
  {
    id: 'commercial',
    title: 'Commercial Cleaning',
    desc: 'Make a great impression on your clients with a pristine workspace.',
    icon: Building2,
    img: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80',
    color: 'text-amber-500 bg-amber-50',
  },
  {
    id: 'pest',
    title: 'Pest Management',
    desc: 'Complete pest and insect management solutions for homes and offices.',
    icon: Bug,
    img: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=800&q=80',
    color: 'text-rose-500 bg-rose-50',
  }
];

const TESTIMONIALS = [
  {
    name: 'Marc Roque',
    text: "Job well done clean zone girls. Nagiba itsura ng unit ko after nyo maglinis! Till next time. I'll recommend you to my other friends.",
  },
  {
    name: 'Franco Antonio Malaya',
    text: 'Our sofa hasn\'t been cleaned for more than 10 years and after having it serviced by clean zone it now looks cleaner, better and smells good!',
  },
  {
    name: 'Property PartnerPh',
    text: 'Very accommodating and responsive. Reliable and fast. Friendly staffs. Affordable rate with excellent service!',
  },
  {
    name: 'Dr. Endymion Tan',
    text: 'Thank you, Clean Zone Ph. My clinic is now coated with this new MAP 1-PRO. Clean Zone Ph!',
  }
];

// --- SECTIONS ---

const ScrollyHero = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.85]);
  const rotateX = useTransform(scrollYProgress, [0, 1], [0, 15]);
  const y = useTransform(scrollYProgress, [0, 1], [0, 400]);
  const opacity = useTransform(scrollYProgress, [0.5, 1], [1, 0]);

  return (
    <div ref={containerRef} className="h-[150vh] bg-slate-950 perspective-1000 relative">
      <motion.div 
        style={{ scale, rotateX, y, opacity }} 
        className="sticky top-0 h-screen w-full transform-style-3d origin-bottom overflow-hidden shadow-[0_0_100px_rgba(0,0,0,0.5)]"
      >
        <img 
          src="https://images.unsplash.com/photo-1628177142898-93e46e462850?auto=format&fit=crop&q=80&w=2000" 
          alt="Pristine interior space" 
          className="absolute inset-0 w-full h-full object-cover opacity-60" 
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/40 to-transparent" />
        
        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4 pt-20">
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="glass-dark border-white/20 rounded-full px-6 py-2 mb-8 flex items-center gap-3"
          >
            <div className="flex -space-x-2">
              {[1, 2, 3].map(i => (
                <img key={i} src={`https://i.pravatar.cc/100?img=${i + 15}`} className="w-8 h-8 rounded-full border-2 border-slate-900" alt="avatar" />
              ))}
            </div>
            <span className="text-white font-medium text-sm">Trusted by 10k+ in Metro Manila</span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="text-5xl md:text-7xl lg:text-[100px] font-extrabold text-white tracking-tight drop-shadow-2xl leading-[1.1] text-3d max-w-5xl"
          >
            Pristine spaces.<br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
              Elevated living.
            </span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="text-xl md:text-2xl text-slate-300 mt-6 max-w-2xl font-medium"
          >
            We curate elite cleaning, disinfection, and pest management services directly to your door.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="mt-12"
          >
            <a href="#book" className="px-10 py-5 rounded-full bg-blue-600 text-white font-bold text-lg hover:bg-blue-500 transition-colors shadow-xl shadow-blue-900/50 flex items-center gap-2">
              Book Your Service <ArrowRight className="w-5 h-5" />
            </a>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

const ImageParallaxGallery = () => {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ 
    target: containerRef, 
    offset: ["start end", "end start"] 
  });
  
  const y1 = useTransform(scrollYProgress, [0, 1], [150, -300]);
  const y2 = useTransform(scrollYProgress, [0, 1], [300, -150]);
  const rotateZ1 = useTransform(scrollYProgress, [0, 1], [3, -3]);
  const rotateZ2 = useTransform(scrollYProgress, [0, 1], [-3, 3]);

  return (
    <section ref={containerRef} id="services" className="py-40 bg-slate-50 overflow-hidden perspective-1000 relative z-10">
      <div className="text-center max-w-3xl mx-auto mb-24 px-4">
        <h2 className="text-sm font-bold tracking-widest text-blue-600 uppercase mb-4">The Standard of Clean</h2>
        <h3 className="text-4xl md:text-6xl font-bold text-slate-900 tracking-tight">
          Spaces that speak for themselves.
        </h3>
      </div>

      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-8 lg:gap-20 items-center">
         <motion.div style={{ y: y1, rotateZ: rotateZ1 }} className="rounded-[2rem] overflow-hidden shadow-2xl relative h-[600px] border px-4 py-4 bg-white/50 border-slate-200">
            <img src="https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?auto=format&fit=crop&q=80&w=1000" alt="Beautiful Clean Space" className="absolute inset-0 w-full h-full object-cover rounded-[1.5rem]" />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent rounded-[1.5rem]" />
            <div className="absolute bottom-8 left-8 right-8 glass px-8 py-6 rounded-2xl">
              <h4 className="text-2xl font-bold text-slate-900 mb-2">Deep Cleaning Experts</h4>
              <p className="text-slate-700 font-medium">Every corner, crevice, and surface restored to brand-new condition.</p>
            </div>
         </motion.div>
         
         <motion.div style={{ y: y2, rotateZ: rotateZ2 }} className="rounded-[2rem] overflow-hidden shadow-2xl relative h-[500px] border px-4 py-4 bg-white/50 border-slate-200 lg:mt-32">
            <img src="https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80&w=1000" alt="Pristine Kitchen" className="absolute inset-0 w-full h-full object-cover rounded-[1.5rem]" />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent rounded-[1.5rem]" />
            <div className="absolute bottom-8 left-8 right-8 glass px-8 py-6 rounded-2xl">
              <h4 className="text-2xl font-bold text-slate-900 mb-2">Premium Experience</h4>
              <p className="text-slate-700 font-medium">Trusted, vetted, and heavily trained professionals handling your home.</p>
            </div>
         </motion.div>
      </div>
    </section>
  )
}

const ServicesGrid = () => {
  return (
    <section className="py-32 bg-white relative z-10 border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {SERVICES.map((service, idx) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: idx * 0.1 }}
              whileHover={{ y: -8 }}
              className="bg-slate-50 border border-slate-200 rounded-3xl overflow-hidden hover:shadow-2xl hover:shadow-blue-900/5 transition-all group"
            >
              <div className="h-48 overflow-hidden relative">
                <img src={service.img} alt={service.title} className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute inset-0 bg-slate-900/10 group-hover:bg-transparent transition-colors" />
                <div className={cn("absolute top-4 left-4 w-12 h-12 rounded-xl flex items-center justify-center shadow-lg", service.color)}>
                  <service.icon className="w-6 h-6" />
                </div>
              </div>
              <div className="p-8">
                <h4 className="text-xl font-bold text-slate-900 mb-3">{service.title}</h4>
                <p className="text-slate-600 mb-6 font-medium leading-relaxed">{service.desc}</p>
                <div className="inline-flex items-center text-sm font-bold text-blue-600 transition-colors">
                  Learn more <ArrowRight className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

const BookingSection = () => {
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(new Date());
  const [selectedService, setSelectedService] = useState(SERVICES[0].id);

  return (
    <section id="book" className="py-32 bg-slate-950 text-white relative overflow-hidden z-10">
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/3 w-[800px] h-[800px] bg-blue-600/30 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/3 w-[600px] h-[600px] bg-cyan-600/20 blur-[120px] rounded-full pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          
          <div>
            <h2 className="text-5xl md:text-7xl font-bold mb-8 text-white leading-tight tracking-tight">
              Ready for a<br/>spotless space?
            </h2>
            <p className="text-slate-300 text-xl font-medium mb-12 max-w-md leading-relaxed">
              Select a date and service. Our team responds swiftly to coordinate and transform your environment.
            </p>

            <div className="glass-dark rounded-3xl p-8 hidden lg:block">
              <div className="flex items-center gap-5 mb-8">
                <div className="w-16 h-16 bg-blue-500/20 rounded-2xl flex items-center justify-center flex-shrink-0">
                  <CheckCircle2 className="w-8 h-8 text-blue-400" />
                </div>
                <div>
                  <h4 className="font-bold text-xl text-white mb-1">Trust & Safety</h4>
                  <p className="text-slate-400">All our cleaners are background-checked and highly trained.</p>
                </div>
              </div>
              <div className="flex items-center gap-5">
                <div className="w-16 h-16 bg-cyan-500/20 rounded-2xl flex items-center justify-center flex-shrink-0">
                  <Clock className="w-8 h-8 text-cyan-400" />
                </div>
                <div>
                  <h4 className="font-bold text-xl text-white mb-1">Punctuality</h4>
                  <p className="text-slate-400">We arrive on time and finish within the promised schedule.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Dynamic Booking Form */}
          <div className="bg-white rounded-[2.5rem] p-8 md:p-10 text-slate-900 shadow-2xl relative">
            <h3 className="text-3xl font-bold mb-8 flex items-center gap-3">
              <Calendar className="w-8 h-8 text-blue-600" /> Book an Appointment
            </h3>
            
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div>
                <label className="block text-sm font-bold text-slate-700 mb-3 uppercase tracking-wide">Select Service</label>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {SERVICES.map(s => (
                    <button
                      key={s.id}
                      type="button"
                      onClick={() => setSelectedService(s.id)}
                      className={cn(
                        "text-left p-4 rounded-2xl border transition-all duration-200 relative overflow-hidden",
                        selectedService === s.id 
                          ? "border-blue-600 ring-2 ring-blue-600/20 bg-blue-50 text-blue-900" 
                          : "border-slate-200 hover:border-blue-300 hover:bg-slate-50"
                      )}
                    >
                      {selectedService === s.id && <div className="absolute top-0 left-0 w-1 h-full bg-blue-600" />}
                      <span className="block font-bold">{s.title}</span>
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-sm font-bold text-slate-700 mb-3 uppercase tracking-wide">Pick a Date</label>
                <div className="border border-slate-200 rounded-2xl p-4 bg-slate-50 flex justify-center shadow-inner">
                  <DayPicker 
                    mode="single"
                    selected={selectedDate}
                    onSelect={setSelectedDate}
                    className="bg-transparent"
                    disabled={{ before: new Date() }}
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-3 uppercase tracking-wide">First Name</label>
                  <input type="text" className="w-full rounded-2xl border border-slate-200 px-5 py-4 bg-slate-50 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:bg-white transition-all font-medium" placeholder="Juan" />
                </div>
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-3 uppercase tracking-wide">Last Name</label>
                  <input type="text" className="w-full rounded-2xl border border-slate-200 px-5 py-4 bg-slate-50 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:bg-white transition-all font-medium" placeholder="Dela Cruz" />
                </div>
              </div>

              <button className="w-full py-5 bg-blue-600 text-white rounded-2xl font-bold text-lg flex justify-center items-center gap-2 hover:bg-blue-700 transition-colors shadow-lg shadow-blue-600/30 mt-8">
                Confirm Booking Request <ChevronRight className="w-6 h-6" />
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
}

// --- MAIN APP ---

export default function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-slate-50 font-sans selection:bg-blue-200 selection:text-blue-900">
      {/* Navigation Layer */}
      <nav className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300",
        isScrolled ? "bg-white/80 backdrop-blur-xl shadow-sm border-b border-slate-200 py-3" : "bg-transparent py-5 lg:py-8"
      )}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            
            {/* BRAND LOGO RESTORED AND ENHANCED */}
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-cyan-500 rounded-xl flex items-center justify-center shadow-lg shadow-blue-500/30 transform -rotate-3 hover:rotate-0 transition-transform">
                <Sparkles className="text-white w-6 h-6" />
              </div>
              <span className={cn(
                "font-extrabold text-2xl tracking-tight",
                isScrolled ? "text-slate-900" : "text-white drop-shadow-md"
              )}>
                Clean<span className="text-blue-500">Zone</span>
                <span className="text-amber-400 text-sm align-top ml-1">PH</span>
              </span>
            </div>
            
            <div className="hidden md:flex items-center space-x-10">
              <a href="#services" className={cn("text-sm font-bold transition-colors", isScrolled ? "text-slate-600 hover:text-blue-600" : "text-slate-200 hover:text-white drop-shadow-md")}>Services</a>
              <a href="#reviews" className={cn("text-sm font-bold transition-colors", isScrolled ? "text-slate-600 hover:text-blue-600" : "text-slate-200 hover:text-white drop-shadow-md")}>Reviews</a>
              <a href="#book" className={cn("text-sm font-bold transition-colors", isScrolled ? "text-slate-600 hover:text-blue-600" : "text-slate-200 hover:text-white drop-shadow-md")}>Book Now</a>
              
              <a href="#book" className={cn(
                "px-6 py-3 rounded-full font-bold text-sm transition-all shadow-lg",
                isScrolled ? "bg-slate-900 text-white hover:bg-blue-600" : "bg-white text-slate-900 hover:bg-blue-50"
              )}>
                Get a Quote
              </a>
            </div>

            <button className="md:hidden p-2" onClick={() => setMobileMenuOpen(true)}>
              <Menu className={cn("w-7 h-7", isScrolled ? "text-slate-900" : "text-white")} />
            </button>
          </div>
        </div>
      </nav>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            className="fixed inset-0 z-50 bg-slate-900"
          >
            <div className="p-4 flex justify-end">
              <button onClick={() => setMobileMenuOpen(false)} className="p-2">
                <X className="w-8 h-8 text-white" />
              </button>
            </div>
            <div className="flex flex-col items-center gap-10 pt-20">
              <a href="#services" onClick={() => setMobileMenuOpen(false)} className="text-4xl font-extrabold text-white">Services</a>
              <a href="#reviews" onClick={() => setMobileMenuOpen(false)} className="text-4xl font-extrabold text-white">Reviews</a>
              <a href="#book" onClick={() => setMobileMenuOpen(false)} className="text-4xl font-extrabold text-blue-500">Book Now</a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <main className="bg-slate-50 relative">
        <ScrollyHero />
        <ImageParallaxGallery />
        <ServicesGrid />
        <BookingSection />

        {/* TESTIMONIALS (Marquee) */}
        <section id="reviews" className="py-32 bg-white overflow-hidden relative z-10 border-t border-slate-100">
          <div className="max-w-7xl mx-auto px-6 lg:px-8 mb-16 text-center">
            <h2 className="text-4xl md:text-6xl font-bold text-slate-900 mb-6 tracking-tight">Client Testimonials</h2>
            <p className="text-slate-600 text-lg font-medium">We value your feedback! Join thousands of happy homes.</p>
          </div>

          <div className="relative flex overflow-x-hidden group">
            <div className="animate-marquee whitespace-nowrap flex gap-6 px-3">
              {[...TESTIMONIALS, ...TESTIMONIALS].map((testimonial, i) => (
                <div key={i} className="w-[350px] sm:w-[450px] flex-none whitespace-normal bg-slate-50 p-10 rounded-3xl border border-slate-200">
                  <div className="flex gap-1 text-amber-500 mb-6">
                    {[1,2,3,4,5].map(s => <Star key={s} className="w-5 h-5 fill-current" />)}
                  </div>
                  <p className="text-slate-700 text-lg italic mb-8 font-medium">"{testimonial.text}"</p>
                  <p className="font-bold text-slate-900 text-xl">{testimonial.name}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

      </main>

      {/* FOOTER */}
      <footer className="bg-slate-950 text-slate-400 py-20 relative z-10 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-16">
            <div className="col-span-1 md:col-span-1">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center">
                  <Sparkles className="text-white w-6 h-6" />
                </div>
                <span className="font-extrabold text-2xl text-white">Clean<span className="text-blue-500">Zone</span></span>
              </div>
              <p className="text-base font-medium leading-relaxed">Elevating your experience. The best professional cleaning, disinfection, and pest management in professional client engagement.</p>
            </div>
            
            <div>
              <h4 className="text-white font-bold text-lg mb-6">Contact Info</h4>
              <ul className="space-y-4 font-medium">
                <li className="flex items-start gap-4">
                  <MapPin className="w-5 h-5 mt-0.5 text-blue-500 flex-shrink-0" />
                  <span>Edsa Mandaluyong</span>
                </li>
                <li className="flex items-center gap-4">
                  <Mail className="w-5 h-5 text-blue-500 flex-shrink-0" />
                  <span>info@cleanzoneph.com</span>
                </li>
                <li className="flex items-center gap-4">
                  <Phone className="w-5 h-5 text-blue-500 flex-shrink-0" />
                  <span>02-7003-9663</span>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-bold text-lg mb-6">Operating Hours</h4>
              <ul className="space-y-4 font-medium">
                <li>Monday - Sunday</li>
                <li className="text-blue-400 font-bold">08:00 AM - 06:00 PM</li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-white font-bold text-lg mb-6">Quick Links</h4>
              <ul className="space-y-4 font-medium">
                <li><a href="#" className="hover:text-white hover:translate-x-1 inline-block transition-transform">Home</a></li>
                <li><a href="#services" className="hover:text-white hover:translate-x-1 inline-block transition-transform">About Us</a></li>
                <li><a href="#services" className="hover:text-white hover:translate-x-1 inline-block transition-transform">Quality Services</a></li>
                <li><a href="#reviews" className="hover:text-white hover:translate-x-1 inline-block transition-transform">Clientele</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-slate-800 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center text-sm font-medium">
            <p>Copyright © 2026 Clean Zone PH. All Rights Reserved.</p>
            <div className="flex gap-6 mt-4 md:mt-0">
               <a href="#" className="hover:text-white transition-colors">Facebook</a>
               <a href="#" className="hover:text-white transition-colors">Instagram</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
