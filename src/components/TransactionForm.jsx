import { useState } from 'react'

export default function TransactionForm({ onAddTransaction }) {
    const [form, setForm] = useState({ name: "", amount: "", category: "", })

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
        setForm({ name: "", amount: "", category: "" })
    }

    return (
        <>
            <form onSubmit={handleSubmit} className="flex flex-col md:flex-row justify-between items-center gap-9 py-6">
                <div className='flex flex-col gap-4 w-full '>
                    <div>
                        <label className="block text-sm xl:text-base 2xl:text-md font-medium text-gray-700">Nama Transaksi</label>
                        <input
                            onChange={handleChange}
                            value={form.name}
                            type="text"
                            name="name"
                            className="block w-full text-slate-600 text-sm xl:text-base 2xl:text-md mt-1 px-3 py-2 rounded-md border border-gray-300 shadow-sm focus:ring-emerald-500 focus:border-emerald-500 outline-none"
                        />
                    </div>
                    <div>
                        <label className="block text-sm xl:text-base 2xl:text-md font-medium text-gray-700">Nominal</label>
                        <input
                            onChange={handleChange}
                            value={form.amount}
                            type="number"
                            name="amount"
                            className="block w-full text-slate-600 text-sm xl:text-base 2xl:text-md mt-1 px-3 py-2 rounded-md border border-gray-300 shadow-sm focus:ring-emerald-500 focus:border-emerald-500 outline-none "
                        />
                    </div>
                </div>

                <div className='flex flex-col w-full gap-9 -mt-5 md:-mt-0'>
                    <div >
                        <label className="block text-sm xl:text-base 2xl:text-md font-medium text-gray-700">Kategori</label>
                        <input
                            placeholder='Makanan, Belanja, Transport, Lainnya'
                            onChange={handleChange}
                            value={form.category}
                            type="text"
                            name="category"
                            className="block w-full text-slate-600 text-sm xl:text-base 2xl:text-md mt-1 px-3 py-2 rounded-md border border-gray-300 shadow-sm focus:ring-emerald-500 focus:border-emerald-500 outline-none "
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-emerald-600 text-white py-[6px] md:py-2 rounded-md hover:bg-emerald-700 transition"
                    >
                        Tambah Transaksi
                    </button>
                </div>

            </form>
        </>
    )
}
