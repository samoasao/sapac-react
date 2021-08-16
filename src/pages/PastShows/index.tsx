import React from "react";
import ShowCard from "../../components/ShowCard";

import plaidLogo from "./images/plaid/PlaidLogo.png"
import Logo_1776 from "../../images/1776.png";
import Gutenberg from "../../images/Gutenberg_Teaser_logos.png";
import TitleOfShowLogo from "../../images/title_of_show.png";
import HotMikadoLogo from "../../images/Hot_Mikado.png";
import newWorld from "../../images/NewWorld.png";
import TicketButton from "../../components/TicketButton";
import { Link } from "react-router-dom";

const PastShows = () => {
  return (
    <React.Fragment>
      <section className="event py-5 p-3 px-md-5 " id="events">
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
            "August 12th and 13th, 2021 @ 7pm",
            "August 14th, 2021 @ 2pm & 7pm",
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

          <p className="font-weight-bold">
            Vail Theatre of the Arts requires that all audience members wear
            masks inside the venue.
          </p>
        </ShowCard>
        <ShowCard
          image={newWorld}
          title="Songs For a New World"
          byline="Music and Lyrics by Jason Robert Brown"
          location="Virtual Performance"
          performanceDate="November 21, 2020"
        >
          100 minutes, 26 performers, 16 stories and 1 pandemic. Jason Robert
          Brown wrote the music and lyrics to these songs with a common
          theme...how one moment can change our lives forever. Join us as we
          have gathered performers from all over the country to convey a modern
          interpretation to these classNameic songs by relating them to our
          current pandemic. Proceeds from this performance will go to the Tucson
          Performing Arts fund which was developed to help local artists
          financially during this time.
        </ShowCard>
        <h1 className="text-left mb-5">2019-2020</h1>

        <div className="event-item row my-5 py-0" id="1776">
          <div className="col-md-5 ml-0 pl-0 py-0 my-0 ">
            <img className=" my-0 py-0 img-fluid" src={Logo_1776} alt="1776" />
          </div>
          <div className="col-md-7 py-2">
            <h2 className="mt-0 pt-2">1776</h2>
            <p className="byline">by Peter Stone and Sherman Edwards</p>
            <p className="location">
              Performing at George DeMeester Performance Center at Reid Park
              (April)
            </p>
            <p className="location">& St. Andrews Presbyterian Church (May)</p>
            <p className="performance-date">
              April 24 & 25, 2020
              <br /> May 1 & 3, 2020
            </p>
            <p className="alert alert-danger text-justify" role="alert">
              Due to COVID-19, SAPAC's production of 1776 has been cancelled and
              will not be rescheduled.
            </p>
            <p>
              Long before{" "}
              <strong>
                <em>Hamilton</em>
              </strong>
              , there was three-time Tony Award-winning
              <em>1776</em> – the original American Revolution Musical! It’s a
              long, hot summer in Philadelphia, and the Continental Congress is
              at each other’s throats. The nation is on the brink of revolution
              – if only our founding fathers can agree to sign the declaration.
              American history blazes to vivid life in this extraordinary
              musical, revealing the humor and humanity behind these national
              icons. With a limited 4-performance run, you won’t want to miss
              our modern re-shaping (including nontraditional casting) of this
              hit show!
            </p>
          </div>
        </div>

        <div className="event-item row my-5 py-0" id="gutenberg_show">
          <div className="col-md-5 ml-0 pl-0 pt-3 my-0 ">
            <img
              className=" my-0 py-0 img-fluid"
              src={Gutenberg}
              alt="Gutenberg! The Musical!"
            />
          </div>
          <div className="col-md-7 py-2">
            <h2 className="mt-0 pt-2">Gutenberg! The Musical!</h2>
            <p className="byline">by Anthony King and Scott Brown</p>
            <p className="location">Performing at Unscrewed Theater</p>
            <p className="performance-date">August 15-25, 2019</p>

            <p>
              Back by popular demand after being nominated for a{" "}
              <a
                href="https://tucson.com/entertainment/the-best-of-the-year-on-tucson-stages/article_a76e8a91-1936-5a24-85ea-09447583c6d1.html"
                target="_blank"
                rel="noreferrer"
              >
                MAC Award
              </a>{" "}
              in 2018, this production of the hit two-man musical spoof is a
              special add-on event to our regular full season of musical
              productions. Two desperate (and bravely untalented) songwriters
              perform a backers' audition for their new musical about Gutenberg,
              the inventor of the printing press. With an unending supply of
              enthusiasm, Bud Davenport and Doug Simon (portrayed by real-life
              brothers{" "}
              <a
                href="https://notthosewrightbrothers.com/"
                target="_blank"
                rel="noreferrer"
              >
                Carson and Tyler Wright
              </a>
              ) sing all the songs and play all the parts in their hilarious
              historical epic. Called “A smashing success” by the New York
              Times,{" "}
              <span style={{ fontWeight: "bold", fontStyle: "italic" }}>
                Gutenberg! The Musical!
              </span>
              went on to receive Lucille Lortel Award and Outer Critics Circle
              Award nominations for Outstanding Musical.
            </p>
            <a
              href="http://www.notthosewrightbrothers.com"
              target="_blank"
              rel="noreferrer"
              className="btn btn-dark btn-lg"
            >
              Show Info
            </a>
          </div>
        </div>

        <div className="event-item row my-5 py-0" id="title_of_show">
          <div className="col-md-5 ml-0 pl-0 pt-0 my-0 ">
            <img
              className="my-0 py-0 img-fluid"
              src={TitleOfShowLogo}
              alt="[title of show]"
            />
          </div>
          <div className="col-md-7 py-2">
            <h2 className="mt-0 pt-2" style={{ textTransform: "lowercase" }}>
              [title of show] (clean version)
            </h2>
            <p className="byline">by Jeff Bowen and Hunter Bell</p>
            <p className="location">
              Performing at Cabaret Theater, Temple of Music and Art
            </p>
            <p className="performance-date">September 13-22, 2019</p>

            <p>
              Writing a musical is hard! Just ask Jeff and Hunter, two
              struggling writers, scrambling to write a musical to submit to a
              theatre festival. With the deadline looming, and with nothing to
              lose, the pair enlists the help of their friends Susan and Heidi
              (with Larry on the piano), and decide to try and create something
              exciting and new. What you get is four friends writing a musical
              about four friends writing a musical: meta-theatre at its most
              hilarious! This Tony-nominated musical is sure to leave you
              laughing!
            </p>
          </div>
        </div>
        <div className="event-item row my-5 py-0" id="hot_mikado">
          <div className="col-md-5 ml-0 pl-0 py-0 my-0 ">
            <img
              className=" my-0 py-0 img-fluid"
              src={HotMikadoLogo}
              alt="Winter Show"
            />
          </div>
          <div className="col-md-7 py-2">
            <h2 className="mt-0 pt-2">Hot Mikado</h2>
            <p className="byline">
              Adapted and arranged by David H. Bell and Rob Bowman
            </p>
            <p className="location">Performing at Scoundrel & Scamp Theatre</p>
            <p className="performance-date">January 17-26, 2020</p>

            <p>
              This hilarious and ‘HOT’ updating of Gilbert and Sullivan’s comic
              masterpiece weaves a sharp witted, fun-filled tale where - despite
              life or death stakes - characters still find time to tap their
              toes and croon their troubles away. Set in a fictionalized Japan,
              at a time when outlandish laws harshly sentence people for almost
              any indiscretion, it is the language of jazz, gospel and the blues
              that is spoken most fluently.{" "}
              <em>
                <strong>Hot Mikado</strong>
              </em>{" "}
              thrills by combining traditional Japanese storytelling with the
              big band sights and sounds of popular American song and dance.
            </p>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};
export default PastShows;
