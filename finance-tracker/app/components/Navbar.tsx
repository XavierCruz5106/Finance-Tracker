import Image from "next/image";

export default function Navbar(){
  return (
    <div className="container">
      <ul className="items">
          <li className="home">
            <Image
              src="/profile.svg"
              width={40}
              height={40}
              alt="Home"
            />
          </li>
          <li>

          </li>
      </ul>

    </div>
  )
}
