import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { FaRegBookmark } from "react-icons/fa";
import { BsShare, BsStarFill, BsEyeFill } from "react-icons/bs";
import { AiOutlineStar, AiFillStar } from "react-icons/ai";
import Rating from "react-rating";

const Categories = () => {
    const {id} = useParams()
    const [catagories, setCatagories] = useState([])

    useEffect(() => {
        fetch(`http://localhost:3000/categories/${id}`)
        .then(res => res.json())
        .then(data => setCatagories(data))
    }, [id])

   
    
    return (

        <div className="px-3">
            <h1 className="text-xl font-bold mb-3">Dragon News Home</h1>
            <p>{catagories.length} Result found</p>
            {
                catagories.map(catagory => {
                    return (
                        <div className="border mb-5 rounded">
                            <div className="flex justify-between items-center bg-slate-200 p-3">
                                <div className="flex items-center gap-4">
                                    <div>
                                        <img className="w-[40px] h-[40px] rounded-full" src={catagory.author.img} alt="" />
                                    </div>
                                    <div>
                                        <p className="font-bold">{catagory.author.name}</p>
                                        <p>{catagory.author.published_date}</p>
                                    </div>
                                </div>
                                <div>
                                    <div className="flex gap-4">
                                        <FaRegBookmark />
                                        <BsShare />
                                    </div>
                                </div>
                            </div>
                            <div className="p-4">
                                <p className="text-2xl font-bold my-6">{catagory.title}</p>
                                <img className="w-full" src={catagory.image_url} alt="" />
                                <p className="text-md text-gray-500 my-6">{catagory.details.length < 150 ? catagory.details : catagory.details.slice(0, 150) } <Link to={`/news/${catagory._id}`} className="font-bold">  ...read more</Link></p>
                                <hr />
                                <div className="flex justify-between items-center">
                                    <div className="flex gap-2 mt-4 text-orange-500 items-center">
                                        <Rating
                                        readonly
                                            placeholderRating={catagory.rating.number}
                                            emptySymbol={<AiOutlineStar/>}
                                            placeholderSymbol={<AiFillStar/>}
                                            fullSymbol={<AiFillStar/>}
                                        />
                                        <p>{catagory.rating.number}</p>
                                    </div>
                                    <div className="flex gap-2 items-center mt-4">
                                        <BsEyeFill />
                                        <p>566</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    );
};

export default Categories;