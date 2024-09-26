import { SignIn } from '@clerk/nextjs'
import React from 'react'

export default function page() {
    return (
        <div>
            <SignIn>
                <div>you are signin</div>
            </SignIn>
        </div>
    )
}
