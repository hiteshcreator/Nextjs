import Card from "@/app/components/card"
import Link from "next/link"

const defaultnotification = () => {
  return (
    <Card>
        <h1>notification</h1>
        <Link href="/complex-dashboard/archived">Archived</Link>
    </Card>
  )
}

export default defaultnotification