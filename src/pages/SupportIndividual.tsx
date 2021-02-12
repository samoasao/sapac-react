import { Fragment } from 'react'
const SupportIndividual = () => {

    return (
        <Fragment>
            <section className="about py-5 p-3 px-md-auto">
                <div className="card">
                    <div className="card-body">
                        <h2 className="card-title">Individual Giving</h2>
                        <div className="py-4 mx-auto">

                            <h4>SUPPORTER: UP TO $149</h4>
                            <ul>
                                <li>Yearlong recognition in SAPAC mainstage programs and on website.</li>

                            </ul>
                            <h4>INSIDER: $150 - $499</h4>

                            <ul>
                                <li><em>All benefits outlined above, plus…</em></li>

                                <li>Invitations to Sneak Peaks and other events for each show</li>
                                <li>1 SAPAC pint glass</li>
                            </ul>

                            <h4>BENEFACTOR: $500 - $1499</h4>

                            <ul>
                                <li><em>All benefits outlined above, plus…</em></li>
                                <li>Invitation to select technical and dress rehearsals</li>
                                <li>
                                    Second (total of 2) SAPAC pint glass
                </li>
                            </ul>
                            <h4>SPOTLIGHT: $1500 - $4999</h4>
                            <ul>
                                <li><em>All benefits outlined above, plus…</em></li>
                                <li>Two (2) Tickets to our Annual Broadway Gala</li>
                            </ul>

                            <h4>OVATION: $5,000+</h4>
                            <ul>
                                <li><em>All benefits outlined above, plus…</em></li>
                                <li>Invitation to a dinner with SAPAC Artistic Leadership</li>
                            </ul>

                            <a className="btn btn-lg btn-dark" target="_blank" rel="noreferrer"
                                href="https://sapactucson.tix.com/Donation.aspx?OrgNum=6126">Make
                a Donation</a>

                        </div>
                    </div>
                </div>
            </section>
        </Fragment>
    )

}
export default SupportIndividual