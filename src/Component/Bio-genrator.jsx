import React from "react";
import { useState } from "react";
import "./Bio-genrator.css"




export const Bio_Genrator = () => {

    const [image , setimage] = useState("https://tse2.mm.bing.net/th?id=OIP.vvjbgjel2AatUUhUOdHISgHaHa&pid=Api&P=0")
    const [name , setname] = useState()
    const [gender , setgender] = useState()


    const UploadImage=(e)=>{
        const file = e.target.files[0];
        setimage(URL.createObjectURL(file));
    }
    console.log(image)

    const RandomName=()=>{
        let Randomname=["vikas","raj","sameer","mohit" , "savita" ]
        setname(Randomname[Math.floor(Math.random()*5)])
    }




    return(
        <div>
            <div className="topic">  <p> Bio Genrator </p> </div>


            <div className="first_div">

                <div className="left">
                  <p> Option </p> 

                    <div className="Profile_box">
                        <span className="Profile">Profile photo</span>
                        <span className="Profilefile">
                            <input type="file"
                                onChange={UploadImage}
                            ></input>
                        </span>
                    </div>

                    <div className="Profile_box">
                        <span className="Profilefile">

                            <label> Name</label>
                            <input 
                                type="text" 
                                onChange={((e) => {
                                    setname(e.target.value)
                                })}
                                defaultValue={name}
                            />
                       
                            <label>Gender</label>
                            <select 
                                onChange={((e) => {
                                    setgender(e.target.value)
                                })}
                            >
                                <option value="male">Male</option>
                                <option value="female">Female</option>
                            </select>

                            <button
                                onClick={RandomName}
                            >
                                Random Name
                            </button>
                           
                        </span>
                    </div>
                </div>



                <div className="right">
                    <p> Result </p>
                    <img src={image} alt="" className="uploadImage"/>

                    <div className="box">

                        my name is {name} and the gender is {gender}

                    </div>
                </div>
            </div>
        </div>
    )
}