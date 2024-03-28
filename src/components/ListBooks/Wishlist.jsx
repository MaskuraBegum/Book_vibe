import { getWishBooks } from "../Utility/Utility";
import Rcard from "./Rcard";


const Wishlist = () => {
    const storeWish = getWishBooks();
    return (
        <div className="">
            {
                storeWish.map((book,idx) => <Rcard key = {idx} book={book}></Rcard>)
            }
        </div>
    );
};

export default Wishlist;