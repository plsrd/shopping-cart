import keycapData from './keycapData'

const featuredItems = () => {
  const items = []
  keycapData.map(item => item.isFeatured ? items.push(item): null)
  return items
}

export default featuredItems