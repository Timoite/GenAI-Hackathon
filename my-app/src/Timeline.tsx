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
    <div className="min-h-screen w-screen flex flex-col items-center pt-10 bg-gray-900 min-h-screen text-white">
      <h1 className="text-3xl font-bold mb-5">Timeline for: {topic}</h1>
      <div className="w-full max-w-4xl px-4">
        {sampleEvents.map(event => (
          <div key={event.id} className="my-5 p-4 bg-gray-700 rounded-lg shadow-md">
            <p className="text-xl font-bold">{event.time}</p>
            <p>{event.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Timeline;
