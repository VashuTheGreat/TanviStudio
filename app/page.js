"use client"

import React, { useState, useEffect } from 'react';
import { ChevronDown, Play, Star, Award, Users, Zap, CheckCircle, ArrowRight, Globe, Mic, Video, PenTool, Palette, Monitor, Search, TrendingUp, Mail, Phone, MapPin } from 'lucide-react';


const ProfessionalWebsite = () => {
  const [activeSection, setActiveSection] = useState(0);
  const [isVisible, setIsVisible] = useState({});
  const [currentTestimonial, setCurrentTestimonial] = useState(0);


  const ourServices = [
    {
      name: "Dubbing",
      src: "https://lh4.googleusercontent.com/y_P70IBxQeZby_HStyqKp3DofX01VH-bnUYQiUa7Y1enRuBrzl8TB8wKwmunVy7E9Xo-uZVz2kS2xgFju0Oebxk0XzFxbIENpdD9TrTPk9MG4iOvlmIaoyvmj-FD96bT4KYKKnhaHkDZkogoj1nFcSDuQiwEPL1QHM2GL1aPfZ7qvg5JmG_IiA=w1280",
      icon: <Mic className="w-8 h-8" />,
      description: "Professional dubbing services with native speakers"
    },
    {
      name: "Lipsync Video",
      src: "https://lh6.googleusercontent.com/PD6Av3Xv3Cc3MjkBGD_29iyLTxrlV1VyPiRfAqmbssUTFNkyzuKkTsXOOxDSzBRZQIfgYR33KZqQKIWk5e6WmIqwpIeuiGLRfU39d5tMUdrh7Ag_GX1kDjhFgJ7FtxuzoiLosGStMp0kC58j583L7fm18I56vWB_FwRm9GyH0U-mvLFnfwU-NA=w1280",
      icon: <Video className="w-8 h-8" />,
      description: "Seamless lip-sync video production"
    },
    {
      name: "FM Radio",
      src: "https://lh4.googleusercontent.com/NnhHEaDbvCQ3iKLgQsXF0nePisJlOkEsZTZ2pQ0g-sqrfkbaiuV3F9w2nmjXk5TaFu5mcaSYv4H2X6Qt-Leb094oJZfhzBlhO29PfjbJ9FDE4hMP4fw1zSVt4Hn1JKP2L8cl764XpZ2X-gkOtYn34H3xr96-2ZXagiMcgP6z87CjlxGFniXqlQ=w1280",
      icon: <Globe className="w-8 h-8" />,
      description: "Radio broadcasting and production"
    },
    {
      name: "Explainer Video",
      src: "https://lh3.googleusercontent.com/xtYSCdAeAePs04nNSrMcGc2T5fDtjBSTaW_tzOyl6qjecia82XsOa-UG4GrLndccYbiLa7f5C-zParlf2cMR4Er7aInLlX0x5AQVsw9Yz_E3JZXxAK417o4-_KOvcs3G1eBhzwPlrFH4CZNRO8I84XbUn-i4aNGXDPZZgV_AO20PilrIUWGvlg=w1280",
      icon: <Play className="w-8 h-8" />,
      description: "Engaging explainer videos for your brand"
    },
    {
      name: "Audio Book",
      src: "https://lh3.googleusercontent.com/Skii0tmxj18haEewkkznxQ3IAtZGdmtJI5f1LXoePBfbo3mYa3Dkj7Y5wUawv4kNo466YIUJ8koTTtFyG3zftxCpwYplsEkjDG-AjBxOeFeNN5g406PFpsqaaHzPJqSXu5ZbKsFOOk0eLnw_0U8nzSxFhstXt0WmcoVhUTGuLtWNWf0HXgCSLw=w1280",
      icon: <PenTool className="w-8 h-8" />,
      description: "Professional audiobook narration"
    },
    {
      name: "E-Learning",
      src: "https://lh6.googleusercontent.com/sMqHdLigcWZ_bsE3x-epdiGlya_0UIwkKM-UzSvB27-1TkcQXSZZxOx1Zv79CTD9berW8fG57SXCiX2Ma3Hls3wOa6CaHqjXOKJz2hwpc3OcaOrycrdPYzeuVvafDVW329raaTNm59M-1b6uO5DP11sajMwcVLShCp5_Xhv4hMFcplnuyrlVlQ=w1280",
      icon: <Monitor className="w-8 h-8" />,
      description: "Interactive e-learning solutions"
    }
  ];

  const services = [
    {
      title: "Ad run on Facebook/Instagram",
      image: "https://lh5.googleusercontent.com/uq93RkZMz6R6WJW-FQi0FGOvJ4PnNd3NY-7y-GrYpl4t1excWRR_2nBOnmzqfZlaFKbIwKLWvaLUYpdFOP3HWrElkBP_uDVIfZi5vsd0pevcN3aegqUydtq5R4kHaZcrnpB6q4WEhmAuRKgwJzlOd6xgh_pUf7mCbk6JIhaxSR47cuqDcy631Q=w1280",
      icon: <TrendingUp className="w-6 h-6" />,
      description: "Strategic social media advertising campaigns"
    },
    {
      title: "Video Editing Service",
      image: "https://lh6.googleusercontent.com/mNHfLQvBcXWOuu4chfGuESXidtCXcCgO_dmakQgmaZ3SDuJkY8BA_VfCq6bekyJreTd34XHj-Rdo1UhFK3QjE_QqDYDaT1F7TLmnI0v2cb3-6j24AHI1-1A7bnbMiRuSW0-87AamrEVK-cR6nww4YtVn2-QM03KUKSlNoT7JV1iwYn1udNX6NA=w1280",
      icon: <Video className="w-6 h-6" />,
      description: "Professional video editing and post-production"
    },
    {
      title: "Graphic Design",
      image: "https://lh4.googleusercontent.com/sPGyuYrSaIEFQHry6DUyLg0tXDF-obmTzsn1ZyzNRMeTuF_r9QvjFvAg-nEWliPIGVhzDFcTfKiN9wOvaaU2XxQmvIXNbLamtMHcjtzt2fgRaSHHrwqjhr3W6XNNcLbpdVOAOq4dkuliPpW-GVPVxME7yy05e9i6Wlm4UXR_23Xhf8-TQdRHyQ=w1280",
      icon: <Palette className="w-6 h-6" />,
      description: "Creative graphic design solutions"
    },
    {
      title: "Website Development",
      image: "https://lh5.googleusercontent.com/YcGxGiqMJ3PCkD8KmdUMgr1yiGzYfcFZoMF4PJIIB7ElFKzN5wCOMCcrj7Sooz6Sr7FFQf7zXLru3QR_pkKCSTBskw4qq76A8WaQSytoVIylZmZGxBoAMOUuTIg1EnnFp6gBzPmSS0LFUO_eQzSBto3aDJVAb8lzs7mIk83EvHq5co1StrkH7Q=w1280",
      icon: <Monitor className="w-6 h-6" />,
      description: "Modern website design and development"
    },
    {
      title: "Search Engine Marketing",
      image: "https://lh6.googleusercontent.com/FNxcOyvAtpfhJs3d19C3OGJ9cH2SXwyt0Jfkciw5GpALlzdIoqL4EaJQFw3bD_z3Sxeq4QIYsVkEH1UOHf-66SeVAAjs1YVnZ0oxbh9x0aN7TIz_4IiTwn5aZf2ANGiyr9S4NPX9BBRycUr1HvYn8g8FBb08IPP1KLdLZKLvS09-Cznld05tew=w1280",
      icon: <Search className="w-6 h-6" />,
      description: "Strategic search engine marketing"
    }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Marketing Director",
      content: "Outstanding work! The team delivered beyond our expectations with creative solutions and timely delivery.",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b60c19a0?w=150&h=150&fit=crop&crop=face"
    },
    {
      name: "Michael Chen",
      role: "CEO, TechStart",
      content: "Professional service with incredible attention to detail. Our campaign results exceeded all projections.",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face"
    },
    {
      name: "Emily Rodriguez",
      role: "Brand Manager",
      content: "The creative team understood our vision perfectly. The final product was exactly what we needed.",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face"
    }
  ];

  const stats = [
    { number: "500+", label: "Projects Completed", icon: <Award className="w-8 h-8" /> },
    { number: "50M+", label: "Views Generated", icon: <Play className="w-8 h-8" /> },
    { number: "200+", label: "Happy Clients", icon: <Users className="w-8 h-8" /> },
    { number: "7+", label: "Years Experience", icon: <Star className="w-8 h-8" /> }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(prev => ({ ...prev, [entry.target.id]: true }));
          }
        });
      },
      { threshold: 0.1, rootMargin: '50px' }
    );

    document.querySelectorAll('[id]').forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const fadeInUp = (id) => 
    `transform transition-all duration-1000 ease-out ${
      isVisible[id] ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
    }`;

  const staggeredFadeIn = (id, delay) => 
    `transform transition-all duration-1000 ease-out ${
      isVisible[id] ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
    }`;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50 text-gray-900 font-sans overflow-hidden">
      {/* Navigation */}

      {/* Hero Section */}
      <section id="hero" className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-red-500/10 via-pink-500/10 to-purple-500/10"></div>
        
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-gradient-to-r from-red-400 to-pink-400 rounded-full animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 2}s`,
                animationDuration: `${2 + Math.random() * 2}s`
              }}
            />
          ))}
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className={fadeInUp('hero')}>
            <h1 className="text-5xl md:text-7xl font-extrabold mb-6 bg-gradient-to-r from-red-600 via-pink-600 to-purple-600 bg-clip-text text-transparent animate-pulse">
              Professional Creative Solutions
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              Transform your brand with studio-quality voiceovers, expert scriptwriting, and cutting-edge digital marketing solutions. 
              <span className="text-red-600 font-semibold"> Fast delivery in 24-48 hours.</span>
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button className="group bg-gradient-to-r from-red-500 to-pink-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:shadow-2xl transform hover:scale-105 transition-all duration-300 flex items-center space-x-2">
                <span>Start Your Project</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="group border-2 border-red-500 text-red-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-red-500 hover:text-white transition-all duration-300 flex items-center space-x-2">
                <Play className="w-5 h-5" />
                <span>Watch Demo</span>
              </button>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-8 h-8 text-red-500" />
        </div>
      </section>

      {/* Stats Section */}
      <section id="stats" className="py-20 bg-white/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div
                key={index}
                className={`text-center group hover:scale-105 transition-transform duration-300 ${staggeredFadeIn('stats', index * 200)}`}
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-red-500 to-pink-600 rounded-2xl mb-4 group-hover:shadow-lg transition-shadow">
                  <div className="text-white">{stat.icon}</div>
                </div>
                <div className="text-3xl md:text-4xl font-bold text-gray-900 mb-2 group-hover:text-red-600 transition-colors">
                  {stat.number}
                </div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`text-center mb-16 ${fadeInUp('services')}`}>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-red-600 to-pink-600 bg-clip-text text-transparent">
              Our Premium Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive creative solutions delivered by industry experts with years of experience
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {ourServices.map((service, index) => (
              <div
                key={index}
                className={`group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden transform hover:scale-105 ${staggeredFadeIn('services', index * 100)}`}
              >
                <div className="aspect-w-16 aspect-h-10 relative overflow-hidden">
                  <img
                    src={service.src}
                    alt={service.name}
                    className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute top-4 left-4 p-3 bg-white/90 backdrop-blur-sm rounded-xl transform -translate-y-8 group-hover:translate-y-0 transition-transform duration-300">
                    <div className="text-red-600">{service.icon}</div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-gray-900 group-hover:text-red-600 transition-colors">
                    {service.name}
                  </h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <button className="text-red-600 font-semibold hover:text-red-700 transition-colors flex items-center space-x-2">
                    <span>Learn More</span>
                    <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-20 bg-gradient-to-br from-red-50 to-pink-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`text-center mb-16 ${fadeInUp('portfolio')}`}>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
              Our <span className="text-red-600">Award-Winning</span> Work
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Showcasing successful projects that have generated millions of views and driven exceptional results
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Animation Video Ad",
                video: "https://www.youtube.com/embed/lddkJN67GjE",
                views: "2.3M views",
                category: "Animation"
              },
              {
                title: "Hing Product Ad",
                video: "https://www.youtube.com/embed/bx4d3Nfaa10",
                views: "1.8M views",
                category: "Product"
              },
              {
                title: "Pharmacy Ad",
                video: "https://www.youtube.com/embed/sZTkPK1lpdE",
                views: "3.1M views",
                category: "Healthcare"
              }
            ].map((project, index) => (
              <div
                key={index}
                className={`group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden transform hover:scale-105 ${staggeredFadeIn('portfolio', index * 100)}`}
              >
                <div className="aspect-w-16 aspect-h-9 relative">
                  <iframe
                    className="w-full h-56 rounded-t-2xl"
                    src={project.video + "?autoplay=0&mute=1"}
                    title={project.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    frameBorder="0"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-t-2xl"></div>
                  <div className="absolute top-4 right-4 px-3 py-1 bg-red-600 text-white text-sm font-medium rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {project.category}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-gray-900 group-hover:text-red-600 transition-colors">
                    {project.title}
                  </h3>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600 flex items-center space-x-2">
                      <Play className="w-4 h-4" />
                      <span>{project.views}</span>
                    </span>
                    <button className="text-red-600 font-semibold hover:text-red-700 transition-colors">
                      View Project
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`text-center mb-16 ${fadeInUp('team')}`}>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
              Meet Our <span className="text-red-600">Expert Team</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className={`${fadeInUp('team')}`}>
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-red-500 to-pink-600 rounded-2xl blur opacity-20"></div>
                <img
                  src="https://lh6.googleusercontent.com/6Cj2Fd_OqF5VbgttC3_aJR1AzcM7XymaH0PYe-z5YEK6BPvD4l01B61ljuZTn-6yCKyy-uCH97iWeBysTqcWL28DzLddZ-BZukOQdDpePpKLXhiIW0wOLoLMO59ZqSGK5myqdvbLm8tuX0CKitKexW5OPevGEDwsDNfR_nSFThTcfp9AmiX7Cg=w1280"
                  alt="Raman Saini"
                  className="relative w-full h-96 object-cover rounded-2xl shadow-2xl"
                />
              </div>
            </div>

            <div className={`${fadeInUp('team')}`}>
              <div className="space-y-6">
                <div>
                  <h3 className="text-3xl font-bold text-gray-900 mb-2">Raman Saini</h3>
                  <p className="text-lg text-red-600 font-semibold mb-4">Video Editor & Creative Writer</p>
                  <div className="flex items-center space-x-4 mb-6">
                    <div className="flex items-center space-x-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                      ))}
                    </div>
                    <span className="text-gray-600">8+ Years Experience</span>
                  </div>
                </div>

                <div className="prose prose-lg text-gray-600">
                  <p className="mb-4">
                    Professional video editor and creative writer with over 8 years of industry experience. 
                    Specializes in crafting compelling narratives and producing high-quality video content 
                    that engages audiences and drives results.
                  </p>
                  <p>
                    From advertisement scripts to storytelling, Raman brings creativity and technical 
                    expertise to every project, ensuring your message resonates with your target audience.
                  </p>
                </div>

                <div className="flex flex-wrap gap-3">
                  {['Video Editing', 'Script Writing', 'Creative Direction', 'Post Production'].map((skill) => (
                    <span key={skill} className="px-4 py-2 bg-red-100 text-red-700 rounded-full text-sm font-medium">
                      {skill}
                    </span>
                  ))}
                </div>

                <button className="bg-gradient-to-r from-red-500 to-pink-600 text-white px-8 py-3 rounded-full font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-300">
                  Contact Raman
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className={`text-center mb-16 ${fadeInUp('testimonials')}`}>
                <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
                  What Our <span className="text-red-600">Clients Say</span>
                </h2>
              </div>
              <div className="max-w-2xl mx-auto">
                <div className="relative bg-white rounded-2xl shadow-lg p-8 text-center transition-all duration-500">
                  <img
                    src={testimonials[currentTestimonial].avatar}
                    alt={testimonials[currentTestimonial].name}
                    className="w-20 h-20 rounded-full mx-auto mb-4 object-cover"
                  />
                  <p className="text-xl text-gray-700 mb-4">&quot;{testimonials[currentTestimonial].content}&quot;</p>
                  <div className="flex items-center justify-center space-x-2 mb-2">
                    {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <div className="text-gray-900 font-semibold">{testimonials[currentTestimonial].name}</div>
                  <div className="text-gray-500 text-sm">{testimonials[currentTestimonial].role}</div>
                </div>
                <div className="flex justify-center mt-6 space-x-2">
                  {testimonials.map((_, idx) => (
                    <button
                      key={idx}
                      className={`w-3 h-3 rounded-full ${currentTestimonial === idx ? 'bg-red-600' : 'bg-gray-300'}`}
                      onClick={() => setCurrentTestimonial(idx)}
                      aria-label={`Go to testimonial ${idx + 1}`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </section>

                  </div>
                );
          };
          
          export default ProfessionalWebsite;