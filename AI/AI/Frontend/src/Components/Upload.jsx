import React from 'react'
import "./Upload.css";
import axios from 'axios';
import { useState, useEffect } from 'react';
import { useNavigate, Link } from "react-router-dom"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Loader from './loader';

function Upload() {
  const [file, setFile] = useState();
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  let type = sessionStorage.getItem("type");
  async function handlefile(event) {
    setLoading(1);

    console.log(event.target.files[0])
    setFile(event.target.files[0])
    console.log(event.target.files[0]);
    const formdata = new FormData();
    formdata.append("image", event.target.files[0]);
    await axios.post("http://localhost:8000/addImage", formdata).then((res) => {
      console.log(res);
      toast.success("Image Uploaded SuccessFully")
      // if (type == "MASK") {
      //   setTimeout(() => {
      //     navigate("/Mask", {
      //       state: {
      //         name: event.target.files[0].name
      //       }
      //     });
      //     setLoading(0);
      //   }, 15000);
      // }
      // else {
      //   setTimeout(() => {
      //     navigate("/Output", {
      //       state: {
      //         name: event.target.files[0].name
      //       }
      //     });
      //     setLoading(0);
      //   }, 15000);
      // }
    }).catch((err) => {
      console.log(err)
      toast.error("Something Went Wrong. Please ReUpload")
    })
  }

  return (
    <div className="file-container">
      {
        loading ?
          <Loader type="XYZ" /> : null
      }
      <ToastContainer />
      <h1 className='file-Heading'>UPLOAD IMAGE</h1>
      <div className="file-input-page">
        <div className="file-input">
          <input type="file" name="file" onChange={(e) => {
            handlefile(e)
          }} />
        </div>
        <button className='Button'>UPLOAD</button>
      </div>
    </div>
  );
}

export default Upload;
