import { useCallback } from "react"
export const useCookie = () => {

    const getCookie = useCallback((cookieName) => {
        return document.cookie.match('(^|;)\\s*' + cookieName + '\\s*=\\s*([^;]+)')?.pop() || ''
    }, [])

    const setCookie = useCallback((cookieName, value) => {
        document.cookie = `${cookieName}=${value}`;
    }, [])

    const deleteCookie = useCallback((cookieName) => {
        document.cookie = `${cookieName}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`
    }, [])

    const getAllCookies = useCallback(() => {
        let cookieArray = []
        
        let cookies =  document.cookie;
        let decodedCookies = decodeURIComponent(cookies);
        let ca = decodedCookies.split(";")


        ca.forEach((val,index)=>{
            let c = val.split("=");
            if(c[0].charAt(0)===" ")
            c[0] = c[0].substring(1);
            cookieArray.push(c);
        })
        return cookieArray;
    }, [])

    return { getCookie, setCookie, deleteCookie, getAllCookies };
}