import React from 'react';
import { Link } from 'react-router-dom';

interface NavbarProps {
    links: {
        path: string;
        name: string;
    }[]
}
const Navbar = (props: NavbarProps) => {
    console.log(props.links);
    return (
        <ul>
            {props?.links.map(link => <li key={link.path}><Link to={link.path}>{link.name}</Link></li>)}
        </ul>
    );
};

export default Navbar;
