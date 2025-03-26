// app/page.tsx
'use client'

import { useState } from 'react'

export default function HomePage() {
  const [count, setCount] = useState(0)

  return (
    <main>
      <button onClick={() => setCount(count + 1)}>
        Count: {count}
      </button>
    </main>
  )
}