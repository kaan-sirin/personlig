import Link from 'next/link'


export default function Home() {
  return (
    <div style={{ width: '426px', margin: '5px', padding: "5px 10px" }}>
      <h1>Kaan Sirin</h1>
      <p>
        Working currently on smart scheduling systems.
      </p>

      <h2>Essays</h2>
      <ul>
        <li><Link href="/a-days-worth">A day's worth</Link></li>
      </ul>



      <h2>Cheatsheets</h2>
      <ul>
        <li><Link href="https://colab.research.google.com/drive/1PAOwA-SZrhPndyksl8Um32z0ghBwtKG9?usp=sharing" rel="noopener noreferrer" target="_blank">Pandas</Link></li>
        <li><Link href="https://colab.research.google.com/drive/1ew5JnfjP28l3lbudocr-cq3C7ygkelUG?usp=sharing" rel="noopener noreferrer" target="_blank"> Matplotlib </Link></li>
      </ul>


      <h3 id="links">Socials</h3>
      <ul>
        <li>
          <a href="http://twitter.com/kaansirin_" rel="noopener noreferrer" target="_blank">Twitter</a>
        </li>
      </ul>
    </div>
  )
}
