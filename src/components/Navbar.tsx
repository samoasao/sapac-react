import logo from '../images/SAPAClogowordmark.png';
import { NavLink } from 'react-router-dom';
import { HashLink as Link } from 'react-router-hash-link';
import React from 'react';
import _ from 'lodash';

const links = [
    {
        title: 'Home',
        url: '/'
    },
    {
        title: 'Shows',
        dropdowns: [
            [
                {
                    title: '2020-2021',
                    url: '/#events'
                },
                {
                    title: 'Past Shows',
                    url: '/past-shows'
                },
            ],
            [
                {
                    title: 'Tickets',
                    url: '/tickets'
                },
                {
                    title: 'Auditions',
                    url: '/auditions'
                },
            ]
        ]
    },
    {
        title: 'About Us',
        dropdowns: [[
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
        ]]
    },
    {
        title: 'Support',
        dropdowns: [[
            {
                title: 'Individual',
                url: '/support-individual'
            },
            {
                title: 'Corporate',
                url: '/support-corporate'
            },

        ]]
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
    if (link.url.includes('#')) {
        return (
            <Link to={link.url} className='dropdown-item'>
                {link.title}
            </Link>
        )

    }
    else {
        return (
            <NavLink to={link.url} className='dropdown-item' exact>
                {link.title}
            </NavLink>
        )
    }
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
                            const idName = _.camelCase(link.title) + '-nav';
                            return (
                                <li className="nav-item dropdown">
                                    <span className="nav-link dropdown-toggle" id={idName} data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        {link.title}

                                    </span>
                                    <div className="dropdown-menu" aria-labelledby={idName}>
                                        {
                                            link.dropdowns.map((dropdownSection, i) => {
                                                return (
                                                    <React.Fragment>
                                                        {i>0 ? <div className="dropdown-divider"></div> : ''}
                                                        {dropdownSection.map(dropdown => getDropDown(dropdown))}
                                                    </React.Fragment>
                                                )
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
    )
}
export default Navbar;