import { useState, useEffect } from 'react'
import { Navigate, useLocation } from 'react-router-dom'

const MEMBER_PASSCODE = 'wicysuh2024' // This would ideally come from an environment variable

export default function ProtectedRoute({ children }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
  const [passcode, setPasscode] = useState('')
  const [error, setError] = useState('')
  const location = useLocation()

  useEffect(() => {
    const auth = sessionStorage.getItem('wicysAuth')
    if (auth === MEMBER_PASSCODE) {
      setIsAuthenticated(true)
    }
    setIsLoading(false)
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault()
    if (passcode === MEMBER_PASSCODE) {
      sessionStorage.setItem('wicysAuth', passcode)
      setIsAuthenticated(true)
      setError('')
    } else {
      setError('Invalid passcode. Please check your member welcome email or ask an officer.')
    }
  }

  // Show loading state
  if (isLoading) {
    return (
      <div className="mx-auto container-wide px-4 md:px-6 py-12">
        <p>Loading...</p>
      </div>
    )
  }

  // If authenticated, render the protected content
  if (isAuthenticated) {
    return children
  }

  // If not authenticated, show the login form
  return (
    <div className="mx-auto container-wide px-4 md:px-6 py-12">
      <h1 className="text-3xl font-bold">Member-Only Resource</h1>
      <p className="mt-2 text-gray-600">This page requires a member passcode. Check your welcome email or ask an officer.</p>

      <form onSubmit={handleSubmit} className="mt-6 max-w-md">
        <div className="grid gap-4">
          <label className="grid gap-1 text-sm">
            <span className="font-medium">Member Passcode</span>
            <input
              type="password"
              value={passcode}
              onChange={(e) => setPasscode(e.target.value)}
              className="border rounded-md px-3 py-2"
              placeholder="Enter passcode"
              required
              autoFocus
            />
          </label>
          {error && <p className="text-red-600 text-sm">{error}</p>}
          <div className="flex gap-3">
            <button type="submit" className="bg-wicys-purple text-white px-4 py-2 rounded-md hover:bg-wicys-purple/90">
              Access Resource
            </button>
            <button 
              type="button" 
              onClick={() => window.location.href = '/members'} 
              className="px-4 py-2 rounded-md border hover:bg-gray-50"
            >
              Back to Members
            </button>
          </div>
        </div>
      </form>
    </div>
  )
}