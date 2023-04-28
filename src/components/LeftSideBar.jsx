import { NavLink } from "react-router-dom";
import { useApiData } from "../context/ApiDataProvider";


const LeftSideBar = () => {
    const {categories} = useApiData()
    return (
        <aside>
            <h3>All Caterogy</h3>
            <ul>
                {
                    categories.map((category) => <li className="font-bold my-3" key={category.id}><NavLink to={`/categories/${category.id}`} style={{padding: "10px auto"}} className={({isActive}) => isActive ? "bg-[#E7E7E7] w-full rounded block" : ""}>{category.name}</NavLink></li>)
                }
            </ul>
        </aside>
    );
};

export default LeftSideBar;