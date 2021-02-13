import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../images/SAPAClogo.png'
import plaidLogo from '../images/PlaidLogo.png'
import ShowCard from '../components/ShowCard';
import TicketButton from '../components/TicketButton';

const Home = () => {

    return (

        <React.Fragment>
            <section className="myCarouselSection carousel border-bottom">
                <div className="row">
                    <div className="offset-lg-2 col-lg-8">
                        <div className="myCarousel text-center">
                            <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
                                <div className="carousel-inner" style={{ minHeight: '450px' }}>

                                    <div className="carousel-item active">
                                    </div>
                                </div>
                                <div id="logo-back">
                                    <img id="carouselTitle" className="p-3 rounded" src={logo}
                                        alt="SAPAC" />
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
                            Southern Arizona Performing Arts Company (SAPAC) is a 501(c)3 nonprofit organization of unified
                            local
                            artists committed to
                            bringing high-quality theatrical performance to the Tucson area. We believe in the power theater has
                            to
                            entertain,
                            edify, and connect audience members and performers alike. SAPAC creates opportunity for local
                            artists in all
                            aspects of theater to learn and grow in a professional atmosphere while fostering a positive effect
                            on the
                            community,
                    building empathy and connections throughout Tucson. </p>
                        <a className="btn btn-lg btn-dark" target="_blank" rel="noreferrer"
                            href="https://sapactucson.tix.com/Donation.aspx?OrgNum=6126">Make a Donation</a>
                            &nbsp;
                        <Link className="btn btn-lg btn-dark" to="/tickets">Ticket Information</Link>

                    </div>

                </div>

            </section>



            <section className="event py-5 p-3 px-md-5 " id={"events"}>
                <h1 className="text-left mb-5">Events</h1>

                <ShowCard
                    image={plaidLogo}
                    showInfoURL='/plaid'
                    title='Forever Plaid'
                    byline='Written by Stuart Ross'
                    location={['Arts Express Theatre at The Park Place Mall', 'Community Performing Arts Center, Green Valley']}
                    performanceDate={[
                        'Arts Express - March 12th - 21st 2021 (Fridays and Saturdays at 7pm, Sundays at 2pm)',
                        'CPAC - Saturday April 3rd at 3pm and 7pm'
                    ]}
                // ticketURL="https://arts-express.simpletix.com/e/64173?aff=HomePageLink"
                >
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
                    <TicketButton
                        ticketURL="https://arts-express.simpletix.com/e/64173?aff=HomePageLink"
                        text="Buy Tickets for Arts Express Theatre"
                    />
                    <div className="my-2"></div>
                    <TicketButton
                        ticketURL="https://performingartscenter.thundertix.com/events/183967"
                        text="Buy Tickets For Community Performing Arts Center, Green Valley"
                    />
                </ShowCard>


            </section>
        </React.Fragment >
    )
}
export default Home;