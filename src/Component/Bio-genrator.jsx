import React from "react";
import "./Bio-genrator.css"

export const Bio_Genrator = () => {
    return(
        <div>
            <div className="topic">  <p> Bio Genrator </p> </div>


            <div className="first_div">

                <div className="left">
                  <p> Option </p> 

                    <div className="Profile_box">
                        <label>Profile photo</label>
                        <input type="file"
                            // onChange={photoUpload}
                        
                        ></input>
                                
                    </div>



                </div>

                <div className="right">
                     <p> Result </p>



                </div>

            </div>


        </div>
    )
}