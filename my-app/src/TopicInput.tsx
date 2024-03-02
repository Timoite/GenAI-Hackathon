// TopicInput.tsx
import React, { useState, FormEvent } from 'react';
import { useNavigate } from 'react-router-dom';

const TopicInput: React.FC = () => {
  const [topic, setTopic] = useState<string>('');
  const navigate = useNavigate();

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (topic.trim()) { // Check if the topic is not just empty spaces
      navigate('/timeline', { state: { topic } });
    }
  };

  return (
    <div className="min-h-screen w-screen bg-gray-900 flex justify-center items-center p-0 m-0">
      <form onSubmit={handleSubmit} className="w-full max-w-xs">
        <div className="mb-4">
          <label htmlFor="topic" className="block text-sm font-medium text-gray-300">Topic</label>
          <input
            type="text"
            id="topic"
            value={topic}
            onChange={(e) => setTopic(e.target.value)}
            className="mt-1 block w-full border border-gray-600 bg-gray-800 text-white rounded-md py-2 px-3 shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            placeholder="Enter a topic"
            required
          />
        </div>
        <button type="submit" className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-500 focus:ring-opacity-50">
          Submit
        </button>
      </form>
    </div>
  );
};

export default TopicInput;
