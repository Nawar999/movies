
import React from 'react'
import {
    useQuery,
    useMutation,
    useQueryClient,
    QueryClient,
    QueryClientProvider,
  } from '@tanstack/react-query'
import getTop10ThisWeek from "../api/getTop10ThisWeek"
  // Create a client
const queryClient = new QueryClient()

const Top10ThisWeek =  () => {
 
    
  
  return (
    <div>
      top 10
    </div>
  )
}

export default Top10ThisWeek