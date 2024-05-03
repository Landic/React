import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import styles from './Layout.module.css'


export default function Layout() {
  return (
    <>
      <header>
        <nav>
          <ul className={styles['header']}>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/admin">AdminPanel</Link>
            </li>
          </ul>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
      <footer></footer>
    </>
  )
}
