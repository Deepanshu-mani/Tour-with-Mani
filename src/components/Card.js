import { useState } from "react";

function Card({id,image,info,price,name,removeTour}) {

    const [readmore,setReadmore] = useState(false);

    const description = readmore ? info :`${info.substring(0,100)}....`;
                        
    function readmoreHandler() {
        setReadmore(!readmore);
    }

    

    return(
        <div className=" card w-[400px] flex flex-col max-h-max m-[1rem] p-[1rem] rounded-xl items-center ">
            <img src={image} className="w-[380px] aspect-square" alt=""></img>
            <div className="tour-info mx-5 my-[5px]">
            <h4 className="tour-name font-bold text-[1.5rem]  text-gray-700">{name} </h4>
            <div className="tour-description text-gray-600 font-bold">
                {description}
                <span className="read-more cursor-pointer text-blue-500" onClick={readmoreHandler}>
                    {readmore?'Show Less':'Read More'}
                </span>
            </div>
            <div className="tour-details">
                <h4 className="tour-price text-[#1faa59] text-[1.3rem] font-bold">{price}</h4>
            </div>
            </div>
            
            
            <button className="btn-red mt-4 px-[80px] py-[10px] border-[1px] border-red-600 rounded-xl text-gray-600 font-bold hover:bg-red-500 hover:text-white transition-all ease-in-out duration-200" onClick={() => removeTour(id)} >
                Not Intrested
            </button>
            
        </div> 
    );
}

export default Card;