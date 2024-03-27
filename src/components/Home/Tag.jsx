import '../Headers/Header.css'

const Tag = ({tag}) => {
    return (
        <div className='font-class px-4 py-2 bg-green-50 rounded-2xl text-md text-green-600'>
            <span>{tag}</span>
        </div>
    );
};

export default Tag;