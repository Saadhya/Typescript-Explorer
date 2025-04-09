# startup
npm create vite@5
npm install bootstrap@5


# now we need shared state, caching, controlled re-fetches and retries
- use useQuery for that in your react component.
- npm install @tanstack/react-query
- npm install axios

# points to remember
- cached data will be marked as stale right after fetch
- re-fetch will only occur when remount of query occurs
- or browser refocuses
- or when network is reconnected

# refetching
- added api status component to display user friendly message instead of status codes
