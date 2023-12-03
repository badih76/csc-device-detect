// -----------------------------
// Filename: CSDeviceDetect\index.tsx
// -----------------------------

'use client'

// import needed type and hooks from react
import React, { FunctionComponent, useEffect, useState } from "react";

// create a hook to fetch and return the headers data
const useDetectDevice = () => {
  const res = fetch('http://localhost:3000/api/detect')
              .then(async result => {
                const data = await result.json();
                
                return data;
              })
              .catch(err => {
                console.log('Error: ', err);
                return {}
              })

  return res;
}

// interface for the new iterable headers object type
interface IResult {
  [key: string]: string
}


const CSDeviceDetect : FunctionComponent = () => {
  // create a state object for the headers data of type IResult
  const [ detect, setDetect ] = useState<IResult>({})
  
  useEffect(() => {

    // use the created hook to get the headers data
    useDetectDevice().then(res => setDetect(res));
  }, [])
  
  return (
    <>
      <h1>Client-Side Device Detection Using Next.js API</h1>
      <h3>{`Device details: ${detect.userAgent}`}</h3>
      <h3>{`Sec-CH-UA-Platform: ${detect.secChUaPlatform}`}</h3>
      <h3>{`Is it a Mobile? ${detect.secChUaMobile == '?0' ? 'No' : 'Yes'}`}</h3>
    </>
)}
  

// The following Cliebt-Side Component uses userAgent sniffing
export const CSDeviceUserAgent : FunctionComponent = () => {
  // Get the userAgent string
  const UA = window.navigator.userAgent;

  // check for OS patterns
  const secChUaPlatform = UA.includes("Android") ? "Android" 
    : UA.includes("Windows") ? "Windows" 
    : UA.includes("iPhone") ? "iPhone OS" : "Unknown";

  // check for mobile patterns
  const mobile = UA.includes("Mobile") || UA.includes("iPhone") || UA.includes("Android") ? "Yes" : "No"

  return(
    <>
      <h1>Device Details in Client-Side Component from userAgent</h1>
      <h3>{`Device details: ${UA}`}</h3>
      <h3>{`Sec-CH-UA-Platform: ${secChUaPlatform}`}</h3>
      <h3>{`Is it a Mobile? ${mobile}`}</h3>
    </>
  )
}
  

export default CSDeviceDetect;