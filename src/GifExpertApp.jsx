import { useState } from "react";
import { AddCategory, GifGrid } from "./components";

export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['One Punch']);

    const onAddCategory = (newCategory) => {

        if(categories.includes(newCategory)) return;

        setCategories([newCategory,...categories]);
    }

  return (
    <>
        <h3>GifExpertApp</h3>
        <br/>


        <AddCategory 
            onNewCategory={ onAddCategory }
        />


        <ol>
            { categories.map( category => {
                return(
                    <GifGrid
                        key={category}
                        category={category}
                    />
                )
            }) 
            }
            
        </ol>
    </>
  )
}
