import techniques from '../../datas/techniques'
import { Types } from '../actions/TechniquesActions'

const techniquesReducer = (state, action) => {
  state = state || techniques;
  switch (action.type) {
    case  Types.FETCH_FILTRED:
    const kyu = Number(action.payload.kyu) || 1
      return {
        immobilisations: {
          bases: techniques.immobilisations.bases.filter(el => Number(el.min) >= Number(kyu)),
          variantes: techniques.immobilisations.variantes.filter(el => Number(el.min) >= Number(kyu))
        },
        projections: {
          bases: techniques.projections.bases.filter(el => Number(el.min) >= Number(kyu)),
          variantes: techniques.projections.variantes.filter(el => Number(el.min) >= Number(kyu))
        },
        saisies: {
          faces: techniques.saisies.faces.filter(el => Number(el.min) >= Number(kyu)),
          arrieres: techniques.saisies.arrieres.filter(el => Number(el.min) >= Number(kyu))
        },
        frappes: {
          bases: techniques.frappes.bases.filter(el => Number(el.min) >= Number(kyu))
        }
      }
    case  Types.FETCH_ALL:
      return techniques;
    default:
      return state;
  }
}


export default techniquesReducer
