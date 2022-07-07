import Color from './Color'

const colors = [{
  hex: '#91A6FF',
  name: 'Cornflower Blue'
},
{
  hex: '#FF88DC',
  name: 'Persian Pink'
},
{
  hex: '#80FF72',
  name: 'Screamin Green'
},
{
  hex: '#FF5154',
  name: 'Tart Orange'
},
{
  hex: '#55B4B0',
  name: 'Blue Turquoise'
},
{
  hex: '#DFCFBE',
  name: 'Sand Dollar'
},
{
  hex: '#E9897E',
  name: 'Burnt Coral'
},
{
  hex: '#A0DAA9',
  name: 'Green Ash'
}]

export default function ColorRenderer () {
  return (
    //   Used the Color component to render each
    //    item in the colors array on the page!
    <>
      {
        colors.map((c, key) => (<Color key={key} hex={c.hex} name={c.name}/>) )
      }

    </>
  )
}
