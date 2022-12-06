const generateRandNumbArray = () => {
  const rands = [];
  while (rands.length < 16) {
    const r = Math.floor(Math.random() * 16);
    if (!rands.includes(r + 1)) {
      rands.push(r + 1);
    }
  }
  return rands;
};

export { generateRandNumbArray };
