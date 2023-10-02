import { useState } from "react"

const Viewport = () => {
    const [x, setX] = useState(0)
    const [y, setY] = useState(0)

    const styles = {
        transform: `translate(${x}px, ${y}px)`
    }


    return (
        <div className=" flex bg-[#fafafa] h-[100vh] top-0 w-full" > {/* left-[240px] right-[240px] top-[48px] viewport bottom-0 */}
            <div className="  overflow-y-auto overflow-x-hidden ">
                <div className="relative top-[55px] left-[-192px] z-10 viewport w-[1920px] min-h-[100px] overflow-x-hidden"> {/* left-[-180px] top-[-345px]  */}
                    {/* add ref here to access html document for resize,show preview ,and DOM  */}
                    <div className=" bg-slate-600">
                        asssssssssssssssssss
                        <div className="h-[1000px]">

                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Viewport