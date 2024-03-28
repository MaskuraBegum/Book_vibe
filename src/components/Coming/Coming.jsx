import { useLoaderData } from "react-router-dom";
import Ccard from "./Ccard";


const Coming = () => {
    const coming = useLoaderData();
    
    return (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 mt-10">
            {
                coming.map((here,idx) => <Ccard key={idx} here={here}></Ccard>)
            }
        </div>
    );
};

export default Coming;