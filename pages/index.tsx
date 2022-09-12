import Link from 'next/link'

export default function Home() {
  return (
    <>
      <h1>Welcome to Next.js!</h1>
      <nav>
        <Link href='/about'>
          <a>About</a>
        </Link>
      </nav>
    </>
  )
}
