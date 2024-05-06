import Link from 'next/link'
import React from 'react'
import Card from '@/app/components/card'
const ArchivedNotification = () => {
  return (
    <>
    <Card>
        <h1>  ArchivedNotification </h1> 
        <Link href="/complex-dashboard">Default</Link> 
    </Card>
    </>
  )
}

export default ArchivedNotification