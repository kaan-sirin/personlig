import Link from 'next/link'


export default function Home() {
  return (
    <div
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
      <h1>Kaan Sirin</h1>
      <hr />
      <a href="#bio">Brief Bio</a> {" | "}
      <a href="#demos">Demos</a> {" | "}
      <a href="#links">Links</a> {" | "}
      <Link href="/cheatsheets">Cheatsheets</Link>
      <hr />
      <h2 id="bio">Brief Bio</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
        pharetra dolor mi, at varius risus pretium at. Quisque nec pharetra
        sem. Ut gravida dui non orci imperdiet fermentum id eget orci. Etiam
        ut finibus lorem. Aenean placerat nulla eget erat euismod, ut mollis
        quam fermentum. Cras sed placerat purus, gravida fermentum ligula.
        Donec vitae ultricies dolor. Morbi mattis vulputate enim a
        malesuada. In volutpat tellus ante, ut tincidunt nulla ornare eu.
        Curabitur non lacinia libero. Donec at maximus arcu. Aenean eget
        sodales massa. Ut sed pellentesque nunc.
      </p>

      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
        pharetra dolor mi, at varius risus pretium at. Quisque nec pharetra
        sem. Ut gravida dui non orci imperdiet fermentum id eget orci. Etiam
        ut finibus lorem. Aenean placerat nulla eget erat euismod, ut mollis
        quam fermentum. Cras sed placerat purus, gravida fermentum ligula.
        Donec vitae ultricies dolor. Morbi mattis vulputate enim a
        malesuada. In volutpat tellus ante, ut tincidunt nulla ornare eu.
        Curabitur non lacinia libero. Donec at maximus arcu. Aenean eget
        sodales massa. Ut sed pellentesque nunc.
      </p>

      <h2 id="demos">Demos</h2>
      <p> A list of demos:</p>
      <ul>
        <li>
          <a href="https://huggingface.co/spaces/kaans/test">
            Pet Classifier
          </a>
        </li>
      </ul>
      <h2 id="links">Links</h2>
      <p> You can find me on:</p>
      <ul>
        <li>
          <a href="http://twitter.com/kaansirin_">Twitter</a>
        </li>
      </ul>
    </div>

  )
}
