export default function Filter({ filter, setFilter }) {
    const categories = ["Semua", "Makanan", "Belanja", "Transport", "Lainnya"]
    return (
        <div className="relative my-3">
            <svg className="md:w-[10px] h-[6px] lg:w-[13px] lg:h-2 cursor-pointer absolute z-auto top-5 right-5" viewBox="0 0 13 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M2.07602 0.589844L6.66602 5.16984L11.256 0.589844L12.666 1.99984L6.66602 7.99984L0.666016 1.99984L2.07602 0.589844Z" fill="#333333" fill-opacity="0.68" />
            </svg>
            <select
                value={filter}
                onChange={(e) => setFilter(e.target.value)}
                className="text-sm xl:text-base 2xl:text-md font-semibold w-full border rounded-xl block py-3 px-3 outline-none appearance-none cursor-pointer"
            >
                {categories.map(cat => (
                    <option
                        key={cat}
                        value={cat === "Semua" ? "" : cat}>
                        {cat}
                    </option>
                ))}
            </select>

        </div>
    )
}
