'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation';



const Header = () => {
  const links = [
    { label: 'About', href: '/about'},
    { label: 'Work', href: '/work'},
    { label: 'Contact', href: '/contact'}
  ]
  const pathname  = usePathname();
  return (
    <header className='shadow'>
      <nav className='container mx-w py-4 flex justify-between items-center'>
        <Link href='/' className='font-serif text-2x1 font-bold'>
          PK
        </Link>
        <div>
          <ul className='list-none flex space-x-4'>
          {links.map(({label, href}) => (
            <Link key={href} href={href}
           className={`relative inline-block font-medium cursor-pointer after:absolute after:w-full 
            after:h-[2px] after:bg-[#0087ca] after:bottom-[-16px] after:left-0 after:scale-x-0 after:origin-center
            after:transition-transform after:duration-150 hover:after:scale-x-100 hover:after:origin-center ${
              pathname === href
              ? 'after:scale-x-100'
              : ''
            }`}
            >
              {label}
            </Link>
          )) }
          </ul>
        </div>
      </nav>
    </header>
  )
}

export default Header
