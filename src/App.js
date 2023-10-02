import { useEffect } from "react";
import Viewport from "./core/viewport";
import Layout from "./layouts/layout";

function App() {
    // useEffect(()=>{
    //     const handleWheel = function (e) {
    //         console.log("scroll");
    //         if (e.ctrlKey || e.metaKey && (e.which === 61 || e.which === 107 || e.which === 173 || e.which === 109 || e.which === 187 || e.which === 189))
    //             e.preventDefault();
    //     };
    //     window.addEventListener("wheel", handleWheel, { passive: false });
    // })

    return (
        <>
            <Layout />
            {/* <Viewport /> */}
        </>
    );
}

export default App;
