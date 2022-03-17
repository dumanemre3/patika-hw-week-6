import React, { useState } from 'react'
import { useCookie } from '../hooks/useCookie';

function CookieDeleter() {
    const { deleteCookie } = useCookie();
    const [cookieName, setCookieName] = useState();
    return (
        <div className='card mb-5'>
            <div className='card-header'><h2>Delete</h2></div>
            <div className='card-body'>
                <div className="mb-3">
                    <label className="form-label">Cookie Name</label>
                    <input type="text" onChange={(e) => setCookieName(e.target.value)} className="form-control" placeholder="Cookie Name" />
                </div>
                <button className='btn btn-danger' onClick={() => deleteCookieByName()}>Delete Cookie By Name</button>
            </div>
        </div>
    )

    function deleteCookieByName() {
        deleteCookie(cookieName);
        alert("Deleted " + cookieName)
    }
}

export default CookieDeleter