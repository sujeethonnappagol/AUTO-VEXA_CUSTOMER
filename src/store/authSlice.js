import {createSlice} from '@reduxjs/toolkit';

const savedUser=()=>{try{return JSON.parse(localStorage.getItem('vexaUser')||'null')}catch{return null}};

const authSlice=createSlice({
  name:'auth',
  initialState:{user:savedUser()},
  reducers:{setUser:(state,action)=>{state.user=action.payload},clearUser:state=>{state.user=null}},
});

export const {setUser,clearUser}=authSlice.actions;
export default authSlice.reducer;
