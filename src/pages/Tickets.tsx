import { Fragment } from "react";
import TicketButton from "../components/TicketButton";
const Tickets = () => {
  return (
    <Fragment>
      <section className="about py-5 p-3 px-md-auto">
        <div className="card">
          <div className="card-body">
            <h2 className="card-title">Tickets</h2>

            <div className="py-1 mx-auto">
              <h4>Forever Plaid</h4>

              <div className="row mb-3">
                <div className="col-md-4 mt-2">
                  <p>
                    <strong>Vail Theatre of the Arts</strong>{" "}
                    <br />
                    10701 E Mary Ann Cleveland Way, Tucson, AZ 85747
                    <br />
                    August 12 - 13 at 7pm, August 14 at 2pm and 7pm <br />
                  </p>

                  <TicketButton
                    text="Purchase Tickets"
                    ticketURL="https://www.tix.com/ticket-sales/tix/6126"
                  ></TicketButton>
                </div>
              </div>


              <h4>Purchase Options</h4>

              <p> You may purchase tickets online or via phone. </p>

              <p>
                To purchase tickets via phone, contact our box office at{" "}
                <strong>
                  <a href="tel:+15202610915">520-261-0915</a>
                </strong>
                .<br />
                <em>
                  Please leave a message with your name and phone number.
                  <br />
                  Your call will be returned by the end of the next business
                  day, Monday through Friday.
                </em>
              </p>

              <p>
                Please contact us at <strong>boxoffice.sapac@gmail.com</strong>{" "}
                or{" "}
                <strong>
                  <a href="tel:+15202610915">520-261-0915</a>
                </strong>{" "}
                with questions or for more information.
              </p>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
};
export default Tickets;
