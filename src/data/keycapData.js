import mainImages from '../images/ck-artisan/index'
import variationImages from '../images/ck-artisan/variations/index'

const keycapData = [
  {
    category:'keycaps',
    id: 'kc01',
    type:'artisan',
    name:'Cool Kit Studio Summer Drink Artisan Keycap',
    price: 30,
    description: 'If You Like Piña Coladas…And who doesn’t? Then you’ll love the Summer Drink artisan keycap from Cool Kit Studio. On tap in this run are six different cocktails, each poured over ice with a colorful straw and garnish. Made of durable and detailed resin, these artisans are a stiff pour. Every little glass of paradise is compatible with Cherry MX switches and clones.',
    variations: [
      {
        name: 'Lime',
        id:'kc01-lime',
        image: variationImages.lime
      },
      {
        name: 'Lemon',
        id:'kc01-lemon',
        image: variationImages.lemon
      },
      {
        name: 'Kiwi',
        id:'kc01-kiwi',
        image: variationImages.kiwi
      },
      {
        name: 'Dragonfruit',
        id:'kc01-dragonfruit',
        image: variationImages.dragonfruit
      },
      {
        name: 'Strawberry',
        id:'kc01-strawberry',
        image: variationImages.strawberry
      },
    ],
    images: mainImages,
    isFeatured: true,
    featuredImage: mainImages.hero2
  }
]

export default keycapData