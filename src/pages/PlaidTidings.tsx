import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import Bio from "../components/Bio";

import danny_img from "../images/plaidTidings/Danny Plaid Logo.png";
import ben_img from "../images/plaidTidings/Ben Plaid Logo.png";
import liam_img from "../images/plaidTidings/Liam Plaid Logo.png";
import liam_choreographer_img from "../images/plaidTidings/liam_boyd.jpg";
import topher_img from "../images/plaidTidings/Topher Plaid Logo.png";
import xander_img from "../images/plaidTidings/Xander Plaid Logo.png";
import xander_director_img from "../images/plaidTidings/xander_mason.jpeg";
import jumping_img from "../images/plaidTidings/Group Jumping Logo.png";
import logo from "../images/plaidTidings/PlaidTidingsLogo.png";

const PlaidTidings = () => {
  return (
    <Fragment>
      <section className="plaidTidings p-5 px-md-5 container-fluid">
      <section className="plaid  container-fluid">
        <div className="row">
          <div className="offset-lg-2 col-lg-8 ">
            <img className="img-fluid" src={logo} alt="Forever Plaid" />
          </div>
        </div>
        <div className="row text-center">
          <div className="offset-sm-4 col-sm-4 ">
            <Link to="/tickets" className="btn btn-dark btn-lg">
              Tickets and Venue Information
            </Link>
          </div>
        </div>
        <div className="row text-center">
          <div className="offset-sm-4 col-sm-4">
            <h4>December 4th - 5th</h4>
            <h4>December 17th - 18th</h4>
          </div>
        </div>
        <div className="row text-center">
          <div className="offset-sm-2 col-sm-8">
            <p>
              <em>Forever Plaid: Plaid Tidings</em> is a brand new show that
              offers the best of Forever Plaid, tied up in a nifty package with
              a big Christmas bow on top! Filled with Christmas standards that
              have all been "Plaid-erized," our boys are back to do their
              Christmas Special.
            </p>
            <p>
              At first, Frankie, Jinx, Smudge and Sparky aren't sure why they've
              returned to Earth for another posthumous performance, but a phone
              call from the heavenly Rosemary Clooney lets them know that
              they're needed to put a little harmony into a discordant world.
              Sprinkled among the Christmas offerings are audience favorites,
              like their riotous three-minute-and-eleven-second version of The
              Ed Sullivan Show – this time, featuring the Rockettes, the
              Chipmunks and The Vienna Boys Choir, as well as a Plaid Caribbean
              Christmas that puts the "Day-O" in Excelsis!
            </p>
            <p>
              This truly "heaven-sent" holiday treat will lift audiences'
              spirits and fill them with nostalgia for a bygone era of classic
              music sung in perfect harmony.
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
          </div>
        </div>
        {/* <div className="row mb-5">
          <div className="offset-lg-2 col-lg-8 ">
            <img className="img-fluid" src={jumping_img} alt="Forever Plaid" />
          </div>
        </div> */}
        <div className="row">
          <div className="offset-lg-1 col-lg-10 ">
            <h2>Creative Team</h2>
            <Bio name="Xander Mason (Director) " image={xander_director_img}>
              {/* Need Bio */}
            </Bio>
            <Bio name="Alexis Burrows (Music Director)" image={""}>
              {/* Need Bio */}
            </Bio>
            <Bio name="Liam Boyd (Choreographer)" image={liam_choreographer_img}>
              {/* Need Bio */}
            </Bio>
          </div>
        </div>
        <div className="row">
          <div className="offset-lg-1 col-lg-10 ">
            <h2>Cast</h2>
            <Bio name="Liam Boyd (SMUDGE) " image={liam_img}>
              is currently a musical theatre student at Arizona State
              University. Liam is making his SAPAC debut in{" "}
              <em>Forever Plaid</em>. Favorite roles include Ash in{" "}
              <em>Evil Dead: The Musical</em> (Catalina Foothills High School),
              Cornelius in <em>Hello Dolly</em> (Catalina Foothills High
              School), and Joseph in <em>Light Switch</em> (Arizona State
              University). Liam is currently ranked 13 th in the world in Irish
              Dancing. Liam is extremely grateful to be a part of this cast and
              gives many thanks to SAPAC as well as his mom, dad, and girlfriend
              for their never-ending support.
            </Bio>
            <Bio name="Topher Esguerra (JINX)" image={topher_img}>
              is a voice student at the UofA striving to share his art and make
              good music. You may have seen him in previous SAPAC productions in
              the role of Nanki-Poo in <em>The Hot Mikado</em> or as a part of{" "}
              <em>Songs for A New World</em>. He is also currently a music
              director for UA&#39;s premiere a cappella group CatCall. He would
              like to thank his mom for moral support at home, the men of
              CatCall for making music such a big part of his life, and for all
              of his closest friends that help him follow his dreams of
              performing.
            </Bio>
            <Bio
              name="Xander Mason (SPARKY)"
              image={xander_img}
            >
              is thrilled to be playing Sparky! He recently graduated from the
              University of Arizona with a BFA in Musical Theatre. Some of his
              favorite roles have been Johnny (<em>American Idiot</em>), Bobby (
              <em>Cabaret</em>), and Ernst (<em>Spring Awakening</em>). “I’d
              like to thank my parents and sister for being my support system,
              my friends for encouragement and inspiration, and the audience for
              letting us share this story with you.”
            </Bio>
            <Bio name="Danny Fapp (FRANKIE)" image={danny_img}>
              is thrilled to be joining SAPAC for the first time with Forever
              Plaid. Danny previously appeared in Tucson in shows like{" "}
              <em>The Light Princess</em> (Stone Suitor) and{" "}
              <em>She Loves Me</em> (Waiter), as well as in the Quad Cities in{" "}
              <em>A Green River</em> (Jason). Danny is a Junior at the
              University of Arizona and is currently pursuing degrees in
              Marketing and Creative Writing. He is also a Vice President of the
              Charles Darwin Experience, a University-based short form improv
              team that normally performs weekly shows for students and the
              community alike. It has been his utmost honor to understudy and
              assistant direct this wonderful cast, and he can't wait for you to
              see the show!
            </Bio>
          </div>
        </div>
        </section>
      </section>
    </Fragment>
  );
};
export default PlaidTidings;
