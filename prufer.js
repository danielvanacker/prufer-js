export function pruferLinearTime(random_arr) {
  const n = random_arr.length + 2;
  const degree = [];
  for (let j = 0; j < n; j++) {
    degree.push(1);
  }
  for (let i = 0; i < random_arr.length; i++) {
    degree[random_arr[i]]++;
  }

  let ptr = 0;
  while (degree[ptr] != 1) {
    ptr++;
  }
  let leaf = ptr;

  const edges = [];
  for (let i = 0; i < random_arr.length; i++) {
    const v = random_arr[i];
    edges.push([leaf, v]);
    if (--degree[v] === 1 && v < ptr) {
      leaf = v;
    } else {
      ptr++;
      while (degree[ptr] != 1) {
        ptr++;
      }
      leaf = ptr;
    }
  }
  edges.push([leaf, n - 1]);
  return edges;
}
