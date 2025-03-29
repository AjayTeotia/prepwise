import Agent from "@/components/_global/Agent";
import { getCurrentUser } from "@/lib/action/auth.action";

export default async function Interview() {
    const user = await getCurrentUser();


    return (
        <>
            <h3>Interview generation</h3>

            <Agent
                userName={user?.name || ""}
                userId={user?.id || ""}
                // profileImage={user?.profileURL || ""}
                type="generate"
            />
        </>
    );
}