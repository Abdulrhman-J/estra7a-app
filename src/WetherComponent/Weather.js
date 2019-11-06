import React, { Component } from 'react';

const Weather = props => {




    // depend on the wether from the api's weather do this function and display it in this page
    const planeBasedOnWeather = (temp) => {
        if (props.t == 25) {
            return ('الجو معتدل نوعا ما')
        } else if (props.t > 25) {
            return ('الجو يميل للحرارة  ')
        } else if (props.t > 30) {
            return ("نصيحة شغل المكيف")
        } else if (props.t < 20) {
            return ('الجوو بااارد البس شتوي')
        }
    }

    return (
        <div>
            <h1> نعمل صُبحَ مساء لاسعادكم</h1>
            <h3>بنضبطكم بتفاصيل الامطار والجو ونعلمكم وش يناسبكم اي جو </h3>
            {props.w}<label>درجة الحرارة </label>
            <br />
            {/* {props.t} */}
            <h1>{planeBasedOnWeather()}</h1>
        </div>
    );
}

export default Weather;