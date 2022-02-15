const spinners = ['|   ', '/   ', '-   ', '\\   ', '|  ', '/   ', '-   ', '\\   ', '|  '];
let num = 0;
for (let spinner of spinners) {
  setTimeout (() => {
    process.stdout.write(`\r${spinner}`);
  }, num);
  num += 200
};