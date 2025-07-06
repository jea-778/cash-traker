export function TransactionList({ transactions, onDelete }) {
    return (
        <div className="mt-6 space-y-4">
            {transactions?.map((tx) => (
                <div
                    key={tx.id}
                    className="flex justify-between items-center bg-gray-100 p-3 rounded-xl shadow"
                >
                    <div>
                        <p className="font-semibold text-gray-800">{tx.name}</p>
                        <p className="text-sm text-gray-500">{tx.category}</p>
                    </div>
                    <div className="flex items-center space-x-3">
                        <span className="text-red-500 font-bold">Rp{tx.amount.toLocaleString()}</span>
                        <button
                            onClick={() => onDelete(tx.id)}
                            className="text-red-600 hover:text-red-800"
                        >
                            Hapus
                        </button>
                    </div>
                </div>
            ))}
        </div>
    );
}
