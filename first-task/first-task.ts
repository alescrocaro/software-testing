interface Developer {
  name: string;
  estimate: number;
}

module.exports = (devs: Developer[]) => {
  let lowestEstimateDev: Developer | null = null;
  let highestEstimateDev: Developer | null = null;

  for (let dev of devs) {
    if (
      highestEstimateDev == null ||
      dev.estimate > highestEstimateDev.estimate
    ) {
      highestEstimateDev = dev;
    } else if (
      lowestEstimateDev == null ||
      dev.estimate < lowestEstimateDev.estimate
    ) {
      lowestEstimateDev = dev;
    }
  }

  return [lowestEstimateDev?.name, highestEstimateDev?.name];
};
