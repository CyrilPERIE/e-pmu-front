import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
// import jwt from 'jsonwebtoken';
import jwt_decode from "jwt-decode";

export interface UserState {
    user: {
        username: string,
        token: string,
        role: string
        isConnected: boolean
        iat: string,
        exp: string
    }
}

export const initialState: UserState = {
    user: {
        username: "",
        token: "",
        role: "",
        isConnected: false,
        iat: "",
        exp: ""
    }
}

export interface User {
        username: string,
        token: string,
        role: string,
        isConnected: boolean
        iat: string,
        exp: string
    }

export interface JWT {
        username: string,
        role: string,
        iat: string,
        exp: string
    }


export const postAuthLogin = createAsyncThunk(
  '/auth/login',
  // Declare the type your function argument here:
  async (formData: {username: string; password: string}) => {
    const response = await fetch(`http://localhost:8081/auth/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })
    .then((data) => data.json())
    return response
  }
)

export const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    logout: (state) => {
      state.user = {
            username: "",
            token: "",
            role: "",
            isConnected: false,
            exp: "",
            iat: ""
        }
    }
  },
  extraReducers: builder => {
    builder.addCase(postAuthLogin.fulfilled, (state, { payload }) => {
      const jwt_json: JWT = jwt_decode(payload.token)
      state.user.token = payload.token
      state.user.username = jwt_json.username
      state.user.role = jwt_json.role
      state.user.exp = jwt_json.exp
      state.user.iat = jwt_json.iat
      state.user.isConnected = true
      console.log("state.user.isConnected " + state.user.isConnected)
    })
  }
})

// Action creators are generated for each case reducer function
export const { logout } = usersSlice.actions