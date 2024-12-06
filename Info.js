export default function Info({ name, data }) {
  if (!data || !name) {
    return <p></p>;
  }
  const displayValue = (value) => {
    if (value) {
      return `$${parseFloat(value).toFixed(2)}`;
    } else {
      return "N/A";
    }
  };

  const formattedName =
    name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();

  return (
    <div>
      <h2>{formattedName}</h2>
      <p>Rank: {data.rank ? data.rank : "N/A"}</p>{" "}
      <p>Price (USD): {displayValue(data.priceUsd)}</p>
      <p>Market Cap: {displayValue(data.marketCapUsd)}</p>{" "}
      <p>Supply: {displayValue(data.supply)}</p>
    </div>
  );
}
