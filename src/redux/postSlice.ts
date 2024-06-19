/* eslint-disable @typescript-eslint/no-explicit-any */
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const API_KEY = 'AIzaSyAuC6NOnT60RH7Nb-jm2VeTHuMePXVuSmA';
const UID = '2399953'


export const fetchPosts = createAsyncThunk("posts/fetchposts", async ()=>{
  // const res = await fetch(`https://www.googleapis.com/blogger/v3/blogs/${UID}?key=${API_KEY}`)
  // const data = await res.json();
  // const postURL = data?.posts?.selfLink;
  // https://www.googleapis.com/blogger/v3/blogs/2399953/posts?key=AIzaSyAuC6NOnT60RH7Nb-jm2VeTHuMePXVuSmA
  const postDatas = await fetch(`https://www.googleapis.com/blogger/v3/blogs/${UID}/posts?key=${API_KEY}`)
  const data = await postDatas.json();
  return await data?.items;
})


interface BlogState {
  posts: [];
  loading: boolean;
  error: string | null | undefined;
}

const initialState:BlogState = {posts:[], loading: false, error: null};

export const postSlice = createSlice({
  name: "posts",
  initialState,
  reducers:{},
  extraReducers:(builder)=>{
    builder.addCase(fetchPosts.pending, (state)=>{
      state.loading = true;
    })
    .addCase(fetchPosts.fulfilled, (state, action)=>{
      state.loading = false;
      state.posts = action.payload;
      state.error = ""
    })
    .addCase(fetchPosts.rejected, (state, action)=>{
      state.loading = false;
      state.posts = [];
      state.error = action.error.message || 'Something went wrong';
    })
  }
})