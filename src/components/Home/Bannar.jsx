import { Link } from 'react-router-dom';
import './Home.css'

const Bannar = () => {
    return (
        <div className="body-font bg-gray-100 flex flex-col lg:flex-row justify-center items-center p-8 lg:p-10 rounded-xl">
            <div className='flex justify-center items-center '>
                <div className='p-6 lg:p-12 space-y-10'>
                    <h1 className='text-2xl lg:text-6xl font-semibold w-full lg:w-[526px]'>Books to freshen up your bookshelf</h1>
                    <Link to= '/listedBooks'><button className='btn bg-green-600 text-white py-4 px-6 text-xl h-16'>View The List</button></Link>
                </div>
            </div>
            <div>
                <img src="https://i.ibb.co/Q66Lb16/pngwing-1.png" alt="" />
            </div>
        </div>
    );
};

export default Bannar;