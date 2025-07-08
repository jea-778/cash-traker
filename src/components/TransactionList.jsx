export function TransactionList({ transactions, onDelete, filter }) {
    const filtered = filter
        ? transactions.filter(tx => tx.category.toLowerCase() === filter.toLowerCase())
        : transactions

    const total = filtered.reduce((acc, curr) => acc + curr.amount, 0)

    return (
        <div className="mt-6 space-y-4">

            <div>
                <span className="font-inter font-bold text-slate-600 text-sm sm:text-base md:text-md lg:text-lg xl:text-xl 2xl:text-2xl">Total Pengeluaran: {" "}</span>
                <span className="text-red-700 font-bold text-sm sm:text-base md:text-md lg:text-lg xl:text-xl 2xl:text-2xl">Rp{total.toLocaleString()}</span>
            </div>

            {filtered?.map((tx) => (
                <div
                    key={tx.id}
                    className="flex justify-between items-center bg-gray-100 p-3 rounded-xl shadow"
                >
                    <div>
                        <p className="text-[12px] md:text-sm lg:text-md xl:text-lg font-semibold text-gray-800">{tx.name}</p>
                        <p className="text-[10px] md:text-[12px] xl:text-sm text-gray-500">{tx.category}</p>
                    </div>
                    <div className="flex items-center space-x-3">
                        <span className="text-red-500 font-bold text-[12px] md:text-sm lg:text-md xl:text-lg">Rp{tx.amount.toLocaleString()}</span>
                        <button
                            onClick={() => onDelete(tx.id)}
                            className="text-[12px] md:text-sm lg:text-md xl:text-lg text-red-600 hover:text-red-800"
                        >
                            Hapus
                        </button>
                    </div>
                </div>
            ))}
        </div>
    );
}
