let a = 200;

for (let i = 0; i < 100; i++) {
  setTimeout(() => {
    process.stdout.write('\r |   ');
  }, a + (i * 1000));
  setTimeout(() => {
    process.stdout.write('\r /   ');
  }, 2 * a + (i * 1000));
  setTimeout(() => {
    process.stdout.write('\r -   ');
  }, 3 * a + (i * 1000));
  setTimeout(() => {
    process.stdout.write('\r \\   ');
  }, 4 * a + (i * 1000));
  setTimeout(() => {
    process.stdout.write('\r |   ');
  }, 5 * a + (i * 1000));
}
