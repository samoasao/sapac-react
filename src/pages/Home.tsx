import React from "react";
import { Link } from "react-router-dom";
import logo from "../images/SAPAClogo.png";
import TicketButton from "../components/TicketButton";
import MeanGirlsSC from "../components/ShowCards/MeanGirlsSC";
import AliceSC from "../components/ShowCards/AliceSC";

const Home = () => {
  return (
    <React.Fragment>
      <section className="myCarouselSection carousel border-bottom">
        <div className="row">
          <div className="offset-lg-2 col-lg-8">
            <div className="myCarousel text-center">
              <div
                id="carouselExampleIndicators"
                className="carousel slide"
                data-ride="carousel"
              >
                <div className="carousel-inner" style={{ minHeight: "450px" }}>
                  <div className="carousel-item active"></div>
                </div>
                <div id="logo-back">
                  <img
                    id="carouselTitle"
                    className="p-3 rounded"
                    src={logo}
                    alt="SAPAC"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="Mission py-5 p-3 px-md-5 ">
        <div id="mission" className="row">
          <div className="offset-lg-2 col-lg-8 ">
            <h2 className="text-justify">Expect excellence </h2>
            <p className="text-justify">
              Southern Arizona Performing Arts Company (SAPAC) is a 501(c)3
              nonprofit organization of unified local artists committed to
              bringing high-quality theatrical performance to the Tucson area.
              We believe in the power theater has to entertain, edify, and
              connect audience members and performers alike. SAPAC creates
              opportunity for local artists in all aspects of theater to learn
              and grow in a professional atmosphere while fostering a positive
              effect on the community, building empathy and connections
              throughout Tucson.{" "}
            </p>
            <a
              className="btn btn-lg btn-dark"
              target="_blank"
              rel="noreferrer"
              href="https://sapactucson.tix.com/Donation.aspx?OrgNum=6126"
            >
              Make a Donation
            </a>
            &nbsp;
            <Link className="btn btn-lg btn-dark" to="/tickets">
              Ticket Information
            </Link>
          </div>
        </div>
      </section>

      <section className="event py-5 p-3 px-md-5 " id={"events"}>
        <h1 className="text-left mb-5">Events</h1>

        <AliceSC />
      </section>
    </React.Fragment>
  );
};
export default Home;
