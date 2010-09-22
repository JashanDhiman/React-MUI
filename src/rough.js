function add() {
  console.log([...arguments].reduce((a, b) => a + b, 0));
}
add(2, 3, 4); // 9
add(2, 3, 4, 1); // 10
add(2); // 2
    