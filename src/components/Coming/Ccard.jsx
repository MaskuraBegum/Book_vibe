

const Ccard = ({here}) => {
    const {bookName,author,image,arrivalTime} = here;
    return (
        <div>
            <div className="card w-full bg-base-100 border-2 ">
                <div className="card-body">
                    <h2 className="card-title text-4xl">{bookName}</h2>
                    <p className="text-2xl">By:{author}</p>
                    <p className="text-xl">Arrival Time: <span className="text-orange-500">{arrivalTime}</span></p>
                </div>
                <figure><img src={image} alt="image of book"  className="w-[400px] h-[350px]"/></figure>
            </div>
        </div>
    );
};

export default Ccard;