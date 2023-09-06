import './ExpanseItem.css';
function ExpanseItem(props){
    const month = props.date.toLocaleString('en-US',{month:'short'});
    const year = props.date.getFullYear();
    const day = props.date.toLocaleString('en-US',{day:'2-digit'});
    return(
        <div className='expenseItem'>
            <div className='date'>{day} {month} {year}</div>
            <div className='expenseItem-desc'>
                <h2>{props.title}</h2>
                <div className='expenseItem-price'>${props.amount}</div>
            </div>
        </div>
    );
}
export default ExpanseItem;