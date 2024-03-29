
import { getReadBooks } from "../Utility/Utility";
import Rcard from "./Rcard";
const Readlist = ({displayr,displayrt}) => {
    const storeBooks = getReadBooks();
    let render;
    if(!displayr){
         render = storeBooks.sort((a,b) => b.rating - a.rating);
    }
    else{
        render = storeBooks
    }
    if(!displayrt){
        render = storeBooks.sort((a,b)=> b.totalPages - a.totalPages)
    }
    else{
        render = storeBooks;
    }


    console.log('display', !displayr);
    console.log( 'the sort',render);
    // console.log(storeBooks);
    return (
        <div className="">
            {
                render.map((book,idx) => <Rcard key = {idx} book={book}></Rcard>)
            }
        </div>
    );
};

export default Readlist;