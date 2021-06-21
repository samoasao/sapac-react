import { Link } from "react-router-dom";

type TicketButtonProps = {
  ticketURL: string;
  newWindow?: boolean;
  text: string;
};

const TicketButton = (props: TicketButtonProps) => {
  console.log(process.env);
  const { newWindow = true } = props;
  if (newWindow) {
    return (
      <a
        href={props.ticketURL}
        rel="noreferrer"
        target="_blank"
        className="btn btn-dark btn-lg"
      >
        {props.text}
      </a>
    );
  } else {
    return (
      <Link to={props.ticketURL} className="btn btn-dark btn-lg">
        {props.text}
      </Link>
    );
  }
};
export default TicketButton;
