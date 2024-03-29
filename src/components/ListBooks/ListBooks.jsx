
import { RiArrowDropDownLine } from "react-icons/ri";
import Readlist from "./Readlist";
import Wishlist from "./Wishlist";
import { useState } from "react";
import { getReadBooks, saveReadBooks } from "../Utility/Utility";


const ListBooks = () => {
    const [displayr, setdisplayr] = useState(true);
    const [displayrt, setdisplayrt] = useState(true);
    const [displayrp, setdisplayrp] = useState(true);
     const [displayw,setdisplayw] = useState(true);
     const [displaywt, setdisplaywt] = useState(true)
     const [displaywp, setdisplaywp] = useState(true)
    const handlebyrating= state =>{
            setdisplayr(state);
            setdisplayw(state);
            setdisplayrp(state); 
        
    }
    const handlebytotalpage = state =>{
        setdisplayrt(state);
        setdisplaywt(state);
        setdisplaywp(state);
    }
    console.log("display form handle", displayr);
    return (
        <div>
            <div className="flex justify-center items-center bg-gray-100 rounded-xl mt-6">
                <h1 className="text-3xl font-bold p-6">Books</h1>
            </div>
            <div className="flex justify-center items-center my-10">
                <details className="dropdown">
                    <summary className="m-1 btn bg-green-500">Short by <span className="text-2xl"><RiArrowDropDownLine /></span></summary>
                    <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
                        <li onClick={()=>handlebyrating(false)}><a>rating</a></li>
                        <li onClick={()=>handlebytotalpage(false)}><a>Number of pages</a></li>
                        <li onClick={()=>handlebytotalpage(false)}><a>Publisher year</a></li>
                    </ul>
                </details>
            </div>
            <div>
                <div role="tablist" className="tabs tabs-lifted">
                    <input type="radio" name="my_tabs_2" role="tab" className="tab" aria-label="Read Books" checked />
                    <div role="tabpanel" className="tab-content bg-base-100 border-base-300 rounded-box p-12 "><Readlist displayr={displayr} displayrt= {displayrt} displayrp={displayrp} ></Readlist></div>

                    <input type="radio" name="my_tabs_2" role="tab" className="tab" aria-label="Wishlist Books"  />
                    <div role="tabpanel" className="tab-content bg-base-100 border-base-300 rounded-box p-6"><Wishlist displayw={displayw} displaywt={displaywt} displaywp={displaywp}></Wishlist></div>
                </div>
            </div>
        </div>
    );
};

export default ListBooks;