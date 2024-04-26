
export const GAME_LIST =  [
    {
      id: 1,
      selected: true,
      name: "Used",
      active: true,
      imgactive: "ho_us1@3x.png",
      imgdeactive: "ho_us2@3x.png",
    },
    {
      id: 2,
      selected: false,
      name: "Live",
      active: true,
      imgactive: "ho_li1@3x.png",
      imgdeactive: "ho_li2@3x.png",
    },
    {
      id: 3,
      selected: false,
      name: "Sport",
      active: false,
      imgactive: "ho_sp1@3x.png",
      imgdeactive: "ho_sp2@3x.png",
    },
    {
      id: 4,
      selected: false,
      name: "Lottery",
      active: false,
      imgactive: "ho_lo1@3x.png",
      imgdeactive: "ho_lo2@3x.png",
    },
    {
      id: 5,
      selected: false,
      name: "Poker",
      active: false,
      imgactive: "ho_po1@3x.png",
      imgdeactive: "ho_po2@3x.png",
    }
  ];
  export const  GAME_BANNER = [
    {
      id: 1,
      name: "Used",
      img: "aecasino1.png",
      maintenance: true,
    },
    {
      id: 2,
      name: "Used",
      img: "sagaming1.png",
      maintenance: false,
    },
    {
      id: 3,
      name: "Used",
      img: "pragmatic1.png",
      maintenance: false,
    },
    {
      id: 4,
      name: "Used",
      img: "aecasino1.png",
      maintenance: false,
    },
    {
      id: 5,
      name: "Poker",
      img: "pragmatic1.png",
      maintenance: false,
    },
    {
      id: 6,
      name: "Live",
      img: "aecasino1.png",
      maintenance: false,
    },
    {
      id: 7,
      name: "Sport",
      img: "sagaming1.png",
      maintenance: false,
    },
    {
      id: 8,
      name: "Lottery",
      img: "aecasino1.png",
      maintenance: false,
    },
    {
      id: 9,
      name: "Lottery",
      img: "pragmatic1.png",
      maintenance: false,
    },
    {
      id: 10,
      name: "Live",
      img: "aecasino1.png",
      maintenance: true,
    },
  ];

 
  export const ESPORT_BET_SCHEDULE =[
     {
      id: 1,
      esport_game: "dota2",
      category: "popular",
      event: "ESL One Birmigham",
      time: "2024-04-04T19:34:00.000Z",
     },
     {
     id: 2,
     esport_game: "dota2",
     category: "popular",
     event: "ESL One Birmigham",
     time: "2024-04-06T19:34:00.000Z",
    },
     {
      id: 3,
      esport_game: "csgo",
      event: "RES Regional Series",
      time: "2024-04-06T19:34:00.000Z",
    }
  ];

  export const ESPORT_BET_LIST = [
    {
      id: 1,
      esport_game: "dota2",
      category: "popular",
      event: "ESL One Birmigham",
      time: "2024-04-04T19:34:00.000Z",
      W1: "Shopify Rebillion",
      W1_odds: 1.63, 
      W2: "Talon Esports",
      W2_odds:  2.22,
      draw_odds: 0,
    },
    {
      id:2,
      esport_game: "dota2",
      category: "popular",
      event: "ESL One Birmigham",
      time: "2024-04-04T19:34:00.000Z",
      W1: "Team Liquid",
      W1_odds: 1.63, 
      W2: "G2.IG",
      W2_odds:  2.22,
      draw_odds: 0,
    },
    {
      id:3,
      esport_game: "dota2",
      category: "popular",
      event: "ESL One Birmigham",
      time: "2024-04-04T19:34:00.000Z",
      W1: "Team Falcon",
      W1_odds: 1.63, 
      W2: "BB Team",
      W2_odds:  2.22,
      draw_odds: 0,
    },
    {
      id:4,
      esport_game: "dota2",
      category: "noevent",
      event: "RES Regional Series",
      time: "2024-04-07T19:34:00.000Z",
      W1: "Leviatan",
      W1_odds: 8.10, 
      W2: "Estar Backs",
      W2_odds:  2.28,
      draw_odds: 1.80,
    },
    {  
      id:5,
      esport_game: "dota2",
      category: "noevent",
      event: "EPL World Series America",
      time: "2024-04-06T19:34:00.000Z",
      W1: "Estar Backs",
      W1_odds: 8.10, 
      W2: "Talon Esports",
      W2_odds:  2.28,
      draw_odds: 1.80,
    },
    {
      id:6,
      esport_game: "csgo",
      category: "noevent",
      event: "RES Regional Series",
      time: "2024-04-06T19:34:00.000Z",
      W1: "Ukids",
      W1_odds: 1.80, 
      W2: "G2",
      W2_odds:  1.80,
      draw_odds: 0,
    },
  ];

  export const ESPORT_BET_MATCH = [
    {
      id: 1,
      MW1_W1: 1.64, 
      MW1_draw: 0,
      MW1_W2:  2.27,
      MP1_W1: 1.90, 
      MP1_draw: 0,
      MP1_W2:  1.90,
      MP2_W1: 1.63, 
      MP2_draw: 0,
      MP2_W2:  2.22,
      MP3_W1: 1.92, 
      MP3_draw: 0,
      MP3_W2:  1.92,
    },
  ]

  

  export const DEFAULT_ACTIVE_GAME = {
    ACTIVE: 'Used'
  };