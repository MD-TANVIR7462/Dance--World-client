import React from 'react';
import SectionTitle from '../SectionTitle/SectionTitle';

const PerformanceVideos = () => {
  const performanceVideos = [
    {
      id: 1,
      title: 'Hip Hop Dance',
      videoUrl: 'https://www.youtube.com/watch?v=Voiae2-E-7Y',
      imageUrl: 'https://i.ibb.co/NKNKThW/Jinjo17-Credit-Belinda-Lawley-1.jpg',
    },
    {
      id: 2,
      title: 'Ballet Showcase Dance',
      videoUrl: 'https://www.youtube.com/watch?v=knZqfUOs7dM',
      imageUrl: 'https://i.ibb.co/R9Fm0R7/IMG-0682.jpg',
    },
    {
      id: 2,
      title: 'Salsa Dance',
      videoUrl: 'https://www.youtube.com/watch?v=vwGp16NXgQU',
      imageUrl: 'https://i.ibb.co/xfZgG6S/360-F-234300230-Fab1u-Rx6-Si-L3s-ULFg-SX1wu0e-IEyr-KBe-Q.jpg',
    },
    
  ];

  const handleVideoClick = (videoUrl) => {
    window.open(videoUrl, '_blank');
  };

  return (
    <section className="bg-gray-100 py-20">
      <div className="container mx-auto w-11/12 ">
        <SectionTitle title={"Student's Perfomance"}></SectionTitle>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {performanceVideos.map((video) => (
            <div key={video.id} className="bg-white rounded shadow p-3">
              <img
                src={video.imageUrl}
                alt={video.title}
                className="rounded w-full h-80 object-cover"
              />
              <h3 className="text-lg font-bold mt-4 ">{video.title}</h3>
              <button
                className="btn btn-warning  text-white mt-5"
                onClick={() => handleVideoClick(video.videoUrl)}
              >
                Watch Video
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PerformanceVideos;
