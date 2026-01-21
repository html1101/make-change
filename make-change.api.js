/**
 * make-change.api.js
 * An API to make change for a given amount of money.
 */

/**
 * Description of a currency amount.
 * @typedef {Object} Denomination
 * @property {string} name Name of denomination, such as "quarter" or "dime".
 * @property {number} value Value in the smallest unit used. ex. if using quarter,
 * and the smallest unit is cents, value will be 25.
 */

/**
 * A list of major world currencies and their available denominations.
 * @type {!Object<string, !Denomination[]>}
 */
export const COMMON_CURRENCIES = {}

/**
 * Available inventory 
 */
export class Inventory {
    /**
     * For each denomination, the quantity available.
     * If there is 0 of a particular denomination it can be skipped.
     * @param {Map<Denomination, number>} denominationQuantity 
     */
    constructor(denominationQuantity) {}
}

/**
 * 
 * @param {number} amount Amount, in the smallest unit available
 * @param {*} denominations 
 * @param {*} strategy 
 */
export function makeChange(amount, denominations, strategy) {

}