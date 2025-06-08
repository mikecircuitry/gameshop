function formatCurrency(amount: number, currencyCode: string, locale: string = 'default'): string {
    const formatter = new Intl.NumberFormat(locale, {
        style: 'currency',
        currency: currencyCode,
    });
    return formatter.format(amount);
}

export const formatCurrencyUSD = (amount: number): string => {
    return formatCurrency(amount, 'USD', 'en-US');
}

// Example usage:
// const price = 1234.56;
// const formattedUSD = formatCurrency(price, 'USD', 'en-US'); // Output: $1,234.56
// const formattedEUR = formatCurrency(price, 'EUR', 'de-DE'); // Output: 1.234,56 €
// const formattedGBP = formatCurrency(price, 'GBP', 'en-GB'); // Output: £1,234.56
// const formattedJPY = formatCurrency(price, 'JPY', 'ja-JP'); // Output: ¥1,235