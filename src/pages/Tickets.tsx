import { Fragment } from "react";
import aliceLogo from "../images/promos/AliceByHeart.jpg";

import TicketButton from "../components/TicketButton";
import { Link } from "react-router-dom";
const Tickets = () => {
  return (
    <Fragment>
      <section className="about py-5 p-3 px-md-auto">
        <div className="card">
          <div className="card-body">
            <h2 className="card-title">Tickets</h2>

            <div className="row justify-content-center">
              <div className=" col-md-4">
                <div className="card">
                  <img
                    className="card-img-top m"
                    src={aliceLogo}
                    alt="Card cap"
                  />
                  <div className="card-body">
                    <div className="card-text pb-2">
                      <p>
                        3330 E Speedway Blvd. (Formerly Bookman's)
                        <br />
                        Tucson, AZ 85716
                      </p>
                      <p>Jan 19-28 2024</p>
                    </div>
                    <TicketButton
                      text="Purchase Tickets"
                      ticketURL="https://www.tix.com/ticket-sales/SAPAC/6126"
                    ></TicketButton>
                    <br />

                    <div className="py-2" />
                  </div>
                </div>
              </div>
            </div>

            <div className="py-1 mx-auto">
              <h4>Purchase Options</h4>

              <p> You may purchase tickets online or via phone. </p>

              <p>
                To purchase tickets via phone, contact our box office at{" "}
                <strong>
                  <a href="tel:+5202610915">520-261-0915</a>
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
                  <a href="tel:+5202610915">520-261-0915</a>
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
