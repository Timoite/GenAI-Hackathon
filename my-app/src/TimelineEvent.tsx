interface EventProps {
    event: {
      time: string;
      description: string;
      imageUrl: string;
    };
  }
  
  const TimelineEvent: React.FC<EventProps> = ({ event }) => {
    return (
      <div className="flex flex-col md:flex-row items-center md:justify-center gap-4 my-8">
        <img src={event.imageUrl} alt="Event" className="w-full md:w-1/4"/>
        <div>
          <p className="text-xl font-semibold">{event.time}</p>
          <p>{event.description}</p>
        </div>
      </div>
    );
  };
  
  export default TimelineEvent;
  