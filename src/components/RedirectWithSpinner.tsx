// components/RedirectWithSpinner.tsx
"use client";

import { useEffect } from "react";
import Image from "next/image";

export default function RedirectWithSpinner({
  url,
  newTab = false,
}: {
  url: string;
  newTab?: boolean;
}) {
  useEffect(() => {
    const openTabTimeout = setTimeout(() => {
      if (newTab) {
        window.open(url, "_blank");
      } else {
        window.location.href = url;
      }
    }, 1500);

    return () => {
      clearTimeout(openTabTimeout);
    };
  }, [url, newTab]);

  return (
    <div className="flex h-screen items-center justify-center bg-white">
      <div className="flex flex-col items-center space-y-4">
        <Image
          src="/images/wbc-main.png"
          alt="Redirecting"
          width={100}
          height={100}
          className="animate-neon-pulse"
        />
        <p className="text-gray-800 text-sm font-medium animate-fade-in">Redirecting you...</p>
        {newTab && (
          <p className="text-gray-600 text-xs opacity-80 animate-fade-in delay-500 text-center">
            If the checkout page didn&apos;t open automatically in a new tab,{' '}
            <a href={url} target="_blank" rel="noopener noreferrer" className="text-blue-600 underline font-semibold">
              click here
            </a>.
          </p>
        )}
      </div>
    </div>
  );
}