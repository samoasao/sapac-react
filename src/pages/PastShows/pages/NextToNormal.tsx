import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import Bio from "../../../components/Bio";

import daniel_img from "../images/ntn/Daniel.jpeg";
import allie_img from "../images/ntn/Allie.jpeg";
import dennis_img from "../images/ntn/Dennis.jpeg";
import xander_img from "../images/ntn/xander_mason.jpeg";
import liz_c_img from "../images/ntn/Liz_Cracchiolo.png";
import liz_s_img from "../images/ntn/Liz_Spencer.jpeg";
import annette_img from "../images/ntn/Annette_Hillman.jpeg";
import matt_img from "../images/ntn/Matthew_Holter.png";
import logo from "../images/ntn/nextToNormalLogo.png";

const NextToNormal = () => {
  return (
    <Fragment>
      <section className="ntn py-5 p-3 px-md-5 container-fluid">
        <div className="row">
          <div className="offset-lg-3 col-lg-6 ">
            <img className="img-fluid" src={logo} alt="Next To Normal" />
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
            <h4>August 20th - 29th</h4>
          </div>
        </div>
        <div className="row text-center">
          <div className="offset-sm-2 col-sm-8">
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
              their daughter and son are bright, wise-cracking teens, appearing
              to be a typical American family. And yet their lives are anything
              but normal because the mother has been battling manic depression
              for 16 years. <em>Next to Normal</em> takes audiences into the
              minds and hearts of each character, presenting their family's
              story with love, sympathy and heart.
            </p>
            <p>
              {" "}
              This deeply moving piece of theatre provides a wonderful
              opportunity for performers to explore dramatic material and
              showcase vocal talents with an energetic pop/rock score.{" "}
              <em>Next to Normal</em> is an emotional powerhouse that addresses
              such issues as grieving a loss, ethics in modern psychiatry, and
              suburban life.
            </p>
            <p>Directed by MAC award winning director, Annette Hillman.</p>
            <p className="font-weight-bold">
              Some scenes use flashing lights or strobing effect that may affect
              photosensitive viewers.
            </p>
          </div>
        </div>
        <div className="row">
          <div className="offset-lg-1 col-lg-10 ">
            <h2>Creative Team</h2>
            <Bio name="Annette Hillman (Director)" image={annette_img}>
              received her BA in Theatre at California State University at Long
              Beach (go 49’rs!) and her MFA in Theatre from Purdue University
              (go Boilermakers!). She apprenticed at Actors Theater of
              Louisville. Just prior to COVID shut-down, she directed BECOMING
              DR. RUTH for Invisible Theatre (Mac nominee) She has also directed
              GENERATION Z, and ALL IN THE TIMING for the University of Arizona
              Dept of Theatre, THE PRODUCERS for Arizona Onstage Productions(MAC
              Nominee for Director, Musical and Production) as well as
              GUTTENBERG, THE MUSICAL and JEWTOPIA. For Live Theatre Workshop
              and BELOW THE BELT and LOOT (MAC Winner, Director, Comedy) as well
              as ALWAYS, PATSY CLINE and NO WAY TO TREAT A LADY. This winter,
              fingers crossed and masks on, she will appear in RUMOURS at Live
              Theatre Workshop as the tormented Cookie.
            </Bio>
            <Bio name="Elizabeth Spencer (Music Director)" image={liz_s_img}>
              is originally from Chicago, Illinois (BS in Music Education from
              the University of Illinois, Champaign-Urbana) and spent 30 years
              in Tucson working at the University of Arizona - ART, the Arizona
              Theatre Company, (Emma, Xanadu, The Music Man and music directing
              many productions for SOS – their summer youth theatre program),
              Arizona Onstage Productions and the Tucson Arizona Boys Chorus,
              among others) before moving to Phoenix 7 years ago. While in
              Phoenix, she performed with Arizona Broadway Theatre, Phoenix
              Theatre and other area theatre companies, as well as music
              directing productions at the Hale Theatre, Desert Stages Theatre
              and the Black Theatre Troupe. She has played for the National
              Tours of Wicked, West Side Story, Legally Blonde, The Wizard of
              Oz, Annie, Beautiful, An American In Paris, and The Little
              Mermaid. Liz and her husband Tom have recently moved back to
              Tucson and she is very excited to be returning to the Tucson
              theatre community.
            </Bio>
          </div>
        </div>
        <div className="row">
          <div className="offset-lg-1 col-lg-10 ">
            <h2>Cast</h2>
            <Bio name="Liz Cracchiolo (DIANA)" image={liz_c_img}>
              is a native Tucsonan and earned her BFA in Musical Theatre from
              the University of Arizona. She has performed throughout the
              country in the genres of Musical Theatre, Cabaret, Jazz, and Rock.
              Most recently you may have seen her as Peggy Lee in Fever, a show
              she co-produced with Pete Swan Productions, and as a headline
              performer for Khris Dodge Entertainment. Theater Credits Include:
              Yitzhak in Hedwig and the Angry Inch (2020 Carmen Award
              Winner-Best Supporting Actor in a Musical), Donna in Mamma Mia
              (2018 MAC Award Nominee-Best Actress in a Musical), Ulla in Mel
              Brooks’ The Producers (2017 MAC Award Nominee-Best Actress in a
              Musical), Madame Thernardier in Les Miserables (2014 MAC Award
              Nominee-Best Actress in a Musical), Woman 2 in Closer than Ever
              (2013 MAC Award Winner-Best Actress in a Musical) Darlene in The
              Great American Trailer Park Christmas Musical, Georgie in The Full
              Monty, Goldie in BARK, B.J. in The Marvelous Wonderettes, Celeste
              #1 in Sunday in the Park with George, and Woman 2 in Songs for a
              New World. Concerts/Cabaret: Classics Rock-Khris Dodge
              Entertainment, Broadway Baby-Khris Dodge Entertainment, Two by
              Two-Joe Bourne Productions, It Don’t Mean a Thing-Pete Swan
              Productions, Headliner-Mister Bing Presents-2014-2017
            </Bio>
            <Bio name="Matthew Holter (DAN)," image={matt_img}>
              originally from Fargo, North Dakota, has a performing and
              directing résumé that spans the concert stage to the sound stage
              in musical theatre, opera, dance and more. Recently he has been
              delivering sensational performances with Tucson’s doctors of
              doo-wop, The 4GENTS, The Chicago Experience with Khris Dodge
              Entertainment and the lovable trio that is Lady & the Tramps as
              well as a member of Grammy nominated ensemble True Concord Voices
              & Orchestra since 2007. Matthew earned degrees in music
              performance and education from The University of Arizona and
              Washington State University. Mr. Holter teaches with Opening Minds
              through the Arts and is the Mentor Teacher of Choral Music for the
              Tucson Unified School District. Throughout his 20-plus years of
              teaching in Minnesota, Arizona, and Washington, he has
              distinguished himself as a valuable guest conductor and clinician
              for local and regional ensembles, and his students have earned
              numerous awards and roles in community, collegiate and school-age
              productions. A rare, genuine triple-threat, recent roles include
              The Mikado in Hot Mikado (2020 Carmen Award Nominee - Best
              Supporting Actor in a Musical) and Leo Bloom in The Producers
              (2017 MAC Award Nominee for Best Actor in a Musical). Matthew
              serves as the Music Director at St. Thomas the Apostle church and
              lives in Tucson enjoying his time with his wife, Victoria, and
              their five children.
            </Bio>
            <Bio name="Allie Devaney (NATALIE)" image={allie_img}>
              is currently a sophomore at Pima Community College with an
              emphasis in theater. She is ecstatic to be playing the role of
              Natalie, a role that she’s dreamed of playing ever since she
              listened to the cast recording. Other favorite past roles have
              included Whatsername in American Idiot, Miss Honey in Matilda, and
              Luisa in The Fantasticks. She already knows that this is going to
              become one of her favorite roles. She would like to thank this
              wonderful cast and creative team for being so amazing and
              supportive, as well as her family and friends. She hopes that you
              enjoy this beautiful and heartfelt show.
            </Bio>
            <Bio name="Xander Mason (GABE)" image={xander_img}>
              is thrilled to be posting Gabe in Next to Normal. Some of his
              favorite shows he’s performed in have been American Idiot
              (Johnny), Spring Awakening (Ernst), and Bobby (Cabaret). You can
              also catch him as the frontman of local band Brace Yourself. “I’d
              like to thank my parents, friends, and the whole company of Next
              to Normal. You all helped provide the space for necessary issues
              to be talked about in the theatre and I couldn’t be more
              grateful!”
            </Bio>
            <Bio name="Daniel Altamirano (HENRY)" image={daniel_img}>
              is a Senior at the University of Arizona earning a BFA in Musical
              Theatre. You may have seen him recently in the productions of
              “Still Standing” a Pop/Rock Review at the Arizona Repertoire
              Theatre and Pippin at the Arizona Repertoire Theatre. He would
              love to thank the incredible cast and crew that have worked hard
              to create a powerful show. He is also grateful to get the chance
              to get back on the stage to create an art form that is like no
              other. Insta: @danielaltamirano_r
            </Bio>
            <Bio
              name="Dennis Tamblyn (DOCTOR MADDEN, DOCTOR FINE)"
              image={dennis_img}
            >
              Dennis Tamblyn received a B.S in Biochemistry and Molecular
              Biophysics before changing career paths and getting his B.M. in
              Voice at the University of Arizona in Tucson. Dennis also received
              his M.M. in Voice at the University of Northern Colorado. Dennis
              has performed with such companies as Arizona OnStage, Arts
              Express, Oro Valley Theater Company and the Gaslight Theatre. Some
              of his credits include: Max Bialystock in{" "}
              <span className="font-italic">The Producers</span> (MAC
              Nomination), Quasimodo in{" "}
              <span className="font-italic">The Hunchback of Notre Dame</span>,
              Bill in <span className="font-italic">Mamma Mia!</span>, and Alfie
              in <span className="font-italic">A Man of No Importance</span>.
              Dennis has also enjoyed an active opera career over the past 20
              years and has performed with such opera companies as Southern
              Arizona Opera, Phoenix Opera, Opera New Jersey, Opera Classica,
              Wiesbaden, Germany; Opera Fort Collins, Colorado; Arizona Opera,
              Tucson; Loveland Opera Theater, Colorado. Dennis is so excited to
              perform in this show that he has loved ever since the cast album
              was released. Walk with me...
            </Bio>
          </div>
        </div>
      </section>
    </Fragment>
  );
};
export default NextToNormal;
