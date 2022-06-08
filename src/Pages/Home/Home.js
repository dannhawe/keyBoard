import React from 'react'
import Content from './boxItems/Content'
import Header from './Header/Header'

import KeyBoard from './KeyBoard/KeyBoard'

export default function Home() {
    return (
        <div className=' text-center font-mono h-screen bg-slate-700'>
            <div className='w-5/6 mx-auto'>
                <Header />
                <Content />
                <KeyBoard />
            </div>
        </div>
    )
}