import { Fragment } from 'react'
import TicketButton from '../components/TicketButton'
const Tickets = () => {

    return (
        <Fragment>
            <section className="about py-5 p-3 px-md-auto">
                <div className="card">
                    <div className="card-body">
                        <h2 className="card-title">Tickets</h2>

                        <div className="py-1 mx-auto">

                            <h4>Forever Plaid</h4>

                        
                            <div className="row mb-3">

                                <div className="col-md-4 mt-2">
                                    <p>
                                        <strong>Arts Express Theatre at The Park Place Mall</strong> <br />
                                        5870 East Broadway Boulevard, Tucson, AZ<br />
                                        March 12th - 21st (Fridays, Saturdays and Sundays) <br />
                                        Fridays and Saturdays at 7pm, Sundays at 2pm
                                    </p>
                                    <TicketButton text="Purchase Tickets for Arts Express" ticketURL="https://arts-express.simpletix.com/e/64173?aff=HomePageLink"></TicketButton>
                                    
                                </div>
                                <div className="col-md-4 mt-2">
                                    <p>
                                        <strong>Community Performing and Arts Center</strong> <br />
                                        1250 W Continental Rd, Green Valley, AZ 85622<br />
                                        Saturday April 3rd at 3pm and 7pm <br />
                                        Fridays and Saturdays at 7pm, Sundays at 2pm
                                    </p>
                                    <TicketButton text="Purchase Tickets for CPAC" ticketURL="https://performingartscenter.thundertix.com/events/183967"></TicketButton>
                                </div>
                            </div>

                            <h4>Purchase Options</h4>


                            <p> You may purchase tickets online or via phone. </p>

                            <p>
                                To purchase tickets via phone, contact our box office at <strong>520.261.0915</strong>.<br />
                                <em>
                                    Please leave a message with your name and phone number.<br />
                                    Your call will be returned by the end of the next business day, Monday through Friday.
                        </em>
                            </p>

                            <p>Please contact us at <strong>boxoffice.sapac@gmail.com</strong> or <strong>520.261.0915</strong>
                        with questions or for more
                        information.</p>


                        </div>
                    </div>
                </div>
            </section>
        </Fragment>
    )

}
export default Tickets