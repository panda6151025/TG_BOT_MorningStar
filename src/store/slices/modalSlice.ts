import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export type ModalSliceType = {
  modalName: string
}

const initialState = {
  modalName: '',
}

export const modalSlice = createSlice({
  name: 'Modals',
  initialState,
  reducers: {
    reset: () => initialState,
    setModalName: (state, action: PayloadAction<string>) => {
      state.modalName = action.payload
    },
  },
})

export const { reset, setModalName } = modalSlice.actions

export default modalSlice.reducer
