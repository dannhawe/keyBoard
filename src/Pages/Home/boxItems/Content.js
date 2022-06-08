import React, { Fragment } from 'react'
import { useSelector } from 'react-redux'
import BoxItem from './BoxItem'

export default function Content() {
    const { arrContent } = useSelector((state) => state.ContentReducer)
    return (
        <div className='grid grid-cols-5 gap-1 my-8'>
            {arrContent.map((box, index) => {
                return <Fragment key={index}>
                    <BoxItem box={box} index={index} />
                </Fragment>
            })}
        </div>
    )
}
