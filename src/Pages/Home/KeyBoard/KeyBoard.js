import React, { Fragment } from 'react'
import { useDispatch } from 'react-redux'
import { clearKeyBoard, ClickClearAll, enterKeyBoard, printKeyBoard } from '../../../redux/reducer/ContentReducer'
const arrKeyBoard = ['q w e r t y u i o p', 'a s d f g h j k l', 'z x c v b n m']
export default function KeyBoard() {
  let classKeyBoard = 'bg-gray-200 text-black font-bold uppercase rounded-sm mx-1 p-2'

  const dispatch = useDispatch()
  
  const handleClick = (keyboard) => {
    return () => {
      dispatch(printKeyBoard(keyboard))
    }
  }
  const handleClickClear = () => {
    dispatch(clearKeyBoard())
  }
  const handleClickEnter = () => {
    dispatch(enterKeyBoard())
  }
  const handleClickClearAll = () => {
    dispatch(ClickClearAll())
  }
  return (
    <div>
      {arrKeyBoard.map((board, index) => {
        return <div key={index} className='my-5 text-sm'>
          {board.split(" ").map((keyboard, index) => {
            return <Fragment key={index}>
              <span className={`${classKeyBoard}`} onClick={handleClick(keyboard)}>{keyboard}</span>
            </Fragment>
          })}
          <br />
          <div className='mt-7'>
            {index === 2 && <span className={`${classKeyBoard}`} onClick={handleClickEnter}>enter</span>}
            {index === 2 && <span className={`${classKeyBoard} `} onClick={handleClickClear}>clear</span>}
            {index === 2 && <span className={`${classKeyBoard} `} onClick={handleClickClearAll}>clearAll</span>}
          </div>
        </div>
      })}
    </div>
  )
}
