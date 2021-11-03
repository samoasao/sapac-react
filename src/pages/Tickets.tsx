import { Fragment } from "react";
import plaidTidingsLogo from "../images/PlaidTidingsLogo.png";

import TicketButton from "../components/TicketButton";
import { Link } from "react-router-dom";
const Tickets = () => {
  return (
    <Fragment>
      <section className="about py-5 p-3 px-md-auto">
        <div className="card">
          <div className="card-body">
            <h2 className="card-title">Tickets</h2>

            {/* <p>
              Tickets for all productions are available through{" "}
              <a
                href="https://www.tix.com/ticket-sales/SAPAC/6126"
                rel="noreferrer"
                target="_blank"
              >
                tix.com
              </a>
            </p> */}
            <div className="row">
              <div className="col-md-4 offset-md-2">
                <div className="card">
                  <img
                    className="card-img-top m"
                    src={plaidTidingsLogo}
                    alt="Card cap"
                  />
                  <div className="card-body">
                    <div className="card-text pb-2">
                      <p>
                        <strong>
                          Cabaret Theatre at Arizona Theatre Company
                        </strong>{" "}
                        <br />
                        330 S Scott Ave. <br />
                        Tucson, AZ 85701
                        <br />
                      </p>
                      <p>
                        December 4th @ 3pm & 7pm
                        <br />
                        December 5th @ 3pm <br />
                      </p>
                      <p>$22 - $25</p>
                      <p>
                        <Link to="/plaidTidings" className="btn btn-info">
                          Cast and Creative Team
                        </Link>
                      </p>
                      <p className="font-weight-bold">
                        Masks will be required to be worn for audience members.
                        Performers will not be masked. Every other row will be
                        blocked off to encourage social distancing.
                      </p>
                    </div>
                    <TicketButton
                      text="Purchase Tickets for Cabaret Theatre @ ATC"
                      ticketURL=" https://www.tix.com/ticket-sales/SAPAC/6126"
                    ></TicketButton>
                  </div>
                </div>
              </div>

              <div className="col-md-4">
                <div className="card">
                  <img
                    className="card-img-top m"
                    src={plaidTidingsLogo}
                    alt="Card cap"
                  />
                  <div className="card-body">
                    <div className="card-text pb-2">
                      <p>
                        <strong>CPAC</strong> <br />
                        1250 W Continental Rd. <br />
                        Green Valley, AZ 85622
                        <br />
                      </p>
                      <p>
                        December 17th @ 3pm & 7pm <br />
                        December 18th @ 3pm & 7pm <br />
                      </p>
                      <p>$25</p>
                      <p>
                        <Link to="/plaidTidings" className="btn btn-info">
                          Cast and Creative Team
                        </Link>
                      </p>
                      <p className="font-weight-bold">
                        Masks will be required to be worn for audience members.
                        Performers will not be masked. Every other row will be
                        blocked off to encourage social distancing.
                      </p>
                    </div>
                    <TicketButton
                      text="Purchase Tickets for CPAC"
                      ticketURL="https://performingartscenter.thundertix.com/events/187270"
                    ></TicketButton>
                    <div className="py-2" />
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
