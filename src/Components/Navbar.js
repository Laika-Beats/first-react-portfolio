import React, {useEffect} from 'react'
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
            <div>
                <p>Joshua Elliot Thompson</p>
            </div>
            <nav className="navigation">
                <ul>
                    <li><a href="">About</a></li>
                    <li><a href="">Portfolio</a></li>
                    <li><a href="">Socials</a></li>
                    <li><a href="">Contact</a></li>
                </ul>
            </nav>
        </header>
    )
}

export default Navbar