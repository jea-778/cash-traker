import React from 'react'

export default function Header() {
    return (
        <>
            <header className='mb-0 lg:mb-3 xl:mb-6 2xl:mb-9'>
                <h1 className='text-lg lg:text-xl xl:text-2xl 2xl:text-3xl font-semibold font-inter text-emerald-600 pb-0 md:pb-2'>CASH TRACKER</h1>
                <p className='text-md lg:text-lg xl:text-xl 2xl:text-2xl text-slate-300'>
                    Tambahkan uang anda dan kelola dengan baik menggunakan <span className='font-bold'>Cash Tracker</span>
                </p>
            </header>
        </>
    )
}
