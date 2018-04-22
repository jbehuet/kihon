const movements = {
  immobilisations: {
    bases: [{
      id: '0',
      img: 'images/movements/Ikkyo.png',
      description: '<h3>一教</h3>\n' +
        '<p>Fait parti des cinq principes fondamentaux des techniques en Aïkido qui est déclinée selon la posture et l\'attaque.</p>\n' +
        '<p><strong>Objectif</strong> : Contrôle du coude</p>\n' +
        '<p>Amener le uke au sol en contrôlant le coude.</p>',
      title: 'Ikkyo',
      min: '5',
    }, {
      id: '1',
      img: 'images/movements/Nikyo.png',
      description: '<h3>二教</h3>\n' +
        '<p>Fait parti des cinq principes fondamentaux des techniques en Aïkido qui est déclinée selon la posture et l\'attaque.</p>\n' +
        '<p><strong>Objectif</strong> : Contrôle du coude et du poignet</p>\n' +
        '<p>Amener le uke au sol en contrôlant le coude et à l\'aide d\'une torsion appliquée au poignet.</p>',
      title: 'Nikyo',
      min: '4',
    }, {
      id: '2',
      img: 'images/movements/Sankyo.png',
      description: '<h3>三教</h3>\n' +
        '<p>Fait parti des cinq principes fondamentaux des techniques en Aïkido qui est déclinée selon la posture et l\'attaque.</p>\n' +
        '<p><strong>Objectif</strong> : Contrôle du coude, du poignet et de l\'épaule</p>\n' +
        '<p>Amener le uke au sol à l\'aide d\'une torsion appliquée au poignet et la torsion anti-horaire de sa main.</p>',
      title: 'Sankyo',
      min: '4',
    }, {
      id: '3',
      img: 'images/movements/Yonkyo.png',
      description: '<h3>四教</h3>\n' +
        '<p>Fait parti des cinq principes fondamentaux des techniques en Aïkido qui est déclinée selon la posture et l\'attaque.</p>\n' +
        '<p><strong>Objectif</strong> : Contrôle de l\'avant bras</p>\n' +
        '<p>Amener le uke au sol à l\'aide d\'une torsion à l\'avant bras et d\'une pression (forte) au niveau du nerf radial.</p>',
      title: 'Yonkyo',
      min: '3',
    }, {
      id: '4',
      img: 'images/movements/Gokyo.png',
      description: '<h3>五教</h3>\n' +
        '<p>Fait parti des cinq principes fondamentaux des techniques en Aïkido qui est déclinée selon la posture et l\'attaque.</p>\n' +
        '<p><strong>Objectif</strong> : Contrôle du poignet avec une attaque au couteau</p>\n' +
        '<p>Proche d\'Ikkyo, l\'objectif est d\'amener le uke au sol en contrôlant le coude mais avec un contrôle du poignet différent (avant bras bloqué par la main retournée, paume vers le haut).</p>',
      title: 'Gokyo',
      min: '2',
    }],
    variantes: [{
      id: '0',
      img: 'images/movements/Ude_garami.png',
      description: '<h3>腕絡み</h3>\n' +
        '<p>Variante d\'immobilisation.</p>\n' +
        '<p><strong>Objectif</strong> : Immbolisation par enroulement (garami 絡み) du bras (ude 腕)</p>\n' +
        '<p>Consiste à "trancher" le coude du partenaire par l\'arrière, permettant ainsi une clé d\'épaule et une amenée au sol. L\'immobilisation finale est celle de Nikyo.</p>',
      title: 'Ude garami',
      min: '4',
    }, {
      id: '1',
      img: 'images/movements/Hiji_kime_osae.png',
      description: '<h3>肘決め押さえ</h3>\n' +
        '<p>Variante d\'immobilisation contre une attaque en piqué (tsuki). Certains la considèrent comme un sixième principe (rokukyo).</p>\n' +
        '<p><strong>Objectif</strong> : Immbolisation du coude par torsion inverse</p>\n' +
        '<p>Il faut éviter l\'attaque en entrant profondément sur le côté du uke, pour se trouver là où il ne peut offrir aucune résistance.</p>',
      title: 'Hiji kime osae',
      min: '2',
    }],
  },
  projections: {
    bases: [{
      id: '0',
      img: 'images/movements/Irimi_nage.png',
      description: '<h3>入身投げ</h3>\n' +
        '<p>Projection en entrant dans le centre de l’adversaire.</p>\n' +
        '<p><strong>Objectif</strong> : Projection en entrant</p>\n' +
        '<p>Il faut éviter l\'attaque en entrant profondément sur le côté du partenaire, et contrôler ensuite étroitement la tête de Uke pour, le renverser, le projeter vers l\'arrière.</p>',
      title: 'Irimi nage',
      min: '5',
    }, {
      id: '1',
      img: 'images/movements/Shihoo_nage.png',
      description: '<h3>四方投げ</h3>\n' +
        '<p>Projection dans quatre directions.</p>\n' +
        '<p><strong>Objectif</strong> : Projection dans quatre directions.</p>\n' +
        '<p>On va enrouler le bras d’Uke tel la spirale d’une coquille d’escargot autours de l’axe de l’épaule.</p>',
      title: 'Shiho nage',
      min: '5',
    }, {
      id: '2',
      img: 'images/movements/Kote_gaeshi.png',
      description: '<h3>小手返し</h3>\n' +
        '<p>Torsion du poignet sur lui-même.</p>\n' +
        '<p><strong>Objectif</strong> : Projection avec torsion du poignet.</p>\n' +
        '<p>Le poignet sera retourné sur lui-même. Il s’agit d’une clé articulaire sur la main de frappe munie ou non d’une arme ou la main de saisie.</p>',
      title: 'Kote gaeshi',
      min: '4',
    }, {
      id: '3',
      img: 'images/movements/Kaiten_nage.png',
      description: '<h3>回転投げ</h3>\n' +
        '<p>Projection en mettant en rotation par l\'intérieur ou l\'extèrieur.</p>\n' +
        '<p><strong>Objectif</strong> : Projection en mettant en rotation.</p>\n' +
        '<p>Exercer sur le bras d’attaque d’Uke comme une roue autour de son épaule. Il y a quatre déclinaisons principales pour Kaiten nage. Les versions ou variantes sont donc “Uchi Kaiten (intérieur) ou Soto Kaiten (extérieur)“. On peut les pratiquer sous forme Omote (positif) ou Ura (négatif)</p>',
      title: 'Kaiten nage',
      min: '4',
    }, {
      id: '4',
      img: 'images/movements/Tenchi_nage.png',
      description: '<h3>天地投げ</h3>\n' +
        '<p>Projection du ciel (天) et de la terre (地)</p>\n' +
        '<p><strong>Objectif</strong> : Projection "Ciel / Terre"</p>\n' +
        '<p>Glissez votre main gauche (qui représente la terre) et votre pied gauche sur le coté de votre partenaire pendant que vous balancez la main droite dans un mouvement circulaire (le ciel) et glissez votre pied vers l\'arrière de son corps.</p>',
      title: 'Tenchi nage',
      min: '5',
    }, {
      id: '5',
      img: 'images/movements/Kokyu_hoo.png',
      description: '<h3></h3>\n' +
        '<p>Kokyu signifie respirer(ko : expirer ; kyu : inspirer). Ho signifie la loi, la règle, mais aussi le procédé, la méthode. Il s’agit donc d’une "méthode de respiration".</p>\n' +
        '<p><strong>Objectif</strong> : Apprendre à travailler avec le seika tanden, et non pas avec la tensiondes bras</p>\n' +
        '<p>Puiser sa puissance de l’appui que l’on prend au sol, de la transformer en énergie auniveau des hanches, et de la transmettre à uke par les bras. C’est la même chose que l’on fait lorsqu’on lance un ballon vers le haut en sautant : toute l’énergie qui arrive jusqu’aux mains et qui projette le ballon vers le haut est issue de l’impulsion des pieds sur le sol qui est ensuite transmise à travers tout le corps par une extension de ce dernier.</p>',
      title: 'Kokyu hoo',
      min: '5',
    }],
    variantes: [{
      id: '0',
      img: 'images/movements/Sokumen_irimi_nage.png',
      description: '<h3>側面入り身投げ</h3>\n' +
        '<p>Projection avec barrage de l’avant-bras.</p>\n' +
        '<p><strong>Objectif</strong> : Au contact rapproché du corps d’uke, hanche contre hanche, effectuer une projection avec barrage de l’avant-bras.</p>\n' +
        '<p></p>',
      title: 'Sokumen irimi',
      min: '4',
    }, {
      id: '1',
      img: 'images/movements/Ude_kime_nage.png',
      description: '<h3>腕決め投げ</h3>\n' +
        '<p>腕 : ude =  bras, manche : 決め. kime = vérouillage. 投げ : Nage = projection</p>\n' +
        '<p><strong>Objectif</strong> : Projection par un contrôle du coude</p>\n' +
        '<p>Il faut mettre le coude en hyper extension pour contrôler le partenaire. Puis entrer pour le projeter.</p>',
      title: 'Ude kime nage',
      min: '4',
    }, {
      id: '2',
      img: 'images/movements/Aiki_otoshi.png',
      description: '<h3>合気落し</h3>\n' +
        '<p>合 : Ai = l\'harmonie; 気 : Ki = l\'énergie, 落し : Otoshi = chute</p>\n' +
        '<p><strong>Objectif</strong> : Chute suite à une perte des appuis</p>\n' +
        '<p>En entrant, il faut déséquilibrer légèrement uke vers l\'arrière puis en soulevant les jambes au niveau des genoux il chute.</p>',
      title: 'Aiki otoshi',
      min: '2',
    }, {
      id: '3',
      img: 'images/movements/Sumi_otoshi.png',
      description: '<h3>隅落し</h3>\n' +
        '<p>隅 : Sumi = sumi , 落し : Otoshi = chute</p>\n' +
        '<p><strong>Objectif</strong> : Projection dans le coin</p>\n' +
        '<p>Il faut projeter légèrement sur le côté, en contrôlant la jambe afin qu\'elle ne recule pas.</p>',
      title: 'Sumi otoshi',
      min: '2',
    }, {
      id: '4',
      img: 'images/movements/Juji_garami.png',
      description: '<h3>十字  絡み</h3>\n' +
        '<p>十字 : Juji = la croix , 絡み : Garami = enroulement</p>\n' +
        '<p><strong>Objectif</strong> : Projection en enroulant les bras en croix</p>\n' +
        '<p>Il faut mette les bras en croix, le croisement à hauteur des coudes.</p>',
      title: 'Juji garami',
      min: '2',
    }, {
      id: '5',
      img: 'images/movements/Ushiro_kiri_otoshi.png',
      description: '<h3>後ろ 切り落し</h3>\n' +
        '<p>後ろ : Ushiro = derrière , 切り : Kiri = couper, 落し : Otoshi = chute </p>\n' +
        '<p><strong>Objectif</strong> : Projection en coupant par l\'arrière</p>\n' +
        '<p>Il faut se placer derrière et agir sur les épaules comme si on faisait une coupe verticale de haut en bas, pour déséquilibrer Uke</p>',
      title: 'Ushiro kiri',
      min: '1',
    }, {
      id: '6',
      img: 'images/movements/Kokyu_nage.png',
      description: '<h3>呼吸  投げ</h3>\n' +
        '<p>呼 : Ko = expirer , 吸 : Kyu = inspirer, 投げ : Nage = projection </p>\n' +
        '<p><strong>Objectif</strong> : Projection avec le souffle</p>\n' +
        '<p>KO KYU = Expirer après avoir inspiré, c\'est la respiration, le souffle. Dans le temps et avec la légèreté d\'une respiration, on absorbe l\'attaque de uke on se rencontre et on laisse repartir</p>',
      title: 'Kokyu nage',
      min: '4',
    }, {
      id: '7',
      img: 'images/movements/Koshi_nage.png',
      description: '<h3>腰投げ</h3>\n' +
        '<p>腰 : Koshi = hanche , 投げ : Nage = projection</p>\n' +
        '<p><strong>Objectif</strong> : Projection avec la hanche</p>\n' +
        '<p>La hanche fait un obstacle, Uke est déséquilibré et roule autour de la hanche de Tori, mais il ne faut pas chercher à porter avec la hanche</p>',
      title: 'Koshi nage',
      min: '2',
    }],
  },
  saisies: {
    faces: [{
      id: '0',
      img: 'images/movements/Ai_hanmi_katate_dori.png',
      description: '',
      title: 'Aï hanmi katate dori',
      min: '5',
    },
    {
      id: '1',
      img: 'images/movements/Katate_dori.png',
      description: '',
      title: 'Katate dori',
      min: '5',
    },
    {
      id: '2',
      img: 'images/movements/Ryote_dori.png',
      description: '',
      title: 'Ryote dori',
      min: '5',
    },
    {
      id: '3',
      img: 'images/movements/Katate_ryote_dori.png',
      description: '',
      title: 'Katate ryote dori',
      min: '5',
    },
    {
      id: '4',
      img: 'images/movements/Kata_dori.png',
      description: '',
      title: 'Kata dori',
      min: '4',
    },
    {
      id: '5',
      img: 'images/movements/Kata_dori_men_uchi.png',
      description: '',
      title: 'Kata dori men uchi',
      min: '2',
    },
    {
      id: '6',
      img: 'images/movements/Ryokata_dori.png',
      description: '',
      title: 'Ryokata dori',
      min: '2',
    },
    {
      id: '7',
      img: 'images/movements/Muna_dori.png',
      description: '',
      title: 'Muna dori',
      min: '1',
    },
    ],
    arrieres: [{
      id: '0',
      img: 'images/movements/Ushiro_ryote_dori.png',
      description: '',
      title: 'Ushiro ryote dori',
      min: '4',
    },
    {
      id: '1',
      img: 'images/movements/Ushiro_ryo_hiji_dori.png',
      description: '',
      title: 'Ushiro ryo hiji dori',
      min: '2',
    },
    {
      id: '2',
      img: 'images/movements/Ushiro_ryo_kata_dori.png',
      description: '',
      title: 'Ushiro ryo kata dori',
      min: '2',
    },
    {
      id: '3',
      img: 'images/movements/Ushiro_eri_dori.png',
      description: '',
      title: 'Ushiro eri dori',
      min: '2',
    },
    {
      id: '4',
      img: 'images/movements/Ushiro_katate_dori_kubi_shime.png',
      description: '',
      title: 'Ushiro katate dori kubi shime',
      min: '2',
    },
    ],
  },
  frappes: {
    bases: [{
      id: '0',
      img: 'images/movements/Sho_men_uchi.png',
      description: '',
      title: 'Shomen uchi',
      min: '5',
    },
    {
      id: '1',
      img: 'images/movements/Yoko_men_uchi.png',
      description: '',
      title: 'Yoko men uchi',
      min: '4',
    },
    {
      id: '2',
      img: 'images/movements/Chudan_tsuki.png',
      description: '',
      title: 'Chudan tsuki',
      min: '1',
    },
    {
      id: '3',
      img: 'images/movements/Jodan_tsuki.png',
      description: '',
      title: 'Jodan tsuki',
      min: '2',
    },
    {
      id: '4',
      img: 'images/movements/Mae_geri.png',
      description: '',
      title: 'Mae geri',
      min: '1',
    },
    ],
  },
};

export default movements;
