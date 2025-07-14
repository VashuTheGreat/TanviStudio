"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useSession, signIn, signOut } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { ChevronDown, Play, Star, Award, Users, Zap, CheckCircle, ArrowRight, Globe, Mic, Video, PenTool, Palette, Monitor, Search, TrendingUp, Mail, Phone, MapPin } from 'lucide-react';


const Navbar2 = () => {
  const { data: session } = useSession();
  const [showUserDropdown, setShowUserDropdown] = useState(false);
  const router = useRouter();

  const handleSignInClick = () => {
    router.push('/login'); 
  };

  return (
  <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-gray-200/50 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-br from-red-500 to-pink-600 rounded-xl flex items-center justify-center">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <Link href={'/'}>
              <span className="text-xl font-bold bg-gradient-to-r from-red-600 to-pink-600 bg-clip-text text-transparent">
                TanviStudio
              </span>
              </Link>
            </div>
            <div className="hidden md:flex items-center space-x-8">
{['Services', 'Portfolio', 'About', 'Contact'].map((item) => {
  const isHomeRoute = ['services', 'portfolio'].includes(item.toLowerCase());
  const href = isHomeRoute ? '/' : `/${item.toLowerCase()}`;
  
  return (
    <a
      key={item}
      href={href}
      className="relative text-gray-700 hover:text-red-600 transition-colors duration-300 group"
    >
      {item}
      <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-red-600 group-hover:w-full transition-all duration-300"></span>
    </a>
  );
})}

            </div>
            <button className="bg-gradient-to-r from-red-500 to-pink-600 text-white px-6 py-2 rounded-full hover:shadow-lg transform hover:scale-105 transition-all duration-300">
              Get Started
            </button>
          </div>
        </div>
      </nav>
  );
};

export default Navbar2;
