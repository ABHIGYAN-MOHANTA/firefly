"use client"

import { useOrganization } from "@clerk/nextjs"
import { AuthLayout } from "@/module/auth/ui/layouts/auth-layout"
import { OrgSelectionView } from "@/module/auth/ui/views/org-selection-view"

export const OrgGuard = ({ children }: { children: React.ReactNode }) => {
    const { organization } = useOrganization()
    if (!organization) {
        return <AuthLayout><OrgSelectionView /></AuthLayout>;
    }
    return (
        <div>
            {children}
        </div>
    )
}