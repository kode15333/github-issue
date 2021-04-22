export const compareObject = (prev, cur) => JSON.stringify(prev) === JSON.stringify(cur);

export const makeRandomColor = () => {
  const letters = '0123456789ABCDEF'
  let color = '#'
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)]
  }
  return color
}

export const delay = ms => new Promise(resolve => setTimeout(resolve, ms));
