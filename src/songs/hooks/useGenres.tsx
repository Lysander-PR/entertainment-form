import { useQuery } from '@tanstack/react-query'
import { getGenres } from '@/songs/actions/get-genres'

export const useGenres = (enabled = false) => {
  return useQuery({
        queryKey: ['genres'],
        queryFn: getGenres,
        enabled
    })
}
