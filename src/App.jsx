import { useEffect, useState } from 'react';
import TransactionForm from './components/TransactionForm';
import { TransactionList } from './components/TransactionList';
import Filter from './components/Filter';
import Header from './components/Header';

function App() {
  const [filter, setFilter] = useState("")
  const [transactions, setTransactions] = useState(() => {
    const saveTransaction = localStorage.getItem("Transaction")
    return saveTransaction ? JSON.parse(saveTransaction) : []
  });

  useEffect(() => {
    localStorage.setItem("Transaction", JSON.stringify(transactions))
  }, [transactions])


  const handleAddTransaction = (tx) => {
    setTransactions((prev) => [tx, ...prev]);
  };

  const handleDeleteTransaction = (id) => {
    setTransactions((prev) => prev.filter((tx) => tx.id !== id));
  };

  return (
    <div className='flex justify-center w-full h-full my-20'>
      <div className='w-5/6 py-7 px-9 border border-gray-200 shadow-md'>
        <Header />

        <TransactionForm onAddTransaction={handleAddTransaction} />

        <Filter filter={filter} setFilter={setFilter} />

        <TransactionList transactions={transactions} onDelete={handleDeleteTransaction} filter={filter} />
      </div>
    </div>
  );
}

export default App;
