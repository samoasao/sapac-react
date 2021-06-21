type TicketButtonProps = {
  ticketURL: string;
  newWindow?: boolean;
  text: string;
};

const TicketButton = (props: TicketButtonProps) => {
  const { newWindow = true } = props;
  return (
    <a
      href={props.ticketURL}
      rel="noreferrer"
      target={newWindow ? "_blank" : ""}
      className="btn btn-dark btn-lg"
    >
      {props.text}
    </a>
  );
};
export default TicketButton;
