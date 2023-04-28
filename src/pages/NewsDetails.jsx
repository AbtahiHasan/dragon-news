import React, { useEffect, useState } from 'react';
import TopHeader from '../components/TopHeader';
import RightSidebar from '../components/RightSidebar';
import Container from '../components/Container';
import { Link, useParams } from 'react-router-dom';
import { BsArrowLeft } from "react-icons/bs";

const NewsDetails = () => {
    const {id} = useParams()
    const [news, setNews] = useState([])
    const {title, details, image_url, category_id} = news
    useEffect(() => {
        fetch(`http://localhost:3000/news/${id}`)
        .then(res => res.json())
        .then(data => setNews(data))
    }, [id])

    return (
        <Container>
            <TopHeader/>
            <main className='md:grid md:grid-cols-4'>
                <div className='col-span-3 px-4'>
                    <div>
                        <img className='w-full' src={image_url} alt="" />
                        <h2 className='text-xl font-bold my-3'>{title}</h2>
                        <p>{details}</p>
                        <Link className='px-4 py-2 text-white rounded bg-[#D72050] mt-8 inline-block ' to={`/categories/${category_id}`}><div className='flex items-center gap-2'><BsArrowLeft/> <span>All news in this category</span></div></Link>
                    </div>
                </div>
                <div><RightSidebar/></div>

            </main>            
        </Container>
    );
};

export default NewsDetails;