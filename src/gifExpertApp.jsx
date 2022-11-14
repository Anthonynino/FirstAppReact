import React from "react";
import { useState } from "react";
import { GifGrid,AddCategory } from "./components";



export const GifExpertApp = () =>{

    const [categories, setCategories] = useState(['One punch']);

    const onAddCategory = ( newCategory) => {

        if ( categories.includes(newCategory)) return;


        setCategories([newCategory, ...categories]);
        
        //categories.push(newCategory);
    }

    return (
        <>
        {/*Title*/}
        <h1 id="title">
            GifExpertApp
        </h1>
       
        <AddCategory 
        //setCategories={ setCategories }
        onNewCategory = { (event) => onAddCategory(event)}
        currentCategories= {categories}
        />
        {/* Gif Galery */}
        <button onClick={onAddCategory}>Agregar</button>
        
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