import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios'; // Import Axios

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
    const fetchEvents = async () => {
      try {
        const response = await axios.post('http://127.0.0.1:8000/process_user_input/', {
          topic: topic, // Send the topic in the request body
        },{
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
          }
          });
        console.log("Topic sent:", topic);
        console.log("Events received:", response.data);
        console.log("Response data type:", typeof(response.data));
        setEvents(response.data); // Axios automatically parses the JSON response
      } catch (error) {
        console.error('There has been a problem with your fetch operation:', error);
      } finally {
        setLoading(false);
      }
    };

    

    fetchEvents();
  }, [topic]);// Dependency array includes topic to refetch when it changes
  

  return (
    <div className="flex flex-col justify-start items-center h-auto w-screen bg-gray-900 text-white">
      <h1 className="text-3xl font-bold text-center pt-10 mb-5">Timeline for: {topic}</h1>
      <div className="w-full max-w-4xl p-4">
        {loading ? (
          <div className="text-center animate-pulse text-5xl">Loading Timeline...</div>
        ) : (
          events.map((event, index) => (
            <div key={event.id} className="relative mb-6 ml-52">
              {index !== 0 && <div className="absolute h-full border-l border-gray-500 left-1.5 -top-10"></div>}
              <div className="flex items-center">
                <div className="bg-blue-600 rounded-full h-4 w-4"></div>
                <div className="flex flex-col flex-grow ml-4">
                  <div className="text-lg font-semibold">{event.time}</div>
                  <a href="#" className="block max-w-sm p-6 mt-3 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                    <p className="mb-1 text-white text-sm leading-tight">{event.description}</p>
                  </a>
                  <a href={`https://www.phind.com/search?q=tell_me_about_${encodeURIComponent(topic + ' ' + event.description)}`} target="_blank" rel="noopener noreferrer" className="mt-3 inline-flex max-w-32 items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                  Read more
                  <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                  </svg>
                </a>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Timeline;