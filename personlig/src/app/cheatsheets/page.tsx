'use client'
import Link from 'next/link'
import Image from 'next/image'

export default function Page() {

    return (
  <div>
        <div style={{margin: '5px', padding: "5px 10px"}}>
        <Link style={{color: 'black', textDecoration:'none' }} href="/"> &larr; Back</Link>
        </div>
        <h1>Cheatsheets</h1>
        <ul>
            <li><Link href="https://colab.research.google.com/drive/1PAOwA-SZrhPndyksl8Um32z0ghBwtKG9?usp=sharing">Pandas</Link></li>
        </ul>
    </div > )
}