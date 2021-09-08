import React from "react";
import { Link } from "react-router-dom";
import logo from "../images/SAPAClogo.png";
import nunsenseLogo from "../images/nunsenseLogo.png";
import ShowCard from "../components/ShowCard";
import TicketButton from "../components/TicketButton";

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
        
        <ShowCard
          image={nunsenseLogo}
          showInfoURL="/tickets"
          title="Nunsense"
          byline="Written by Dan Goggin"
          location={[
            "Desert View High School",
            "4101 E Valencia Rd.",
            "Tucson, AZ 85706",
          ]}
          performanceDate={[
            "September 24th - 26th",
            "October 1st - 3rd",
            "Fridays @ 7pm, Saturdays @ 2pm and 7pm, Sundays @ 2pm",
          ]}
        >
          <hr id="nunsense"></hr>
          <p>
            <em>Nunsense</em> is a hilarious spoof about the misadventures of
            five nuns trying to manage a fundraiser. Sadly, the rest of the
            sisterhood died from poisoning after eating vichyssoise prepared by
            Sister Julia Child of God. Thus, the remaining nuns – ballet-loving
            Sister Leo, street-wise Sister Robert Anne, befuddled Sister Mary
            Amnesia, the Mother Superior Sister Regina, and mistress of the
            novices Sister Mary Hubert – stage a talent show in order to raise
            the money to bury their dearly departed. With catchy songs and
            irreverent comedy and directed by MAC-winning director Samantha
            Cormier, <em>Nunsense</em> is sure to keep audiences rolling with
            laughter!
          </p>
          <p className="font-weight-bold">
            Audience members are strongly encouraged to wear masks. Performers
            will not be masked.
          </p>
          <TicketButton
            ticketURL={"/tickets"}
            text="Buy Tickets"
            newWindow={false}
          />
        </ShowCard>
      </section>
    </React.Fragment>
  );
};
export default Home;
