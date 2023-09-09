import React from "react"
import { useLocation, useNavigate } from 'react-router-dom';
import "./home.css";
import { useEffect, useState } from "react"


function Home() {
        const navigate = useNavigate()
        async function handleClick(e) {
                e.preventDefault();
                console.log(e);
        }


        return (





                <div class="container">
                        <div class="card">
                                <div class="box">
                                        <div class="content">
                                                <h2>AI</h2>
                                                <h3>FACE DETECTION</h3>
                                                <p>Upload a image for face recognization</p>
                                                <button type="Search" onClick={() => {
                                                        sessionStorage.setItem("type", "FACE");
                                                        navigate("/Upload")
                                                }}>Search</button>
                                        </div>
                                </div>
                        </div>

                        <div class="card">
                                <div class="box">
                                        <div class="content">
                                                <h2>AI</h2>
                                                <h3>MASK DETECTION</h3>
                                                <p>Uplaod a image for mask recognization</p>
                                                <button type="Search" onClick={() => {
                                                        sessionStorage.setItem("type", "MASK");
                                                        navigate("/Upload")
                                                }}>Search</button>
                                        </div>
                                </div>
                        </div>
                </div>

        )
}

export default Home;