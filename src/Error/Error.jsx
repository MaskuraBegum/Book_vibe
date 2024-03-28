import { useNavigate } from "react-router-dom";


const Error = () => {
    const back = useNavigate();
    const handleback =()=> {
        back('/');
    }
    return (
        <div className="flex justify-center items-center p-40">
            <div>
            <h1>opp!! not found 404</h1>
            <br />
            <button className="btn" onClick={handleback}>go back</button>
            </div>
        </div>
    );
};

export default Error;