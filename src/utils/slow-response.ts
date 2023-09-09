function delay(n: number) {
  return new Promise((resolve) => setTimeout(resolve, n));
}

export const slowResponse = async (n: number) => {
  await delay(n || 1000);
  return 'Hello World!';
};
