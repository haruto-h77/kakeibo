import ExpenseForm from "./ExpenseForm";
import ExpenseList from "./ExpenseList";

export default function ExpensePage(){
    return(
        <div style={{ maxWidth: "400px", margin: "0 auto" }}>
            <h2>📅 2026/02/24</h2>
            <h3>💰 今日の支出: ¥0</h3>
            
            <ExpenseForm />
            <ExpenseList />
        </div>
    );
}
