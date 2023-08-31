import React from "react";
import "./write.css";
import Img from "../../assets/blogs/b3.jpg"

export const Write = () => {

  return (
    <>
     <div className="write">
      
      <img className="writeImg" src={Img} alt="" />
   
    <form className="writeForm" >
      <div className="writeFormGroup">
        <label htmlFor="fileInput">
        <i class=" writeIcon fa-solid fa-upload"></i>
        </label>
        <input
          type="file"
          id="fileInput"
          style={{ display: "none" }}
          
        />
        <input
          type="text"
          placeholder="Title"
          className="writeInput"
          autoFocus={true}
          // onChange={e=>setTitle(e.target.value)}
        />
      </div>
      <div className="writeFormGroup">
        <textarea
          placeholder="Tell your story..."
          type="text"
          className="writeInput writeText"
          // onChange={e=>setDesc(e.target.value)}
        ></textarea>
      </div>
      <button className="writeSubmit" type="submit">
        Publish
      </button>
    </form>
  </div>
    </>
   
  );
}
