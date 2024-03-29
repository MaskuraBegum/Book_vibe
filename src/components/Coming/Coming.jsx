import { useLoaderData } from "react-router-dom";
import Ccard from "./Ccard";


const Coming = () => {
    const coming = useLoaderData();

    return (
        <div>
            <div className="flex justify-center items-center my-6 lg:my-12 bg-gray-50 p-4 lg:p-10 rounded-2xl">
                <div className="text-center space-y-4">
                    <h1 className="text-3xl font-semibold">Exciting Updates Await!</h1>
                    <p className="font-medium text-gray-400">Stay tuned for the latest releases from your favorite authors and genres.you will never run out of reading options.</p>
                </div>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 mt-10">
                {
                    coming.map((here, idx) => <Ccard key={idx} here={here}></Ccard>)
                }
            </div>
        </div>
    );
};

export default Coming;