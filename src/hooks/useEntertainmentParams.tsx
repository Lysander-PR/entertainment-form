import { useSearchParams } from 'react-router-dom'

import { TypeEntertainment } from '@/types/enums/type-entertainment.enum'

const ENTERTAINMENT_PARAM = 'entertainment';
const ID_PARAM = 'id';

export const useEntertainmentParams = () => {
    const [searchParams, setSearchParams] = useSearchParams({ [ENTERTAINMENT_PARAM]: TypeEntertainment.SONG });

    const entertainmentSelected = searchParams.get(ENTERTAINMENT_PARAM) as TypeEntertainment || TypeEntertainment.SONG;
    const id = searchParams.get(ID_PARAM) ?? '';

    const changeEntertainment = (entertainment: TypeEntertainment) => {
        searchParams.set(ENTERTAINMENT_PARAM, entertainment);
        setSearchParams(searchParams);
    }

    return {
        entertainmentSelected,
        id,
        isEditing: !!id,
        changeEntertainment
    };
}
