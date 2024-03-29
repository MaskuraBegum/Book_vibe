import Tag from "../Home/Tag";
import { IoPeopleOutline } from "react-icons/io5";
import { MdOutlineFindInPage } from "react-icons/md";
import { Link } from "react-router-dom";
import { CiLocationOn } from "react-icons/ci";

const Rcard = ({book}) => {
    const {bookName,author,image,tags,category,rating,bookId,publisher,totalPages,yearOfPublishing}= book;
    return (
        <div>
            <div className="card flex-col lg:flex-row card-side bg-base-100 px-2 lg:px-10 py-6 border-2 mt-8 gap-10 ">
                <figure><img src={image} alt="Movie" className="w-[200px] lg:w-[230px] h-[300px]"/></figure>
                <div className="card-body">
                    <h2 className="card-title">{bookName}</h2>
                    <p>By: {author}</p>
                    <div className="flex flex-col lg:flex-row gap-3 item-start lg:items-center"><span className="text-xl">Tags:</span>{
                            tags.map((tag,idx) => <Tag key={idx} tag = {tag}></Tag>)
                        } </div>
                        <div className="flex items-center">
                            <span><CiLocationOn /></span><span>year of publishing:{yearOfPublishing}</span></div>
                    <div className="flex flex-col lg:flex-row  w-full lg:w-96 items-center gap-4">
                        <div className="flex items-center">
                            <span><IoPeopleOutline /></span><p>Publisher: {publisher} </p>
                        </div>
                        <div className="flex items-center">
                            <span><MdOutlineFindInPage /></span><p>Page: {totalPages} </p>
                        </div>
                    </div>
                    <hr  className='border-1 border-dashed my-2'/>
                    <div className="flex flex-col lg:flex-row gap-4  w-40 lg:w-[440px] ">
                        <p className="bg-blue-50 rounded-3xl text-blue-600 px-6 py-2">category:{category}</p>
                        <p className="bg-orange-50 rounded-3xl text-orange-600 px-6 py-2">Ration:{rating}</p>
                        <Link to={`/${bookId}`}><button className="btn bg-green-500 rounded-3xl text-white px-6 py-2">view details</button></Link>
                    </div>
                    
                </div>
            </div>
        </div>
    );
};

export default Rcard;