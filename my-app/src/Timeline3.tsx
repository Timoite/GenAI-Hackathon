// Timeline.tsx
import React, { useState, useEffect } from 'react';
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
  const [events, setEvents] = useState<Event[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    // Simulate fetch call with a timeout
    setTimeout(() => {
      // Simulated fetched data
      const sampleEvents: Event[] = [
        // ... your sample events
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
      ];
      setEvents(sampleEvents);
      setLoading(false); // Set loading to false once the data is "fetched"
    }, 2000); // Simulate a 2 second fetch time
  }, []);

  return (
    <div className="flex flex-col items-center h-screen w-screen bg-gray-900 text-white">
      <h1 className="text-3xl font-bold pt-10 mb-5">Timeline for: {topic}</h1>
      <div className="w-full max-w-4xl p-4">
        {loading ? (
          <div className="text-center animate-spin text-5xl">Loading...</div>
        ) : (
          events.map((event, index) => (
            <div key={event.id} className={`flex ${index % 2 === 0 ? 'justify-start' : 'justify-end'} mb-6`}>
              <div className="bg-blue-600 rounded-full h-4 w-4"></div>
              <div className="flex flex-col bg-gray-700 rounded-lg shadow-md p-4 mt-1 mx-4">
                <div className="text-sm font-semibold">{event.time}</div>
                <p className="text-sm leading-tight">{event.description}</p>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Timeline;