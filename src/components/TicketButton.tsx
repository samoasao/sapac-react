import { Link } from "react-router-dom";

type TicketButtonProps = {
    ticketURL: string,
    text: string
}


const TicketButton = (props:TicketButtonProps) =>{
    return <Link to={props.ticketURL} rel="noreferrer" target="_blank" className="btn btn-dark btn-lg">{props.text}</Link>;
}
export default TicketButton; 