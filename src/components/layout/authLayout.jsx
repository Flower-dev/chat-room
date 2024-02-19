import React from "react";

export default function AuthLayout({children}) {
    return (
        <main className="p-5">
            {children}
        </main>
    )
}