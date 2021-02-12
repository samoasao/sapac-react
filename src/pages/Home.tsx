import React from 'react';
import logo from '../images/SAPAClogo.png'
import newWorld from '../images/NewWorld.png'

const Home = () => {

    return (

        <React.Fragment>
            <section className="myCarouselSection carousel border-bottom">
                <div className="row">
                    <div className="offset-lg-2 col-lg-8">
                        <div className="myCarousel text-center">
                            <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
                                <div className="carousel-inner" style={{minHeight:'450px'}}>

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
                        <a className="btn btn-lg btn-dark" href="#/tickets">Ticket Information</a>

                    </div>

                </div>

            </section>



            <section className="event py-5 p-3 px-md-5 " id="events">
                <h1 className="text-left mb-5">Events</h1>
                <div className="offset-lg-2 col-lg-8">
                    <div className="event-item row my-5 py-0" id="2021">
                        <div className="col-lg-12 py-2">
                            <h2 className="mt-0 pt-2">2020-2021 Season</h2>

                            <p>
                                As we monitor the current COVID-19 pandemic,
                                our 2020-2021 season is on hold until we here at SAPAC
                                feel that producing live theater is safe for both our actors and audiences.
                                Please check back for updates.
                    </p>
                        </div>
                    </div>




                </div>

                <div className="event-item row my-5 py-0" id="1776">

                    <div className="col-md-5 ml-0 pl-0 py-0 my-0 ">
                        <img className=" my-0 py-0 img-fluid" src={newWorld} alt="Songs For a New World" />
                    </div>
                    <div className="col-md-7 py-2">
                        <h2 className="mt-0 pt-2">Songs For a New World</h2>
                        <p className="byline">Music and Lyrics by Jason Robert Brown</p>
                        <p className="location">Virtual Performance</p>
                        <p className="performance-date">November 21, 2020</p>
                        <p>100 minutes, 26 performers, 16 stories and 1 pandemic. Jason Robert Brown wrote the music
                        and lyrics to these songs with a common theme...how one moment can change our lives forever.
                        Join us as we have gathered performers from all over the country to convey a modern interpretation
                        to these classNameic songs by relating them to our current pandemic. Proceeds from this performance will
                        go to the Tucson Performing Arts fund which was developed to help local artists financially during
                        this time.
                </p>
                        <a href="https://www.showtix4u.com/event-details/39623" rel="noreferrer" target="_blank" className="btn btn-dark btn-lg">Buy Tickets</a>
                    </div>
                </div>



            </section>
        </React.Fragment >
    )
}
export default Home;