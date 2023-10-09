import { useRouter } from 'next/router';
import { getEventById } from '@/dummy-data';
import { Fragment } from 'react';
import ErrorAlert from "../../components/ui/error-alert";
import Button from "../../components/ui/button";

function EventDetailPage() {
    const router = useRouter();
    const eventId = router.query.eventID

    const event = getEventById(eventId);
    if (!event) {


        return (
            <>
                <ErrorAlert message={'No Events Found'}>

                </ErrorAlert>

                <Button link="/events">Show All Events</Button>
            </>
        );
    }
    return (
        <Fragment>

        </Fragment>
    )
}
export default EventDetailPage;  