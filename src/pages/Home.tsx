import React from "react";
import { Link } from "react-router-dom";
import logo from "../images/SAPAClogo.png";
import ShowCard from "../components/ShowCard";
import plaidTidingsLogo from "../images/PlaidTidingsLogo.png";
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
          image={plaidTidingsLogo}
          showInfoURL="/plaidTidings"
          title="Forever Plaid: Plaid Tidings"
          byline="Written by Stuart Ross"
          location={[
            "Cabaret Theatre at Arizona Theatre Company",
            "330 S Scott Ave.",
            "Tucson, AZ 85701",
            " ",
            "CPAC",
            "1250 W Continental Rd",
            "Green Valley, AZ 85622",
          ]}
          performanceDate={[
            "Cabaret Theatre at Arizona Theatre Company:",
            "December 4th, 2021 @ 3pm & 7pm",
            "December 5th, 2021 @ 3pm ",
            " ",
            "CPAC:",
            "December 17th, 2021 @ 3pm & 7pm",
            "December 18th, 2021 @ 3pm & 7pm",
          ]}
        >
          {/* <Link to="/plaid" className="btn btn-info btn-lg">
            Cast and Creative Team
          </Link> */}
          <Link to="/tickets" className="btn btn-secondary btn-lg">
            Purchase Tickets
          </Link>
          <div className="py-1" />
          {/* <Link to="/plaidTidings" className="btn btn-info btn-lg">
            Cast and Creative Team
          </Link> */}
          <hr></hr>
          <p>
            <em>Forever Plaid: Plaid Tidings</em> is a brand new show that
            offers the best of Forever Plaid, tied up in a nifty package with a
            big Christmas bow on top! Filled with Christmas standards that have
            all been "Plaid-erized," our boys are back to do their Christmas
            Special.
          </p>
          <p>
            At first, Frankie, Jinx, Smudge and Sparky aren't sure why they've
            returned to Earth for another posthumous performance, but a phone
            call from the heavenly Rosemary Clooney lets them know that they're
            needed to put a little harmony into a discordant world. Sprinkled
            among the Christmas offerings are audience favorites, like their
            riotous three-minute-and-eleven-second version of The Ed Sullivan
            Show – this time, featuring the Rockettes, the Chipmunks and The
            Vienna Boys Choir, as well as a Plaid Caribbean Christmas that puts
            the "Day-O" in Excelsis!
          </p>
          <p>
            This truly "heaven-sent" holiday treat will lift audiences' spirits
            and fill them with nostalgia for a bygone era of classic music sung
            in perfect harmony.
          </p>
          <p>
            The cast includes the original productions' very talented cast of
            Xander Mason, Topher Esguerra, Liam Boyd and Danny Fapp.
          </p>
          <p>
            Put yourself in the holiday mood and see this show that will fill
            your hearts with joy, laughter and music!
          </p>
          <p>
            Directed by Xander Mason
            <br />
            Music Direction by Alexis Burrows
            <br />
            Choreography by Liam Boyd
          </p>
          <p>
            <strong>*Masks must be worn for the performance*</strong>
          </p>
          <p>
            <strong>
              *Rows will be blocked off to encourage social distancing*
            </strong>
          </p>
        </ShowCard>
      </section>
    </React.Fragment>
  );
};
export default Home;
