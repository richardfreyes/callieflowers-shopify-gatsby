/**
 * Formats a currency according to the user's locale
 * @param {string} currency The ISO currency code
 * @param {number} value The amount to format
 * @returns
 */
 export const formatPrice = (currency, value) =>
 Intl.NumberFormat("fil-PH", {
   style: "currency",
   currency: "PHP",
   minimumFractionDigits: 0,
 }).format(value)

export const getCurrencySymbol = (currency, locale = undefined) => {
  if (!currency) { return }
  const formatter = Intl.NumberFormat(locale, { currency, style: "currency", })
  const parts = formatter.formatToParts(100)
  const { value: symbol } = parts.find((part) => part.type === "currency")
  const formatted = formatter.format(100)
  const symbolAtEnd = formatted.endsWith(symbol)
  console.log('symbolAtEnd', symbolAtEnd)
  return { symbol, symbolAtEnd }
}
