import React from "react"
import preloader from "@/shared/assets/icons/common/spinner.svg"

let Preloader = (props) => {
    return (
        <div>
            <img src={preloader}/>
        </div>
    )
}

export default Preloader
