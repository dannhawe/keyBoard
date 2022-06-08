import React from 'react'
import { motion } from "framer-motion"
export default function BoxItem({ box, index }) {
    const variants = {
        filled: () => ({
            scale: [1.2, 1],
            transition: {
                duration: 0.2
            }
        }),
        unfilled: () => ({
            scale: [0.8, 1],
            transition: {
                duration: 0.2
            }
        })
    }
    return (
        <motion.span animate={box ? 'filled' : 'unfilled'} variants={variants} className='bg-slate-700 text-white border border-cyan-700 p-2 w-11 h-11 flex justify-center items-center font-bold uppercase'>{box}</motion.span>
    )
}
