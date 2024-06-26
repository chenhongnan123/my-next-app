import Card from "@/components/card";
import Link from "next/link"

export default function Notifications() {
    return <div>
        <Card>
            Notifications
            <Link href="/complex-dashboard/archived">go archived</Link>
        </Card>
    </div>
}