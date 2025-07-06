import { useState } from 'react';
import TransactionForm from './components/TransactionForm';
import { TransactionList } from './components/TransactionList';

function App() {
  const [transactions, setTransactions] = useState([]);

  const handleAddTransaction = (tx) => {
    setTransactions((prev) => [tx, ...prev]);
  };

  const handleDeleteTransaction = (id) => {
    setTransactions((prev) => prev.filter((tx) => tx.id !== id));
  };

  return (
    <div className='flex justify-center w-full h-full my-20'>
      <div className='w-5/6 py-7 px-9 border border-gray-200 shadow-md'>
        <header className='mb-6'>
          <h1 className='text-2xl font-semibold font-inter text-emerald-600'>CASH TRACKER</h1>
          <p className='text-xl text-slate-300'>
            Tambahkan uang anda dan kelola dengan baik menggunakan <span className='font-bold'>Cash Tracker</span>
          </p>
        </header>

        <section>
          <TransactionForm onAddTransaction={handleAddTransaction} />
        </section>

        <section>
          <TransactionList transactions={transactions} onDelete={handleDeleteTransaction} />
        </section>
      </div>
    </div>
  );
}

export default App;
