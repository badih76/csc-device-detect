import CSDeviceDetect, { CSDeviceUserAgent } from '@/components/CSDeviceDetect'
import SSDeviceDetect from '@/components/SSDeviceDetect'
import Image from 'next/image'
// import styles from './page.module.css'


export default function Home() {
  return (
    <>
      <SSDeviceDetect />
      <hr />
      <CSDeviceDetect />
      <hr />
      <CSDeviceUserAgent />
    </>
  )
}
