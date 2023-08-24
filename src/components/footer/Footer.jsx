import React from 'react'

export default function Footer() {

    const currentYear = new Date().getFullYear();

  return (
    <>
    <footer>
              <h6>Upright Project: React Chat Client {currentYear} &copy;</h6>
    </footer>
    </>
  )
}