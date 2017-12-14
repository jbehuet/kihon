const techniques = {
    immobilisations: {
      bases: [{
        id: '0',
        img: 'images/movements/Ikkyo.png',
        description:'<h3>一教</h3>\
        <p>Fait parti des cinq principes fondamentaux des techniques en Aïkido qui est déclinée selon la posture et l\'attaque.</p>\
        <p><strong>Objectif</strong> : Contrôle du coude</p>\
        <p>Amener le uke au sol en contrôlant le coude.</p>',
        title: 'Ikkyo',
        min: "5"
      }, {
        id: '1',
        img: 'images/movements/Nikyo.png',
        description:'<h3>二教</h3>\
        <p>Fait parti des cinq principes fondamentaux des techniques en Aïkido qui est déclinée selon la posture et l\'attaque.</p>\
        <p><strong>Objectif</strong> : Contrôle du coude et du poignet</p>\
        <p>Amener le uke au sol en contrôlant le coude et à l\'aide d\'une torsion appliquée au poignet.</p>',
        title: 'Nikyo',
        min: "4"
      }, {
        id: '2',
        img: 'images/movements/Sankyo.png',
        description:'<h3>三教</h3>\
        <p>Fait parti des cinq principes fondamentaux des techniques en Aïkido qui est déclinée selon la posture et l\'attaque.</p>\
        <p><strong>Objectif</strong> : Contrôle du coude, du poignet et de l\'épaule</p>\
        <p>Amener le uke au sol à l\'aide d\'une torsion appliquée au poignet et la torsion anti-horaire de sa main.</p>',
        title: 'Sankyo',
        min: "4"
      }, {
        id: '3',
        img: 'images/movements/Yonkyo.png',
        description:'<h3>四教</h3>\
        <p>Fait parti des cinq principes fondamentaux des techniques en Aïkido qui est déclinée selon la posture et l\'attaque.</p>\
        <p><strong>Objectif</strong> : Contrôle de l\'avant bras</p>\
        <p>Amener le uke au sol à l\'aide d\'une torsion à l\'avant bras et d\'une pression (forte) au niveau du nerf radial.</p>',
        title: 'Yonkyo',
        min: "3"
      }, {
        id: '4',
        img: 'images/movements/Gokyo.png',
        description:'<h3>五教</h3>\
        <p>Fait parti des cinq principes fondamentaux des techniques en Aïkido qui est déclinée selon la posture et l\'attaque.</p>\
        <p><strong>Objectif</strong> : Contrôle du poignet avec une attaque au couteau</p>\
        <p>Proche d\'Ikkyo, l\'objectif est d\'amener le uke au sol en contrôlant le coude mais avec un contrôle du poignet différent (avant bras bloqué par la main retournée, paume vers le haut).</p>',
        title: 'Gokyo',
        min: "2"
      }],
      variantes: [{
        id: '0',
        img: 'images/movements/Ude_garami.png',
        description:'<h3>腕絡み</h3>\
        <p>Variante d\'immobilisation.</p>\
        <p><strong>Objectif</strong> : Immbolisation par enroulement (garami 絡み) du bras (ude 腕)</p>\
        <p>Consiste à "trancher" le coude du partenaire par l\'arrière, permettant ainsi une clé d\'épaule et une amenée au sol. L\immobilisation finale est celle de Nikyo.</p>',
        title: 'Ude garami',
        min: "4"
      }, {
        id: '1',
        img: 'images/movements/Hiji_kime_osae.png',
        description:'<h3>肘決め押さえ</h3>\
        <p>Variante d\'immobilisation contre une attaque en piqué (tsuki). Certains la considèrent comme un sixième principe (rokukyo).</p>\
        <p><strong>Objectif</strong> : Immbolisation du coude par torsion inverse</p>\
        <p>Il faut éviter l\'attaque en entrant profondément sur le côté du uke, pour se trouver là où il ne peut offrir aucune résistance.</p>',
        title: 'Hiji kime osae',
        min: "2"
      }]
    },
    projections: {
      bases: [{
        id: '0',
        img: 'images/movements/Irimi_nage.png',
        description:'<h3>入身投げ</h3>\
        <p>Projection en entrant dans le centre de l’adversaire.</p>\
        <p><strong>Objectif</strong> : Projection en entrant</p>\
        <p>Il faut éviter l\'attaque en entrant profondément sur le côté du partenaire, et contrôler ensuite étroitement la tête de Uke pour, le renverser, le projeter vers l\'arrière.</p>',
        title: 'Irimi nage',
        min: "5"
      }, {
        id: '1',
        img: 'images/movements/Shihoo_nage.png',
        description:'<h3>四方投げ</h3>\
        <p>Projection dans quatre directions.</p>\
        <p><strong>Objectif</strong> : Projection dans quatre directions.</p>\
        <p>On va enrouler le bras d’Uke tel la spirale d’une coquille d’escargot autours de l’axe de l’épaule.</p>',
        title: 'Shiho nage',
        min: "5"
      }, {
        id: '2',
        img: 'images/movements/Kote_gaeshi.png',
        description:'<h3>小手返し</h3>\
        <p>Torsion du poignet sur lui-même.</p>\
        <p><strong>Objectif</strong> : Projection avec torsion du poignet.</p>\
        <p>Le poignet sera retourné sur lui-même. Il s’agit d’une clé articulaire sur la main de frappe munie ou non d’une arme ou la main de saisie.</p>',
        title: 'Kote gaeshi',
        min: "4"
      }, {
        id: '3',
        img: 'images/movements/Kaiten_nage.png',
        description:'<h3>回転投げ</h3>\
        <p>Projection en mettant en rotation par l\'intérieur ou l\'extèrieur.</p>\
        <p><strong>Objectif</strong> : Projection en mettant en rotation.</p>\
        <p>Exercer sur le bras d’attaque d’Uke comme une roue autour de son épaule. Il y a quatre déclinaisons principales pour Kaiten nage. Les versions ou variantes sont donc “Uchi Kaiten (intérieur) ou Soto Kaiten (extérieur)“. On peut les pratiquer sous forme Omote (positif) ou Ura (négatif)</p>',
        title: 'Kaiten nage',
        min: "4"
      }, {
        id: '4',
        img: 'images/movements/Tenchi_nage.png',
        description:'',
        title: 'Tenchi nage',
        min: "4"
      }, {
        id: '5',
        img: 'images/movements/Kokyu_hoo.png',
        description:'',
        title: 'Kokyu hoo',
        min: "5"
      }],
      variantes: [{
        id: '0',
        img: 'images/movements/Sokumen_irimi_nage.png',
        description:'',
        title: 'Sokumen irimi',
        min: "4"
      }, {
        id: '1',
        img: 'images/movements/Ude_kime_nage.png',
        description:'',
        title: 'Ude kime nage',
        min: "4"
      }, {
        id: '2',
        img: 'images/movements/Aiki_otoshi.png',
        description:'',
        title: 'Aiki otoshi',
        min: "2"
      }, {
        id: '3',
        img: 'images/movements/Sumi_otoshi.png',
        description:'',
        title: 'Sumi otoshi',
        min: "2"
      }, {
        id: '4',
        img: 'images/movements/Juji_garami.png',
        description:'',
        title: 'Juji garami',
        min: "2"
      }, {
        id: '5',
        img: 'images/movements/Ushiro_kiri_otoshi.png',
        description:'',
        title: 'Ushiro kiri',
        min: "1"
      }, {
        id: '6',
        img: 'images/movements/Kokyu_nage.png',
        description:'',
        title: 'Kokyu nage',
        min: "4"
      }, {
        id: '7',
        img: 'images/movements/Koshi_nage.png',
        description:'',
        title: 'Koshi nage',
        min: "2"
      }]
    },
    saisies: {
      faces: [{
          id: '0',
          img: 'images/movements/Ai_hanmi_katate_dori.png',
          description:'',
          title: 'Aï hanmi katate dori',
          min: "5"
        },
        {
          id: '1',
          img: 'images/movements/Katate_dori.png',
          description:'',
          title: 'Katate dori',
          min: "5"
        },
        {
          id: '2',
          img: 'images/movements/Ryote_dori.png',
          description:'',
          title: 'Ryote dori',
          min: "5"
        },
        {
          id: '3',
          img: 'images/movements/Katate_ryote_dori.png',
          description:'',
          title: 'Katate ryote dori',
          min: "5"
        },
        {
          id: '4',
          img: 'images/movements/Kata_dori.png',
          description:'',
          title: 'Kata dori',
          min: "4"
        },
        {
          id: '5',
          img: 'images/movements/Kata_dori_men_uchi.png',
          description:'',
          title: 'Kata dori men uchi',
          min: "2"
        },
        {
          id: '6',
          img: 'images/movements/Ryokata_dori.png',
          description:'',
          title: 'Ryokata dori',
          min: "2"
        },
        {
          id: '7',
          img: 'images/movements/Muna_dori.png',
          description:'',
          title: 'Muna dori',
          min: "1"
        }
      ],
      arrieres: [{
          id: '0',
          img: 'images/movements/Ushiro_ryote_dori.png',
          description:'',
          title: 'Ushiro ryote dori',
          min: "4"
        },
        {
          id: '1',
          img: 'images/movements/Ushiro_ryo_hiji_dori.png',
          description:'',
          title: 'Ushiro ryo hiji dori',
          min: "2"
        },
        {
          id: '2',
          img: 'images/movements/Ushiro_ryo_kata_dori.png',
          description:'',
          title: 'Ushiro ryo kata dori',
          min: "2"
        },
        {
          id: '3',
          img: 'images/movements/Ushiro_eri_dori.png',
          description:'',
          title: 'Ushiro eri dori',
          min: "2"
        },
        {
          id: '4',
          img: 'images/movements/Ushiro_katate_dori_kubi_shime.png',
          description:'',
          title: 'Ushiro katate dori kubi shime',
          min: "2"
        }
      ]
    },
    frappes: {
      bases: [{
          id: '0',
          img: 'images/movements/Sho_men_uchi.png',
          description:'',
          title: 'Shomen uchi',
          min: "5"
        },
        {
          id: '1',
          img: 'images/movements/Yoko_men_uchi.png',
          description:'',
          title: 'Yoko men uchi',
          min: "4"
        },
        {
          id: '2',
          img: 'images/movements/Chudan_tsuki.png',
          description:'',
          title: 'Chudan tsuki',
          min: "1"
        },
        {
          id: '3',
          img: 'images/movements/Jodan_tsuki.png',
          description:'',
          title: 'Jodan tsuki',
          min: "2"
        },
        {
          id: '4',
          img: 'images/movements/Mae_geri.png',
          description:'',
          title: 'Mae geri',
          min: "1"
        }
      ]
    }
  }

  export default techniques