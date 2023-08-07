/* 
* A component in ReactJS is just a function in vanilla JS. You follow the same procedure when creating new components. Create a file (named 
* the same as what your component should do, in camel case), declare the function, export it, and import it into the root component and use it.
*/

function ExpenseItem() {
    return <h2>Expense Item!</h2>
}

export default ExpenseItem;