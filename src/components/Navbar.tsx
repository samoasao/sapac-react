import logo from '../images/SAPAClogowordmark.png';
import { Link, NavLink } from 'react-router-dom';
import _ from 'lodash';

const links = [
    {
        title: 'Home',
        url: '/'
    },
    {
        title: 'Shows',
        url: '/shows'
    },
    {
        title: 'About Us',
        dropdowns: [
            {
                title: 'Our Founders',
                url: '/founders'
            },
            {
                title: 'Board of Directors',
                url: '/board'
            },
            {
                title: 'Contact Us',
                url: '/contact'
            },
        ]
    },
    {
        title: 'Support',
        url: '/support'
    },

]

const brandStyle = {
    height: '100px'
}

const getNavLink: (link: { title: string, url: string }) => any = (link) => {
    return (
        <li className="nav-item">
            <NavLink to={link.url} className='nav-link' exact>
                {link.title}
            </NavLink>
        </li>
    )
}

const getDropDown: (link: { title: string, url: string }) => any = (link) => {
    return (
        <NavLink to={link.url} className='dropdown-item' exact>
            {link.title}
        </NavLink>
    )
}

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light pb-0 border-bottom" id="sapac-nav">
            <Link to="/">
                <img className="navbar-brand" src={logo} alt="Southern Arizona Performing Arts Company" style={brandStyle} />
            </Link>

            <ul className="navbar-nav ml-auto border-bottom-0" id="navList">
                {
                    links.map(link => {

                        if (!link.dropdowns) {
                            return getNavLink(link);
                        }
                        else {
                            const idName = _.camelCase(link.title)+'-nav';
                            return (
                                <li className="nav-item dropdown">
                                    <span className="nav-link dropdown-toggle" id={idName} data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        {link.title}

                                    </span>
                                    <div className="dropdown-menu" aria-labelledby={idName}>
                                        {
                                            link.dropdowns.map(dropdown => {
                                                return getDropDown(dropdown);
                                            })
                                        }
                                    </div>
                                </li>
                            )
                        }
                    })
                }

            </ul>

        </nav>
        // <nav class="navbar navbar-expand-lg navbar-light bg-light pb-0 border-bottom" id="sapac-nav">
        //     <a class="navbar-brand" href="index.html">
        //         <img src="../../assets/images/SAPAClogowordmark.png" class="img-fluid" style="height:100px"
        //             alt="Southern Arizona Performing Arts Company" />
        //     </a>
        //     <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
        //         aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        //         <span class="navbar-toggler-icon"></span>
        //     </button>

        //     <div class="collapse navbar-collapse" id="navbarSupportedContent">
        //         <ul class="navbar-nav ml-auto border-bottom-0" id="navList">
        //             <li class="nav-item ">
        //                 <a class="nav-link ${activePage === 'home' ? 'active' : '' }" href="#/home" id="home-nav">Home
        //     <span class="sr-only">(current)</span>
        //                 </a>
        //             </li>
        //             <li class="nav-item dropdown">
        //                 <a class="nav-link ${activePage === 'shows' ? 'active' : '' } dropdown-toggle" href="#" id="shows-nav"
        //                     role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
        //                     Shows
        //   </a>
        //                 <div class="dropdown-menu" aria-labelledby="shows-nav">
        //                     <a class="dropdown-item show_link" href="#/home" name="2021">2020-2021</a>
        //                     <a class="dropdown-item show_link" href="#/past-shows" name="past_shows">Past Shows</a>
        //                     <div class="dropdown-divider"></div>
        //                     <a class="dropdown-item" href="#/tickets">Tickets</a>
        //                     <a class="dropdown-item" href="#/auditions">Auditions</a>
        //                 </div>
        //             </li>
        //             <li class="nav-item dropdown">
        //                 <a class="nav-link ${activePage === 'about' ? 'active' : '' } dropdown-toggle" href="#" id="about-nav"
        //                     role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
        //                     About Us
        //   </a>
        //                 <div class="dropdown-menu" aria-labelledby="about-nav">
        //                     <a class="dropdown-item" href="#/about">Our Founders</a>
        //                     <a class="dropdown-item" href="#/board">Board Of Directors</a>
        //                     <a class="dropdown-item" href="#/contact">Contact Us</a>
        //                 </div>
        //             </li>
        //             <li class="nav-item dropdown">
        //                 <a class="nav-link dropdown-toggle ${activePage === 'support' ? 'active' : '' }" href="#" id="joinus-nav" role="button" data-toggle="dropdown" aria-haspopup="true"
        //                     aria-expanded="false">
        //                     Support
        //   </a>
        //                 <div class="dropdown-menu" aria-labelledby="joinus-nav">
        //                     <a class="dropdown-item" href="#/support">Individual</a>
        //                     <a class="dropdown-item" href="#/support-corporate">Corporate</a>
        //                 </div>
        //             </li>
        //         </ul>
        //     </div>
        // </nav>
    )
}
export default Navbar;