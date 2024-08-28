import { Link } from "react-router-dom"

export default function Home() {
    const arr = ["pink", "red", "grey", "yellow"]
    return (
        <div className="min-h-screen w-full">
            <div className="w-full flex-col  flex items-center  ">
                <div className="flex w-[53%]  justify-between items-center">
                    <h1 className="text-[120px]">Art Digital</h1>
                    <h6 className="w-24">Based on New York</h6>
                </div>
                <div className="flex w-[53%]  justify-between items-center">
                    <h6 className="w-40">We are specialized in for generating AI images</h6>

                    <h1 className="text-[120px]">/ Agency</h1>
                </div>
            </div>

            <div className="w-full h-[600px] mt-20 flex justify-center">
                <div className="w-[95%] grid grid-cols-3 grid-rows-2 gap-3">
                    {arr.slice(0, 2).map((value) => (
                        <div className="flex justify-center w-full h-72 ">

                            <div className={`bg-[${value}] w-56 rounded-xl h-72`}>

                            </div>
                        </div>
                    ))}

                    <div className="flex justify-center  items-center w-full h-72 ">
                        <Link to={"#"} className="flex flex-col  justify-around h-56">
                            <div className="font-semibold">Nature Images</div>
                            <div className="font-semibold">-- AI Images</div>
                            <div className="font-semibold">Hand Draw</div>
                        </Link>
                    </div>

                    <div className="flex justify-center  items-center w-full h-72 ">
                        <Link to={"#"} className="flex flex-col  justify-around h-56">
                            <div className="font-semibold w-56">
                                Wheter you're an emerging artist or an established creator, we offer tailored solutions that amtify your reach.
                            </div>
                            <div className="font-semibold">Explore All</div>
                            
                        </Link>
                    </div>

                    {arr.slice(2, 4).map((value) => (
                        <div className="flex justify-center w-full h-72 ">

                            <div className={`bg-[${value}] w-56 rounded-xl h-72`}>

                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </div>
    )
}