export const Tabs = {
    TECHNIQUES: 'Techniques',
    ATTAQUES: 'Attaques'
}

export const Types = {
    FETCH_ALL: 'FETCH_ALL',
    FETCH_FILTRED: 'FETCH_FILTRED',
    SELECT_TAB: 'SELECT_TAB',
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

    static selectTab(tab) {
        return {
            type: Types.SELECT_TAB,
            payload: { tab }
        }
    }
}

