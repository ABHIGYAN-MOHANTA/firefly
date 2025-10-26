"use client"

import { useQuery } from "convex/react"
import { Button } from "@workspace/ui/components/button"
import { Input } from "@workspace/ui/components/input"
import { add } from "@workspace/math/add"
import { api } from "@workspace/backend/_generated/api"


export default function Page() {
  const users = useQuery(api.users.getMany);
  return (
    <div className="flex flex-col items-center justify-center min-h-svh">
      <p>apps/widget</p>
      <div className="max-w-sm w-full mx-auto"></div>
      <p>{JSON.stringify(users, null, 2)}</p>
    </div>
  )
}
