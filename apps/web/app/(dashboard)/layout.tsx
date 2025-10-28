import { AuthGuard } from "@/module/auth/ui/components/auth-guard";
import { OrgGuard } from "@/module/auth/ui/components/org-guard";

const Layout = ({ children }: { children: React.ReactNode }) => {
    return <AuthGuard>
        <OrgGuard>
            {children}
        </OrgGuard>
    </AuthGuard>;
};

export default Layout;