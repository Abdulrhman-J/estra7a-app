import React from "react";
import { useState } from 'react'
const Home = props => {

    // to use state while the component is function
    const [hide, setHide] = useState(true)
    const [name, setName] = useState("")
    const [des, setDes] = useState("")
    const [img, setImg] = useState("")



    return (

        <div>
            <h1> Heellllooo</h1>

            {/* if the hide true show me the form to fill it, else print the information
            this will happen when u clcick on the button 
            */}
            {hide == false ? <>
                <label>أسمك :</label> <h1>{name}</h1>
                <label>وصفك :</label>  <h1>{des}</h1>
                {/* <>{img}</> */}
            </> : <div di='divForm'>
                    <label> أسمك</label><input value={name} onChange={(e) => setName(e.target.value)} type='text' />
                    <label> وصفك</label><input value={des} onChange={(e) => setDes(e.target.value)} type='text' />
                    {/* <form action=''>
                    <label>ارفق صورة</label> <input value={img} type="file" onChange={(e) => setImg(e.target.value)} />
                    </form> */}
                    <button onClick={() => setHide(false)} id='buttonForm'> حفظ </button>
                </div>}




        </div>
    );
}

export default Home;