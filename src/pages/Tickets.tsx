import { Fragment } from 'react'
const Tickets = () => {

    return (
        <Fragment>
            <section className="about py-5 p-3 px-md-auto">
                <div className="card">
                    <div className="card-body">
                        <h2 className="card-title">Tickets</h2>

                        <div id="stx-container"></div>

                        <div className="py-1 mx-auto">

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