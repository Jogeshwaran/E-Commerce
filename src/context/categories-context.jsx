import { useEffect } from "react";
import { createContext, useState } from "react";
import SHOP_DATA from '../shop-data.js'
import { addCollectionAndDocuments, getCategoriesAndDocuments } from "../utils/firebase/Firebase-Authentication.js";

export const CategoriesContext = createContext({
    categoryMap : {},
    
})

export const CategoriesProvider = ({children}) =>{
    const [categoryMap,setCategoryMap] = useState({});
    const value = {categoryMap};

    // we want to fire the batch only once because once its loaded we dont want the data again to be populated
    // so we dont need these method.
    
    // useEffect(()=>{
    //     addCollectionAndDocuments('categories', SHOP_DATA)
    // },[])

    useEffect(()=>{
        //since getCategoriesAndDocuments is a async method which we are passing to the useEffect
        // we have to create the new async func in the useEffect
        const getCategoriesMap = async () =>{
            const categoryMap = await getCategoriesAndDocuments()
            console.log(categoryMap);
            setCategoryMap(categoryMap);

        }
        
        getCategoriesMap()
    },[])

    return (<CategoriesContext.Provider value={value}>{children}</CategoriesContext.Provider>)
}