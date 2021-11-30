let a = 200;

for (let i = 0; i < 100; i++) {
  setTimeout(() => { process.stdout.write('\r |   ');
  }, a + (i * 1000));
  setTimeout(() => { process.stdout.write('\r /   ');
  }, a * 2 + (i * 1000));
  setTimeout(() => { process.stdout.write('\r -   ');
  }, a * 3 + (i * 1000));
  setTimeout(() => { process.stdout.write('\r \\   ');
  }, a * 4 + (i * 1000));
  setTimeout(() => { process.stdout.write('\r |   ');
  }, a * 5 + (i * 1000));
}
