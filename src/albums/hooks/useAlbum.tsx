import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query"
import { createAlbum, getAlbum, updateAlbum } from "@/albums/actions/album.action"
import { TypeEntertainment } from "@/types/enums/type-entertainment.enum"
import type { Album } from "@/albums/types/entities/album.entity";
import type { CoverPayload } from "@/types/interfaces/cover-payload.interface";

interface SaveAlbumVariables {
    album: Album;
    cover?: CoverPayload;
}

export const useAlbum = (id: string) => {
    const queryClient = useQueryClient();

    const query = useQuery({
        queryKey: [TypeEntertainment.ALBUM, id],
        queryFn: () => getAlbum(id),
        staleTime: 1000 * 60 * 2, // * 2 minutes
        enabled: !!id
    })

    const mutation = useMutation({
        mutationFn: ({ album, cover }: SaveAlbumVariables) => {
            if (id) {
                return updateAlbum(id, album, cover);
            }

            return createAlbum(album, cover);
        },
        onSuccess: (album) => {
            queryClient.setQueryData([TypeEntertainment.ALBUM, album.id], album);
            queryClient.invalidateQueries({ queryKey: [TypeEntertainment.ALBUM, album.id] })
        }
    })

    return {
        query,
        mutation
    };
}
