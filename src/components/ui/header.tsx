import Link from 'next/link'
import ThemeToggle from './theme-toggle'

const Header = () => {
  return (
    <header className='fixed inset-x-0 top-0 z-50 py-6'>
      <nav className='container max-w-3x1 flex justify-between items-center'>
        <div>
        <Link href='/' className='font-serif text-2x1 font-bold'>
          PK
        </Link>
        </div>
        <ul className='gap-6 flex items-center justify-around text-sm font-light text-muted-foreground'>
          <li className='transition-colors hover:text-foreground'>
            <Link href='/posts'>Posts</Link>
          </li>
          <li className='transition-colors hover:text-foreground'>
            <Link href='/projects'>Projects</Link>
          </li>
          <li className='transition-colors hover:text-foreground'>
            <Link href='/contact'>Contact</Link>
          </li>
        </ul>
        <div>
          <ThemeToggle/>
        </div>
      </nav>
    </header>
  )
}

export default Header
