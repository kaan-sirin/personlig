'use client'
import Link from 'next/link'

export default function Page() {

  return (
    <div style={{ width: '426px' }}>
      <div style={{ margin: '5px', padding: "5px 10px" }}>
        <h2>A day's worth</h2>
        <p>Coming soon</p>
      </div>
      <div style={{ margin: '5px', padding: "5px 10px" }}>
        <Link style={{ color: 'black', textDecoration: 'none' }} href="/"> &larr; Back</Link>
      </div>
    </div >)
}