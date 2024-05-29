interface NumberProps {
  a: number;
  b: number;
}

function sum({ a, b }: NumberProps) {
  console.log(a + b);
}

sum({ a: 1, b: 1 });
