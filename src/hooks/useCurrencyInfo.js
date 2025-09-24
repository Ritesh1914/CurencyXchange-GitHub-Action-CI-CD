import { useEffect, useState } from "react";

function useCurrencyInfo(currency) {
  const [data, setData] = useState({});

  useEffect(() => {
    async function fetchCurrency() {
      try {
        const res = await fetch(
          `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`
        );
        const json = await res.json();
        setData(json[currency]); // API returns {currencyCode: {...}}
      } catch (error) {
        console.error("Failed to fetch currency data:", error);
      }
    }

    if (currency) {
      fetchCurrency();
    }
  }, [currency]);

  return data;
}

export default useCurrencyInfo;
