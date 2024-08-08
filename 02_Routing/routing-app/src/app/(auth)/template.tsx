"use client"
import Link from "next/link"
import { usePathname } from "next/navigation"
import './styles.css';

const navLink = [
    { name: "Register", href: "/register" },
    { name: "Login", href: "/login" },
    { name: "Forget Password", href: "/forget-password" }
]

export default function AuthLayout({ children }: {
    children: React.ReactNode
}) {
    const pathname = usePathname();

    return (
        <div>
            {navLink.map((link, item) => {
                const isActive = pathname.startsWith(link.href)
                return (
                    <Link href={link.href} key={item}
                        className={isActive ? "font-bold mr-4" : "text-blue-500 mr-4"} >
                        {link.name}
                        {" "}
                    </Link>
                )
            })}
        </div>
    )
}