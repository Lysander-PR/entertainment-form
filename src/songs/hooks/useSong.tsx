import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query"
import { createSong, getSong, updateSong } from "@/songs/actions/song.action"
import { TypeEntertainment } from "@/types/enums/type-entertainment.enum"
import type { Song } from "@/songs/entities/song.entity";

export const useSong = (id: string) => {
    const queryClient = useQueryClient();

    const query = useQuery({
        queryKey: [TypeEntertainment.SONG, id],
        queryFn: () => getSong(id),
        staleTime: 1000 * 60 * 2, // * 2 minutes
        enabled: !!id
    })

    const mutation = useMutation({
        mutationFn: (song: Song) => {
            if (id) {
                return updateSong(id, song);
            }

            return createSong(song);
        },
        onSuccess: (song) => {
            queryClient.invalidateQueries({ queryKey: [TypeEntertainment.SONG, id] })
            queryClient.setQueryData([TypeEntertainment.SONG, 'song.id'], song);
        }
    })

    return {
        ...query,
        mutation
    };
}
