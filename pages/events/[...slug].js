import { useRouter } from "next/router";
import { getFilteredEvents } from "@/dummy-data";
import EventList from "@/components/events/event-list";
import ResultTitle from "@/components/events/results-title";
import Button from "../../components/ui/button";
import ErrorAlert from "../../components/ui/error-alert";
function FilteredEventsPage() {
    const router = useRouter();
    const filterData = router.query.slug;
    if (!filterData) {
        return (<p className="center">No Filter Data</p>);
    }

    const filteredYear = filterData[0];
    const filteredMonth = filterData[1];
    const numYear = +filteredYear;
    const numMonth = +filteredMonth;

    if (isNaN(numYear) || isNaN(numMonth) || numYear > 2030 || numYear < 2021 || numMonth < 1 || numMonth > 12) {
        return (<p className="center">Invalid Filter Data</p>);
    }

    const filteredEvents = getFilteredEvents({ year: numYear, month: numMonth });

    if (!filteredEvents || filteredEvents.length === 0) {
        return (
            <>
            <ErrorAlert message={'No Events Found'}>
            
            </ErrorAlert>
                
                <Button link="/events">Show All Events</Button>
            </>
        );
    }

    const date = new Date(numYear, numMonth - 1);

    return (
        <>
            <ResultTitle date={date} />
            <EventList items={filteredEvents} />
        </>
    )
}
export default FilteredEventsPage;