const argumentValue = process.argv[2];
const treeLifeStatus = Number(argumentValue);
const ninjaTurtle = treeLifeStatus;

if (ninjaTurtle === 0) {
  console.log('alive');
} else if (ninjaTurtle === 1) {
  console.log('flowering');
} else if (ninjaTurtle === 2) {
  console.log('shedding');
} else if (ninjaTurtle === 3) {
  console.log('other');
} else {
  console.log('other');
}