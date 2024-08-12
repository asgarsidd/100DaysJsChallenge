/**
 * ? Day98- Collect books from array of objects and return collection of books as an array 
 * !  - - - - - - - - - - - - - - - - - -
 * TODO:- DAY98 of 100DaysOfCode ---------------- - - --- - --------
 */

let friends = [
    {
        name: 'Anna',
        books: ['Bible', 'Harry Potter'],
        age: 21
    },
    {
        name: 'Alice',
        books: ['War and Peace', 'Deep Work'],
        age: 24
    },
    {
        name: 'Bob',
        books: ['Power of Habit', 'Sapiens'],
        age: 26
    }
]
/**
 * ! Extract all the books from this object in Array!!
 */
let allBooks = friends.reduce((pre, curr)=>{
    return[...pre, ...curr.books]
},[])
console.log(allBooks);
/**
 * TODO : Output---->> 
 * !['Bible', 'Harry Potter', 'War and Peace', 'Deep Work', 'Power of Habit', 'Sapiens']
 */