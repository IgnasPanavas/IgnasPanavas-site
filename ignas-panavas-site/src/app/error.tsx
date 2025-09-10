'use client'

import { useEffect } from 'react'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error)
  }, [error])

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="text-center">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Something went wrong!</h2>
        <p className="text-gray-600 mb-6">We encountered an error while loading this page.</p>
        <button
          onClick={() => reset()}
          className="px-6 py-3 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition-colors duration-200"
        >
          Try again
        </button>
      </div>
    </div>
  )
}
