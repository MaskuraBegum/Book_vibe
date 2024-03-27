import { useLoaderData, useParams } from "react-router-dom";
import Tag from "./Tag";
import './Home.css'


const Click = () => {
    const details = useLoaderData();
    const { bookId } = useParams();
    const book = details.find(detail => detail.bookId == bookId)
    return (
        <div>
            <div className="hero min-h-screen ">
                <div className="hero-content flex-col lg:flex-row gap-12 px-12">
                    <img src={book.image} className="max-w-sm rounded-xl shadow-2xl min-h-[580px] min-w-[500px]" />
                    <div className="">
                        <h1 className="text-5xl font-bold body-font">{book.bookName}</h1>
                        <p className="py-4 font-medium">By: {book.author}</p>
                        <hr className='border-1 border-dashed my-2' />
                        <p>{book.category}</p>
                        <hr className='border-1 border-dashed my-2' />
                        <p > <span className="font-bold">Review:</span>{book.review}</p>
                        <div className="flex gap-3 my-4 font-bold items-center"> Tags:
                            {
                                book.tags.map((tag, idx) => <Tag key={idx} tag={tag}></Tag>)
                            }
                        </div>
                        <hr className='border-1 border-dashed my-2' />
                        <div className="grid grid-cols-2 pr-52">
                            <p>Number of page</p><span className="font-semibold">: {book.totalPages}</span>
                            <p>Publisher</p> <span className="font-semibold">: {book.publisher}</span>
                            <p>Year of publish</p> <span className="font-semibold">: {book.yearOfPublishing}</span>
                            <p>Rating</p><span className="font-semibold">: {book.rating}</span>
                        </div>
                        <div className="my-8">
                            <button className="btn border-blue-500 mr-6 px-6">Read</button>
                            <button className="btn bg-blue-500 px-4 text-white">Wishlist</button>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Click;