
import { getReadBooks } from "../Utility/Utility";
import Rcard from "./Rcard";
const Readlist = () => {
    const storeBooks = getReadBooks();
    console.log(storeBooks);
    return (
        <div className="">
            {
                storeBooks.map((book,idx) => <Rcard key = {idx} book={book}></Rcard>)
            }
        </div>
    );
};

export default Readlist;