import { useQuery } from "@tanstack/react-query"
import { getSong } from "@/songs/actions/get-song"

export const useSong = (id: string) => {
    return useQuery({
        queryKey: ['song', id],
        queryFn: () => getSong(id),
        staleTime: 1000 * 60 * 2 // * 2 minutes
    })
}
