export default function SnackList() {
  const snacks = [
    { name: 'Chocolate', rank: 4 },
    { name: 'Gummy Bears', rank: 3 },
    { name: 'Ice Cream', rank: 2 },
    { name: 'Chips', rank: 1 },
  ];

  const sortedSnacks = snacks.toSorted((a, b) => a.rank - b.rank);

  return (
    <section>
      <h2>Ranked Snacks</h2>
      <ol>
        {sortedSnacks.map((snack) => (
          <li key={snack.name}>{snack.name}</li>
        ))}
      </ol>
    </section>
  );
}
