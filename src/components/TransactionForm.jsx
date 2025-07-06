import { useState } from 'react'

export default function TransactionForm({ onAddTransaction }) {
    const [form, setForm] = useState({ name: "", amount: "", category: "" })

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm(prev => ({ ...prev, [name]: value }))
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!form.name || !form.amount || !form.category) return;
        onAddTransaction({
            id: Date.now(),
            name: form.name,
            amount: parseFloat(form.amount),
            category: form.category
        })
    }

    return (
        <>
            <form onSubmit={handleSubmit} className="flex justify-between items-center gap-9 py-6">
                <div className='flex flex-col gap-4 w-full '>
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Nama Transaksi</label>
                        <input
                            onChange={handleChange}
                            value={form.name}
                            type="text"
                            name="name"
                            className="mt-1 px-3 block w-full py-2 rounded-md border border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Nominal</label>
                        <input
                            onChange={handleChange}
                            value={form.amount}
                            type="number"
                            name="amount"
                            className="mt-1 px-3 block w-full py-2 rounded-md border border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500"
                        />
                    </div>
                </div>

                <div className='flex flex-col w-full gap-10'>
                    <div className=''>
                        <label className="block text-sm font-medium text-gray-700">Kategori</label>
                        <input
                            onChange={handleChange}
                            value={form.category}
                            type="text"
                            name="category"
                            className="w-full mt-1 block px-3 py-2 rounded-md border border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500"
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-emerald-600 text-white py-2 rounded-md hover:bg-emerald-700 transition"
                    >
                        Tambah Transaksi
                    </button>
                </div>
            </form>
        </>
    )
}
