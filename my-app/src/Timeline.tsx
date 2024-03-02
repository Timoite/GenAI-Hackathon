// Timeline.tsx
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
      description: 'Event 1: The turn of the millennium.',
    },
    {
      id: 2,
      time: '2005',
      description: 'Event 2: The rise of social media.',
    },
    {
      id: 3,
      time: '2010',
      description: 'Event 3: Advancements in renewable energy.',
    },
    // Add more events as needed for your presentation
  ];

  return (
    <div className="h-screen w-screen bg-gray-900 min-h-screen text-white">
      <h1 className="text-3xl font-bold text-center pt-10 mb-5">Timeline for: {topic}</h1>
      <div className="timeline">
        {sampleEvents.map((event, index) => (
          <div key={event.id} className="relative mb-6 ml-6">
            {index !== 0 && <div className="absolute h-full border-l border-gray-500 left-1.5 -top-10"></div>}
            <div className="flex items-center">
              <div className="bg-blue-600 rounded-full h-4 w-4"></div>
              <div className="flex flex-col flex-grow ml-4">
                <div className="text-sm font-semibold">{event.time}</div>
                <div className="bg-gray-700 rounded-lg shadow-md p-4 mt-1">
                  <p className="mb-1 text-sm leading-tight">{event.description}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Timeline;
