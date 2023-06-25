import "./globals.css"
import Navbar from "@dribble/components/Navbar";
import React from "react";
import Footer from "@dribble/components/Footer";

export const metadata = {
    title: "Dribble",
    description: "Showcase and discover remarkable developer projects",
}

export default function RootLayout({children,}:
                                       { children: React.ReactNode }) {
    return (
        <html lang="en">
            <body>
                < Navbar />
                <main>
                    {children}
                </main>
                < Footer />
            </body>
        </html>
    )
}