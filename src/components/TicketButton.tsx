
type TicketButtonProps = {
    ticketURL: string,
    text: string
}


const TicketButton = (props:TicketButtonProps) =>{
    return <a href={props.ticketURL} rel="noreferrer" target="_blank" className="btn btn-dark btn-lg">{props.text}</a>;
}
export default TicketButton; 