import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  email: '',
  name: '',
  imageUrl: '',
  loggedIn:false,

};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    updateUserInformation(state, action) {
      const { email, displayName, photoURL } = action.payload;
      state.email = email;
      state.name = displayName;
      state.imageUrl = photoURL;
    },
    updateloggedIn(state,action){
      state.loggedIn= action.payload
    },
    unsetUserInformation(state,action){
      state.email = '';
      state.name = '';
      state.imageUrl='';
      state.loggedIn=false;

    }
  },
});

export const { updateUserInformation,updateloggedIn,unsetUserInformation } = userSlice.actions;

export default userSlice.reducer;