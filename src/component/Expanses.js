import "./Expanses.css";
import ExpanseItem from "./ExpanseItem";

function Expanses() {
  let data = [
    {
      expanseTitle: "Paytm",
      expenseAmount: 100,
    },
    {
      expanseTitle: "phonePay",
      expenseAmount: 200,
    },
    {
      expanseTitle: "GooglePay",
      expenseAmount: 300,
    },
    {
      expanseTitle: "AmzonPay",
      expenseAmount: 400,
    },
  ];
  let expenseDate = new Date();
  return (
    <div>
      <h1>Lets,Go</h1>
      <div className="expanses">
        <ExpanseItem
          date={expenseDate}
          title={data[0].expanseTitle}
          amount={data[0].expenseAmount}
        ></ExpanseItem>
        <ExpanseItem
          date={expenseDate}
          title={data[1].expanseTitle}
          amount={data[1].expenseAmount}
        ></ExpanseItem>
        <ExpanseItem
          date={expenseDate}
          title={data[2].expanseTitle}
          amount={data[2].expenseAmount}
        ></ExpanseItem>
        <ExpanseItem
          date={expenseDate}
          title={data[3].expanseTitle}
          amount={data[3].expenseAmount}
        ></ExpanseItem>
      </div>
    </div>
  );
}
export default Expanses;
