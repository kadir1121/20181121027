p = [];
for (i = 2; i < 1000; i++) {
  f = 1;
  for (j = 0; j < p.length; j++) {
    if (p[j] * p[j] > i) break;
    if (i % p[j] == 0) {
      f = 0;
      break;
    }
  }
  if (f) p.push(i);
}
mn = 0;
ma = 0;
mb = 0;
for (j = 1; j < p.length; j++) {
  b = p[j];
  for (a = 2 - b; a < 1000; a += 2) {
    for (n = 0; n < b; n++) {
      y = n * n + a * n + b;
      if (y < 2) break;
      f = 1;
      for (k = 0; k < p.length; k++) {
        if (p[k] * p[k] > y) break;
        if (y % p[k] == 0) {
          f = 0;
          break;
        }
      }
      if (f == 0) break;
      if (n > mn) {
        mn = n;
        ma = a;
        mb = b;
      }
    }
  }
}
ans = ma * mb;
document.write('Result : ', ans);