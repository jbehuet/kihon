export function fetchFiltred(kyu) {
  'use strict';
    return {
        type: 'FETCH_FILTRED',
        kyu: kyu
    }
}
