
import { RiArrowDropDownLine } from "react-icons/ri";
import Readlist from "./Readlist";
import Wishlist from "./Wishlist";
import { useState } from "react";
import { getReadBooks, saveReadBooks } from "../Utility/Utility";


const ListBooks = () => {
    const [displayr, setdisplayr] = useState(false);
    const [displayrt, setdisplayrt] = useState(false);
    const [displayrp, setdisplayrp] = useState(false);
     const [displayw,setdisplayw] = useState(false);
     const [displaywt, setdisplaywt] = useState(false)
     const [displaywp, setdisplaywp] = useState(false)
    const handlebyrating= state =>{
            setdisplayr(!state);
            setdisplayw(!state);   
    }
    const handlebytotalpage = state =>{
        setdisplayrt(!state);
        setdisplaywt(!state);
        
    }
    const handlebyYear = state =>{
        setdisplayrp(!state); 
        setdisplaywp(!state);
    }
    console.log("display form handle", displayr);
    return (
        <div>
            <div className="flex justify-center items-center bg-gray-100 rounded-xl mt-6">
                <h1 className="text-3xl font-bold p-6">Your Listed Books</h1>
            </div>
            <div className="flex justify-center items-center my-10">
                <details className="dropdown">
                    <summary className="m-1 btn bg-green-500">Sort by <span className="text-2xl"><RiArrowDropDownLine /></span></summary>
                    <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
                        <li onClick={()=>handlebyrating(displayr)}><a>Rating</a></li>
                        <li onClick={()=>handlebytotalpage(displayrt)}><a>Number of pages</a></li>
                        <li onClick={()=>handlebyYear(displayrp)}><a>Publisher year</a></li>
                    </ul>
                </details>
            </div>
            <div>
                <div role="tablist" className="tabs tabs-lifted">
                    <input type="radio" name="my_tabs_2" role="tab" className="tab" aria-label="Read Books" checked />
                    <div role="tabpanel" className="tab-content bg-base-100 border-base-300 rounded-box p-6 lg:p-12 "><Readlist displayr={displayr} displayrt= {displayrt} displayrp={displayrp} ></Readlist></div>

                    <input type="radio" name="my_tabs_2" role="tab" className="tab" aria-label="Wishlist Books"  />
                    <div role="tabpanel" className="tab-content bg-base-100 border-base-300 rounded-box p-6 lg:p-12"><Wishlist displayw={displayw} displaywt={displaywt} displaywp={displaywp}></Wishlist></div>
                </div>
            </div>
        </div>
    );
};

export default ListBooks;