'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'
import classes from './nav-link.module.css'

export default function NavLink({ href, children }) {
    const path = usePathname()
    return (
        <Link href={href} className={path.startsWith(href) ? `${classes.ink} ${classes.active}` : classes.link}>{children}</Link>

    )
}
