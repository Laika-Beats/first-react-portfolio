import React, {useEffect} from 'react'
import {Link} from 'react-scroll'
import "./navbar.scss"


const Navbar = () => {
    const [scrolled, setScrolled] = React.useState(false)
    const handleScroll = () => {
        const offset = window.scrollY
        if (offset > 200) {
            setScrolled(true)
        } else {
            setScrolled(false)
        }
    }

    useEffect( () => {
        window.addEventListener("scroll", handleScroll)
    })

    let x = ["navbar"]
    if (scrolled) {
        x.push("scrolled")
    }
    
    return (
        <header className = {x.join(" ")}>
            <nav className="navigation" id="navbar">
                <ul className="nav-items">
                        <li><Link activeClass="active" to="home" spy={true} smooth={true}> Home </Link></li>
                        <li><Link  to="about" spy={true} smooth={true} offset={-190}> About </Link> </li>
                        <li><Link  to="socials" spy={true} smooth={true} offset={-250}> Socials </Link> </li>
                        <li><Link  to="myform" spy={true} smooth={true} offset={-450}> Contact </Link> </li>
                        <li><Link  to="myCarousel" spy={true} smooth={true} offset={-50} > Projects </Link> </li>
                </ul>
            </nav>
        </header>
    )
}

export default Navbar