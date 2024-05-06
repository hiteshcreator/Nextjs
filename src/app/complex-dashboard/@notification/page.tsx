import Card from "@/app/components/card"
import Link from "next/link"
const notification = () => {
  return (
    <Card>
        <h1>notification</h1>
        <Link href="/complex-dashboard/archived">Archived</Link>
    </Card>
  )
}

export default notification