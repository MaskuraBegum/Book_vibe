
import { RiArrowDropDownLine } from "react-icons/ri";
import Readlist from "./Readlist";
import Wishlist from "./Wishlist";
import { useState } from "react";
import { getReadBooks, saveReadBooks } from "../Utility/Utility";


const ListBooks = () => {
    const storeBooks = getReadBooks();
    const [displayr, setdisplayr] = useState([]);
    const [display,setdisplay] = useState([]);
    const handlebyrating= sort =>{
        if(sort ==='rating'){
            const rat = storeBooks.sort((a,b) => b.rating - a.rating);
            setdisplayr(rat);
            
        }
        else if(sort ==='totalPages'){
            const rat = storeBooks.sort((a,b) => b.totalPages - a.totalPages);
            setdisplay(rat);
        }
        console.log("display", displayr);
        displayr.map(book => saveReadBooks({book}))
        display.mao(book => saveReadBooks({book}))
        
    }
    return (
        <div>
            <div className="flex justify-center items-center bg-gray-100 rounded-xl mt-6">
                <h1 className="text-3xl font-bold p-6">Books</h1>
            </div>
            <div className="flex justify-center items-center my-10">
                <details className="dropdown">
                    <summary className="m-1 btn bg-green-500">Short by <span className="text-2xl"><RiArrowDropDownLine /></span></summary>
                    <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
                        <li onClick={()=>handlebyrating('rating')}><a>rating</a></li>
                        <li><a>totalPages</a></li>
                    </ul>
                </details>
            </div>
            <div>
                <div role="tablist" className="tabs tabs-lifted">
                    <input type="radio" name="my_tabs_2" role="tab" className="tab" aria-label="Read Books" />
                    <div role="tabpanel" className="tab-content bg-base-100 border-base-300 rounded-box p-12 "><Readlist></Readlist></div>

                    <input type="radio" name="my_tabs_2" role="tab" className="tab" aria-label="Wishlist Books" checked />
                    <div role="tabpanel" className="tab-content bg-base-100 border-base-300 rounded-box p-6"><Wishlist></Wishlist></div>
                </div>
            </div>
        </div>
    );
};

export default ListBooks;