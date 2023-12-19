//this file is to avoid the reperation of decimal problem in the js files 

export function formatCurrency(priceCents) {
    return (priceCents / 100).toFixed(2);
}