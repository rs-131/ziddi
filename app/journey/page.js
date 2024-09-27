'use client'
import { useRouter } from 'next/navigation';
import { useState } from 'react';

const memories = [
  { title: 'First Date', image: '/first-date.jpg', message: 'I knew from the moment I saw you, this would be special.' },
  { title: 'Our First Trip', image: '/trip.jpg', message: 'The world is more beautiful when we explore it together.' },
  // Add more memories here
];

export default function Journey() {
//   const [currentMemory, setCurrentMemory] = useState(0);
    const router = useRouter();

  const nextMemory = () => {
    router.push('/propose')
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-pink-100 p-4">
      <h1 className="text-3xl md:text-4xl font-bold text-indigo-600 mb-4 md:mb-8">
        Sorry
      </h1>
      <video
        src='/vid.mp4'
        className="w-full md:w-96 h-auto object-cover rounded-lg shadow-lg mb-4"
      />
      <p className="text-base md:text-lg text-gray-800 text-center mb-4 md:mb-6">
        I want to start by saying how truly sorry I am for the time I’ve been away and for not being as present as you deserve. I know I’ve hurt you by not showing the care and attention you needed, and for that, I deeply apologize.

I’ve spent some time reflecting, and I realize that my absence and lack of attention must have made you feel neglected and unimportant. That was never my intention, and I regret every moment that I wasn’t there for you. You mean so much to me, and it pains me to think that I’ve caused you any sadness or frustration.

Please know that I’m ready to do whatever it takes to make things right. Your feelings matter to me more than anything, and I want to make sure you never have to feel like I’m not there for you again.

I’m truly sorry for the distance I’ve created, and I hope you can find it in your heart to forgive me.

With all my love,
      </p>
      <button
        onClick={nextMemory}
        className="bg-indigo-500 text-white px-4 md:px-6 py-2 md:py-3 rounded-full text-base md:text-lg font-semibold hover:bg-indigo-600 transition duration-300"
      >
        Next 
      </button>
    </div>
  );
}
