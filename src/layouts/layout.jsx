import LeftPanel from "../components/side-panels/leftPanel"
import RightPanel from "../components/side-panels/rightPanel"
import Toolbar from "../components/toolbar/toolbar"
import Viewport from "../core/viewport"

const Layout = ({ children }) => {
    return (
        <>
            <Toolbar />
            <LeftPanel />
            <Viewport/>
            <RightPanel />
        </>
    )
}

export default Layout