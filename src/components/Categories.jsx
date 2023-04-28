import { useState } from "react";
import { useParams } from "react-router-dom";

const Categories = () => {
    const {id} = useParams()
    const [singleNews, setSingleNews] = useState([])

   
    
    return (
        <div>
            
        </div>
    );
};

export default Categories;