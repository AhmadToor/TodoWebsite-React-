import React from 'react'

export default function Footer() {
  let footerstyle = {
    position : "fixed",
    bottom : "0",
    width : "100%"
  }
  return (
    <footer className='bg-primary py-2 text-light ' style={footerstyle}>
      <p className='text-center mb-0'>Copywrite &copy; 2024 | Todoslist.com</p>
    </footer>
  )
}
