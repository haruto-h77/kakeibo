export default function ExpenseList(){
    const dummy = [
        {id: 1, name: "ラーメン", amount: 1200, category: "食費"},
        {id: 2, name: "コーヒー", amount: 350, category: "カフェ"},
    ];

    return(
        <div>
            <h4>🧾 支出一覧</h4>
            {dummy.map((item) => (
                <div key={item.id}>
                    {item.name}
                    ¥{item.amount}
                    ({item.category})
                </div>
            ))}
        </div>
    )
}
