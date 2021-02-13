import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'
import Bio from '../components/Bio'

import ben_img from '../images/plaid/ben_muckenthaler.jpeg'
import liam_img from '../images/plaid/liam_boyd.jpg'
import topher_img from '../images/plaid/topher_esguerra.jpg'
import xander_img from '../images/plaid/xander_mason.jpeg'
import chach_img from '../images/plaid/chach_snook.jpg'
import matt_img from '../images/plaid/matt_holter.jpg'
import logo from '../images/PlaidLogo.png'

const ForeverPlaid = () => {

    return (
        <Fragment>
            <section className="plaid py-5 p-3 px-md-5 container-fluid">
                <div className="row">
                    <div className="offset-lg-3 col-lg-6 ">
                        <img className="img-fluid" src={logo} alt="Forever Plaid" />

                    </div>

                </div>
                <div className="row text-center">
                    <div className="offset-sm-4 col-sm-4 ">

                        <Link to="/tickets" className="btn btn-dark btn-lg">Tickets and Venue Information</Link>Í
                    </div>
                </div>
                <div className="row text-center">
                    <div className="offset-sm-4 col-sm-4">
                        <h4>March 12th - 21st</h4>
                    </div>
                </div>
                <div className="row text-center">
                    <div className="offset-sm-2 col-sm-8">
                        <p><em>Forever Plaid</em> is one of the most popular and successful musicals in recent memory. This
                    deliciously fun revue is chock-full of classic barbershop quartet harmonies and pitch-perfect
                    melodies! Directed by Chach Snook who was on the National Tour of the show as well as Music
                    Directed by Matthew Holter who is a founder of the doo-wop group The 4GENTS, this show
                    will be sure to delight and move audiences!</p>
                        <p>
                            Once upon a time, there were four guys (Sparky, Smudge, Jinx and Frankie) who discovered that
                            they shared a love for music and then got together to become their idols – The Four Freshman,
                            The Hi-Lo&#39;s and The Crew Cuts. Rehearsing in the basement of Smudge&#39;s family&#39;s plumbing
                            supply company, they became &quot;Forever Plaid&quot;. On the way to their first big gig, the &quot;Plaids&quot; are
                            broadsided by a school bus and killed instantly. It is at the moment when their careers and lives
                    end that the story of <em>Forever Plaid</em> begins....
                    </p><p>
                            Singing in close harmony, squabbling boyishly over the smallest intonations and executing their
                            charmingly outlandish choreography with overzealous precision, the &quot;Plaids&quot; are a guaranteed
                            smash, with a program of beloved songs and delightful patter that keeps audiences rolling in the
                    aisles when they&#39;re not humming along to some of the great nostalgic pop hits of the 1950s.</p>
                    </div>
                </div>
                <div className="row">
                    <div className="offset-lg-1 col-lg-10 ">
                        <h2>Creative Team</h2>
                        <Bio
                            name='Chach Snook (Director) '
                            image={chach_img}
                        >
                            Chach Snook lived in NYC as a professional
                            singer/actor for almost 10 years. As a member of the jazz a cappella group
                            Pieces of 8, he recorded 2 albums. Chach performs many concerts in Arizona,
                            some with wife, Jodi Darling. He has been seen singing with Khris Dodge
                            Entertainment, The 4GENTS and other groups. Favorite productions: <em>Forever
                            Plaid</em> (Jinx)-National Tour; Arizona Onstage Production of <em>Les Misérables</em>
                            (Enjolras) with his daughter, Julia Darling Snook; St. Francis Theatre in the
                            Foothills: Directed <em>A Christmas Survival Guide</em> and <em>Godspell 2012</em>; Directed and
                            starred in successful runs of <em>I Love You, You’re Perfect, Now Change</em> (Man 1),
                            <em>Triumph of Love</em> (Harlequin), and <em>The Last Five Years</em> (Jamie) with the
                            Roadrunner Theatre Company (6 MAC Nominations); With Arts Express: <em>She
                            Loves Me</em> (Sipos); he is the Music Director for the Monte Awards (Southern
                            Arizona High School Musical Theatre Awards) and most recently <em>Sweeney Todd</em>
                             (Sweeney Todd) again with his daughter. Chach has a Vocal Performance
                            degree from NAU and is an award-winning Arts Educator. He currently is an Arts
                            Integration Specialist with the Opening Minds Through the Arts (OMA) program
                            for TUSD and for 12 years he was the Flowing Wells Jr. High School Choir and
                            Drama teacher where he directed over 75 concerts, plays and musicals. Chach
                            sends much love to his family (Jodi, Julia and Gabriel) and friends for their
                            continued support.
                        </Bio>
                        <Bio
                            name='Matt Holter (Music Director)'
                            image={matt_img}
                        >
                            is originally from the Fargo-Moorhead area and grew up
                            with the music of the mid-20th Century all around. A widely recognized director and performer,
                            his career has provided opportunities all over the world from China and Russia to performances
                            throughout North America. Locally, Matthew maintains a very busy teaching and performing
                            schedule. Mr. Holter is a Mentor Teacher for Choral teachers and a member of the Central Fine
                            Arts Staff in TUSD teaching as an OMA specialist whose students have appeared frequently in
                            district and public performances. In addition to his teaching, he is involved with numerous music
                            organizations, notably Grammy-nominated True Concord Voices &amp; Orchestra and founding The
                            4GENTS, Tucson&#39;s old-school, doo-wop professors. Since 2015, Mr. Holter has served as the
                            Music Director for St. Thomas the Apostle Catholic Church in Tucson. Matthew and his wife,
                            Victoria, live happily in Tucson with their five children.
                        </Bio>
                    </div>
                </div>
                <div className="row">
                    <div className="offset-lg-1 col-lg-10 ">
                        <h2>Cast</h2>
                        <Bio
                            name='Liam Boyd (SMUDGE) '
                            image={liam_img}
                        >
                            is currently a musical theatre student at Arizona State University. Liam
                            is making his SAPAC debut in <em>Forever Plaid</em>. Favorite roles include Ash in <em>Evil Dead: The
                            Musical</em> (Catalina Foothills High School), Cornelius in <em>Hello Dolly</em> (Catalina Foothills High
                            School), and Joseph in <em>Light Switch</em> (Arizona State University). Liam is currently ranked 13 th in
                            the world in Irish Dancing. Liam is extremely grateful to be a part of this cast and gives many
                            thanks to SAPAC as well as his mom, dad, and girlfriend for their never-ending support.
                        </Bio>
                        <Bio
                            name='Topher Esguerra (JINX)'
                            image={topher_img}
                        >
                            is a voice student at the UofA striving to share his art and make good
                            music. You may have seen him in previous SAPAC productions in the role of Nanki-Poo in <em>The
                            Hot Mikado</em> or as a part of <em>Songs for A New World</em>. He is also currently a music director for UA&#39;s
                            premiere a cappella group CatCall. He would like to thank his mom for moral support at home,
                            the men of CatCall for making music such a big part of his life, and for all of his closest friends
                            that help him follow his dreams of performing.
                        </Bio>
                        <Bio
                            name='Xander Mason (SPARKY)'
                            image={xander_img}
                        >
                            is thrilled to be playing Sparky! He recently graduated from the
                            University of Arizona with a BFA in Musical Theatre. Some of his favorite roles have been
                            Johnny (<em>American Idiot)</em>, Bobby (<em>Cabaret</em>), and Ernst (<em>Spring Awakening</em>). “I’d like to thank my
                            parents and sister for being my support system, my friends for encouragement and inspiration,
                            and the audience for letting us share this story with you.”
                        </Bio>
                        <Bio
                            name='Ben Muckenthaler (FRANKIE)'
                            image={ben_img}
                        >
                            is proud to be in his first show with SAPAC. He is currently
                            auditioning for BFA programs and is helping run The Blank Conversations Theatre Company in
                            Las Cruces, NM. Recent shows include <em>Sweeney Todd</em> as Anthony, <em>The Last Five Years</em> as
                            Jaimie, and <em>Tuck Everlasting</em> as Miles. Ben was also a finalist in the 2019 Monte Awards.
                        </Bio>
                    </div>
                </div>
            </section>

        </Fragment>
    )
}
export default ForeverPlaid;