"use client"

import { SignInButton, UserButton } from "@clerk/nextjs"
import { useMutation, useQuery, Authenticated, Unauthenticated  } from "convex/react"
import { Button } from "@workspace/ui/components/button"
import { Input } from "@workspace/ui/components/input"
import { add } from "@workspace/math/add"
import { api } from "@workspace/backend/_generated/api"

export default function Page() {
  const users = useQuery(api.users.getMany);
  const addUser = useMutation(api.users.add);
  return (
    <>
    <Authenticated>
    <div className="flex flex-col items-center justify-center min-h-svh">
      <p>apps/web</p>
      <UserButton />
      <Button onClick={() => addUser()}>Add</Button>
      <div className="max-w-sm w-full mx-auto"></div>
      <p>{JSON.stringify(users, null, 2)}</p>
    </div>
    </Authenticated>
    <Unauthenticated>
        <p>Must be signed in</p>
        <SignInButton>SIgn In</SignInButton>
    </Unauthenticated>
    </>
  )
}
