import { useState } from "react";

export default function ExpenseForm(){
    const [amount, setAmount] = useState("");
    const [category, setCategory] = useState("食費");
    const [memo, setMemo] = useState("");

    const handleSubmit = () => {
        console.log( { amount, category, memo });    
    };

    return(
        <div>
            <input placeholder="金額" value={amount} onChange={(e) => setAmount(e.target.value)} />
            <select value={category} onChange={(e) => setCategory(e.target.value)}>
                <option>食費</option>
                <option>交通</option>
                <option>日用品</option>
            </select>
            <input placeholder="メモ" value={memo} onChange={(e) => setMemo(e.target.value)} />
            <button onClick={handleSubmit}>追加</button>
        </div>
    );
}
