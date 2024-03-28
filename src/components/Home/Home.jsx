import { useLoaderData } from 'react-router-dom';
import Bannar from './Bannar';
import Books from './Books';
import './Home.css'

const Home = () => {
    const books = useLoaderData();
    return (
        <div className="body-font space-y-10">
            <Bannar></Bannar>
            <div className="flex justify-center items-center">
                <h1 className="text-3xl">Books</h1>
            </div>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-2 lg:gap-6'>
            {
                books.map(book => <Books key={book.id} book={book}></Books>)
            }
            </div>
        </div>
    );
};

export default Home;