import classes from "./error-alert.module.css";


function ErrorAlert(props){
    const {message}=props
    return (
        <>
            <section className={classes.error}>
                <h1>{message}</h1>
                </section>
        </>
    );
}

export default ErrorAlert;