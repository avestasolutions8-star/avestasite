import React, { useState, useEffect } from 'react';
import {
  Megaphone,
  TrendingUp,
  Sparkles,
  Layers,
  Database,
  Cloud,
  Workflow,
  Bot,
  Brain,
  ShoppingBag,
  Store,
  Receipt,
  ShoppingCart,
  GraduationCap,
  Building2,
  Package,
  CheckCircle2,
  Send,
  Phone,
  MessageSquare,
  Menu,
  X,
  ArrowRight,
  ExternalLink,
  ChevronRight,
  Sparkle
} from 'lucide-react';

// --- CONFIGURATION & UTILS ---
const PHONE_NUMBER = "07513124456";
const WHATSAPP_NUMBER = "9647513124456";
const PREFILLED_WA_MSG = "Hello Avesta Solutions, I would like to learn more about your services.";
const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(PREFILLED_WA_MSG)}`;

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Services', href: '#services' },
  { name: 'Solutions', href: '#solutions' },
  { name: 'Products', href: '#products' },
  { name: 'Contact', href: '#contact' },
];

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

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
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
      
      {/* ==================== NAVBAR ==================== */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-slate-900/85 backdrop-blur-md shadow-lg py-3 border-b border-slate-800'
            : 'bg-slate-900/40 backdrop-blur-sm py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            
            {/* Logo Image + Brand Text */}
            <a href="#home" className="flex items-center gap-3 group">
              <img 
                src="/avestalogo.jpg" 
                alt="Avesta Solutions Logo" 
                className="h-10 w-auto object-contain rounded-md group-hover:scale-105 transition-transform" 
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

            {/* Desktop Nav Links */}
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

            {/* Desktop WhatsApp CTA */}
            <div className="hidden md:flex items-center">
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500 hover:bg-emerald-600 text-white font-medium text-sm shadow-md shadow-emerald-500/20 transition-all duration-200 hover:scale-105"
              >
                <MessageSquare className="w-4 h-4 fill-current" />
                <span>Chat on WhatsApp</span>
              </a>
            </div>

            {/* Mobile Hamburger Toggle */}
            <div className="md:hidden flex items-center">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-lg text-white hover:bg-slate-800 transition-colors"
                aria-label="Toggle menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Dropdown */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-slate-900 border-b border-slate-800 px-4 pt-4 pb-6 mt-3 space-y-3 animate-in slide-in-from-top-4 duration-200">
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
            <div className="pt-2">
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-emerald-500 text-white font-medium shadow-md"
              >
                <MessageSquare className="w-5 h-5 fill-current" />
                <span>Chat on WhatsApp</span>
              </a>
            </div>
          </div>
        )}
      </header>

      {/* ==================== HERO SECTION ==================== */}
      <section id="home" className="relative pt-32 pb-20 md:pt-40 md:pb-32 bg-slate-950 text-white overflow-hidden">
        {/* Background Gradients */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-cyan-500/20 to-blue-600/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute top-10 right-10 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Content */}
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
                Avesta Solutions builds modern IT, marketing, automation, ERP, SaaS, and retail solutions that help businesses work smarter, operate more efficiently, and embrace the future of digital business.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
                <a
                  href={WHATSAPP_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto px-8 py-4 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-semibold shadow-lg shadow-cyan-500/25 transition-all hover:scale-105 text-center flex items-center justify-center gap-2"
                >
                  <span>Talk to Avesta</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
                <a
                  href="#services"
                  className="w-full sm:w-auto px-8 py-4 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white font-semibold border border-slate-800 transition-all text-center"
                >
                  Explore Our Solutions
                </a>
              </div>
            </div>

            {/* Right Tech Visual */}
            <div className="lg:col-span-5 relative">
              <div className="relative mx-auto max-w-md lg:max-w-none">
                <div className="relative rounded-2xl bg-slate-900/80 border border-slate-800 p-6 backdrop-blur-xl shadow-2xl">
                  <div className="flex items-center justify-between pb-4 border-b border-slate-800">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-red-500/80" />
                      <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                      <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                    </div>
                    <span className="text-xs text-slate-500 font-mono">avesta-core-v2.6</span>
                  </div>

                  <div className="py-8 relative flex flex-col items-center justify-center gap-6">
                    <div className="w-20 h-20 rounded-2xl bg-gradient-to-tr from-cyan-500 to-blue-600 flex items-center justify-center shadow-xl shadow-cyan-500/30 animate-pulse">
                      <Brain className="w-10 h-10 text-white" />
                    </div>

                    <div className="grid grid-cols-2 gap-3 w-full">
                      <div className="p-3 rounded-xl bg-slate-800/60 border border-slate-700/50 flex items-center gap-3">
                        <Workflow className="w-5 h-5 text-cyan-400" />
                        <div className="text-left">
                          <p className="text-xs font-semibold text-white">Automation</p>
                          <p className="text-[10px] text-slate-400">Active Workflows</p>
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

                  <div className="pt-3 border-t border-slate-800/80 flex items-center justify-between text-xs text-slate-400">
                    <span className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                      System Operational
                    </span>
                    <span className="text-slate-500">Erbil, IQ</span>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ==================== ABOUT AVESTA ==================== */}
      <section id="about" className="py-20 md:py-28 bg-white text-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-5 order-2 lg:order-1">
              <div className="relative rounded-2xl bg-gradient-to-tr from-slate-900 to-slate-800 p-8 text-white shadow-xl overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/10 rounded-full blur-2xl" />
                <h3 className="text-lg font-semibold text-cyan-400 mb-4">Digital Modernization</h3>
                <div className="space-y-4">
                  <div className="p-4 rounded-xl bg-slate-800/80 border border-slate-700">
                    <p className="text-xs text-slate-400 font-mono">01. Strategy</p>
                    <p className="text-sm font-medium text-slate-200 mt-1">Understanding real business challenges first.</p>
                  </div>
                  <div className="p-4 rounded-xl bg-slate-800/80 border border-slate-700">
                    <p className="text-xs text-slate-400 font-mono">02. Architecture</p>
                    <p className="text-sm font-medium text-slate-200 mt-1">Designing scalable digital architecture & SaaS.</p>
                  </div>
                  <div className="p-4 rounded-xl bg-slate-800/80 border border-slate-700">
                    <p className="text-xs text-slate-400 font-mono">03. Transformation</p>
                    <p className="text-sm font-medium text-slate-200 mt-1">Deploying automation, AI, and ERP solutions.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7 order-1 lg:order-2 space-y-6">
              <div className="inline-block px-3 py-1 rounded-full bg-cyan-50 text-cyan-700 text-xs font-bold uppercase tracking-wider">
                About Avesta Solutions
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900">
                Building Better Ways to Do Business
              </h2>
              <div className="space-y-4 text-slate-600 leading-relaxed text-base">
                <p>
                  Avesta Solutions combines technology, creativity, and business thinking to help organizations move from traditional processes toward smarter digital operations.
                </p>
                <p>
                  From marketing and customer engagement to enterprise systems, automation, artificial intelligence, and retail technology, we create solutions designed around real business needs.
                </p>
                <p className="font-medium text-slate-800">
                  Our approach is simple: understand the problem, design the right solution, and use technology to make the business better.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ==================== SERVICES SECTION ==================== */}
      <section id="services" className="py-20 md:py-28 bg-slate-50 border-t border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
            <div className="inline-block px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-bold uppercase tracking-wider">
              Core Capabilities
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900">
              Solutions Built Around Your Business
            </h2>
            <p className="text-slate-600 text-base sm:text-lg">
              Technology should solve problems, not create more of them. Avesta Solutions provides practical digital solutions that help businesses improve their operations, reach customers, and prepare for what comes next.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {/* SERVICE 1 — MARKETING */}
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-200/80 hover:shadow-xl hover:-translate-y-1 transition-all group flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-amber-500/10 text-amber-600 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Megaphone className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">Marketing Solutions</h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-6">
                  Turn your digital presence into a business advantage. Avesta Solutions helps businesses build stronger digital identities and connect with their audiences through modern marketing solutions.
                </p>
                
                <div className="space-y-2 mb-8">
                  <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider block mb-2">Capabilities Include:</span>
                  <div className="flex flex-wrap gap-2">
                    {['Digital Marketing', 'Social Media Strategy', 'Brand Development', 'Content Creation', 'Digital Campaigns', 'Customer Engagement', 'Marketing Automation'].map((tag) => (
                      <span key={tag} className="text-xs px-2.5 py-1 rounded-md bg-slate-100 text-slate-700 font-medium">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-semibold text-amber-600 hover:text-amber-700 pt-4 border-t border-slate-100"
              >
                <span>Learn More</span>
                <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>

            {/* SERVICE 2 — ERP & SaaS */}
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-200/80 hover:shadow-xl hover:-translate-y-1 transition-all group flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-blue-500/10 text-blue-600 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Layers className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">ERP & SaaS Systems</h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-6">
                  Connect your business with smarter software. Avesta Solutions develops modern ERP and SaaS solutions designed to bring business processes together in one digital environment.
                </p>
                
                <div className="space-y-2 mb-8">
                  <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider block mb-2">Capabilities Include:</span>
                  <div className="flex flex-wrap gap-2">
                    {['Procurement', 'Inventory', 'Operations', 'Sales', 'Workflows', 'Marketplace Management', 'Financial Processes', 'Business Data'].map((tag) => (
                      <span key={tag} className="text-xs px-2.5 py-1 rounded-md bg-slate-100 text-slate-700 font-medium">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-semibold text-blue-600 hover:text-blue-700 pt-4 border-t border-slate-100"
              >
                <span>Learn More</span>
                <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>

            {/* SERVICE 3 — AUTOMATION & AI */}
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-200/80 hover:shadow-xl hover:-translate-y-1 transition-all group flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-purple-500/10 text-purple-600 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Bot className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">Automation & AI Solutions</h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-6">
                  Let technology handle repetitive work. Avesta Solutions uses automation and artificial intelligence to streamline processes so teams spend less time on manual tasks.
                </p>
                
                <div className="space-y-2 mb-8">
                  <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider block mb-2">Capabilities Include:</span>
                  <div className="flex flex-wrap gap-2">
                    {['AI-Powered Workflows', 'Process Automation', 'Intelligent Assistants', 'Data Processing', 'Workflow Automation', 'AI Integrations', 'Business Intelligence'].map((tag) => (
                      <span key={tag} className="text-xs px-2.5 py-1 rounded-md bg-slate-100 text-slate-700 font-medium">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-semibold text-purple-600 hover:text-purple-700 pt-4 border-t border-slate-100"
              >
                <span>Learn More</span>
                <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>

            {/* SERVICE 4 — RETAIL SOLUTIONS */}
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-200/80 hover:shadow-xl hover:-translate-y-1 transition-all group flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-emerald-500/10 text-emerald-600 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <ShoppingBag className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">Retail Solutions</h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-6">
                  Modern tools for modern retail. Avesta Solutions develops digital retail solutions that connect everyday retail operations with better business information.
                </p>
                
                <div className="space-y-2 mb-8">
                  <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider block mb-2">Capabilities Include:</span>
                  <div className="flex flex-wrap gap-2">
                    {['Point-of-Sale Systems', 'Inventory Management', 'Product Catalogs', 'Sales Tracking', 'Customer CRM', 'Business Reporting', 'Digital Workflows'].map((tag) => (
                      <span key={tag} className="text-xs px-2.5 py-1 rounded-md bg-slate-100 text-slate-700 font-medium">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-semibold text-emerald-600 hover:text-emerald-700 pt-4 border-t border-slate-100"
              >
                <span>Learn More</span>
                <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>

          </div>
        </div>
      </section>

      {/* ==================== INDUSTRIES / SOLUTIONS ==================== */}
      <section id="solutions" className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
            <div className="inline-block px-3 py-1 rounded-full bg-slate-100 text-slate-700 text-xs font-bold uppercase tracking-wider">
              Industry Focus
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900">
              Technology Across Industries
            </h2>
            <p className="text-slate-600 text-base sm:text-lg">
              Different industries have different challenges. Our solutions are designed to adapt to the way businesses actually operate.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
            
            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200/80 hover:bg-slate-900 hover:text-white transition-all group">
              <Building2 className="w-8 h-8 text-cyan-600 group-hover:text-cyan-400 mb-4" />
              <h3 className="font-bold text-lg mb-2">Hotels & Hospitality</h3>
              <p className="text-xs text-slate-600 group-hover:text-slate-400 leading-relaxed">
                Solutions designed for digital procurement, marketplace management, operations, and business workflows.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200/80 hover:bg-slate-900 hover:text-white transition-all group">
              <Store className="w-8 h-8 text-blue-600 group-hover:text-blue-400 mb-4" />
              <h3 className="font-bold text-lg mb-2">Restaurants</h3>
              <p className="text-xs text-slate-600 group-hover:text-slate-400 leading-relaxed">
                Solutions designed for technology purchasing, inventory control, suppliers, and operational management.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200/80 hover:bg-slate-900 hover:text-white transition-all group">
              <GraduationCap className="w-8 h-8 text-indigo-600 group-hover:text-indigo-400 mb-4" />
              <h3 className="font-bold text-lg mb-2">Schools & Education</h3>
              <p className="text-xs text-slate-600 group-hover:text-slate-400 leading-relaxed">
                Solutions designed for interactive digital learning experiences and engaging educational tech.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200/80 hover:bg-slate-900 hover:text-white transition-all group">
              <ShoppingBag className="w-8 h-8 text-emerald-600 group-hover:text-emerald-400 mb-4" />
              <h3 className="font-bold text-lg mb-2">Retail</h3>
              <p className="text-xs text-slate-600 group-hover:text-slate-400 leading-relaxed">
                Solutions designed for sales tracking, inventory, products, customers, and daily store operations.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200/80 hover:bg-slate-900 hover:text-white transition-all group">
              <Layers className="w-8 h-8 text-purple-600 group-hover:text-purple-400 mb-4" />
              <h3 className="font-bold text-lg mb-2">Companies</h3>
              <p className="text-xs text-slate-600 group-hover:text-slate-400 leading-relaxed">
                Solutions designed for business software, automation, AI integration, marketing, and full digital transformation.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* ==================== PRODUCTS SECTION ==================== */}
      <section id="products" className="py-20 md:py-28 bg-slate-950 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto space-y-4 mb-20">
            <div className="inline-block px-3 py-1 rounded-full bg-slate-800 text-cyan-400 text-xs font-bold uppercase tracking-wider">
              In-House Innovations
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
              Our Products
            </h2>
            <p className="text-slate-400 text-base sm:text-lg">
              Avesta Solutions is building proprietary technology products to solve specific business and educational challenges.
            </p>
          </div>

          <div className="space-y-16">
            
            {/* PRODUCT 1 — YOVA PLAY */}
            <div className="rounded-3xl bg-slate-900 border border-slate-800 p-8 lg:p-12 shadow-2xl relative overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                
                {/* Text Left */}
                <div className="lg:col-span-6 space-y-6">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 text-indigo-400 text-xs font-bold uppercase tracking-wider border border-indigo-500/20">
                    Educational Platform
                  </div>
                  <div>
                    <h3 className="text-3xl lg:text-4xl font-extrabold text-white">Yova Play</h3>
                    <p className="text-indigo-400 font-medium text-lg mt-1">Learning Through Interaction.</p>
                  </div>
                  <p className="text-slate-300 text-sm leading-relaxed">
                    Yova Play is an interactive educational game platform designed to make learning more engaging, visual, and interactive. It brings educational activities into a digital environment where students can learn through interaction and play.
                  </p>

                  <div className="space-y-2">
                    <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider block">Supported Subject Areas:</span>
                    <div className="flex flex-wrap gap-2">
                      {['Mathematics', 'English', 'Arabic', 'Science', 'Geography', 'Cognitive Focus', 'Educational Games'].map((chip) => (
                        <span key={chip} className="text-xs px-3 py-1 rounded-lg bg-slate-800 text-slate-300 border border-slate-700">
                          {chip}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="pt-2">
                    <a
                      href={WHATSAPP_LINK}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-sm transition-all shadow-lg shadow-indigo-600/20"
                    >
                      <span>Discover Yova Play</span>
                      <ArrowRight className="w-4 h-4" />
                    </a>
                  </div>
                </div>

                {/* Visual Right */}
                <div className="lg:col-span-6">
                  <div className="rounded-2xl bg-gradient-to-br from-indigo-950/50 to-slate-800 border border-indigo-500/20 p-6 relative flex flex-col items-center justify-center min-h-[280px]">
                    <div className="w-full max-w-sm rounded-xl bg-slate-950 p-4 border border-slate-800 shadow-xl space-y-4">
                      <div className="flex items-center justify-between border-b border-slate-800 pb-2">
                        <span className="text-xs font-bold text-indigo-400">Yova Play • Interactive Mode</span>
                        <span className="text-[10px] px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-400">Live Session</span>
                      </div>
                      <div className="grid grid-cols-2 gap-3 text-center">
                        <div className="p-3 rounded-lg bg-indigo-950/60 border border-indigo-800/40">
                          <p className="text-xs text-slate-400">Math Puzzle</p>
                          <p className="text-lg font-bold text-white mt-1">2 + ? = 10</p>
                        </div>
                        <div className="p-3 rounded-lg bg-purple-950/60 border border-purple-800/40">
                          <p className="text-xs text-slate-400">Geography</p>
                          <p className="text-lg font-bold text-white mt-1">Map Quiz</p>
                        </div>
                      </div>
                      <div className="p-2.5 rounded-lg bg-slate-900 text-center text-xs text-slate-400 border border-slate-800">
                        Interactive Smart Board & Tablet Ready
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </div>

            {/* PRODUCT 2 — MONIKA */}
            <div className="rounded-3xl bg-slate-900 border border-slate-800 p-8 lg:p-12 shadow-2xl relative overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                
                {/* Visual Left */}
                <div className="lg:col-span-6 order-2 lg:order-1">
                  <div className="rounded-2xl bg-gradient-to-br from-cyan-950/50 to-slate-800 border border-cyan-500/20 p-6 relative flex flex-col items-center justify-center min-h-[280px]">
                    <div className="w-full max-w-sm rounded-xl bg-slate-950 p-4 border border-slate-800 shadow-xl space-y-3">
                      <div className="flex items-center justify-between border-b border-slate-800 pb-2">
                        <span className="text-xs font-bold text-cyan-400">Monika • Procurement Core</span>
                        <span className="text-[10px] px-2 py-0.5 rounded bg-cyan-500/20 text-cyan-300">Enterprise</span>
                      </div>
                      <div className="space-y-2">
                        <div className="p-2.5 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-between">
                          <div>
                            <p className="text-xs font-semibold text-white">Purchase Request #1042</p>
                            <p className="text-[10px] text-slate-400">Hotel Supplies • Pending Approval</p>
                          </div>
                          <span className="text-xs px-2 py-0.5 rounded bg-amber-500/20 text-amber-300">Pending</span>
                        </div>
                        <div className="p-2.5 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-between">
                          <div>
                            <p className="text-xs font-semibold text-white">Marketplace Order #882</p>
                            <p className="text-[10px] text-slate-400">Direct Supplier Dispatch</p>
                          </div>
                          <span className="text-xs px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300">Approved</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Text Right */}
                <div className="lg:col-span-6 order-1 lg:order-2 space-y-6">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-400 text-xs font-bold uppercase tracking-wider border border-cyan-500/20">
                    Procurement & Marketplace
                  </div>
                  <div>
                    <h3 className="text-3xl lg:text-4xl font-extrabold text-white">Monika</h3>
                    <p className="text-cyan-400 font-medium text-lg mt-1">Smarter Procurement. Connected Business.</p>
                  </div>
                  <p className="text-slate-300 text-sm leading-relaxed">
                    Monika is a procurement and marketplace management platform designed to help hotels, restaurants, and companies manage purchasing processes in a more structured digital environment.
                  </p>

                  <div className="space-y-2">
                    <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider block">Potential Capabilities:</span>
                    <div className="flex flex-wrap gap-2">
                      {['Purchase Requests', 'Procurement Workflows', 'Supplier Management', 'Marketplace Engine', 'Digital Approvals', 'Centralized Data'].map((chip) => (
                        <span key={chip} className="text-xs px-3 py-1 rounded-lg bg-slate-800 text-slate-300 border border-slate-700">
                          {chip}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="pt-2">
                    <a
                      href={WHATSAPP_LINK}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-cyan-600 hover:bg-cyan-500 text-white font-semibold text-sm transition-all shadow-lg shadow-cyan-600/20"
                    >
                      <span>Explore Monika</span>
                      <ArrowRight className="w-4 h-4" />
                    </a>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ==================== WHY AVESTA ==================== */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
            <div className="inline-block px-3 py-1 rounded-full bg-slate-100 text-slate-700 text-xs font-bold uppercase tracking-wider">
              Core Principles
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900">
              Technology With a Purpose
            </h2>
            <p className="text-slate-600 text-base">
              We focus on practical execution, long-term scalability, and solving real operational bottlenecks.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            
            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200/80 hover:border-cyan-500 transition-all">
              <div className="w-10 h-10 rounded-xl bg-cyan-500/10 text-cyan-600 flex items-center justify-center font-bold mb-4">
                01
              </div>
              <h3 className="font-bold text-slate-900 text-lg mb-2">Business First</h3>
              <p className="text-slate-600 text-xs leading-relaxed">
                We start with the business problem before choosing the technology.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200/80 hover:border-blue-500 transition-all">
              <div className="w-10 h-10 rounded-xl bg-blue-500/10 text-blue-600 flex items-center justify-center font-bold mb-4">
                02
              </div>
              <h3 className="font-bold text-slate-900 text-lg mb-2">Built for Modern Work</h3>
              <p className="text-slate-600 text-xs leading-relaxed">
                Our solutions are designed around connected, digital, and automated environments.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200/80 hover:border-purple-500 transition-all">
              <div className="w-10 h-10 rounded-xl bg-purple-500/10 text-purple-600 flex items-center justify-center font-bold mb-4">
                03
              </div>
              <h3 className="font-bold text-slate-900 text-lg mb-2">Intelligent by Design</h3>
              <p className="text-slate-600 text-xs leading-relaxed">
                We explore AI and automation where they can create meaningful improvements.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200/80 hover:border-emerald-500 transition-all">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/10 text-emerald-600 flex items-center justify-center font-bold mb-4">
                04
              </div>
              <h3 className="font-bold text-slate-900 text-lg mb-2">Designed to Evolve</h3>
              <p className="text-slate-600 text-xs leading-relaxed">
                Technology changes. Our solutions are designed with the future in mind.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* ==================== TECHNOLOGY / INNOVATION SECTION ==================== */}
      <section className="py-20 md:py-28 bg-slate-950 text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">
            The Future of Business Is Connected
          </h2>
          <p className="text-slate-400 text-base max-w-2xl mx-auto mb-12">
            AI, automation, cloud software, data, and digital platforms are changing the way organizations operate. Avesta Solutions brings these technologies together.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3 max-w-3xl mx-auto">
            {[
              'AI', 'Automation', 'SaaS', 'ERP', 'Data Analytics', 
              'Cloud Architecture', 'Digital Marketing', 'Retail Tech', 
              'Workflows', 'Process Intelligence'
            ].map((tech) => (
              <span
                key={tech}
                className="px-4 py-2 rounded-full bg-slate-900 border border-slate-800 text-slate-300 hover:text-cyan-400 hover:border-cyan-500/50 text-sm font-medium transition-all cursor-default"
              >
                {tech}
              </span>
            ))}
          </div>

        </div>
      </section>

      {/* ==================== CONTACT CTA ==================== */}
      <section className="py-20 bg-gradient-to-r from-cyan-600 to-blue-700 text-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
            Have a Business Challenge? Let's Build the Solution.
          </h2>
          <p className="text-cyan-100 text-base max-w-2xl mx-auto">
            Whether you need a stronger digital presence, a smarter business system, an automated workflow, or a technology solution built around your organization, Avesta Solutions is ready to explore the possibilities with you.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-slate-900 hover:bg-slate-950 text-white font-semibold transition-all shadow-lg text-center flex items-center justify-center gap-2"
            >
              <MessageSquare className="w-5 h-5 fill-current text-emerald-400" />
              <span>Start a Conversation</span>
            </a>
            <a
              href={`tel:${PHONE_NUMBER}`}
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-white/10 hover:bg-white/20 text-white font-semibold backdrop-blur-md transition-all text-center flex items-center justify-center gap-2"
            >
              <Phone className="w-5 h-5" />
              <span>Call Avesta ({PHONE_NUMBER})</span>
            </a>
          </div>
        </div>
      </section>

      {/* ==================== CONTACT SECTION ==================== */}
      <section id="contact" className="py-20 md:py-28 bg-white text-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* Left Info Column */}
            <div className="lg:col-span-5 space-y-6">
              <div className="inline-block px-3 py-1 rounded-full bg-slate-100 text-slate-700 text-xs font-bold uppercase tracking-wider">
                Contact Us
              </div>
              <h2 className="text-3xl font-bold tracking-tight">Let's Talk</h2>
              <p className="text-slate-600 text-sm leading-relaxed">
                Tell us what you are trying to improve, automate, manage, or build.
              </p>

              <div className="space-y-4 pt-4">
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                  <p className="text-xs text-slate-400 font-semibold uppercase">Company</p>
                  <p className="font-bold text-slate-800 text-base">Avesta Solutions</p>
                </div>
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                  <p className="text-xs text-slate-400 font-semibold uppercase">Location</p>
                  <p className="font-medium text-slate-800 text-sm">32 Park, Erbil, Iraq</p>
                </div>
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                  <p className="text-xs text-slate-400 font-semibold uppercase">Phone / WhatsApp</p>
                  <p className="font-medium text-slate-800 text-sm">{PHONE_NUMBER}</p>
                </div>
              </div>
            </div>

            {/* Right Form Column */}
            <div className="lg:col-span-7">
              <form onSubmit={handleFormSubmit} className="p-8 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 uppercase mb-1">Name</label>
                    <input
                      type="text"
                      required
                      value={contactForm.name}
                      onChange={(e) => setContactForm({ ...contactForm, name: e.target.value })}
                      placeholder="Your Full Name"
                      className="w-full px-4 py-2.5 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-cyan-500 bg-white text-sm"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 uppercase mb-1">Company</label>
                    <input
                      type="text"
                      value={contactForm.company}
                      onChange={(e) => setContactForm({ ...contactForm, company: e.target.value })}
                      placeholder="Company Name"
                      className="w-full px-4 py-2.5 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-cyan-500 bg-white text-sm"
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
                      className="w-full px-4 py-2.5 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-cyan-500 bg-white text-sm"
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
                      className="w-full px-4 py-2.5 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-cyan-500 bg-white text-sm"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 uppercase mb-1">What can we help you with?</label>
                  <select
                    value={contactForm.service}
                    onChange={(e) => setContactForm({ ...contactForm, service: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-cyan-500 bg-white text-sm"
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
                    className="w-full px-4 py-2.5 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-cyan-500 bg-white text-sm"
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

      {/* ==================== FLOATING WHATSAPP BUTTON ==================== */}
      <a
        href={WHATSAPP_LINK}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="fixed bottom-6 right-6 z-50 flex items-center gap-3 p-3.5 rounded-full bg-emerald-500 text-white shadow-2xl hover:bg-emerald-600 hover:scale-110 transition-all duration-300 group"
      >
        <MessageSquare className="w-6 h-6 fill-current" />
        <span className="max-w-0 overflow-hidden whitespace-nowrap group-hover:max-w-xs transition-all duration-300 text-xs font-bold pr-1">
          Chat with Avesta
        </span>
      </a>

      {/* ==================== FOOTER ==================== */}
      <footer className="bg-slate-950 text-slate-400 pt-16 pb-12 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-slate-800">
            
            {/* Col 1 */}
            <div className="space-y-4">
              <a href="#home" className="flex items-center gap-3 group">
                <img 
                  src="/avestalogo.jpg" 
                  alt="Avesta Solutions Logo" 
                  className="h-10 w-auto object-contain rounded-md brightness-110" 
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
              <p className="text-xs text-slate-400 leading-relaxed">
                Avesta Solutions provides modern IT, marketing, ERP, SaaS, automation, AI, and retail solutions for businesses and organizations.
              </p>
              <p className="text-xs font-semibold text-cyan-400">Technology. Innovation. Business Growth.</p>
            </div>

            {/* Col 2 */}
            <div>
              <p className="text-xs font-bold text-white uppercase tracking-wider mb-4">Navigation</p>
              <ul className="space-y-2 text-xs">
                {navLinks.map((link) => (
                  <li key={link.name}>
                    <a href={link.href} className="hover:text-cyan-400 transition-colors">
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Col 3 */}
            <div>
              <p className="text-xs font-bold text-white uppercase tracking-wider mb-4">Services</p>
              <ul className="space-y-2 text-xs">
                <li><a href="#services" className="hover:text-cyan-400 transition-colors">Marketing Solutions</a></li>
                <li><a href="#services" className="hover:text-cyan-400 transition-colors">ERP & SaaS Systems</a></li>
                <li><a href="#services" className="hover:text-cyan-400 transition-colors">Automation & AI Solutions</a></li>
                <li><a href="#services" className="hover:text-cyan-400 transition-colors">Retail Solutions</a></li>
              </ul>
            </div>

            {/* Col 4 */}
            <div>
              <p className="text-xs font-bold text-white uppercase tracking-wider mb-4">Contact</p>
              <ul className="space-y-2 text-xs">
                <li className="text-slate-300">32 Park, Erbil, Iraq</li>
                <li className="text-slate-300">{PHONE_NUMBER}</li>
                <li className="text-cyan-400 font-medium">avesta-erp.com</li>
              </ul>
            </div>

          </div>

          <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
            <p>© 2026 Avesta Solutions. All rights reserved.</p>
            <p className="text-[11px]">Designed with Technology & Intelligence</p>
          </div>
        </div>
      </footer>

    </div>
  );
}