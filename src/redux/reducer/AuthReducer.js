import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  authUserType: 'user',
  authUserStatus: null,
  status: '',
  loginRes: {},
  error: {},
  signUpRes: {},
};

const AuthSlice = createSlice({
  name: 'Auth',
  initialState,
  reducers: {
    updateAuthUserType(state, action) {
      state.authUserType = action.payload;
    },
    updateAuthUserStatus(state, action) {
      state.authUserType = action.payload;
    },

    /* Login */
    userLoginRequest(state, action) {
      state.status = action.type;
    },
    userLoginSuccess(state, action) {
      state.status = action.type;
      state.loginRes = action?.payload;
    },
    userLoginFaliure(state, action) {
      state.status = action.type;
      state.error = action?.payload;
    },

    /* Signup */
    userSignUpRequest(state, action) {
      state.status = action.type;
    },
    userSignUpSuccess(state, action) {
      state.status = action.type;
      state.signUpRes = action?.payload;
    },
    userSignUpFaliure(state, action) {
      state.status = action.type;
      state.error = action?.payload;
    },
  },
});

export const {
  updateAuthUserType,
  updateAuthUserStatus,

  /* Login */
  userLoginRequest,
  userLoginSuccess,
  userLoginFaliure,

  /* Signup */
  userSignUpRequest,
  userSignUpSuccess,
  userSignUpFaliure,
} = AuthSlice.actions;

export default AuthSlice.reducer;
