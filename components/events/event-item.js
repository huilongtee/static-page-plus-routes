import Link from "next/link";
import classes from "./event-item.module.css";
import Button from "../ui/button";


function EventItem(props) {
    const { title, image, date, location, id } = props;
    const humanReadableDate = new Date(date).toLocaleDateString("en-US", {
        day: "numeric",
        month: "long",
        year: "numeric",
    });
    const formattedAddress = location.replace(', ', '\n');
    const exploreLink = `/events/${id}`;
    return (
        <li className={classes.item}>
            <img src={'/' + image} alt={title}></img>
            <div className={classes.content}>
                <div className={classes.summary}>
                    <h2>{title}</h2>
                    <div className={classes.date}>
                    <i className="fas fa-calendar" style={{margin:'5px'}}/>
                        <time>{humanReadableDate}</time>
                    </div>
                    <div className={classes.address}>
                       <i className="fas fa-map-marker-alt" style={{margin:'5px'}}/>
                        <address>{formattedAddress}</address>
                    </div>
                </div>
                <div className={classes.action}>
                    <Button link={exploreLink} >
                        <span>Explore Event</span>
                        <i className="fas fa-arrow-right" style={{margin:'5px'}}></i>
                    </Button>
                </div>
            </div>
        </li>
    )
}
export default EventItem;