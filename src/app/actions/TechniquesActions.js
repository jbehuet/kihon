export const Types = {
    FETCH_ALL: 'FETCH_ALL',
    FETCH_FILTRED: 'FETCH_FILTRED',
}


export class Actions {

    static fetchAll() {
        return {
            type: Types.FETCH_ALL
        }
    }

    static fetchFiltred(kyu) {
        return {
            type: Types.FETCH_FILTRED,
            payload: { kyu }
        }
    }
}

