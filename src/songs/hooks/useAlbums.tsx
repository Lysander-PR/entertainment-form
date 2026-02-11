import { useQuery } from "@tanstack/react-query"
import { getAlbums } from "../actions/get-albums"

export const useAlbums = (idArtist: string) => {
  return useQuery({
    queryKey: ['albums', idArtist],
    queryFn: () => getAlbums(idArtist),
    enabled: !!idArtist
  })
}
