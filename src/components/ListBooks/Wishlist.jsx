import { getWishBooks } from "../Utility/Utility";
import Rcard from "./Rcard";


const Wishlist = ({displayw,displaywt,displaywp}) => {
    const storeWish = getWishBooks();
    let render;
    if(!displayw){
        render = storeWish.sort((a,b)=> b.rating - a.rating)
    }
    else{
        render = storeWish;
    }
    if(!displaywt){
        render = storeWish.sort((a,b)=> b.totalPages - a.totalPages)
    }
    else{
        render = storeWish;
    }
    if(!displaywp){
        render = storeWish.sort((a,b)=> b.yearOfPublishing - a.yearOfPublishing)
    }
    else{
        render = storeWish;
    }
    return (
        <div className="">
            {
                render.map((book,idx) => <Rcard key = {idx} book={book}></Rcard>)
            }
        </div>
    );
};

export default Wishlist;