
const LeftPanel = () => {
    return (
        <div className="absolute text-white top-12 bottom-0 left-0 text-xs bg-bs-main-color border-r " style={{ width: "240px" }}>
            <div className="flex flex-col sidebar-max-h">
                <div className="flex flex-col max-h-[202px] min-h-[40px] border-b ">
                    <div className="flex py-2 w-full items-center border-b ">
                        <span className="flex items-center justify-end !w-8 !h-8">.</span>
                        <p className="pl-2">pages</p>
                    </div>
                    <div className="flex flex-col overflow-auto">
                        <div className="flex h-8 items-center sidebar-item--hover">
                            <span className="flex w-8 h-8"></span>
                            <p className="pl-2">UI</p>
                        </div>
                        <div className="flex h-8 items-center sidebar-item--hover">
                            <span className="flex w-8 h-8"></span>
                            <p className="pl-2">color</p>
                        </div>
                        <div className="flex h-8 items-center sidebar-item--hover">
                            <span className="flex w-8 h-8"></span>
                            <p className="pl-2">Present</p>
                        </div>
                        <div className="flex h-8 items-center sidebar-item--hover">
                            <span className="flex w-8 h-8"></span>
                            <p className="pl-2">Icon Pack</p>
                        </div>
                        <div className="flex h-8 items-center sidebar-item--hover">
                            <span className="flex w-8 h-8"></span>
                            <p className="pl-2">Boiler</p>
                        </div>
                    </div>
                </div>


                    <div className="flex flex-col  overflow-auto">
                        {
                            [...Array(27).keys()].map(() => (
                                <div className="flex h-8 items-center frames--hover">
                                    <span className="flex w-8 h-8"></span>
                                    <p className="pl-2">Boiler</p>
                                </div>
                            ))
                        }
                    </div>

            </div>
        </div>
    )
}

export default LeftPanel