import { useRouter } from "next/router";
import { getFilteredEvents } from "@/dummy-data";
import EventList from "@/components/events/event-list";
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

    if(!filteredEvents || filteredEvents.length === 0) {
        return (<p className="center">No Events Found</p>);
    }

    return (
        <div>
<EventList items={filteredEvents} />
        </div>
    )
}
export default FilteredEventsPage;