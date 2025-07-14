"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useSession, signIn, signOut } from 'next-auth/react';
import { useRouter } from 'next/navigation';

const Navbar2 = () => {
  const { data: session } = useSession();
  const [showUserDropdown, setShowUserDropdown] = useState(false);
  const router = useRouter();

  const handleSignInClick = () => {
    router.push('/login'); 
  };

  return (
    <div className="w-full bg-black text-white px-6 py-4 flex justify-between items-center shadow-md relative z-10">
      {/* Logo */}
      <Link href="/" className="flex items-center space-x-2">
        <Image src="/logo.svg" alt="logo" width={200} height={60} />
      </Link>
      {/* navbar me sign in ki jagah name render karna */}

      <div className="space-x-6 relative">
        {session ? (
          <div className="relative">
            <button
              onClick={() => setShowUserDropdown(!showUserDropdown)}
              className="text-lg font-medium hover:underline"
            >
              {session.user.name?.split(" ")[0] || "User"}
            </button>

            {showUserDropdown && (
              <div className="absolute right-0 mt-2 w-32 bg-white text-black rounded shadow-md z-50">
                <button
                  onClick={() => signOut()}
                  className="block w-full text-left px-4 py-2 hover:bg-gray-200"
                >
                  Sign Out
                </button>
              </div>
            )}
          </div>
        ) : (
          <button
            onClick={handleSignInClick}
            className="text-lg font-medium hover:underline"
          >
            Sign In
          </button>
        )}
      </div>
    </div>
  );
};

export default Navbar2;
