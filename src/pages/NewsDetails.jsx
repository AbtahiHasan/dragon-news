import React, { useEffect, useState } from 'react';
import TopHeader from '../components/TopHeader';
import RightSidebar from '../components/RightSidebar';
import Container from '../components/Container';
import { Link, useParams } from 'react-router-dom';
import { BsArrowLeft, BsCalendar} from "react-icons/bs";
import img1 from "/assets/1.png"
import img2 from "/assets/2.png"
import img3 from "/assets/3.png"


const NewsDetails = () => {
    const {id} = useParams()
    const [news, setNews] = useState([])
    const {title, details, image_url, category_id} = news
    useEffect(() => {
        fetch(`https://dragon-news-abtahihasan.vercel.app/news/${id}`)
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
                        <h2 className='mt-8'>Editors Insight</h2>
                        <section className='grid md:grid-cols-3 gap-5 mb-8'>
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
                    </div>
                </div>
                <div><RightSidebar/></div>

            </main>            
        </Container>
    );
};

export default NewsDetails;