import LeftPanel from "../components/side-panels/leftPanel"
import RightPanel from "../components/side-panels/rightPanel"
import Toolbar from "../components/toolbar/toolbar"

const Layout = ({ children }) => {
    return (
        <>
            <Toolbar />
            <LeftPanel />
            <RightPanel />
        </>
    )
}

export default Layout