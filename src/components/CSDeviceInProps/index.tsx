// -----------------------------
// Filename: CSDeviceInPros\index.tsx
// -----------------------------

'use client'
// import the FunctionComponent from react for the Functional Component typing
import { FunctionComponent } from 'react';

// interface for the props type
interface IDeviceInProps {
    userAgent: string,
    secChUaPlatform: string,
    secChUaMobile: string
}

export const CSDeviceInProps : FunctionComponent<IDeviceInProps> = (props) => {

    return (
      <>
        <h1>Passing Device Details to Client-Side Component</h1>
        <h3>{`Device details: ${props.userAgent}`}</h3>
        <h3>{`Sec-CH-UA-Platform: ${props.secChUaPlatform}`}</h3>
        <h3>{`Is it a Mobile? ${props.secChUaMobile == '?0' ? 'No' : 'Yes'}`}</h3>
      </>
    )}