import { ReactNode } from "react";

export default function AuthLayout({ children }: { children: ReactNode }) {
    return (
        <div
            className="flex items-center justify-center mx-auto max-w-7xl min-h-screen max-sm:px-4 max-sm:py-8"
        >
            {children}
        </div>
    );
}