import React, { useState } from "react";
import {IState as Props} from "../App"

interface IProps {
    category: Props["category"]
    setCategory: React.Dispatch<React.SetStateAction<Props["category"]>>
}

const AddToList: React.FC<IProps> = ({ category, setCategory }) => {

    const [input, setInput] = useState({
        name:"",
        row_order:"",
        banner:"",
        slug:""
    })

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
        setInput({
            ...input,
            [e.target.name]: e.target.value
        })
    }

    const handleClick = (): void => {
        if (
            !input.name ||
            !input.row_order ||
            !input.banner
        ){ return }

        setCategory([
            ...category,
            {
                name: input.name,
                row_order: parseInt(input.row_order),
                banner: input.banner,
                slug:input.slug
            }
        ]);

        setInput({
            name:"",
            row_order:"",
            banner:"",
            slug:""
        });
    }

    

    return (
        <div className="AddToList">
            <input 
                type="text" 
                placeholder="Name"
                className="AddToList-input"
               
                value={input.name}
                onChange={handleChange}
                name="name"
            />
            
            <input 
                type="text" 
                placeholder="Banner"
                className="AddToList-input"
                value={input.banner}
                onChange={handleChange}
                name="banner"
            />
            <input 
                type="number" 
                placeholder="Row Order" 
                className="AddToList-input"
                value={input.row_order}
                onChange={handleChange}
                name="row_order"
            />
            <textarea 
                placeholder="Slug"
                className="AddToList-input"
                value={input.slug}
                onChange={handleChange}
                name="slug"
            />

            <button
                onClick={handleClick}
                className="AddToList-btn"
            >
                Add to List
            </button>
        </div>
    )
}


export default AddToList;
