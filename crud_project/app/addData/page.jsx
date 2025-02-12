import React from 'react'

export default function addData() {
    return (
        <form className='flex flex-col gap-3'>
            <label htmlFor="" className='text-red-950 font-bold text-2xl'>Share something</label>
            <input type="text" placeholder="Add a title" className="border border-slate-800 px-5 py-2" />
            <textarea placeholder="Add a description" className="border border-slate-800 px-5 py-2" />
            <button className='w-fit text-white font-bold rounded-lg bg-green-950 px-8 py-2'>Add</button>
        </form>
    )
}
