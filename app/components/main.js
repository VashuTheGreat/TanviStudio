"use client"
import React, { useState, useEffect } from 'react';
import { ChevronDown, Play, Star, ArrowRight, Menu, X } from 'lucide-react';

const AnimatedServicesPage = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeService, setActiveService] = useState(0);
  const [isVisible, setIsVisible] = useState({});

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(prev => ({
              ...prev,
              [entry.target.id]: true
            }));
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll('[data-animate]');
    elements.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const ourServices = [
    {
      name: "Dubbing",
      src: "https://lh4.googleusercontent.com/y_P70IBxQeZby_HStyqKp3DofX01VH-bnUYQiUa7Y1enRuBrzl8TB8wKwmunVy7E9Xo-uZVz2kS2xgFju0Oebxk0XzFxbIENpdD9TrTPk9MG4iOvlmIaoyvmj-FD96bT4KYKKnhaHkDZkogoj1nFcSDuQiwEPL1QHM2GL1aPfZ7qvg5JmG_IiA=w1280",
      description: "Professional voice dubbing for films, documentaries, and multimedia content"
    },
    {
      name: "Lipsync Video",
      src: "https://lh6.googleusercontent.com/PD6Av3Xv3Cc3MjkBGD_29iyLTxrlV1VyPiRfAqmbssUTFNkyzuKkTsXOOxDSzBRZQIfgYR33KZqQKIWk5e6WmIqwpIeuiGLRfU39d5tMUdrh7Ag_GX1kDjhFgJ7FtxuzoiLosGStMp0kC58j583L7fm18I56vWB_FwRm9GyH0U-mvLFnfwU-NA=w1280",
      description: "Perfect synchronization of audio and video content"
    },
    {
      name: "FM Radio",
      src: "https://lh4.googleusercontent.com/NnhHEaDbvCQ3iKLgQsXF0nePisJlOkEsZTZ2pQ0g-sqrfkbaiuV3F9w2nmjXk5TaFu5mcaSYv4H2X6Qt-Leb094oJZfhzBlhO29PfjbJ9FDE4hMP4fw1zSVt4Hn1JKP2L8cl764XpZ2X-gkOtYn34H3xr96-2ZXagiMcgP6z87CjlxGFniXqlQ=w1280",
      description: "Radio jingle creation and audio advertising solutions"
    },
    {
      name: "Explainer Video",
      src: "https://lh3.googleusercontent.com/xtYSCdAeAePs04nNSrMcGc2T5fDtjBSTaW_tzOyl6qjecia82XsOa-UG4GrLndccYbiLa7f5C-zParlf2cMR4Er7aInLlX0x5AQVsw9Yz_E3JZXxAK417o4-_KOvcs3G1eBhzwPlrFH4CZNRO8I84XbUn-i4aNGXDPZZgV_AO20PilrIUWGvlg=w1280",
      description: "Engaging animated explainer videos for business and education"
    },
    {
      name: "Audio Book",
      src: "https://lh3.googleusercontent.com/Skii0tmxj18haEewkkznxQ3IAtZGdmtJI5f1LXoePBfbo3mYa3Dkj7Y5wUawv4kNo466YIUJ8koTTtFyG3zftxCpwYplsEkjDG-AjBxOeFeNN5g406PFpsqaaHzPJqSXu5ZbKsFOOk0eLnw_0U8nzSxFhstXt0WmcoVhUTGuLtWNWf0HXgCSLw=w1280",
      description: "Professional audiobook narration and production"
    },
    {
      name: "E-Learning",
      src: "https://lh6.googleusercontent.com/sMqHdLigcWZ_bsE3x-epdiGlya_0UIwkKM-UzSvB27-1TkcQXSZZxOx1Zv79CTD9berW8fG57SXCiX2Ma3Hls3wOa6CaHqjXOKJz2hwpc3OcaOrycrdPYzeuVvafDVW329raaTNm59M-1b6uO5DP11sajMwcVLShCp5_Xhv4hMFcplnuyrlVlQ=w1280",
      description: "Interactive educational content and course materials"
    },
    {
      name: "Narration",
      src: "https://lh5.googleusercontent.com/OO-gxJ5bpygv4dVO37_9dr0bQwEcmB5rlpsgED9Fb3MWFJPxbIMJRHcIRXQoDhXr14Ht6wKa5OjfHxHoczCa6DkEvMPb-xz4EuI-mTKdcXftHvkJH-xJKyQfOze9czt7kMp83MK34IYo2Rf_x-FNukEjvqDUP2CkPUmI7r81av3FiYjwoVTM-Q=w1280",
      description: "Professional voice narration for documentaries and presentations"
    },
    {
      name: "Character Voices",
      src: "https://lh3.googleusercontent.com/X7ZRbHrqX9nOKGBO1g9udoV1YKA49-5AjkgG7KXDsFQM_foKbYmtLLSRhnykOX-Pyd5tCZmLT8724lS0YUD-TgmnyD40UqYvlvXGCFZ6BEp9cyibtdy-v52J0OarlNvpj3pDCeoKIR7hxISrAx8vQmvi4jI142Pur6hdbcUg5feQhZpSZxTvlw=w1280",
      description: "Diverse character voices for animations and cartoons"
    }
  ];

  const workExamples = [
    {
      title: "Animation Video Ad",
      video: "https://www.youtube.com/embed/lddkJN67GjE",
      category: "Animation"
    },
    {
      title: "Hing Product Ad",
      video: "https://www.youtube.com/embed/bx4d3Nfaa10",
      category: "Product"
    },
    {
      title: "Pharmacy Ad",
      video: "https://www.youtube.com/embed/sZTkPK1lpdE",
      category: "Healthcare"
    },
    {
      title: "Digital Marketing Ad",
      video: "https://www.youtube.com/embed/04uSz8t7eJM",
      category: "Marketing"
    }
  ];

  const services = [
    {
      title: "Ad run on Facebook/Instagram",
      image: "https://lh5.googleusercontent.com/uq93RkZMz6R6WJW-FQi0FGOvJ4PnNd3NY-7y-GrYpl4t1excWRR_2nBOnmzqfZlaFKbIwKLWvaLUYpdFOP3HWrElkBP_uDVIfZi5vsd0pevcN3aegqUydtq5R4kHaZcrnpB6q4WEhmAuRKgwJzlOd6xgh_pUf7mCbk6JIhaxSR47cuqDcy631Q=w1280",
      description: "Strategic social media advertising campaigns"
    },
    {
      title: "Video Editing Service",
      image: "https://lh6.googleusercontent.com/mNHfLQvBcXWOuu4chfGuESXidtCXcCgO_dmakQgmaZ3SDuJkY8BA_VfCq6bekyJreTd34XHj-Rdo1UhFK3QjE_QqDYDaT1F7TLmnI0v2cb3-6j24AHI1-1A7bnbMiRuSW0-87AamrEVK-cR6nww4YtVn2-QM03KUKSlNoT7JV1iwYn1udNX6NA=w1280",
      description: "Professional video editing and post-production"
    },
    {
      title: "Graphic Design",
      image: "https://lh4.googleusercontent.com/sPGyuYrSaIEFQHry6DUyLg0tXDF-obmTzsn1ZyzNRMeTuF_r9QvjFvAg-nEWliPIGVhzDFcTfKiN9wOvaaU2XxQmvIXNbLamtMHcjtzt2fgRaSHHrwqjhr3W6XNNcLbpdVOAOq4dkuliPpW-GVPVxME7yy05e9i6Wlm4UXR_23Xhf8-TQdRHyQ=w1280",
      description: "Creative visual design solutions"
    },
    {
      title: "Website Development",
      image: "https://lh5.googleusercontent.com/YcGxGiqMJ3PCkD8KmdUMgr1yiGzYfcFZoMF4PJIIB7ElFKzN5wCOMCcrj7Sooz6Sr7FFQf7zXLru3QR_pkKCSTBskw4qq76A8WaQSytoVIylZmZGxBoAMOUuTIg1EnnFp6gBzPmSS0LFUO_eQzSBto3aDJVAb8lzs7mIk83EvHq5co1StrkH7Q=w1280",
      description: "Modern responsive website development"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white overflow-hidden">
      {/* Animated Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-1/2 -right-1/2 w-full h-full bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-1/2 -left-1/2 w-full h-full bg-gradient-to-tr from-blue-500/20 to-cyan-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      {/* Navigation */}
    

      {/* Hero Section */}
      <section className="relative py-32 px-6 text-center">
        <div 
          className="max-w-6xl mx-auto animate-fade-in-up"
          style={{
            animation: 'fadeInUp 1s ease-out forwards'
          }}
        >
          <h1 className="text-6xl md:text-8xl font-black mb-8 bg-gradient-to-r from-purple-400 via-pink-400 to-red-400 bg-clip-text text-transparent leading-tight">
            Why Choose
            <span className="block text-white drop-shadow-2xl">Our Studio?</span>
          </h1>
          <div className="relative max-w-4xl mx-auto">
            <p className="text-xl md:text-2xl text-gray-300 mb-12 leading-relaxed">
              Professional scripts by industry experts • Studio-quality voiceovers by 
              <span className="text-purple-400 font-semibold"> RJ Mohit</span> • 
              <span className="text-pink-400 font-semibold"> 7+ years experience</span> • 
              Lightning-fast delivery in 24–48 hours
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <div className="flex items-center bg-purple-600/20 backdrop-blur-sm rounded-full px-6 py-3 border border-purple-400/20">
                <Star className="w-5 h-5 text-yellow-400 mr-2" />
                <span>Premium Quality</span>
              </div>
              <div className="flex items-center bg-pink-600/20 backdrop-blur-sm rounded-full px-6 py-3 border border-pink-400/20">
                <Play className="w-5 h-5 text-green-400 mr-2" />
                <span>Fast Delivery</span>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-8 h-8 text-purple-400" />
        </div>
      </section>

      {/* Our Work Section */}
      <section 
        id="work"
        data-animate
        className={`py-20 px-6 transition-all duration-1000 ${
          isVisible.work ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl font-bold text-center mb-16 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Our Creative Work
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            {workExamples.map((work, idx) => (
              <div 
                key={idx}
                className="group relative bg-gradient-to-br from-purple-900/50 to-pink-900/50 backdrop-blur-xl rounded-3xl overflow-hidden border border-purple-500/20 hover:border-purple-400/50 transition-all duration-500 hover:transform hover:scale-105"
                style={{
                  animation: `slideInUp 0.8s ease-out ${idx * 0.2}s forwards`,
                  opacity: 0
                }}
              >
                <div className="aspect-video relative overflow-hidden">
                  <iframe
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    src={work.video + "?autoplay=0&mute=1"}
                    title={work.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    frameBorder="0"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="absolute top-4 left-4 px-3 py-1 bg-purple-600/80 backdrop-blur-sm rounded-full text-sm font-medium">
                    {work.category}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-2 text-white group-hover:text-purple-300 transition-colors duration-300">
                    {work.title}
                  </h3>
                  <div className="flex items-center text-gray-300 group-hover:text-purple-400 transition-colors duration-300">
                    <Play className="w-4 h-4 mr-2" />
                    <span>Watch Demo</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section 
        id="services"
        data-animate
        className={`py-20 px-6 transition-all duration-1000 ${
          isVisible.services ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl font-bold text-center mb-16 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Our Premium Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {ourServices.map((service, idx) => (
              <div 
                key={idx}
                className="group relative bg-gradient-to-br from-purple-900/30 to-pink-900/30 backdrop-blur-xl rounded-2xl p-6 border border-purple-500/20 hover:border-purple-400/50 transition-all duration-500 hover:transform hover:scale-105 cursor-pointer"
                style={{
                  animation: `slideInUp 0.6s ease-out ${idx * 0.1}s forwards`,
                  opacity: 0
                }}
                onMouseEnter={() => setActiveService(idx)}
              >
                <div className="relative overflow-hidden rounded-xl mb-4">
                  <img
                    src={service.src}
                    alt={service.name}
                    className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
                <h3 className="text-xl font-bold mb-2 text-white group-hover:text-purple-300 transition-colors duration-300">
                  {service.name}
                </h3>
                <p className="text-gray-400 text-sm group-hover:text-gray-300 transition-colors duration-300">
                  {service.description}
                </p>
                <div className="mt-4 flex items-center text-purple-400 group-hover:text-pink-400 transition-colors duration-300">
                  <ArrowRight className="w-4 h-4 mr-2 transform group-hover:translate-x-2 transition-transform duration-300" />
                  <span className="text-sm font-medium">Learn More</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section 
        id="team"
        data-animate
        className={`py-20 px-6 transition-all duration-1000 ${
          isVisible.team ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <div className="max-w-4xl mx-auto text-center">
          <div className="relative inline-block">
            <div className="w-64 h-64 mx-auto mb-8 relative">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full blur-xl opacity-50 animate-pulse"></div>
              <img
                src="https://lh6.googleusercontent.com/6Cj2Fd_OqF5VbgttC3_aJR1AzcM7XymaH0PYe-z5YEK6BPvD4l01B61ljuZTn-6yCKyy-uCH97iWeBysTqcWL28DzLddZ-BZukOQdDpePpKLXhiIW0wOLoLMO59ZqSGK5myqdvbLm8tuX0CKitKexW5OPevGEDwsDNfR_nSFThTcfp9AmiX7Cg=w1280"
                alt="Raman Saini"
                className="relative w-full h-full rounded-full object-cover border-4 border-purple-400/50 shadow-2xl"
              />
            </div>
          </div>
          <h2 className="text-4xl font-bold mb-2 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Raman Saini
          </h2>
          <p className="text-xl text-gray-300 mb-6">Video Editor & Creative Writer</p>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed">
            With over 8 years of professional experience, Raman Saini brings creativity and expertise to every project. 
            Specializing in storytelling, advertisement scripts, and video editing that captivates audiences.
          </p>
          <div className="mt-8 flex justify-center">
            <button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 px-8 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg">
              Order Now
            </button>
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section 
        id="additional"
        data-animate
        className={`py-20 px-6 transition-all duration-1000 ${
          isVisible.additional ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl font-bold text-center mb-16 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Additional Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, idx) => (
              <div 
                key={idx}
                className="group relative bg-gradient-to-br from-purple-900/20 to-pink-900/20 backdrop-blur-xl rounded-2xl overflow-hidden border border-purple-500/20 hover:border-purple-400/50 transition-all duration-500 hover:transform hover:scale-105"
                style={{
                  animation: `slideInUp 0.6s ease-out ${idx * 0.15}s forwards`,
                  opacity: 0
                }}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-white group-hover:text-purple-300 transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-gray-400 text-sm group-hover:text-gray-300 transition-colors duration-300">
                    {service.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

   

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes slideInUp {
          from {
            opacity: 0;
            transform: translateY(50px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in-up {
          animation: fadeInUp 1s ease-out forwards;
        }

        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </div>
  );
};

export default AnimatedServicesPage;