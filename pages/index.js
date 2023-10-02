import { getFeaturedEvents } from "../dummy-data";
import EventList from "../components/events/event-list";

 function Home() {
  const featuredEvents=getFeaturedEvents();
  console.log(featuredEvents);
  return (
    <div>
      <h1>Featured Events</h1>
      <EventList items={featuredEvents}/>
      
    </div>
  )
}


export default Home;