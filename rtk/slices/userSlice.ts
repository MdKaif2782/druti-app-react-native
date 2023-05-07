import {createSlice} from '@reduxjs/toolkit'
import {PayloadAction} from '@reduxjs/toolkit'
interface User{
    value:string
}
const initialState:User = {
    value:''
}
export const userSlice = createSlice({
    name:'user',
    initialState,
    reducers:{
        setPhone:(state,action:PayloadAction<string>)=>{

        }
    }
})

export default userSlice.reducer