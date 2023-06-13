import { Fragment } from "react";
import meanGirlsLogo from "../images/promos/MeanGirlsTix3x2.png";

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
                    src={meanGirlsLogo}
                    alt="Card cap"
                  />
                  <div className="card-body">
                    <div className="card-text pb-2">
                      <p>
                        <strong>Berger Performing Arts Center</strong> <br />
                        1200 W Speedway Blvd.
                        <br />
                        Tucson, AZ 85745
                      </p>
                      <p>July 14-16 2023</p>
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
                  Furthermore, patrons will be asked to show a vaccination card
                  or negative COVID test in past 72 hours to enter our venues.
                </p>
                <p>
                  Performers for our shows will NOT be masked and all cast and
                  crew are fully vaccinated.
                </p>
                <p>
                  We have a great season of theater coming up and we want
                  everyone to stay safe and also feel comfortable coming to
                  enjoy live theater again.
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
