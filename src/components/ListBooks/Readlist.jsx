
import { getReadBooks } from "../Utility/Utility";
import Rcard from "./Rcard";
const Readlist = () => {
    const storeBooks = getReadBooks();
    console.log(storeBooks);
    return (
        <div>
            <h1>readlist</h1>
            {
                storeBooks.map((book,idx) => <Rcard key = {idx} book={book}></Rcard>)
            }
        </div>
    );
};

export default Readlist;