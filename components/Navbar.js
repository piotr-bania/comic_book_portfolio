import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Navbar = () => {
  return (
    <section>
        <header>
            <Link href="/"><Image className='logo' src="/logo.svg" alt="logo" width={200} height={81.365}/></Link>
            {/* <nav>
                <h1>Menu</h1>
                <h2>Hover <br/>here</h2>
                <li>
                    <Link href="/portfolio"><a>Portfolio</a></Link>
                    <Link href="/services"><a>Services</a></Link>
                    <Link href="/about"><a>About</a></Link>
                    <Link href="/contact"><a>Contact</a></Link>
                </li>
            </nav> */}
        </header>
    </section>
  )
}

export default Navbar