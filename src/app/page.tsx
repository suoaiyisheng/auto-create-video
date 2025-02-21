"use client";

import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <div className="w-[300px] bg-[#1C1C1F] border-r border-[#2E2E32]">
        {/* Tabs */}
        <div className="flex">
          <button className="flex-1 px-4 py-2 bg-[#1C1C1F] text-white border-b-2 border-[#2E2E32]">
            Chat
          </button>
          <button className="flex-1 px-4 py-2 bg-[#1C1C1F] text-gray-400 border-b border-[#2E2E32]">
            History
          </button>
        </div>

        {/* Chat message */}
        <div className="p-4">
          <div className="bg-[#27272A] rounded-lg p-4">
            <p className="text-white">
              A modern e-commerce product page with image gallery, size/color variants, reviews
              section and related products. Focus on the UI/UX first, I&apos;ll
              integrate Supabase for product data later.
            </p>
          </div>
        </div>

        {/* Chat input */}
        <div className="absolute bottom-0 w-[300px] p-4 border-t border-[#2E2E32]">
          <div className="flex items-center gap-2">
            <input
              type="text"
              placeholder="Ask Lovable..."
              className="w-full bg-[#27272A] rounded-lg px-4 py-2 text-white placeholder-gray-400"
            />
            <button className="p-2 text-gray-400 hover:text-white">
              <span className="text-sm">Attach</span>
            </button>
            <button className="p-2 text-gray-400 hover:text-white">
              <span className="text-sm">Edit</span>
            </button>
          </div>
        </div>
      </div>

      {/* Main content */}
      <div className="flex-1 bg-[#18181B]">
        {/* Header */}
        <div className="flex justify-between items-center p-4 border-b border-[#2E2E32]">
          <div className="flex items-center gap-2">
            <span className="text-white">preview--f-8856.lovable.app</span>
          </div>
          <div className="flex items-center gap-4">
            <button className="text-gray-400 hover:text-white">
              <span className="text-sm">Open in new tab</span>
            </button>
            <button className="text-gray-400 hover:text-white">
              <span className="text-sm">Mobile view</span>
            </button>
            <button className="text-gray-400 hover:text-white">
              <span className="text-sm">Refresh</span>
            </button>
          </div>
        </div>

        {/* Preview content */}
        <div className="flex flex-col items-center justify-center h-[calc(100vh-64px)]">
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="text-gray-400 flex flex-col items-center gap-4"
          >
            <div className="w-16 h-16">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
              </svg>
            </div>
            <p className="text-lg">Spinning up preview...</p>
            <div className="flex flex-col items-center gap-2 mt-4">
              <p className="flex items-center gap-2">
                <span>🌐</span> Deploy when you&apos;re ready
              </p>
              <p className="flex items-center gap-2">
                <span>💬</span> Chat with AI in the sidebar
              </p>
              <p className="flex items-center gap-2">
                <span>🎯</span> Select specific elements to modify
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
