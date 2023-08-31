import React from "react"
import { Blogs } from "../../components/blog/Blogs"
import { Category } from "../../components/category/Category"
import { Search } from "../../components/search/Search"

export const Home = () => {
  
  return (
    <>
      <Category />
      <Search/>
      <Blogs/>
    </>
  )
}
