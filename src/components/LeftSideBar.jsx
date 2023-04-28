import { NavLink } from "react-router-dom";
import { useApiData } from "../context/ApiDataProvider";
import img1 from "/assets/1.png"
import img2 from "/assets/2.png"
import img3 from "/assets/3.png"
import { BsCalendar } from "react-icons/bs";


const LeftSideBar = () => {
    const {categories} = useApiData()
    return (
        <aside>
            <h3 className="font-bold text-lg">All Caterogy</h3>
            <ul className="mt-4">
                {
                    categories.map((category) => <li className="font-bold " key={category.id}><NavLink to={`/categories/${category.id}`}  className={({isActive}) => isActive ? "bg-[#E7E7E7] w-full rounded block pl-7 py-3" : "pl-7 block py-3"}>{category.name}</NavLink></li>)
                }
            </ul>

            <section className="mt-8">
                <article className="mt-8">
                    <img className="w-full" src={img1} alt="" />
                    <h3 className="text-lg font-bold my-3">Bayern Slams Authorities Over Flight Delay to Club World Cup</h3>
                    <div className="flex items-center gap-2">
                        <p>Sports</p>
                        <BsCalendar/>
                        <p>Jan 4, 2022</p>
                    </div>
                </article>
                <article className="mt-8">
                    <img className="w-full" src={img2} alt="" />
                    <h3 className="text-lg font-bold my-3">Bayern Slams Authorities Over Flight Delay to Club World Cup</h3>
                    <div className="flex items-center gap-2">
                        <p>Sports</p>
                        <BsCalendar/>
                        <p>Jan 4, 2022</p>
                    </div>
                </article>
                <article className="mt-8">
                    <img className="w-full" src={img3} alt="" />
                    <h3 className="text-lg font-bold my-3">Bayern Slams Authorities Over Flight Delay to Club World Cup</h3>
                    <div className="flex items-center gap-2">
                        <p>Sports</p>
                        <BsCalendar/>
                        <p>Jan 4, 2022</p>
                    </div>
                </article>
            </section>
        </aside>
    );
};

export default LeftSideBar;