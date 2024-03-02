import React, { useState, FormEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import logo from "./assets/timeliner.svg"; // Import the logo

const TopicInput: React.FC = () => {
  const [topic, setTopic] = useState<string>('');
  const navigate = useNavigate();

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (topic.trim()) {
      navigate('/timeline', { state: { topic } });
    }
  };

  return (
    <div className="flex flex-col justify-center items-center h-screen w-screen bg-gray-900">
      <img src={logo} alt="Logo" className="mb-4 w-32" /> {/* Adjust size as needed */}
      <form onSubmit={handleSubmit} className="w-full max-w-lg mx-auto">
        <div className="flex items-center relative">
          <input
            type="search"
            id="default-search"
            className="block w-full p-4 pl-10 text-sm text-gray-900 bg-gray-50 border border-gray-300 rounded-full focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
            placeholder="Search topics..."
            required
            value={topic}
            onChange={(e) => setTopic(e.target.value)}
          />
          <button type="submit" className="absolute right-4 bottom-2.5 bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default TopicInput;
