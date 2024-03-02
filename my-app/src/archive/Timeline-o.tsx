// Timeline.tsx with good layout but no complete functionality
import React from 'react';
import { useLocation } from 'react-router-dom';

// Define a type for the event data
type Event = {
  id: number;
  time: string;
  description: string;
};

const Timeline: React.FC = () => {
  const location = useLocation();
  const { topic } = location.state as { topic: string };

  // Sample data for the timeline
  const sampleEvents: Event[] = [
    {
      id: 1,
      time: '2000',
      description: 'Event 1: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    },
    {
      id: 2,
      time: '2005',
      description: 'Event 2: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    },
    {
      id: 3,
      time: '2010',
      description: 'Event 3: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    },
    // Add more events as needed for your presentation
  ];

  return (
    <div className="flex flex-col justify-start items-center h-screen w-screen bg-gray-900 text-white">
      <h1 className="text-3xl font-bold text-center pt-10 mb-5">Timeline for: {topic}</h1>
      <ol className="relative border-s border-red-500 dark:border-gray-700"> {/* Timeline */}
        {sampleEvents.map((event, index) => (
          <div key={event.id} className="relative mb-6 ml-6 ">
            {index !== 0 && <div className="absolute h-screen border-l border-gray-500 left-1.5 -top-10"></div>}
            <div className="flex items-center">
              <div className="bg-blue-600 rounded-full h-4 w-4"></div> {/* Dot */}
              <div className="flex flex-col flex-grow ml-4">
                <div className="text-lg font-semibold">{event.time}</div>
                <a href="#" className="block max-w-sm p-6 mt-3 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                  <p className="mb-1 text-sm leading-tight">{event.description}</p>
                </a>
                <a href="#" className="mt-3 inline-flex max-w-32 items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                  Read more
                  <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        ))}
      </ol>
    </div>
  );
};

export default Timeline;
