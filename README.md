# prufer-js
Transform a Prüfer sequence into an array of edges.

## Usage
```TS
const my_prufer_sequence = [4,3,0]; // length of the sequence should be num_nodes - 2; Elements in the sequence should be between 0 and num_nodes - 1 (both inclusive)
const edges = pruferLinearTime(my_prufer_sequence);
// edges = [[1, 4], [2, 3], [3, 0], [0, 4]]
```

## Credits
Originally, I was using [jleppert's js implementation](https://github.com/jleppert/prufer) of this algorithm but ran into some performance issues as the number of nodes in a tree grew (200,000 + nodes).

I found a [linear time implementation of the algorithm on cp-algorithms.com](https://cp-algorithms.com/graph/pruefer_code.html#prufer-code_1) in c++ so decided to implement that in TS and JS.

## Performance
I have not performed any serious benchmarks but in my initial testing 
- The non-linear-time implementation was taking 100+ seconds on 500,000 elements
- The linear-time implementation takes <1 second on 500,000 elements
