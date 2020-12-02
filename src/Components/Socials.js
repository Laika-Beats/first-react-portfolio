import React from "react"
import "./socials.scss"

const Socials = () => {
    const data = (
        
            <div>
                <div class="flex-center">
                <i class="fa fa-github fa-4x icon-3d"></i>
                <i class="fa fa-linkedin fa-4x icon-3d"></i>
                <i class="fa fa-twitter fa-4x icon-3d"></i>
                <i class="fa fa-instagram fa-4x icon-3d"></i>
                <br></br>
                <i class="fa fa-facebook fa-4x icon-3d"></i>
                <i class="fa fa-spotify fa-4x icon-3d"></i>
                <i class="fa fa-soundcloud fa-4x icon-3d"></i>
                <i class="fa fa-youtube fa-4x icon-3d"></i>
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