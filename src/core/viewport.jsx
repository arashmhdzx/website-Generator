import { useEffect, useState } from "react"

const Viewport = () => {
    const [x, setX] = useState(0)
    const [y, setY] = useState(0)

    const styles = {
        transform: `translate(${x}px, ${y}px)`
    }


    return ( 
        <div className="viewport absolute top-[48px] left-[240px] right-[240px] bottom-0" style={styles}>

        </div>
    )
}

export default Viewport