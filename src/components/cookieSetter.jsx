import React, { useState } from 'react'
import { useCookie } from '../hooks/useCookie';

function CookieSetter() {
    const { setCookie } = useCookie();
    const [cookieName, setCookieName] = useState("");
    const [cookieValue, setCookieValue] = useState("");
    return (
        <div className='card mb-5'>
            <div className='card-header'><h2>Set</h2></div>
            <div className='card-body'>
                <div className="mb-3">
                    <label className="form-label">Cookie Name</label>
                    <input type="text" onChange={(e) => setCookieName(e.target.value)} className="form-control" placeholder="Cookie Name" />
                </div>
                <div className="mb-3">
                    <label className="form-label">Cookie Value</label>
                    <input type="text" onChange={(e) => setCookieValue(e.target.value)} className="form-control" placeholder="Cookie Value" />
                </div>
                <button className='btn btn-success' onClick={() => setCookieByName()}>Set Cookie By Name</button>
            </div>
        </div>
    )

    function setCookieByName() {
        setCookie(cookieName, cookieValue);
        alert("Cookie Saved")
    }

}


export default CookieSetter