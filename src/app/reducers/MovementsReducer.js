import movements from '../../datas/movements'
import { Types, Tabs } from '../actions/MovementsActions'


const defaultState = {
  movements,
  selectedTab: Tabs.TECHNIQUES
}

const movementsReducer = (state = defaultState, action) => {
  switch (action.type) {
    case Types.FETCH_FILTRED:
      const kyu = Number(action.payload.kyu) || 1
      return {
        ...state,
        movements: {
          immobilisations: {
            bases: state.movements.immobilisations.bases.filter(el => Number(el.min) >= Number(kyu)),
            variantes: state.movements.immobilisations.variantes.filter(el => Number(el.min) >= Number(kyu))
          },
          projections: {
            bases: state.movements.projections.bases.filter(el => Number(el.min) >= Number(kyu)),
            variantes: state.movements.projections.variantes.filter(el => Number(el.min) >= Number(kyu))
          },
          saisies: {
            faces: state.movements.saisies.faces.filter(el => Number(el.min) >= Number(kyu)),
            arrieres: state.movements.saisies.arrieres.filter(el => Number(el.min) >= Number(kyu))
          },
          frappes: {
            bases: state.movements.frappes.bases.filter(el => Number(el.min) >= Number(kyu))
          }
        }
      }
    case Types.FETCH_ALL:
      return { ...state, movements };
    case Types.SELECT_TAB:
      return { ...state, selectedTab: action.payload.tab };
    default:
      return state;
  }
}


export default movementsReducer
