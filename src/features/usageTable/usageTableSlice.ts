// Slice for a table of data

import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit"
import { RootState, AppThunk } from "../../app/store"

export interface TableState {
  usage: any[]
  orderBy: string
}

const initialState: TableState = {
  usage: [],
  orderBy: "date",
}

export const fetchUsage = createAsyncThunk("table/getUsage", async () => {
 
  const response = await fetch(
    "https://radar-my-apps-336125652a2e.herokuapp.com/",
  )
  
  return response.json()
})

export const usageTableSlice = createSlice({
  name: "table",
  initialState,
  reducers: {
    setOrderBy: (state, action: PayloadAction<string>) => {
      state.orderBy = action.payload
    },
    setUsage: (state, action: PayloadAction<any[]>) => {
      state.usage = action.payload
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUsage.pending, (state) => {
        state.usage = []
      })
      .addCase(fetchUsage.fulfilled, (state, action) => {
        state.usage = action.payload
      })
  },
})

export const { setOrderBy, setUsage } = usageTableSlice.actions

// This is a selector and can be used to get the current state of the table
export const selectUsage = (state: RootState) => state.usageTable.usage

export const selectOrderBy = (state: RootState) => state.usageTable.orderBy

export default usageTableSlice.reducer
