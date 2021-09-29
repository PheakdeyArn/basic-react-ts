import React from "react";
import {IState as IProps} from "../App"

const List: React.FC<IProps> = ({ category }) => {

    // create render list function
    const renderList = (): JSX.Element [] => {
        return category.map((e) => {
            return (<li className="List">
                <div className="List-header">
                    <img className="List-img" src={e.banner}/>
                    <h2>{e.name}</h2>
                </div>
                <p>{e.row_order}</p>
                <p className="List-note"> {e.slug} </p>
            </li>
            )
        })
    }

    return (
        <ul>
            {renderList()}
        </ul>
    )
}

export default List;
