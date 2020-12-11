import React from "react"
import "./socials.scss"

const Socials = () => {
    const data = (
        
            <div>
                <div class="flex-center">
                <i class="fa fa-github fa-4x icon-3d" onClick={(e) => {e.preventDefault(); window.location.href='https://github.com/Laika-Beats';}}></i>
                <i class="fa fa-linkedin fa-4x icon-3d" onClick={(e) => {e.preventDefault(); window.location.href='https://www.linkedin.com/in/joshua-thompson-12a8811b5/';}}></i>
                <i class="fa fa-twitter fa-4x icon-3d" onClick={(e) => {e.preventDefault(); window.location.href='https://twitter.com/laikabeats';}}></i>
                <i class="fa fa-instagram fa-4x icon-3d" onClick={(e) => {e.preventDefault(); window.location.href='https://www.instagram.com/laika_beats/';}}></i>
                <br></br>
                <i class="fa fa-facebook fa-4x icon-3d" onClick={(e) => {e.preventDefault(); window.location.href='https://www.facebook.com/LaikaBeatz/';}}></i>
                <i class="fa fa-spotify fa-4x icon-3d" onClick={(e) => {e.preventDefault(); window.location.href='https://open.spotify.com/artist/4R6u30PMOLbNNTuR0Jl7x8';}}></i>
                
                </div>
                
            </div>
       
    )
    return (
        <main className="content">
            {data}
        </main>
    )
}

export default Socials