/* eslint-disable no-sequences */
import { createSlice } from '@reduxjs/toolkit'
const initialState = {
    arrContent: ['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '',],
    count: 0,
    isNext: 0,
    row: 0,
}
export const ContentReducer = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        printKeyBoard: (state, action) => {
            state.row = Math.floor(state.count / 5)
            if (state.count > 30 || state.row > state.isNext) {
                return
            }
            state.arrContent[state.count] = action.payload
            state.count++;
        },
        clearKeyBoard: (state, action) => {
            if (Math.floor(state.count / 5) === state.isNext & state.count % 5 !== 0 || Math.floor(state.count / 5) > state.isNext) {
                if (state.count <= 0) {
                    return
                }
                state.arrContent[state.count - 1] = ''
                state.count--;
            }

        },
        enterKeyBoard: (state, action) => {
            if (state.isNext <= state.row) {
                if (state.isNext < state.row) {
                    state.row--
                }
                if (state.isNext === state.row && state.count % 5 === 0) {
                    state.isNext++
                }
            }
        },
        ClickClearAll: (state, action) => {
            // eslint-disable-next-line no-unused-expressions
            state.arrContent = ['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '',],
                state.count = 0,
                state.isNext = 0,
                state.row = 0
        },
    }
})
export const { printKeyBoard, clearKeyBoard, enterKeyBoard, ClickClearAll } = ContentReducer.actions

export default ContentReducer.reducer