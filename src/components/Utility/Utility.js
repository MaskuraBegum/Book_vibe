

const getReadBooks = ()=>{
    const storeReadBooks = localStorage.getItem('read-books');
    if(storeReadBooks){
        return JSON.parse(storeReadBooks);
    }
    return [];
}
const saveReadBooks = ({book})=>{
    const storeReadBooks = getReadBooks();
    const exists = storeReadBooks.find(Id => Id == book.bookId);
    
    if(!exists){
        storeReadBooks.push(book);
        localStorage.setItem('read-books', JSON.stringify(storeReadBooks))
    }
}
const getWishBooks = ()=>{
    const storeWishBooks = localStorage.getItem('wish-books');
    if(storeWishBooks){
        return JSON.parse(storeWishBooks);
    }
    return [];
}
const saveWishBooks =({book}) =>{
    
    const storeWishBooks = getWishBooks();
    const exists = storeWishBooks.find(Id => Id.bookId == book.bookId);
    console.log(exists)
    
    if(!exists){
        storeWishBooks.push(book);
        localStorage.setItem('wish-books', JSON.stringify(storeWishBooks))
    }
}
export {getReadBooks, saveReadBooks,saveWishBooks,getWishBooks}