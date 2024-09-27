'use client'
import { useRouter } from 'next/navigation';

export default function Home() {
  const router = useRouter();

  const startJourney = () => {
    router.push('/journey');  // Navigate to the next page
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gradient-to-r from-pink-300 via-purple-300 to-indigo-400">
      <div className="text-center px-4">
        <h1 className="text-3xl md:text-5xl font-bold text-white mb-4 md:mb-8">
          Our Journey Together
        </h1>
        <p className="text-base md:text-lg text-white mb-4 md:mb-6">
          Every love story is beautiful, but ours is my favorite.
        </p>
        <button
          onClick={startJourney}
          className="bg-white text-indigo-500 px-4 md:px-6 py-2 md:py-3 rounded-full text-base md:text-lg font-semibold hover:bg-indigo-100 transition duration-300"
        >
          Start Our Journey
        </button>
      </div>
    </div>
  );
}
