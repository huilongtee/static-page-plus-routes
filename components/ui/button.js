import classes from "./button.module.css";
import Link from "next/link";

function Button(props) {

    if (props.link) {
        return (
            <Link href={props.link} style={{ textDecoration: "none" }}>

                <span className={classes.btn}>
                    {props.children}
                </span>
            </Link>
        );
    }
    return (
        <button onClick={props.onClick} className={classes.btn} >{props.children}</button>
    );
}

export default Button;