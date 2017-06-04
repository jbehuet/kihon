const defaultsTechniques = {
  immobilisations: {
    bases: [{
      img: 'images/movements/Ikkyo.png',
      title: 'Ikkyo',
      min: "5"
    }, {
      img: 'images/movements/Nikyo.png',
      title: 'Nikyo',
      min: "4"
    }, {
      img: 'images/movements/Sankyo.png',
      title: 'Sankyo',
      min: "4"
    }, {
      img: 'images/movements/Yonkyo.png',
      title: 'Yonkyo',
      min: "3"
    }, {
      img: 'images/movements/Gokyo.png',
      title: 'Gokyo',
      min: "2"
    }],
    variantes: [{
      img: 'images/movements/Ude_garami.png',
      title: 'Ude garami',
      min: "4"
    }, {
      img: 'images/movements/Hiji_kime_osae.png',
      title: 'Hiji kime osae',
      min: "2"
    }]
  },
  projections: {
    bases: [{
      img: 'images/movements/Irimi_nage.png',
      title: 'Irimi nage',
      min: "5"
    }, {
      img: 'images/movements/Shihoo_nage.png',
      title: 'Shihoo nage',
      min: "5"
    }, {
      img: 'images/movements/Kote_gaeshi.png',
      title: 'Kote gaeshi',
      min: "4"
    }, {
      img: 'images/movements/Kaiten_nage.png',
      title: 'Kaiten nage',
      min: "4"
    }, {
      img: 'images/movements/Tenchi_nage.png',
      title: 'Tenchi nage',
      min: "4"
    }, {
      img: 'images/movements/Kokyu_hoo.png',
      title: 'Kokyu hoo',
      min: "5"
    }],
    variantes: [{
      img: 'images/movements/Sokumen_irimi_nage.png',
      title: 'Sokumen irimi',
      min: "4"
    }, {
      img: 'images/movements/Ude_kime_nage.png',
      title: 'Ude kime nage',
      min: "4"
    }, {
      img: 'images/movements/Aiki_otoshi.png',
      title: 'Aiki otoshi',
      min: "2"
    }, {
      img: 'images/movements/Sumi_otoshi.png',
      title: 'Sumi otoshi',
      min: "2"
    }, {
      img: 'images/movements/Juji_garami.png',
      title: 'Juji garami',
      min: "2"
    }, {
      img: 'images/movements/Ushiro_kiri_otoshi.png',
      title: 'Ushiro kiri',
      min: "1"
    }, {
      img: 'images/movements/Kokyu_nage.png',
      title: 'Kokyu nage',
      min: "4"
    }, {
      img: 'images/movements/Koshi_nage.png',
      title: 'Koshi nage',
      min: "2"
    }]
  }
};

const techniquesReducer = function(state, action) {
  'use strict';
  state = state || defaultsTechniques;
  switch (action.type) {
    case 'FETCH_FILTRED':
      return {
        immobilisations: {
          bases: defaultsTechniques.immobilisations.bases.filter(el => Number(el.min) >= Number(action.kyu)),
          variantes: defaultsTechniques.immobilisations.variantes.filter(el => Number(el.min) >= Number(action.kyu))
        },
        projections: {
          bases: defaultsTechniques.projections.bases.filter(el => Number(el.min) >= Number(action.kyu)),
          variantes: defaultsTechniques.projections.variantes.filter(el => Number(el.min) >= Number(action.kyu))
        }
      }
    case 'FETCH_ALL':
    return state;
    default:
      return state;
  }
}


export default techniquesReducer
