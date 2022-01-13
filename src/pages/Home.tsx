import React from "react";
import { Link } from "react-router-dom";
import logo from "../images/SAPAClogo.png";
import ShowCard from "../components/ShowCard";
import amwLogo from "../images/AMW_Promo.png";
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
          image={amwLogo}
          title="A Minister's Wife"
          byline={[
            "Book by Austin Pendelton",
            "Music by Joshua Schmidt",
            "Lyrics by Jan Levy Tranen",
            "Based on the Play Candida by George Bernard Shaw",
          ]}
          location={[
            "Scoundrel & Scamp Theatre",
            "738 N. 5th Ave",
            "Sutie 131 in the Historic Y",
            "TUCSON, AZ 85705",
          ]}
          performanceDate={[
            "Saturday March 5th, 7pm",
            "Sunday March 6th, 2pm",
            "Friday March 11th, 7pm",
            "Saturday March 12th, 7pm",
            "Sunday March 13th, 2pm",
          ]}
        >
          <div className="py-1" />
          <Link to="/tickets" className="btn btn-info btn-lg">
            Buy Tickets
          </Link>
          <hr></hr>
          <p>
            Hailed by the Associated Press as “a jewel of a musical” and by The
            Wall Street Journal as “the most important new musical to come to
            New York since The Light in the Piazza,” A MINISTER'S WIFE is a true
            hidden gem in the musical theater repertoire.
          </p>
          <p>
            Based on a 1898 version of George Bernard Shaw's Candida A
            MINISTER'S WIFE explores the fires burning beneath the surface of a
            seemingly ordinary marriage; the Revered James Morell and his wife,
            Candida, are happily married - or at least they think - until a
            romantic young poet, Marchbanks, enters their life. Featuring music
            by Joshua Schmidt, lyrics by Jan Levy Tranen and a book by Austin
            Pendleton, A MINISTER'S WIFE is rich, romantic and daring. Its
            finale is one of the best pieces of music in the repertoire that
            will leave you breathless.
          </p>
          <p>
            Starring local Tucson favorites Jodi Darling (Candida), Jeremy Vega
            (Eugene Marshbanks), Dennis Tamblyn (James Morrel) and Kate Scally
            (Prossy Garnett) along with Tucson new-comer Steven Wright (Lexy
            Mill), this beautiful show is directed by Susan Stokes with musical
            direction by Elizabeth Spencer.
          </p>
          <p>
            <strong>*Must show vaccination card or negative COVID test in past 72 hours and must wear mask inside of theatre*</strong>
          </p>
        </ShowCard>
      </section>
    </React.Fragment>
  );
};
export default Home;
