"use client"

import * as React from "react"
import Link from "next/link"

import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"

const projectPages: { title: string; href: string; description: string }[] = [
    {
        title: "About",
        href: "/about",
        description: "A quick overview of the project and what it represents.",
    },
    {
        title: "Projects",
        href: "/projects",
        description: "A landing page for the work, updates, and future builds.",
    },
    {
        title: "Contact",
        href: "/contact",
        description: "Ways to reach out or follow the project online.",
    },
]

const officialSite = "https://www.thearizonaproject.com"

export default function Header() {
    return (
        <header className="border-b border-border/60 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80">
            <div className="mx-auto flex w-full max-w-6xl flex-col gap-4 px-4 py-3 md:flex-row md:items-center md:justify-between">
                <Link href="/" className="flex items-center gap-3">
                    <img
                        src="/phoenixbg.png"
                        alt="The Arizona Project logo"
                        className="size-11 rounded-full object-cover"
                    />
                    <div className="flex flex-col leading-none">
                        <span className="text-lg font-semibold tracking-tight">
                            the arizona project
                        </span>
                    </div>
                </Link>

                <NavigationMenu viewport={false} className="justify-start md:justify-end">
                    <NavigationMenuList className="flex-wrap justify-start gap-1 md:justify-end">
                        <NavigationMenuItem>
                            <NavigationMenuTrigger>Project</NavigationMenuTrigger>
                            <NavigationMenuContent>
                                <ul className="grid w-[320px] gap-2 p-2 sm:w-[360px]">
                                    {projectPages.map((page) => (
                                        <ListItem key={page.title} title={page.title} href={page.href}>
                                            {page.description}
                                        </ListItem>
                                    ))}
                                </ul>
                            </NavigationMenuContent>
                        </NavigationMenuItem>
                        <NavigationMenuItem>
                            <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                                <Link href="/">Home</Link>
                            </NavigationMenuLink>
                        </NavigationMenuItem>
                        <NavigationMenuItem>
                            <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                                <a href={officialSite} target="_blank" rel="noreferrer">
                                    Official Site
                                </a>
                            </NavigationMenuLink>
                        </NavigationMenuItem>
                    </NavigationMenuList>
                </NavigationMenu>
            </div>
        </header>
    )
}

function ListItem({
    title,
    children,
    href,
    ...props
}: React.ComponentPropsWithoutRef<"li"> & { href: string }) {
    return (
        <li {...props}>
            <NavigationMenuLink asChild>
                <Link href={href}>
                    <div className="flex flex-col gap-1 text-sm">
                        <div className="font-medium leading-none">{title}</div>
                        <div className="line-clamp-2 text-muted-foreground">{children}</div>
                    </div>
                </Link>
            </NavigationMenuLink>
        </li>
    )
}