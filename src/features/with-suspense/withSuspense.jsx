import React from "react"
import Preloader from "../preloader/index.js";

export const withSuspense = (Component) => {
    return (props) => {
        return (
            <React.Suspense fallback={<Preloader/>}>
                <Component {...props} />
            </React.Suspense>
        )
    }
}
