function t(x) {
    function f(y) {
      if (x % y == 0) {
        do {
          x = x / y;
        } while (x % y == 0);
        s++;    }
    }
    var s = 0;
    f(2);
    f(3);
    var n = 5;
    for (;;) {
      if (n * n > x) break;
      f(n);
      n += 2;
      if (n * n > x) break;
      f(n);
      n += 4;
    }
    if (x != 1) {
      s++;  }
    return s;}
  ans = 2 * 3 * 5 * 7;
  for (;;) {
    if (t(ans + 3) != 4) {
      ans += 4;
      continue;  }
    if (t(ans + 2) != 4) {
      ans += 3;
      continue;  }
    if (t(ans + 1) != 4) {
      ans += 2;
      continue;  }
    if (t(ans) != 4) {
      ans += 1;
      continue;  }
    break;}
  document.write('Result : ', ans);