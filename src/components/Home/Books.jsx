import { FaRegStar } from "react-icons/fa6";
import Tag from "./Tag";
import '../Headers/Header.css'
import { Link } from "react-router-dom";



const Books = ({book}) => {
    const {bookName,author,image,tags,category,rating,bookId} = book;
    return (
        <div>
            <Link to={`/details/${bookId}`}>
            <div>
                <div className="card w-full bg-base-100 border-2">
                    <figure className="px-10 pt-10">
                        <img src={image} alt="Shoes" className="rounded-xl w-[326px] h-[300px]"/>
                    </figure>
                    <div className="card-body">
                        <div className="flex gap-3">{
                            tags.map((tag,idx) => <Tag key={idx} tag = {tag}></Tag>)
                        }</div>
                        <h2 className="card-title text-2xl font-serif">{bookName}</h2>
                        <p className="font-class text-lg font-medium">By: {author}</p>
                        <hr  className='border-1 border-dashed my-2'/>
                        <div className="card-actions flex text-lg font-medium font-class">
                            <p>{category}</p>
                            <div className="flex justify-center items-center gap-2  ">
                                <span className=" ">{rating}</span> 
                                <span className=""><FaRegStar /></span></div>
                        </div>
                    </div>
                </div>
            </div>
            </Link>
        </div>
    );
};

export default Books;