import { Fragment } from "react";
import plaidLogo from "../images/PlaidLogo.png";
import nextToNormalLogo from "../images/nextToNormalLogo.png";
import nunsenseLogo from "../images/nunsenseLogo.png";

import TicketButton from "../components/TicketButton";
const Tickets = () => {
  return (
    <Fragment>
      <section className="about py-5 p-3 px-md-auto">
        <div className="card">
          <div className="card-body">
            <h2 className="card-title">Tickets</h2>

            <p>
              Tickets for all 3 productions are available through{" "}
              <a
                href="https://www.tix.com/ticket-sales/tix/6126"
                rel="noreferrer"
                target="_blank"
              >
                tix.com
              </a>{" "}
              <h4 className="pt-3">Season Ticket Promotion</h4>
              Buy tickets to all 3 productions for a total of $59.50
              <br />
              Or buy tickets to any 2 of our upcoming productions for a total of
              $44.50 <br />
              (discount automatically applies).
            </p>
            <div className="row">
              {/* CARD 1 */}
              <div className="col-md-4 p-5">
                <div className="card">
                  <img
                    className="card-img-top"
                    src={plaidLogo}
                    alt="Card cap"
                  />
                  <div className="card-body">
                    <div className="card-text pb-2">
                      <p>
                        <strong>Vail Theatre of the Arts</strong> <br />
                        10701 E Mary Ann Cleveland Way, Tucson, AZ 85747
                        <br />
                      </p>
                      <p>
                        August 12 - 13 @ 7pm <br />
                        August 14 @ 2pm & 7pm <br />
                      </p>
                      <p>$20 - $25</p>
                    </div>
                    <TicketButton
                      text="Purchase Tickets"
                      ticketURL="https://www.tix.com/ticket-sales/tix/6126"
                    ></TicketButton>
                  </div>
                </div>
              </div>
              {/* CARD 3 */}
              <div className="col-md-4 p-5">
                <div className="card">
                  <img
                    className="card-img-top"
                    src={nextToNormalLogo}
                    alt="Card cap"
                  />
                  <div className="card-body">
                    <div className="card-text pb-2">
                      <p>
                        <strong>Scoundrel and Scamp Theatre </strong> <br />
                        @ the Historic Y <br />
                        738 N 5th Ave. <br />
                        Tucson, AZ 85705 <br />
                      </p>
                      <p>
                        August 20th - 22nd
                        <br />
                        August 27th - 29th
                        <br />
                      </p>
                      <p>$22.50 - $29.50</p>
                    </div>
                    <TicketButton
                      text="Purchase Tickets"
                      ticketURL="https://www.tix.com/ticket-sales/tix/6126"
                    ></TicketButton>
                  </div>
                </div>
              </div>
              {/* CARD 3 */}
              <div className="col-md-4 p-5">
                <div className="card">
                  <img
                    className="card-img-top m"
                    src={nunsenseLogo}
                    alt="Card cap"
                  />
                  <div className="card-body">
                    <div className="card-text pb-2">
                      <p>
                        <strong>Desert View High School</strong> <br />
                        4101 E Valencia Rd. <br />
                        Tucson, AZ 85706
                        <br />
                      </p>
                      <p>
                        September 24th - 26th <br />
                        October 1st - 3rd <br />
                      </p>
                      <p>$20 - $25</p>
                    </div>
                    <TicketButton
                      text="Purchase Tickets"
                      ticketURL="https://www.tix.com/ticket-sales/tix/6126"
                    ></TicketButton>
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
                  <a href="tel:+4015944895">401-594-4895</a>
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
                  <a href="tel:+40159414895">401-594-4895</a>
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
