export function formatMoney(val = 0, currency?: string, decimals = 2) {
  return val.toLocaleString("en-US", {
    currency,
    style: currency && "currency",
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  });
}
