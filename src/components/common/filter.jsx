import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { FaAngleDown } from "react-icons/fa6";
import { FaCheck } from "react-icons/fa";


export default function Filter({ activeOption, options, handleClick }) {
    options = ["All", ...options]
    const [isOpen, setIsOpen] = useState(false);

    const onBtnClick = (e) => {
        if (!isOpen) {
            document.querySelectorAll(".filters").forEach((item) => {
                item.style.display = "none"
            })
        }
        setTimeout(() => setIsOpen(!isOpen), 10);
    }

    useEffect(() => {
        const callback = () => {
            console.log("hello")
            console.log(isOpen)
            if(isOpen) setIsOpen(false);
        }
        document.addEventListener('click', callback)
        return () => document.removeEventListener('click', callback)
    }, [isOpen])

    return (
        <div className="relative">
            <div className="mb-4">

                <button onClick={onBtnClick} className='px-8 py-3 border border-neutral-300/40 rounded-sm text-sm font-bold flex items-center gap-3'>
                    <span>{activeOption}</span>
                    <FaAngleDown style={{ transform: isOpen ? "rotate(180deg)" : "" }} className="transition" />
                </button>
            </div>
            <AnimatePresence>

                {isOpen && <motion.ul onClick={(e) => e.stopPropagation()} initial={animations.initial} animate={animations.animate} exit={animations.exit} className="filters absolute top-full right-0 max-h-96 overflow-auto min-w-60 p-4 bg-neutral-900">
                    {
                        options.map((item, idx) => (
                            <li onClick={() => { setIsOpen(false); handleClick(item) }} className={`flex justify-between items-center gap-4 border-b border-gray-50/20 px-4 py-2 cursor-pointer ${item === activeOption ? "text-emerald-500" : ""}`} key={idx}>
                                <span>{item}</span>
                                {item === activeOption && <FaCheck className="" />}
                            </li>
                        ))
                    }
                </motion.ul>}
            </AnimatePresence>
        </div>
    )
}

const animations = {
    initial: {
        scaleY: 0,
        transformOrigin: "top"
    },
    animate: {
        scaleY: 1 
    },
    exit: {
        scaleY: 0
    }
}