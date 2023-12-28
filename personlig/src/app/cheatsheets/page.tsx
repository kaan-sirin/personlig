'use client'
import Link from 'next/link'

export default function Page() {

    return (<div
        style={{
            maxWidth: "600pt",
            margin: "auto",
            marginBottom: "30px",
            border: "1px solid gray",
            padding: "5px 20px",
            background: "white",
            boxShadow: "1px 1px 10px #22222277",
        }}
    >
        <div style={{margin: '5px', padding: "5px 10px"}}>
        <Link style={{color: 'black', textDecoration:'none' }} href="/"> &larr; Back</Link>
        </div>
        <h1>Cheatsheets</h1>
    </div >)
}