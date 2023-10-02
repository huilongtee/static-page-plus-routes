import { useRouter } from 'next/router';
import { getEventById } from '@/dummy-data';
import { Fragment } from 'react';
function EventDetailPage() {
    const router = useRouter();
    const eventId = router.query.eventID

    const event = getEventById(eventId);
    if (!event) {
        return (<p>No Event found</p>);
    }
    return (
        <Fragment>
            
        </Fragment>
    )
}
export default EventDetailPage;  