import ckImages from '../images/ck-artisan/index'
import monitorImages from '../images/monitor-artisan/index'
import monitorVariationImages from '../images/monitor-artisan/variations/index'
import mt3Images from '../images/mt3/index'
import camilloImages from '../images/camillo/index'
import ravenImages from '../images/raven-artisan/index'
import ravenVariationImages from '../images/raven-artisan/variations/index' 
import processorImages from '../images/processor/index'
import processorVariationImages from '../images/processor/variations/index'
import yuriImages from '../images/yuri/index'
import astroloImages from '../images/astrolokeys/index'
import nerdImages from '../images/nerd/index' 
import biipImages from '../images/biip/index'

const keycapData = [
  {
    category:'keycaps',
    id: 'kc01',
    type:'artisan',
    name:'Cool Kit Studio Summer Drink Artisan Keycap',
    price: 30,
    description: {
      header: 'If You Like Piña Coladas…',
      body: 'And who doesn’t? Then you’ll love the Summer Drink artisan keycap from Cool Kit Studio. On tap in this run are six different cocktails, each poured over ice with a colorful straw and garnish. Made of durable and detailed resin, these artisans are a stiff pour. Every little glass of paradise is compatible with Cherry MX switches and clones.',
    },
    variations: [
      {
        name: 'Lime',
        id:'kc01-lime',
        image: ckImages.lime
      },
      {
        name: 'Lemon',
        id:'kc01-lemon',
        image: ckImages.lemon
      },
      {
        name: 'Kiwi',
        id:'kc01-kiwi',
        image: ckImages.kiwi
      },
      {
        name: 'Dragonfruit',
        id:'kc01-dragonfruit',
        image: ckImages.dragonfruit
      },
      {
        name: 'Strawberry',
        id:'kc01-strawberry',
        image: ckImages.strawberry
      },
    ],
    images: ckImages,
    isFeatured: true,
    featuredImage: ckImages.hero2
  },
  {
    category:'keycaps',
    id: 'kc02',
    type:'artisan',
    name:'Gen.s Monitor Screen V2 Resin Artisan Keycap',
    price: 35,
    description: {
      header:'For All Your Ups & Downs, Clicks & Clacks',
      body: 'From Gen.s, the designer behind the Processor, Gem, and Human After All artisan keycaps, these artisans are a fun and emotive blast from the past. This V2 version depicts an old-school computer monitor with your choice of a friendly or sad face drawn across the screen. If you can’t decide on a mood for the day, get all four and you can swap them out with ease. Or, if you want to change the text, you can even take them apart. Made from resin, the keycaps are compatible with Cherry MX switches and clones.'
    },
    variations: [
      {
        name: 'Black',
        id:'kc02-black',
        image: monitorVariationImages.black
      },
      {
        name: 'Blue',
        id:'kc02-blue',
        image: monitorVariationImages.blue
      },
      {
        name: 'Clear',
        id:'kc02-clear',
        image: monitorVariationImages.clear
      },
      {
        name: 'White',
        id:'kc02-white',
        image: monitorVariationImages.white
      },
    ],
    images: monitorImages,
    isFeatured: false,
  },
  {
    category:'keycaps',
    id: 'kc03',
    type:'set',
    name:'Drop MT3 Black-on-White Keycap Set',
    price: 110,
    description: {
      header: 'Crisp White Caps in Comfy MT3 Profile',
      body: 'Crisp White Caps in Comfy MT3 Profile. When it comes to keycaps, the difference between a high-quality set and a run-of-the-mill one is, well, black and white. Sculpted in our exclusive MT3 profile—a tall, curved profile with scooped tops—this set brings together two classic colors that play well with just about any keyboard. Made of durable ABS plastic with doubleshot construction, these keycaps\' legends won’t fade over time. The unique slant across each row is ergonomically designed for comfort, and the F and J keys are deeper than the rest to quickly find your place.'
    },
    variations: [],
    images: mt3Images,
    isFeatured: false,
  },
  {
    category:'keycaps',
    id: 'kc04',
    type:'set',
    name:'Drop MT3 Camillo Keycap Set',
    price: 110,
    description: {
      header: 'Reviving an Italian Terminal in MT3',
      body:' In the mech keys community, retro is always in style. The Camillo keycap set is yet another great example. Inspired by vintage terminals from storied Italian manufacturer Olivetti, Camillo features white alphas, light gray modifiers, and blue legends to intensify the contrast. Executed in our exclusive MT3 profile—a tall, curved profile with scooped tops—the set comes with F and J homing keys to quickly find your place at the keys. The unique slant across each row is ergonomically designed for comfort. For durability, the keycaps feature a doubleshot ABS construction with legends that won’t fade.'
    },
    variations: [],
    images: camilloImages,
    isFeatured: true,
    featuredImage: camilloImages.hero1
  },
  {
    category:'keycaps',
    id: 'kc05',
    type:'artisan',
    name:'Hot Keys Project Raven Artisan Keycap',
    price: 35,
    description: {
      header: 'The Raven Takes Flight Again',
      body: 'Hot Keys Project made ripples in the mech keys community with the release of the Raven back in 2014, the first keycap of its kind to feature an adjustable visor. Now, the Raven has left the nest once again, now stronger and more luminescent than ever. Also new? This bold artisan now comes in a bevy of different styles, including two to match MiTo’s iconic Laser colorway. If Laser doesn’t fire you up, there’s the Darkness and Wild Frog styles as well. Each detailed keycap is compatible with cherry MX switches and clones, and like before, they all come with an adjustable visor—in case the light from your keyboard gets a little too bright for comfort.'
    },
    variations: [
      {
        name: 'Darkness',
        id:'kc05-darkness',
        image: ravenVariationImages.darkness
      },
      {
        name: 'Laser Pink',
        id:'kc05-laserPink',
        image: ravenVariationImages.laserPink
      },
      {
        name: 'Laser Purple',
        id:'kc05-laserPurple',
        image: ravenVariationImages.laserPurple
      },
      {
        name: 'Wild Frog',
        id:'kc05-wildFrog',
        image: ravenVariationImages.wildFrog
      },
    ],
    images: ravenImages,
    isFeatured: true,
    featuredImage:ravenImages.hero1
  },
  {
    category:'keycaps',
    id: 'kc06',
    type:'artisan',
    name:'Gen.S Processor Resin Artisan Keycap',
    price: 35,
    description: {
      header: 'Put Your Keyboard Into Overdrive',
      body: 'From the same folks behind the Prism and Monitor Screen artisan keycaps, the Gen.S Processor artisan also takes inspiration from the world of computers. Styled like a microchip full of precious connections, it looks like something you’d find on a motherboard. The resin used to make it is fully translucent, which means backlit keyboards will take this keycap to whole new heights. Get the Processor in your choice of five styles, all compatible with Cherry MX switches.'
    },
    variations: [
      {
        name: 'pink',
        id:'kc06-pink',
        image: processorVariationImages.pink
      },
      {
        name: 'green',
        id:'kc06-green',
        image: processorVariationImages.green
      },
      {
        name: 'orange',
        id:'kc06-orange',
        image: processorVariationImages.orange
      },
      {
        name: 'blue',
        id:'kc06-blue',
        image: processorVariationImages.blue
      },
      {
        name: 'gold',
        id:'kc06-gold',
        image: processorVariationImages.gold
      },
    ],
    images: processorImages,
    isFeatured: true,
    featuredImage: processorImages.hero1
  },
  {
    category:'keycaps',
    id: 'kc07',
    type:'set',
    name:'Drop + T0mb3ry SA Yuri Custom Keycap Set',
    price: 110,
    description: {
      header: 'Yuri’s Second Mission Is a Go',
      body:'The first time we launched Yuri (in GMK’s Cherry profile), it quickly skyrocketed to fame. It’s no surprise why. Inspired by vintage posters depicting the 1961 Soviet Vostok 1 space mission, the one-of-a-kind set takes its name from the first human to ever enter space: Yuri Gagarin. Thanks to so much interest in the first run, we’re relaunching Yuri—this time in tall, sculpted SA profile. Designed by T0mb3ry (who created the Carbon and Eclipse sets), SA Yuri combines dark blue modifiers with pale blue alphas, evoking the sense of wonder surrounding space travel during the 1960s. Also notable are the fiery orange accents to represent Gagarin’s flight suit, creating a look straight out of the Space Race era.'
    },
    variations: [],
    images: yuriImages,
    isFeatured: true,
    featuredImage: yuriImages.hero1
  },
  {
    category:'keycaps',
    id: 'kc09',
    type:'set',
    name:'Matt3o Nerd DSA Keycap Set',
    price: 85,
    description: {
      header: 'Dye-Subbed PBT Caps in 2 Languages',
      body:'Show off your fluency in Russian or Elvish with these Matt3o Nerd DSA keycap sets. Each set is sculpted in the DSA profile and made through a process of dye sublimation. The Russian set is cast in white, red, and blue (the colors of country’s flag), while the Elvish set comes in a dreamy purple, white, and pink. If you need a little help remembering the letters, opt for the dual legends, which feature a secondary set of English legends below the main ones.'
    },
    variations: [],
    images: nerdImages,
    isFeatured: false,
  },
  {
    category:'keycaps',
    id: 'kc10',
    type:'set',
    name:'Drop + biip MT3 Extended 2048 Custom Keycap Set',
    price: 110,
    description: {
      header: 'A Legendary Keyboard Lives On',
      body:'When you bought an Apple Macintosh computer in the early 1990s, you received the Apple Extended Keyboard II (AEKII) along with it. While it may seem ordinary by modern standards, it was this very keyboard that would become a benchmark for future full-size boards—a legend of its time and still today. For our latest project, we teamed up with designer biip (who you may know from keycap sets like Milkshake, Bento, and Bushido) to create a set inspired by the legendary AEKII. Executed in our exclusive MT3 profile, our Extended 2048 keycap set features a minimal icons-based design with cream-colored alphas, black legends, and bright color accent keys. Made of PBT material with dye-sublimated construction, MT3 Extended 2048 is built strong with legends that won’t fade.'
    },
    variations: [],
    images: biipImages,
    isFeatured: false,
  },
  {
    category:'keycaps',
    id: 'kc11',
    type:'set',
    name:'Drop DSA Astrolokeys Keycaps by sailorhg',
    price: 95,
    description: {
      header: 'Your Keyboard’s Future Is Written in the Stars',
      body:'For inspiration on our latest custom keycap set, we turned to the stars—more specifically, to the constellations of the Zodiac, believed by many to hold hidden truths about our personality. Designed by sailorhg and cassidoo, DSA Astrolokeys pairs white alphas with pastel yellow, pink, and purple accent keys. The result is a colorful and vibrant array that any Scorpio, Virgo, or Gemini can get behind (hopefully!). Plus, in the name of simplicity, the base kit comes with a whopping 104 keys and represents all signs in the Zodiac, so you don’t have to mix and match different kits to fit a fullsize keyboard.'
    },
    variations: [],
    images: astroloImages,
    isFeatured: false,
  },
]

export default keycapData