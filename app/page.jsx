async function getData() {
  const res = await fetch(
    `https://dummyjson.com/products/${Math.floor(Math.random() * 100)}`,
    { next: { revalidate: 10 } }
  );
  return res.json();
}

export default async function Page() {
  // const name = await getData();

  return <h1>Hello, Next</h1>;
}
