import React, { useContext } from 'react'
import { useRouter } from 'next/router'

import NavItem from './nav-item'
import { World } from '../icons'

import styles from './navigation.module.css'
import { AuthContext } from '../../store/auth'

const Navigation = () => {
  const router = useRouter()
  const { isAuthenticated, isAdmin } = useContext(AuthContext)
  return (
    <nav className={styles.nav}>
      {isAuthenticated() && isAdmin() ? (
        <NavItem
          href="/Dashboard"
          selected={router.pathname.split('/')[1] == 'Dashboard'}
        >
          <span>Dashboard</span>
        </NavItem>
      ) : (
        <span></span>
      )}

      <NavItem
        href="/"
        selected={
          router.pathname == '/' || router.pathname.split('/')[1] == 'questions'
        }
      >
        <World />
        <span>TakeCode</span>
      </NavItem>
      {isAuthenticated() && isAdmin() ? (
        <NavItem
          href="/Question"
          selected={router.pathname.split('/')[1] == 'Question'}
        >
          <span>Questions</span>
        </NavItem>
      ) : (
        <></>
      )}
      <NavItem href="/tags" selected={router.pathname == '/tags'}>
        <span>Tags</span>
      </NavItem>

      <NavItem
        href="/users"
        selected={router.pathname.split('/')[1] == 'users'}
      >
        <span>Users</span>
      </NavItem>
    </nav>
  )
}

export default Navigation
