import { getWishBooks } from "../Utility/Utility";
import Rcard from "./Rcard";


const Wishlist = () => {
    const storeWish = getWishBooks();
    return (
        <div>
            <h1>wishlist</h1>
            {
                storeWish.map((book,idx) => <Rcard key = {idx} book={book}></Rcard>)
            }
        </div>
    );
};

export default Wishlist;