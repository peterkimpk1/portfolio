'use client'

import React, { useEffect, useState } from 'react'
import { useTheme } from 'next-themes'
import { Button } from './button'
import { AiFillSun } from "react-icons/ai";
import { AiFillMoon } from "react-icons/ai";

const ThemeToggle = () => {
  const {setTheme, resolvedTheme} = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true)
  },[])

  if (!mounted) {
    return null;
  }

  return (
    <Button size='sm' variant='ghost'
    onClick={() => {
      setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')
    }}> 
      {resolvedTheme === 'dark' ? (
        <AiFillSun className='size-4 text-orange-300'/>
      ) : (
        <AiFillMoon className='size-4 text-sky-950'/>
      )}
      <span className='sr-only'>Toggle Theme</span>
    </Button>
  )
}

export default ThemeToggle
