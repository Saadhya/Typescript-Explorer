const config={
    baseApiUrl: 'http://localhost:4000',
}
const currencyFormatter = new Intl.NumberFormat("en-US", {
    style: "currency", currency:   "USD",
    maximumFractionDigits:2
});

export default config;
export {currencyFormatter};