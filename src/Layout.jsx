import React from 'react'
import { Outlet } from 'react-router-dom'
import Navabr from './Navabr'

export default function Layout() {
  return <>
  <Navabr/>
  <Outlet/>
  </>
}
