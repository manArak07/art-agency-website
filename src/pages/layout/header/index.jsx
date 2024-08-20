import { Link } from "react-router-dom";
import homeNav from "../../../providers/home-nav";
export default function Header() {
    return(
        <header className="h-24 w-full flex justify-center ">
            <div className=" w-[95%] h-full flex justify-around items-center border-b">
                <div>
                    <h1 className="text-5xl font-medium">Dttio</h1>
                </div>
                <div>
                    <nav className="flex">
                        {homeNav.map(({path, title}) => (
                            <Link key={path} to={path} className="">
                                <p className="ml-3">{title}</p>
                            </Link>
                        ))}
                    </nav>
                </div>
                <div className="flex items-center">
                    <div className="w-28 h-8 rounded-full border border-black flex justify-center items-center">
                        <p>Let's chat</p>
                    </div>
                    <div className=" ml-5 h-3 flex flex-col justify-between">
                        <div className="w-8 h-[2px] bg-black"></div>
                        <div className="w-8 h-[2px] bg-black"></div>
                    </div>
                </div>
            </div>
        </header>
    )
}