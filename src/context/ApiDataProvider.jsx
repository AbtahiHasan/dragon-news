import  { createContext, useContext, useEffect, useState } from 'react';
const DataContext = createContext()
const ApiDataProvider = ({children}) => {
    const [categories, setCategories] = useState([])
    const getCategories = async () => {
        const res = await fetch("https://dragon-news-abtahihasan.vercel.app/categories")
        const data = await res.json()
        setCategories(data)
    }
    useEffect(() => {
        getCategories()
    },[])

    console.log(categories)
    const apiData = {
        categories
    }
    return (
        <DataContext.Provider value={apiData}>
            {children}
        </DataContext.Provider>
    );
};

const useApiData = () => {
    return useContext(DataContext)
}

export {ApiDataProvider, useApiData};