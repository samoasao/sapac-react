import React from "react";
import { Link } from "react-router-dom";
import logo from "../images/SAPAClogo.png";
import plaidLogo from "../images/PlaidLogo.png";
import nextToNormalLogo from "../images/nextToNormalLogo.png";
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
          image={plaidLogo}
          showInfoURL="/plaid"
          title="Forever Plaid (Unmasked)"
          byline="Written by Stuart Ross"
          location={[
            "Vail Theatre of the Arts",
            "10701 E Mary Ann Cleveland Way",
            "Tucson, AZ 85747",
          ]}
          performanceDate={[
            "August 12th and 13th @ 7pm",
            "August 14th @ 2pm & 7pm",
          ]}
        >
          <Link to="/plaid" className="btn btn-info btn-lg">
            Cast and Creative Team
          </Link>
          <hr></hr>
          <p>
            <em>Forever Plaid</em> is one of the most popular and successful
            musicals in recent memory. This deliciously fun revue is chock-full
            of classic barbershop quartet harmonies and pitch-perfect melodies!
            Directed by Chach Snook who was on the National Tour of the show as
            well as Music Directed by Matthew Holter who is a founder of the
            doo-wop group The 4GENTS, this show will be sure to delight and move
            audiences!
          </p>
          <p>
            Once upon a time, there were four guys (Sparky, Smudge, Jinx and
            Frankie) who discovered that they shared a love for music and then
            got together to become their idols – The Four Freshman, The
            Hi-Lo&#39;s and The Crew Cuts. Rehearsing in the basement of
            Smudge&#39;s family&#39;s plumbing supply company, they became
            &quot;Forever Plaid&quot;. On the way to their first big gig, the
            &quot;Plaids&quot; are broadsided by a school bus and killed
            instantly. It is at the moment when their careers and lives end that
            the story of <em>Forever Plaid</em> begins....
          </p>
          <p>
            Singing in close harmony, squabbling boyishly over the smallest
            intonations and executing their charmingly outlandish choreography
            with overzealous precision, the &quot;Plaids&quot; are a guaranteed
            smash, with a program of beloved songs and delightful patter that
            keeps audiences rolling in the aisles when they&#39;re not humming
            along to some of the great nostalgic pop hits of the 1950s.
          </p>

          <TicketButton
            ticketURL={"/tickets"}
            text="Buy Tickets"
            newWindow={false}
          />
        </ShowCard>
        <ShowCard
          image={nextToNormalLogo}
          showInfoURL="/tickets"
          title="next to normal"
          byline="Music by Tom Kitt, Book and Lyrics by Brian Yorkey"
          location={[
            "Scoundrel and Scamp Theatre at the Historic Y",
            "738 N 5th Ave.",
            "Tucson, AZ 85705",
          ]}
          performanceDate={[
            "August 20th - 22nd",
            "August 27th - 29th",
            "Fridays @ 7pm, Saturdays @ 2pm & 7pm, Sundays @ 2pm",
          ]}
        >
          <Link to="/ntn" className="btn btn-info btn-lg">
            Cast and Creative Team
          </Link>
          <hr></hr>
          <p>
            <em>Next to Normal</em>, with book and lyrics by Brian Yorkey and
            music by Tom Kitt, explores how one suburban household copes with
            crisis and mental illness. Winner of three 2009 Tony Awards,
            including Best Musical Score and the 2010 Pulitzer Prize, Next to
            Normal was also chosen as "one of the year's ten best shows" by
            critics around the country, including The Los Angeles Times, The
            Washington Post, Rolling Stone and The New York Times.
          </p>
          <p>
            {" "}
            Dad's an architect; Mom rushes to pack lunches and pour cereal;
            their daughter and son are bright, wise-cracking teens, appearing to
            be a typical American family. And yet their lives are anything but
            normal because the mother has been battling manic depression for 16
            years. <em>Next to Normal</em> takes audiences into the minds and
            hearts of each character, presenting their family's story with love,
            sympathy and heart.
          </p>
          <p>
            {" "}
            This deeply moving piece of theatre provides a wonderful opportunity
            for performers to explore dramatic material and showcase vocal
            talents with an energetic pop/rock score. <em>Next to Normal</em> is
            an emotional powerhouse that addresses such issues as grieving a
            loss, ethics in modern psychiatry, and suburban life.
          </p>
          <p>Directed by MAC award winning director, Annette Hillman.</p>
          <p className="font-weight-bold">Some scenes use flashing lights or strobing effect that may affect photosensitive viewers.</p>

          <TicketButton
            ticketURL={"/tickets"}
            text="Buy Tickets"
            newWindow={false}
          />
        </ShowCard>
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
            laughter. Presented in a truly immersive way by placing the audience
            on the stage with the actors!
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
