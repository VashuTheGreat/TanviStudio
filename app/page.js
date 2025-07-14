"use client";
import React, { useEffect } from 'react';
import Image from 'next/image';
import './globals.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Main from './components/main';
import Link from 'next/link';


const Page = () => {
  const [added,setadded]=React.useState(false);
  useEffect(() => {
    const handleScroll = () => {
      const elements = document.querySelectorAll(".pop-slide");
      elements.forEach((el) => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight) {
          el.classList.add("show");
        } else {
          el.classList.remove("show");
        }
      });
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);



  const [email, setEmail] = React.useState("");

const handleGetStarted = () => {
  if (!email) {
    alert("Please enter your email.");
    return;
  }

  const subject = encodeURIComponent("Interested in Ad Video Services");
  const body = encodeURIComponent(
    `Hello Vstory Team,\n\nI am interested in your professional ad video and voiceover services. Please reach out to me at ${email}.\n\nThank you!`
  );

  window.location.href = `mailto:tanvivoices@gmail.com?subject=${subject}&body=${body}`;
};

  return (
    <div className=" text-white pop-slide ">
      <div className="relative h-[80vh]">
        {/* Background Video */}
        <video
          src='/video/bacimg.mp4'
          autoPlay
          loop
          muted
          className="absolute top-0 left-0 w-full h-full object-cover"
        />
        
        <div className='absolute inset-0 bg-black opacity-70'></div>

        <Navbar />

        {/* video ki upper ka content*/}
        <div className="flex flex-col items-center justify-center text-center gap-6 px-8 h-[calc(100%-62px)] z-10 relative font-['Martel_Sans']">
        <span className="font-black text-4xl md:text-5xl">Professional Ad Videos & Voiceovers</span>
<span className="text-xl font-normal">Boost your brand with engaging animation & studio voice</span>
<span className="text-lg font-normal">Starting from just ₹149. Delivery within 48 hours.</span>
<span>Want to grow your business? Enter your email and let us help you shine.</span>

          <div className="flex items-center justify-center gap-4 flex-wrap">
          <input
  type="email"
  value={email}
  onChange={(e) => setEmail(e.target.value)}
  placeholder="Enter email"
  className="py-2 px-4 text-sm rounded bg-opacity-70 bg-neutral-900 border border-gray-300 text-white w-64 transition duration-300 hover:border-white hover:shadow-[0_0_12px_rgba(255,255,255,0.8)]"
/>

<button
  onClick={handleGetStarted}
  className="bg-red-600 text-white px-6 py-2 font-bold rounded hover:text-white hover:shadow-[0_0_20px_rgba(220,38,38,0.7)] hover:border-red-50"
>
  Get Started
</button>
          </div>
        </div>
      </div>

      <div className="h-[7px] bg-neutral-800 "></div>

      <div className=" sections "
  style={{ backgroundImage: "url('https://www.harrypotter.com/images/home/horizons_mobile_village.png')" }}
>

  
        <div className="h-[7px] bg-neutral-800"></div>
  
       
  <Main/>
       
  
        {/* SECTION 3 */}
        <section className="pop-slide flex flex-col md:flex-row items-center justify-between max-w-[90vw] mx-auto py-10 gap-8">
  

  {/* TV Image + Video Section */}
  <div className="flex-1 relative flex justify-center items-center w-full max-w-[500px]">
    {/* Responsive TV image */}
    <Image
      src="/tv.jpg"
      alt="TV"
      width={500}
      height={300}
      className="w-full h-auto"
    />

    {/*making iframe and tv responsive here*/}
    <div
      className="absolute"
      style={{
        top: '18%',
        left: '14%',
        width: '74%',
        height: '56%',
      }}
    >
      <iframe
        className="w-full h-full"
        src="https://www.youtube.com/embed/Ay9nxw1vuXo?autoplay=1&mute=1&controls=0"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  </div>
</section>

  
        <div className="h-[7px] bg-neutral-800"></div>
  
        {/* FAQ SECTION */}
      <section className="pop-slide bg-black text-white py-10">
  <h2 className="text-4xl text-center mb-8">Frequently Asked Questions</h2>

  {/* Question 1 */}
  <div
    onClick={() => setadded(added === 'q1' ? false : 'q1')}
    className="relative max-w-[100vh] mx-auto bg-gray-700 p-6 flex justify-between items-center hover:bg-neutral-800 transition-colors duration-300 cursor-pointer"
  >
    <span>What services do you offer?</span>
    {added !== 'q1' ? (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width="24" height="24">
        <path fill="currentColor" d="M11 11V2H13V11H22V13H13V22H11V13H2V11H11Z" />
      </svg>
    ) : (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width="24" height="24">
        <path fill="currentColor" d="M2 11H22V13H2V11Z" />
      </svg>
    )}
  </div>
  {added === 'q1' && (
    <div className="max-w-[100vh] mx-auto bg-neutral-800 p-6 mt-2 text-white">
      We offer animated ad videos, commercial ad shoots, professional dubbing, character voices, IVR, narration, audiobooks, FM ads, and full video production. Our team includes experienced voice artists, editors, and scriptwriters.
    </div>
  )}

  {/* Question 2 */}
  <div
    onClick={() => setadded(added === 'q2' ? false : 'q2')}
    className="relative max-w-[100vh] mx-auto bg-gray-700 p-6 flex justify-between items-center hover:bg-neutral-800 transition-colors duration-300 cursor-pointer mt-4"
  >
    <span>Who is RJ Mohit Mathuriya?</span>
    {added !== 'q2' ? (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width="24" height="24">
        <path fill="currentColor" d="M11 11V2H13V11H22V13H13V22H11V13H2V11H11Z" />
      </svg>
    ) : (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width="24" height="24">
        <path fill="currentColor" d="M2 11H22V13H2V11Z" />
      </svg>
    )}
  </div>
  {added === 'q2' && (
    <div className="max-w-[100vh] mx-auto bg-neutral-800 p-6 mt-2 text-white">
      RJ Mohit is a professional radio jockey from Akashwani Radio with over 7 years of experience. He has lent his voice to national-level ads for PhonePe, Fastrack, NoBroker.com, and government campaigns like Corona Awareness and Balika Kaushalya Yojana.
    </div>
  )}

  {/* Question 3 */}
  <div
    onClick={() => setadded(added === 'q3' ? false : 'q3')}
    className="relative max-w-[100vh] mx-auto bg-gray-700 p-6 flex justify-between items-center hover:bg-neutral-800 transition-colors duration-300 cursor-pointer mt-4"
  >
    <span>How quickly will I get my ad?</span>
    {added !== 'q3' ? (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width="24" height="24">
        <path fill="currentColor" d="M11 11V2H13V11H22V13H13V22H11V13H2V11H11Z" />
      </svg>
    ) : (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width="24" height="24">
        <path fill="currentColor" d="M2 11H22V13H2V11Z" />
      </svg>
    )}
  </div>
  {added === 'q3' && (
    <div className="max-w-[100vh] mx-auto bg-neutral-800 p-6 mt-2 text-white">
      We usually deliver ad videos within 24 to 48 hours depending on the project scope. Scriptwriting, voiceover, and editing are handled by professionals ensuring quick yet high-quality output.
    </div>
  )}

  {/* Question 4 */}
  <div
    onClick={() => setadded(added === 'q4' ? false : 'q4')}
    className="relative max-w-[100vh] mx-auto bg-gray-700 p-6 flex justify-between items-center hover:bg-neutral-800 transition-colors duration-300 cursor-pointer mt-4"
  >
    <span>Can I run these ads on Facebook and YouTube?</span>
    {added !== 'q4' ? (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width="24" height="24">
        <path fill="currentColor" d="M11 11V2H13V11H22V13H13V22H11V13H2V11H11Z" />
      </svg>
    ) : (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width="24" height="24">
        <path fill="currentColor" d="M2 11H22V13H2V11Z" />
      </svg>
    )}
  </div>
  {added === 'q4' && (
    <div className="max-w-[100vh] mx-auto bg-neutral-800 p-6 mt-2 text-white">
      Yes, absolutely. All our ad videos are optimized for use on platforms like Facebook, Instagram, and YouTube. We also assist with ad running and social media marketing if required.
    </div>
  )}
</section>

  
      </div>
      <div className="h-[7px] bg-neutral-800"></div>

      <Footer />
    </div>
  );
};

export default Page;
