import { getReadBooks } from "../Utility/Utility";


const ListBooks = () => {
    const storeBooks = getReadBooks();
    console.log(storeBooks);
    return (
        <div>
            <h1>list books</h1>
        </div>
    );
};

export default ListBooks;