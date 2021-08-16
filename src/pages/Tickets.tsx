import { Fragment } from "react";
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
              Tickets for all productions are available through{" "}
              <a
                href="https://www.tix.com/ticket-sales/SAPAC/6126"
                rel="noreferrer"
                target="_blank"
              >
                tix.com
              </a>
            </p>
            <div className="row">
                
              <div className="col-md-4 offset-md-2 px-3">
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
                      <p className="font-weight-bold">
                        Scoundrel and Scamp Theatre requires that all audience
                        members wear masks inside the venue.
                      </p>
                    </div>
                    <TicketButton
                      text="Purchase Tickets"
                      ticketURL="https://www.tix.com/ticket-sales/SAPAC/6126"
                    ></TicketButton>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
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
                      <p className="font-weight-bold">
                        Audience members are strongly encouraged to wear masks.
                        Performers will not be masked.
                      </p>
                    </div>
                    <TicketButton
                      text="Purchase Tickets"
                      ticketURL="https://www.tix.com/ticket-sales/SAPAC/6126"
                    ></TicketButton>
                  </div>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="py-1 col-lg-10">
                <h4>COVID-19 Information</h4>
                <p>
                  We at SAPAC are committed to providing a safe environment to
                  attend and watch our shows. We are now asking that all
                  audience members wear masks during our performances and if you
                  are sick, then we will issue a refund or provide you with a
                  credit to a future SAPAC show.
                </p>
                <p>
                  Furthermore, if we feel that anyone is attending a show and
                  might compromise the health of others then we will ask that
                  patron to leave with a full refund or a credit to a future
                  show.
                </p>
                <p>
                  Performers for our shows will NOT be masked and all cast and
                  crew are fully vaccinated.
                </p>
                <p>
                  We have a great season of theater coming up and we want
                  everyone to stay safe and also feel comfortable coming to
                  enjoy live theater again. If you have not been vaccinated, we
                  encourage you to do so.
                </p>
                <p>
                  Thank you for your understanding and cooperation while we
                  navigate through this new phase of the pandemic.
                </p>
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
