import Link from "next/link";
import RemoveBtn from "./RemoveBtn";
import { HiPencilAlt } from 'react-icons/hi'

export default function () {
    return (
        <>
            <div className="p-4 border border-slate-800 flex justify-between gap-2">
                <div>
                    <h2 className="font-bold text-2xl">List Title</h2>
                    <div>List Description</div>
                </div>
                <div className="flex gap-2 items-start">
                    <Link href={'/editData/123'}>
                        <HiPencilAlt size={25} />
                    </Link>
                    <RemoveBtn />
                </div>
            </div>
        </>
    )
}
