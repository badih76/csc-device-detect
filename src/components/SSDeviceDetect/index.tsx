// ------------------------------
// Filename: SSDeviceDetect\index.tsx
// ------------------------------

// import the Next.js headers
import { headers } from 'next/headers';

import React from 'react'

// import the Client-Side component which will receive the headers in the props
import { CSDeviceInProps } from '../CSDeviceInProps';


// The below function will return a valid key name of the header by removing 
// the '-' in the header names and applying camel case naming convention.
const createKey = (k: string) => {
    const kParts = k.split('-');

    let newK = kParts[0];

    for(let n=1; n < kParts.length; n++) {
        kParts[n] = kParts[n].charAt(0).toUpperCase() + kParts[n].slice(1)
        newK += kParts[n];
    }

    return newK;

}

// interface for the new iterable headers object type
interface IResult {
    [key: string]: string
}

// The Server-Side Component
const SSDeviceDetect = () => {
    // get the headers object
    const headersList = headers();
    
    let result: IResult = {};
    
    // create a new object using the headers' key:value coupling
    Array.from(headersList.keys()).map((key: string) => {        
        const v =  headersList.get(key);
        const nKey = createKey(key);
        console.log(key, ' - ', createKey(key), ' - ', v);
        Object.defineProperty(result, nKey, { value: v, writable: false, enumerable: true });
        // console.log(key, headersList.get(key));
      })
    
  return (
    <>
        <div> 
            {/* This part uses the Server-Side retrieved headers data */}
            <h1>Server-side Device Detection Using Next.js headers API</h1>
            <h3>{`Device details: ${result.userAgent}`}</h3>
            <h3>{`Sec-CH-UA-Platform: ${result.secChUaPlatform}`}</h3>
            <h3>{`Is it a Mobile? ${result.secChUaMobile == '?0' ? 'No' : 'Yes'}`}</h3>
        </div>
        <hr />
        <div>
            {/* This part passes the headers data to a Client-Side component in props */}
            <CSDeviceInProps userAgent={result.userAgent} 
                    secChUaPlatform={result.secChUaPlatform} 
                    secChUaMobile={result.secChUaMobile} />
        </div>
    </>
  )
}

export default SSDeviceDetect;