import { Fragment } from 'react';
import BoardBio from '../components/BoardBio'

import kevin_hansen from '../images/board/Kevin_Hansen.jpg';
import carrie_stusse from '../images/board/carrie_stusse.jpg';
import tori_holter from '../images/board/Tori.jpg';
import amy_williams from '../images/board/Amy.jpg';
import maria_gallardo from '../images/board/maria.jpg'


const Board = () => {
    return (
        <Fragment>
            <section className="about py-5 p-3 px-md-5">
                <h1>Board Of Directors</h1>

                {/* <!-- Kevin- President
Carrie - Vice President
Tori- Secretary
Amy- Treasurer
Maria - Development Coordinator --> */}

                <div className="row">
                    <div className="offset-lg-1 col-lg-10 ">
                        <BoardBio
                            image={kevin_hansen}
                            name='Kevin Hansen, PRESIDENT'
                            bio="In addition to a career as performer and musical director, Kevin brings 30
                            years
                            of Arts Administration and Human Resources Leadership experience to the SAPAC board. A
                            recent transplant from the Twin Cities, Kevin was cofounder and Executive Director of the
                            Minneapolis Musical Theatre, helping see the organization through tremendous growth as well
                            as critical and audience acclaim, including the staging of 48 musical works (and 23 area
                            premieres). He has appeared onstage in over 40 productions, directed <em>Little Shop of Horrors</em>
                            and the area premiere of the musical adaptation of <em>Summer of ’42</em>, and served as musical
                            director for dozens of productions for a wide variety of theaters. Locally, he has been a part of
                            The Gaslight Theatre acting company since the fall of 2017. Kevin is a graduate of the
                            University of Minnesota-Morris with a double major in Theatre and Music (vocal performance)."

                        />
                        <BoardBio
                            image={carrie_stusse}
                            name='Carrie Stusse, VICE PRESIDENT'
                            bio="Carrie Stusse grew up in the Midwest and was first introduced to
                            musical theatre in junior high
                            by her music teacher, Mrs. Popejoy. It began with West Side Story, and soon after, Carrie joined
                            the junior high swing choir and continued with the school choir in high school. After high
                            school, she recognized her amateur singing talent; however, she still enjoys watching and
                            listening to the talent of others.
                            After moving to Tucson, Carrie obtained a degree in English while pursuing her interest in
                            volunteering to help others. She’s always recognized the importance of nonprofit organizations
                            for communities and looks forward to using her passions for writing and helping others to
                            support SAPAC through grant research and writing."
                        />
                        <BoardBio
                            image={tori_holter}
                            name="Tori Holter, SECRETARY"
                            bio="Tori is a third generation Tucsonan and University of Arizona grad. After many years costuming shows 
                            she is excited to try a new role as SAPAC board member. Tori lives on the eastside with her husband, Matt and 
                            their five kids."
                        />
                        <BoardBio
                            image={amy_williams}
                            name="Amy Williams, TREASURER"
                            bio="Amy Williams is a soprano who sings regularly with Arizona Opera.
                            Amy has recently sung Claire Holmes in The Secret Garden and Mrs. Fezziwig in A Christmas Carol for
                            Arts Express. She is also a member of the Strauss Divas along with Mary Paul, Dianne Iauco, and Bonnie
                            Bird. She also works in Admissions and Student Affairs at the Andrew Weil Center for Integrative
                            Medicine
                            at The University of Arizona. She lives in Tucson with her husband, Tai and loves her two cats, Sholi
                            and
                            Newton. "
                        />
                        <BoardBio
                            image={maria_gallardo}
                            name="Maria Gallardo, DEVELOPMENT COORDINATOR"
                            bio="Maria Gallardo first began performing in theatre with SALOC
                            back in 1984 and fell in love with every aspect of performance. She's since performed with many
                            local Tucson theatres as well as worked behind the scenes as assistant director, prop master,
                            stage manager, lights/sound, costuming,choreographer, make-up, and more. Maria has served on two
                            other boards for local theatre and is excited to be supporting SAPAC with their new endeavors.
                            Maria has two children and teaches middle school drama for the Sunnyside school district."
                        />

                    </div>

                </div>
            </section>
        </Fragment>
    )
}
export default Board;