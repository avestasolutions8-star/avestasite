import React, { useState, useEffect, useRef } from 'react';
import {
  Megaphone,
  TrendingUp,
  Sparkles,
  Layers,
  Database,
  Workflow,
  Bot,
  ShoppingBag,
  Store,
  GraduationCap,
  Building2,
  Send,
  Phone,
  MessageSquare,
  Mail,
  MapPin,
  Menu,
  X,
  ArrowRight
} from 'lucide-react';

const PHONE_NUMBER = "07513124456";
const WHATSAPP_NUMBER = "9647513124456";
const EMAIL_ADDRESS = "info@avesta-erp.com";
const PREFILLED_WA_MSG = "Hello Avesta Solutions, I would like to learn more about your services.";
const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(PREFILLED_WA_MSG)}`;

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Services', href: '#services' },
  { name: 'Solutions', href: '#solutions' },
  { name: 'Products', href: '#products' },
  { name: 'Principles', href: '#principles' },
  { name: 'Contact', href: '#contact' },
];

const servicesData = [
  {
    id: 'marketing',
    icon: Megaphone,
    title: 'Marketing Solutions',
    desc: 'Turn your digital presence into a business advantage. Avesta Solutions helps businesses build stronger digital identities and connect with their audiences.',
    tags: ['Digital Marketing', 'Social Media Strategy', 'Brand Development', 'Content Creation', 'Campaigns']
  },
  {
    id: 'erp-saas',
    icon: Layers,
    title: 'ERP & SaaS Systems',
    desc: 'Connect your business with smarter software. We develop modern ERP and SaaS solutions designed to bring business processes together in one digital environment.',
    tags: ['Procurement', 'Inventory', 'Operations', 'Sales', 'Financial Processes']
  },
  {
    id: 'automation-ai',
    icon: Bot,
    title: 'Automation & AI Solutions',
    desc: 'Let technology handle repetitive work. We use automation and artificial intelligence to streamline processes so teams spend less time on manual tasks.',
    tags: ['AI Workflows', 'Process Automation', 'Intelligent Assistants', 'Data Processing']
  },
  {
    id: 'retail',
    icon: ShoppingBag,
    title: 'Retail Solutions',
    desc: 'Modern tools for modern retail. Digital solutions that connect everyday retail operations with better business information.',
    tags: ['POS Systems', 'Inventory Management', 'Product Catalogs', 'Sales Tracking']
  }
];

const solutionsData = [
  {
    id: 'hospitality',
    icon: Building2,
    title: 'Hotels & Hospitality',
    desc: 'Solutions designed for digital procurement, marketplace management, operations, and business workflows.'
  },
  {
    id: 'restaurants',
    icon: Store,
    title: 'Restaurants',
    desc: 'Solutions designed for technology purchasing, inventory control, suppliers, and operational management.'
  },
  {
    id: 'education',
    icon: GraduationCap,
    title: 'Schools & Education',
    desc: 'Solutions designed for interactive digital learning experiences and engaging educational tech.'
  },
  {
    id: 'retail-industry',
    icon: ShoppingBag,
    title: 'Retail Outlets',
    desc: 'Solutions designed for sales tracking, inventory, products, customers, and daily store operations.'
  },
  {
    id: 'enterprises',
    icon: Layers,
    title: 'Companies & Enterprises',
    desc: 'Solutions designed for enterprise software, automation, AI integration, and digital transformation.'
  }
];

const productsData = [
  {
    id: 'yova-play',
    title: 'Yova Play',
    subtitle: 'Learning Through Interaction',
    category: 'Educational Platform',
    desc: 'An interactive educational game platform designed to make learning more engaging, visual, and interactive. Allows students to learn through interaction and play.',
    chips: ['Mathematics', 'English', 'Arabic', 'Science', 'Geography', 'Cognitive Focus']
  },
  {
    id: 'monika',
    title: 'Monika',
    subtitle: 'Smarter Procurement. Connected Business.',
    category: 'Procurement & Marketplace',
    desc: 'A procurement and marketplace management platform designed to help hotels, restaurants, and companies manage purchasing processes in a structured digital environment.',
    chips: ['Purchase Requests', 'Procurement Workflows', 'Supplier Management', 'Digital Approvals']
  }
];

const principlesData = [
  {
    num: '01',
    title: 'Business First',
    desc: 'We start with the business problem before choosing the technology.'
  },
  {
    num: '02',
    title: 'Built for Modern Work',
    desc: 'Our solutions are designed around connected, digital, and automated environments.'
  },
  {
    num: '03',
    title: 'Intelligent by Design',
    desc: 'We explore AI and automation where they can create meaningful improvements.'
  },
  {
    num: '04',
    title: 'Designed to Evolve',
    desc: 'Technology changes fast. Our solutions are built to grow alongside your business.'
  }
];

// Non-stop Auto-Scroll Hook (Set to 2 seconds / 2000ms)
function useContinuousAutoScroll(interval = 2000) {
  const scrollRef = useRef(null);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    const timer = setInterval(() => {
      const maxScroll = el.scrollWidth - el.clientWidth;
      if (el.scrollLeft >= maxScroll - 10) {
        el.scrollTo({ left: 0, behavior: 'smooth' });
      } else {
        const cardWidth = el.firstElementChild?.clientWidth || 300;
        el.scrollBy({ left: cardWidth + 24, behavior: 'smooth' });
      }
    }, interval);

    return () => clearInterval(timer);
  }, [interval]);

  return scrollRef;
}

export default function App() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [contactForm, setContactForm] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    service: 'General Inquiry',
    message: ''
  });

  // Auto-scroll every 2000ms (2 seconds)
  const servicesRef = useContinuousAutoScroll(2000);
  const solutionsRef = useContinuousAutoScroll(2000);
  const productsRef = useContinuousAutoScroll(2000);
  const principlesRef = useContinuousAutoScroll(2000);

  useEffect(() => {
    document.title = "Avesta Solutions";
  }, []);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const formattedMsg = `*New Website Lead*%0A*Name:* ${contactForm.name}%0A*Company:* ${contactForm.company || 'N/A'}%0A*Email:* ${contactForm.email}%0A*Phone:* ${contactForm.phone}%0A*Interest:* ${contactForm.service}%0A*Message:* ${contactForm.message}`;
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${formattedMsg}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-cyan-500 selection:text-white antialiased overflow-x-hidden">
      
      {/* HEADER / NAVBAR */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-slate-900/90 backdrop-blur-md shadow-lg py-3 border-b border-slate-800'
            : 'bg-slate-900/40 backdrop-blur-sm py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <a href="#home" className="flex items-center gap-3 group">
              <img 
                src="/avestalogo.jpg" 
                alt="Avesta Solutions Logo" 
                className="h-10 w-10 object-cover rounded-lg group-hover:scale-105 transition-transform" 
              />
              <div className="flex flex-col">
                <span className="text-lg font-black tracking-wider text-white uppercase leading-none">
                  Avesta
                </span>
                <span className="text-[10px] font-bold tracking-widest text-cyan-400 uppercase leading-tight mt-0.5">
                  Solutions
                </span>
              </div>
            </a>

            <nav className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-sm font-medium transition-colors text-slate-200 hover:text-cyan-400"
                >
                  {link.name}
                </a>
              ))}
            </nav>

            <div className="hidden md:flex items-center">
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500 hover:bg-emerald-600 text-white font-medium text-sm shadow-md transition-all hover:scale-105"
              >
                <MessageSquare className="w-4 h-4 fill-current" />
                <span>Chat on WhatsApp</span>
              </a>
            </div>

            <div className="md:hidden flex items-center">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-lg text-white hover:bg-slate-800 transition-colors"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden bg-slate-900 border-b border-slate-800 px-4 pt-4 pb-6 mt-3 space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block text-slate-300 hover:text-cyan-400 font-medium py-2 border-b border-slate-800/50"
              >
                {link.name}
              </a>
            ))}
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-emerald-500 text-white font-medium shadow-md mt-4"
            >
              <MessageSquare className="w-5 h-5 fill-current" />
              <span>Chat on WhatsApp</span>
            </a>
          </div>
        )}
      </header>

      {/* HERO SECTION */}
      <section id="home" className="relative pt-32 pb-20 md:pt-40 md:pb-32 bg-slate-950 text-white overflow-hidden">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-cyan-500/20 to-blue-600/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900 border border-slate-800 text-xs font-semibold tracking-wider text-cyan-400 uppercase">
                <Sparkles className="w-3.5 h-3.5" />
                <span>IT • DIGITAL • AUTOMATION • BUSINESS</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.15]">
                <span className="bg-gradient-to-r from-white via-slate-200 to-slate-400 bg-clip-text text-transparent">
                  Technology That Moves Your
                </span>{" "}
                <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400 bg-clip-text text-transparent">
                  Business
                </span>{" "}
                <span className="bg-gradient-to-r from-white via-slate-200 to-slate-400 bg-clip-text text-transparent">
                  Forward.
                </span>
              </h1>

              <p className="text-base sm:text-lg text-slate-400 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                Avesta Solutions builds modern IT, marketing, automation, ERP, SaaS, and retail solutions that help businesses work smarter and operate more efficiently.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
                <a
                  href={WHATSAPP_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto px-8 py-4 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold shadow-lg shadow-cyan-500/25 transition-all hover:scale-105 text-center flex items-center justify-center gap-2"
                >
                  <span>Talk to Avesta</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
                <a
                  href="#services"
                  className="w-full sm:w-auto px-8 py-4 rounded-xl bg-slate-900 text-slate-300 font-semibold border border-slate-800 hover:text-white transition-all text-center"
                >
                  Explore Our Solutions
                </a>
              </div>
            </div>

            {/* HERO VISUAL */}
            <div className="lg:col-span-5 relative">
              <div className="relative mx-auto max-w-md lg:max-w-none">
                <div className="relative rounded-3xl bg-slate-900/90 border border-slate-800 p-8 backdrop-blur-xl shadow-2xl">
                  
                  <div className="py-4 relative flex flex-col items-center justify-center gap-6">
                    <div className="relative group">
                      <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-2xl blur opacity-75 group-hover:opacity-100 transition duration-300"></div>
                      <img 
                        src="/avestalogo.jpg" 
                        alt="Avesta Solutions Logo" 
                        className="relative w-28 h-28 object-cover rounded-2xl border-2 border-slate-800 shadow-2xl"
                      />
                    </div>

                    <div className="grid grid-cols-2 gap-3 w-full">
                      <div className="p-3 rounded-xl bg-slate-800/60 border border-slate-700/50 flex items-center gap-3">
                        <Workflow className="w-5 h-5 text-cyan-400" />
                        <div className="text-left">
                          <p className="text-xs font-semibold text-white">Automation</p>
                          <p className="text-[10px] text-slate-400">Workflows</p>
                        </div>
                      </div>
                      <div className="p-3 rounded-xl bg-slate-800/60 border border-slate-700/50 flex items-center gap-3">
                        <Database className="w-5 h-5 text-blue-400" />
                        <div className="text-left">
                          <p className="text-xs font-semibold text-white">ERP Engine</p>
                          <p className="text-[10px] text-slate-400">Integrated Data</p>
                        </div>
                      </div>
                      <div className="p-3 rounded-xl bg-slate-800/60 border border-slate-700/50 flex items-center gap-3">
                        <TrendingUp className="w-5 h-5 text-emerald-400" />
                        <div className="text-left">
                          <p className="text-xs font-semibold text-white">Marketing</p>
                          <p className="text-[10px] text-slate-400">Growth Suite</p>
                        </div>
                      </div>
                      <div className="p-3 rounded-xl bg-slate-800/60 border border-slate-700/50 flex items-center gap-3">
                        <ShoppingBag className="w-5 h-5 text-purple-400" />
                        <div className="text-left">
                          <p className="text-xs font-semibold text-white">Retail Hub</p>
                          <p className="text-[10px] text-slate-400">Connected POS</p>
                        </div>
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* SERVICES CAROUSEL */}
      <section id="services" className="py-20 bg-slate-100 border-t border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs font-bold text-cyan-600 uppercase tracking-wider">Core Capabilities</span>
            <h2 className="text-3xl font-bold text-slate-900 mt-1">Our Services</h2>
          </div>

          <div 
            ref={servicesRef} 
            className="flex overflow-x-auto snap-x snap-mandatory gap-6 pb-6 scrollbar-none"
          >
            {servicesData.map((service) => {
              const IconComp = service.icon;
              return (
                <div
                  key={service.id}
                  className="snap-center shrink-0 w-[85vw] sm:w-[380px] bg-white rounded-2xl p-6 shadow-md border border-slate-200 flex flex-col justify-between"
                >
                  <div>
                    <div className="w-12 h-12 rounded-xl bg-cyan-500/10 text-cyan-600 flex items-center justify-center mb-4">
                      <IconComp className="w-6 h-6" />
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 mb-2">{service.title}</h3>
                    <p className="text-slate-600 text-sm leading-relaxed mb-6">{service.desc}</p>
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {service.tags.map((tag) => (
                      <span key={tag} className="text-[11px] px-2.5 py-1 rounded-md bg-slate-100 text-slate-600 font-medium">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* SOLUTIONS CAROUSEL */}
      <section id="solutions" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs font-bold text-blue-600 uppercase tracking-wider">Industry Solutions</span>
            <h2 className="text-3xl font-bold text-slate-900 mt-1">Tailored for Every Sector</h2>
          </div>

          <div 
            ref={solutionsRef} 
            className="flex overflow-x-auto snap-x snap-mandatory gap-6 pb-6 scrollbar-none"
          >
            {solutionsData.map((item) => {
              const IconComp = item.icon;
              return (
                <div
                  key={item.id}
                  className="snap-center shrink-0 w-[80vw] sm:w-[320px] bg-slate-900 text-white rounded-2xl p-6 shadow-xl flex flex-col justify-between border border-slate-800"
                >
                  <div>
                    <div className="w-10 h-10 rounded-lg bg-slate-800 flex items-center justify-center text-cyan-400 mb-4">
                      <IconComp className="w-5 h-5" />
                    </div>
                    <h3 className="text-lg font-bold mb-2">{item.title}</h3>
                    <p className="text-slate-400 text-xs leading-relaxed">{item.desc}</p>
                  </div>
                  <a
                    href={WHATSAPP_LINK}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-xs font-semibold text-cyan-400 mt-6"
                  >
                    <span>Learn More</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* PRODUCTS CAROUSEL */}
      <section id="products" className="py-20 bg-slate-950 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs font-bold text-cyan-400 uppercase tracking-wider">Innovations</span>
            <h2 className="text-3xl font-bold text-white mt-1">Our Products</h2>
          </div>

          <div 
            ref={productsRef} 
            className="flex overflow-x-auto snap-x snap-mandatory gap-6 pb-6 scrollbar-none"
          >
            {productsData.map((prod) => (
              <div
                key={prod.id}
                className="snap-center shrink-0 w-[90vw] sm:w-[480px] bg-slate-900 border border-slate-800 rounded-3xl p-8 flex flex-col justify-between shadow-2xl"
              >
                <div>
                  <span className="px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-400 text-[10px] font-bold uppercase border border-cyan-500/20">
                    {prod.category}
                  </span>
                  <h3 className="text-2xl font-extrabold text-white mt-4">{prod.title}</h3>
                  <p className="text-cyan-400 font-medium text-xs mt-1">{prod.subtitle}</p>
                  <p className="text-slate-300 text-xs leading-relaxed mt-4">{prod.desc}</p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-800 space-y-4">
                  <div className="flex flex-wrap gap-1.5">
                    {prod.chips.map((chip) => (
                      <span key={chip} className="text-[10px] px-2.5 py-1 rounded bg-slate-800 text-slate-400 border border-slate-700">
                        {chip}
                      </span>
                    ))}
                  </div>
                  <a
                    href={WHATSAPP_LINK}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2 py-3 rounded-xl bg-cyan-600 hover:bg-cyan-500 text-white text-xs font-semibold shadow-md"
                  >
                    <span>Inquire About {prod.title}</span>
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CORE PRINCIPLES CAROUSEL */}
      <section id="principles" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">How We Work</span>
            <h2 className="text-3xl font-bold text-slate-900 mt-1">Core Principles</h2>
          </div>

          <div 
            ref={principlesRef} 
            className="flex overflow-x-auto snap-x snap-mandatory gap-6 pb-6 scrollbar-none"
          >
            {principlesData.map((item) => (
              <div
                key={item.num}
                className="snap-center shrink-0 w-[75vw] sm:w-[280px] p-6 rounded-2xl bg-slate-50 border border-slate-200 flex flex-col justify-between"
              >
                <div>
                  <span className="text-2xl font-black text-cyan-600">{item.num}</span>
                  <h3 className="font-bold text-slate-900 text-base mt-2 mb-2">{item.title}</h3>
                  <p className="text-slate-600 text-xs leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section id="contact" className="py-20 bg-slate-50 text-slate-900 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            <div className="lg:col-span-5 space-y-6">
              <span className="text-xs font-bold text-cyan-600 uppercase tracking-wider">Get in Touch</span>
              <h2 className="text-3xl font-bold">Let's Talk</h2>
              <p className="text-slate-600 text-sm leading-relaxed">
                Tell us what you are trying to improve, automate, manage, or build.
              </p>

              <div className="space-y-3 pt-2">
                <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-sm flex items-start gap-3">
                  <Building2 className="w-5 h-5 text-cyan-600 mt-0.5 shrink-0" />
                  <div>
                    <p className="text-[10px] text-slate-400 font-semibold uppercase">Company</p>
                    <p className="font-bold text-slate-800 text-sm">Avesta Solutions</p>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-sm flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-cyan-600 mt-0.5 shrink-0" />
                  <div>
                    <p className="text-[10px] text-slate-400 font-semibold uppercase">Location</p>
                    <p className="font-medium text-slate-800 text-xs">32 Park, Erbil, Iraq</p>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-sm flex items-start gap-3">
                  <Mail className="w-5 h-5 text-cyan-600 mt-0.5 shrink-0" />
                  <div>
                    <p className="text-[10px] text-slate-400 font-semibold uppercase">Email</p>
                    <a href={`mailto:${EMAIL_ADDRESS}`} className="font-medium text-cyan-600 hover:underline text-xs">
                      {EMAIL_ADDRESS}
                    </a>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-sm flex items-start gap-3">
                  <Phone className="w-5 h-5 text-cyan-600 mt-0.5 shrink-0" />
                  <div>
                    <p className="text-[10px] text-slate-400 font-semibold uppercase">Phone / WhatsApp</p>
                    <p className="font-medium text-slate-800 text-xs">{PHONE_NUMBER}</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7">
              <form onSubmit={handleFormSubmit} className="p-8 rounded-2xl bg-white border border-slate-200 shadow-md space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 uppercase mb-1">Name</label>
                    <input
                      type="text"
                      required
                      value={contactForm.name}
                      onChange={(e) => setContactForm({ ...contactForm, name: e.target.value })}
                      placeholder="Your Full Name"
                      className="w-full px-4 py-2.5 rounded-lg border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-cyan-500"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 uppercase mb-1">Company</label>
                    <input
                      type="text"
                      value={contactForm.company}
                      onChange={(e) => setContactForm({ ...contactForm, company: e.target.value })}
                      placeholder="Company Name"
                      className="w-full px-4 py-2.5 rounded-lg border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-cyan-500"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 uppercase mb-1">Email</label>
                    <input
                      type="email"
                      required
                      value={contactForm.email}
                      onChange={(e) => setContactForm({ ...contactForm, email: e.target.value })}
                      placeholder="name@company.com"
                      className="w-full px-4 py-2.5 rounded-lg border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-cyan-500"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 uppercase mb-1">Phone</label>
                    <input
                      type="tel"
                      required
                      value={contactForm.phone}
                      onChange={(e) => setContactForm({ ...contactForm, phone: e.target.value })}
                      placeholder="0750 000 0000"
                      className="w-full px-4 py-2.5 rounded-lg border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-cyan-500"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 uppercase mb-1">Interest Area</label>
                  <select
                    value={contactForm.service}
                    onChange={(e) => setContactForm({ ...contactForm, service: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-lg border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-cyan-500 bg-white"
                  >
                    <option value="Marketing Solutions">Marketing Solutions</option>
                    <option value="ERP & SaaS Systems">ERP & SaaS Systems</option>
                    <option value="Automation & AI">Automation & AI Solutions</option>
                    <option value="Retail Solutions">Retail Solutions</option>
                    <option value="Yova Play">Yova Play Educational Tech</option>
                    <option value="Monika Platform">Monika Procurement</option>
                    <option value="General Inquiry">General Inquiry</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 uppercase mb-1">Message</label>
                  <textarea
                    rows={4}
                    required
                    value={contactForm.message}
                    onChange={(e) => setContactForm({ ...contactForm, message: e.target.value })}
                    placeholder="Tell us about your project..."
                    className="w-full px-4 py-2.5 rounded-lg border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-cyan-500"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 rounded-xl bg-cyan-600 hover:bg-cyan-500 text-white font-semibold text-sm transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Send className="w-4 h-4" />
                  <span>Send Message via WhatsApp</span>
                </button>
              </form>
            </div>

          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-slate-950 text-slate-400 py-12 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between text-xs gap-4">
          <div className="flex items-center gap-3">
            <img src="/avestalogo.jpg" alt="Avesta Solutions Logo" className="h-8 w-8 rounded object-cover" />
            <span className="text-white font-bold tracking-wider">AVESTA SOLUTIONS</span>
          </div>
          <p>© 2026 Avesta Solutions. All rights reserved.</p>
        </div>
      </footer>

    </div>
  );
}
