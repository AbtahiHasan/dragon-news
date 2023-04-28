import { NavLink } from "react-router-dom";
import { useApiData } from "../context/ApiDataProvider";


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
        </aside>
    );
};

export default LeftSideBar;