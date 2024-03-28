import Tag from "../Home/Tag";
import { IoPeopleOutline } from "react-icons/io5";
import { MdOutlineFindInPage } from "react-icons/md";

const Rcard = ({book}) => {
    const {bookName,author,image,tags,category,rating,bookId,publisher,totalPages}= book;
    return (
        <div>
            <div className="card card-side bg-base-100 px-10 py-6 border-2 mt-8 gap-10">
                <figure><img src={image} alt="Movie" className="w-[230px] h-[300px]"/></figure>
                <div className="card-body">
                    <h2 className="card-title">{bookName}</h2>
                    <p>By: {author}</p>
                    <div className="flex gap-3 items-center"><span className="text-xl">Tags:</span>{
                            tags.map((tag,idx) => <Tag key={idx} tag = {tag}></Tag>)
                        }</div>
                    <div className="flex w-96 items-center gap-2">
                        <span><IoPeopleOutline /></span><p>Publisher: {publisher} </p>
                        <span><MdOutlineFindInPage /></span><p>Page: {totalPages} </p>
                    </div>
                    <hr  className='border-1 border-dashed my-2'/>
                    <div className="flex gap-4 w-[400px] ">
                        <p className="bg-blue-50 rounded-3xl text-blue-600 px-6 py-2">category:{category}</p>
                        <p className="bg-orange-50 rounded-3xl text-orange-600 px-6 py-2">Ration:{rating}</p>
                        <button className="btn bg-green-500 rounded-3xl text-white px-6 py-2">view details</button>
                    </div>
                    
                </div>
            </div>
        </div>
    );
};

export default Rcard;