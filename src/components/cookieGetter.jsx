import React, { useEffect, useState } from 'react'
import { useCookie } from '../hooks/useCookie';

function CookieGetter() {
    const { getCookie, getAllCookies } = useCookie();
    const [cookieName, setCookieName] = useState("");
    const [cookieValue, setCookieValue] = useState("");
    const [cookieNameInput, setCookieNameInput] = useState("");
    const [cookieValueColor, setCookieValueColor] = useState("black");
    const [allCookies, setAllCookies] = useState([]);


    useEffect(() => {
        let cookies = getAllCookies();
        setAllCookies(cookies);
    }, []);
    return (
        <div className='card mb-5'>
            <div className='card-header'><h2>Get</h2></div>
            <div className='card-body'>
            <div className="mb-3">
                <label className="form-label">Cookie Name</label>
                <input onChange={(e) => setCookieNameInput(e.target.value)} type="text" className="form-control" placeholder="Cookie Name" />
            </div>
            <button className='btn btn-primary' onClick={() => getCookieByName()}>Get Cookie By Name</button>
            <div>
                <span style={{ fontWeight: "bold" }}>{cookieName}{cookieName === "" ? "" : " :"}</span> <span style={{ color: cookieValueColor }}>{cookieValue}</span>
            </div>
            <hr />
            <div className='mt-3'>
                <button className='btn btn-secondary' onClick={() => showAllCookies()}>Update All Cookies Table</button>
                <table className='table'>
                    <thead>
                        <tr>
                            <td>Cookie Name</td>
                            <td>Cookie Value</td>
                        </tr>
                    </thead>
                    <tbody>
                        {allCookies.map((e,i) => 
                            <tr key={i}>
                            <td>{e[0]}</td>
                            <td>{e[1]}</td>
                        </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
        </div>
    )

    function getCookieByName() {
        if(cookieNameInput===""){
            alert("Please enter a cookie name")
            return;
        }
        let value = getCookie(cookieNameInput);
        setCookieName(cookieNameInput);
        if (value !== "") {
            setCookieValue(value);
            setCookieValueColor("black")
        }
        else {
            setCookieValue("NOT SET");
            setCookieValueColor("red")
        }
    }
    function showAllCookies() {
        let cookies = getAllCookies();
        setAllCookies(cookies);
    }
}



export default CookieGetter;