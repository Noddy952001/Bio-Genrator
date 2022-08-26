import React from "react";
import { useState } from "react";
import "./Bio-genrator.css"




export const Bio_Genrator = () => {

    const [image , setimage] = useState("https://tse2.mm.bing.net/th?id=OIP.vvjbgjel2AatUUhUOdHISgHaHa&pid=Api&P=0")
    const [name , setname] = useState("Vikas")
    const [gender , setgender] = useState("Male")
    const [location , setLocation] = useState("Delhi")
    const [school , setschool] = useState("GNPS")
    const [Specialization , setSpecialization] = useState("English")
    const [Religious , setReligious] = useState("Hindu")
    const [Occupation , setOccupation] = useState("Developer")
    const [Meeting , setMeeting] = useState("For peace")
    const [CheckedLocation , setCheckedLocation] = useState(true)
    const [CheckedSchool , setCheckedSchool] = useState(true)
    const [CheckedReligion , setCheckedReligion] = useState(true)
    const [CheckedOccupation , setCheckedOccupation] = useState(true)
    const [Checkedmeeting , setCheckedmetting] = useState(true)

// ===================================Random name change ================================================



    const UploadImage=(e)=>{
        const file = e.target.files[0];
        setimage(URL.createObjectURL(file));
    }
    console.log(image)

    const RandomName=()=>{
        let Randomname=["vikas","raj","sameer","mohit" , "savita" ]
        setname(Randomname[Math.floor(Math.random()*5)])
    }

    const RandomLocation=()=>{
        let Randomname=["Delhi","Mumbai","Pune","Goa" , "Dheradun" ]
        setLocation(Randomname[Math.floor(Math.random()*5)])
    }

    const RandomSchool=()=>{
        let Randomname=["DPS","GNPS","JPS","LPU" , "GEHU" ]
        setschool(Randomname[Math.floor(Math.random()*5)])
    }

    const RandomSpecialization=()=>{
        let Randomname=["Science","Maths","Commerce","Arts" , "LLB" ]
        setSpecialization(Randomname[Math.floor(Math.random()*5)])
    }

    const RandomReligioun=()=>{
        let Randomname=["Hindu","Muslim","Buddhism","Sikh" , "Christian" ]
        setReligious(Randomname[Math.floor(Math.random()*5)])
    }

    const RandomOccupation=()=>{
        let Randomname=["Engineer","Hardware Engineer","Software Engineer","Developer" , "Civil Engineer" ]
        setOccupation(Randomname[Math.floor(Math.random()*5)])
    }

// ===================================Location status================================================
    

    const Locationstatus  = () => {
        if(CheckedLocation){
            setCheckedLocation(false)
        }
        else if(!CheckedLocation){
            setCheckedLocation(true)
        } 
    }

    const Schoolstatus  = () => {
        if(CheckedSchool){
            setCheckedSchool(false)
        }
        else if(!CheckedSchool){
            setCheckedSchool(true)
        } 
    }
    
    const Religionstatus  = () => {
        if(CheckedReligion){
            setCheckedReligion(false)
        }
        else if(!CheckedReligion){
            setCheckedReligion(true)
        } 
    }

    const Occupationstatus  = () => {
        if(CheckedOccupation){
            setCheckedOccupation(false)
        }
        else if(!CheckedOccupation){
            setCheckedOccupation(true)
        } 
    }

    const Meetingstatus  = () => {
        if(Checkedmeeting){
            setCheckedmetting(false)
        }
        else if(!Checkedmeeting){
            setCheckedmetting(true)
        } 
    }


    
    function googleTranslateElementInit() {
        new google.translate.TranslateElement({pageLanguage: 'en'}, 'google_translate_element');
    }




    return(
        <div>
            <div className="topic">  <p> Bio Genrator </p> </div>


            <div className="first_div">

                <div className="left">
                    <p> Option </p> 

                    <div className="Profile_box">
                        <span className="Profile">Profile photo</span>
                        <span>
                            <input type="file"
                                onChange={UploadImage}
                            ></input>
                        </span>
                    </div>

                    <div className="Profile_box">
                        <div>
                            <label> Name</label>
                            <input 
                                type="text" 
                                value={name}
                                onChange={((e) => {
                                    setname(e.target.value)
                                })}
                            />
                        </div>

                                
                        <div>
                            <label>Gender</label>
                            <select 
                                onChange={((e) => {
                                    setgender(e.target.value)
                                })}
                            >
                                <option value="male">Male</option>
                                <option value="female">Female</option>
                            </select>
                        </div>
                                
                        <div>   
                            <button
                                onClick={RandomName}
                            >
                                Random Name
                            </button>
                        </div>
                    </div>

                    <div className="Profile_box">
                        <span>
                            <input 
                                type="checkbox" 
                                value={location}
                                checked={CheckedLocation}
                                onClick={Locationstatus}
                            />
                            <label >Location</label>
                            <input 
                                type="text" 
                                onChange={((e) => {
                                    setLocation(e.target.value)
                                })}
                                value={location}
                            />
                        </span>

                        <span>
                            <button
                                onClick={RandomLocation}
                            >
                                Random Location
                            </button>
                        </span>
                    </div>

                    <div >
                        <div className="Profile_box">
                            <span>
                                <input 
                                    type="checkbox" 
                                    checked={CheckedSchool}
                                    onClick={Schoolstatus}
                                />
                                <label >School</label>
                                <input 
                                    value={school}
                                    onChange={((e) => {
                                        setschool(e.target.value)
                                    })}
                                    type="text" 
                                />
                            </span>

                            <span>
                                <button
                                    onClick={RandomSchool}
                                >
                                    Random School
                                </button>
                            </span>
                        </div>

                        <div className="Profile_box">
                            <span>
                            
                                <label >Specialization</label>
                                <input 
                                    value={Specialization}
                                    onChange={((e) => {
                                        setSpecialization(e.target.value)
                                    })}
                                    type="text" 
                                />
                            </span>

                            <span>
                                <button
                                    onClick={RandomSpecialization}
                                >
                                    Random Specialization
                                </button>
                            </span>
                        </div>

                    </div>

                    <div className="Profile_box">
                        <span>
                            <input 
                                type="checkbox" 
                                checked={CheckedOccupation}
                                onClick={Occupationstatus}
                            />
                            <label >Occupation</label>
                            <input 
                                value={Occupation}
                                onChange={((e) => {
                                    setOccupation(e.target.value)
                                })}
                                type="text" 
                            />
                        </span>

                        <span>
                            <button
                                onClick={RandomOccupation}
                            >
                                Random Occupation
                            </button>
                        </span>
                    </div>

                    <div className="Profile_box">
                        <span>
                            <input 
                                type="checkbox" 
                                checked={CheckedReligion}
                                onClick={Religionstatus}
                            />
                            <label >Religious</label>
                            <input 
                                value={Religious}
                                onChange={((e) => {
                                    setReligious(e.target.value)
                                })}
                                type="text" 
                            />
                        </span>

                        <span>
                            <button
                                onClick={RandomReligioun}
                            >
                                Random Religioun
                            </button>
                        </span>
                    </div>

                    <div className="meeting_box">
                        <span>
                            <input 
                                type="checkbox" 
                                checked={Checkedmeeting}
                                onClick={Meetingstatus}
                            />
                            <label >Meeting Reason</label> <br />

                            <textarea 
                                value={Meeting}
                                onChange={((e) => {
                                    setMeeting(e.target.value)
                                })}
                                type="text" 
                                className="meeting-input"
                            />
                        </span> <br />

                        <span>
                            <button onClick={()=>setMeeting("for peace of mind")}>For peace</button>
                            <button  onClick={()=>setMeeting("for prayer")}>For prayer</button>
                            <button onClick={()=>setMeeting("for personal reason")}>For personal reason</button>
                        </span>
                    </div>



                </div>



                <div className="right">
                    <p> Result </p>
                    <img src={image} alt="" className="uploadImage"/>

                    <div className="result">
                        my name is {name} and the gender is {gender} {CheckedLocation ? `and i am from  ${location}` : null} {CheckedSchool ? `and i am from  ${school}` : null}

                        { CheckedReligion? `and i am from  ${Religious}` : null}    { CheckedOccupation? `and i am from  ${Occupation}` : null}   

                        
                        {Checkedmeeting ? `and i am from  ${Meeting}` : null} 

                    </div>



                    <script type="text/javascript" src="//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"></script>
                </div>
            </div>


        </div>
    )
}