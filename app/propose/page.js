'use client'
import { useRouter } from 'next/navigation';

export default function Propose() {
  const router = useRouter();

  const handleYes = () => {
    alert("Yay! I'm so happy you said yes!");
    // Optionally, redirect or add other functionality
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gradient-to-r from-indigo-400 to-purple-500 p-4">
      <div className="text-center">
        <h1 className="text-3xl md:text-5xl font-bold text-white mb-6 md:mb-8">Will you be my bestfriend?</h1>
        <div className="space-y-4 md:space-x-6">
          <button
            onClick={handleYes}
            className="bg-white text-indigo-600 px-4 md:px-6 py-2 md:py-3 rounded-full text-base md:text-lg font-semibold hover:bg-indigo-200 transition duration-300"
          >
            Yes!
          </button>
          <button
            className="bg-white text-gray-500 px-4 md:px-6 py-2 md:py-3 rounded-full text-base md:text-lg font-semibold"
            disabled
          >
            I'll think about it
          </button>
        </div>
      </div>
    </div>
  );
}
