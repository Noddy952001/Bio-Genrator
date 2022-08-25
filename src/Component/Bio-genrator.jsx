import React from "react";
import { useState } from "react";
import "./Bio-genrator.css"

export const Bio_Genrator = () => {

    const [image , setimage] = useState("https://tse2.mm.bing.net/th?id=OIP.vvjbgjel2AatUUhUOdHISgHaHa&pid=Api&P=0")


    const UploadImage=(e)=>{
        const file = e.target.files[0];
        setimage(URL.createObjectURL(file));
    }
    console.log(image)




    return(
        <div>
            <div className="topic">  <p> Bio Genrator </p> </div>


            <div className="first_div">

                <div className="left">
                  <p> Option </p> 

                    <div className="Profile_box">
                        <label>Profile photo</label>
                        <input type="file"
                            onChange={UploadImage}
                        ></input>

                                
                    </div>



                </div>

                <div className="right">
                     <p> Result </p>


                     <img src={image} alt="" className="uploadImage"/>





                </div>

            </div>


        </div>
    )
}