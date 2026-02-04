import { useQuery } from "@tanstack/react-query"
import { getSong } from "@/songs/actions/get-song"
import { TypeEntertainment } from "@/types/enums/type-entertainment.enum"

export const useSong = (id: string) => {
    return useQuery({
        queryKey: [TypeEntertainment.SONG, id],
        queryFn: () => getSong(id),
        staleTime: 1000 * 60 * 2, // * 2 minutes
        enabled: !!id
    })
}
