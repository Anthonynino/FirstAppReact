import React from "react";
import { useState } from "react";
import { GifGrid,AddCategory } from "./components";
import 'animate.css';



export const GifExpertApp = () =>{

    const [categories, setCategories] = useState(['One Punch']);

    const onAddCategory = ( newCategory) => {

        if ( categories.includes(newCategory)) return;


        setCategories([newCategory, ...categories]);
        
        //categories.push(newCategory);
    }

    return (
        <>
        {/*Title*/}
        <h1 className="animate__bounce" id="title">
             <strong>
            Anime Gifs
            </strong>
        </h1>
       
        <AddCategory 
        //setCategories={ setCategories }
        onNewCategory = { (event) => onAddCategory(event)}
        currentCategories= {categories}
        />
        {/* Gif Galery */}
        
        
            {
                categories.map( (category) => (
                    <GifGrid 
                    key={ category } category={category}
                    />
                ))


            }
            
                   
       

            
        </>
    )
}