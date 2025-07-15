"use client";

import React, { useState } from "react";
import Navbar from "../components/nav";
import Footer from "../components/Footer";
import Image from 'next/image';

const projectVideos = [
  {
    id: "lddkJN67GjE",
    title: "Ad done - Piles Doctor",
  },
  {
    id: "bx4d3Nfaa10",
    title: "Ad done - Hing Product",
  },
  {
    id: "sZTkPK1lpdE",
    title: "Ad done - Pharmacy",
  },
  {
    id: "04uSz8t7eJM",
    title: "Ad done - Digital Marketing",
  },
];




const voiceOverVideos = [
  {
    id: "EGE_MoUsmRU",
    title: "Telecomm Ad",
  },
  {
    id: "kZfgmeisXog",
    title: "Buddha Story",
  },
  {
    id: "5Hopxv_27CE",
    title: "Cartoon Story",
  },
  {
    id: "vjZwU5DCk-4",
    title: "Comedy Story Sample",
  },
  {
    id: "vjZwU5DCk-4",
    title: "Comedy Story Sample",
  },
  {
    id: "vjZwU5DCk-4",
    title: "Comedy Story Sample",
  },
  {
    id: "vjZwU5DCk-4",
    title: "Comedy Story Sample",
  },
  {
    id: "vjZwU5DCk-4",
    title: "Comedy Story Sample",
  },
  {
    id: "vjZwU5DCk-4",
    title: "Comedy Story Sample",
  },
  {
    id: "vjZwU5DCk-4",
    title: "Comedy Story Sample",
  },
  {
    id: "vjZwU5DCk-4",
    title: "Comedy Story Sample",
  },
  {
    id: "vjZwU5DCk-4",
    title: "Comedy Story Sample",
  },
  {
    id: "vjZwU5DCk-4",
    title: "Comedy Story Sample",
  },
  {
    id: "vjZwU5DCk-4",
    title: "Comedy Story Sample",
  },
];





const driveVideos = [
  {
    id: '1fn9RLG72CEOZR_idYmcMaiHgK1hIva4_',
    title: 'YouTube Sample 1'
  },
  {
    id: '1fqXVk1CBttkW9b52LplKlZc99wzHu4s5',
    title: 'YouTube Sample 3'
  },
  {
    id: '1fv-vgYzr1MmCVE_URUj14GtdkcncsDTc',
    title: 'YouTube Sample 4'
  },
  {
    id: '1fqFBZEU2YvKtabBVh0AR0bnKfGWsmYuN',
    title: 'YouTube Story 2'
  }
];
const ProjectPage = () => {
  const [activeVideo, setActiveVideo] = useState(null);
  const [activeVideo2, setActiveVideo2] = useState(null);

  return (
    <div className="bg-white text-gray-900">
      <Navbar />

      {/* Hero Section */}
      <section className="py-16 text-center bg-gradient-to-br from-red-50 via-pink-50 to-white">
        <h1 className="text-5xl font-extrabold text-red-600">Our Projects</h1>
        <p className="text-lg mt-4 text-gray-600">
          Explore some of our recent video ad campaigns.
        </p>
      </section>

      {/* Video Gallery */}
      <section className="max-w-6xl mx-auto px-4 py-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-10">
        {projectVideos.map((video, index) => (
          <div
            key={index}
            className="relative group border rounded-xl overflow-hidden shadow-md"
          >
            {activeVideo === index ? (
              <iframe
                className="w-full h-64"
                src={`https://www.youtube.com/embed/${video.id}?autoplay=1`}
                title={video.title}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            ) : (
              <div
                className="cursor-pointer relative w-full h-64"
                onClick={() => setActiveVideo(index)}
              >
               <Image
  src={`https://img.youtube.com/vi/${video.id}/hqdefault.jpg`}
  alt={video.title}
  width={480} // set according to your design
  height={270}
  className="w-full h-full object-cover"
/>
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center group-hover:bg-black/60 transition">
                  <svg
                    className="w-16 h-16 text-white opacity-90 group-hover:scale-110 transition-transform"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
              </div>
            )}
            <div className="p-4 bg-white">
              <h3 className="text-lg font-semibold text-gray-800">{video.title}</h3>
            </div>
          </div>
        ))}
      </section>


<section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-red-600 mb-12">
          Our Voice Over
        </h2>
        <div className="flex space-x-6 overflow-x-auto pb-4 scroll-smooth scrollbar-hide justify-center">
          {voiceOverVideos.map((video, index) => (
            <div
              key={index}
              className="min-w-[250px] max-w-[250px] flex-shrink-0 rounded-xl overflow-hidden shadow-lg border bg-white"
            >
              {activeVideo2 === index ? (
                <iframe
                  className="w-full h-[444px]"
                  src={`https://www.youtube.com/embed/${video.id}?autoplay=1`}
                  title={video.title}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              ) : (
                <div
                  className="cursor-pointer relative w-full h-[444px]"
                  onClick={() => setActiveVideo2(index)}
                >
                 <Image
  src={`https://img.youtube.com/vi/${video.id}/hqdefault.jpg`}
  alt={video.title}
  width={480}         // You can adjust this
  height={270}        // Thumbnail ratio is 16:9 (480x270)
  className="w-full h-full object-cover"
/>
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center hover:bg-black/60 transition">
                    <svg
                      className="w-16 h-16 text-white opacity-90 hover:scale-110 transition-transform"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                </div>
              )}
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-800">{video.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>



     <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-red-600 mb-12">
          Some of Our Voiceovers Have Millions of Views
        </h2>
        <div className="flex space-x-6 overflow-x-auto pb-4 scroll-smooth scrollbar-hide justify-center">
          {driveVideos.map((video, index) => (
            <div
              key={index}
              className="min-w-[250px] max-w-[250px] flex-shrink-0 rounded-xl overflow-hidden shadow-lg border bg-white"
            >
              <iframe
                src={`https://drive.google.com/file/d/${video.id}/preview`}
                title={video.title}
                className="w-full h-[444px]"
                allow="autoplay; fullscreen"
                allowFullScreen
                frameBorder="0"
              ></iframe>
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-800 text-center">
                  {video.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
    </div>
  );
};

export default ProjectPage;
