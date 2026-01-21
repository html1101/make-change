/**
 * API service that finds all ways to make change for a given amount of money.
 *
 * Handles finding all ways to make change, least change, and paperless change.
 */
class ChangeMaker {

    #currentCurrency;

    /**
     * @param {String} currency - Currency to use - ISO 4217 code ("USD", "CAD")
     * @throws {Error} If currency is not supported
     */
    constructor(currency) {
        // Implementation details...
    }

    /**
     * Gets all denominations for the current currency 
     *
     * Returns a map of each denomination and its value
     */
    #getDenominations() {
        // Implementation details...
    }

    /**
     * Calculates all ways to make change for given amount. 
     *
     * Returns an array of an array of objects. These objects represent all
     * possible solutions of change for the provided amount.
     * 
     * @param {number} amount - Amount in curreny's main unit i.e. dollars not cents. Required. 
     * @returns { Array<Array<{denomination: string, count: number}>>} all valid combinations,
     * or same amount as solution if not found. 
     * 
     * @throws {TypeError} If amount is invalid
     * @throws {RangeError} If amount < 0
     * @example 
     * new ChangeMaker("USD").makeChange(5.03)
     */
    makeChange(amount) {
        // Implementation details...
    }

    /**
     * Finds a solution that uses the least amount of coins/bills. Greedy algorithm. 
     *
     * Returns an array of objects represent the structure of change for 
     * the provided amount.
     * 
     * @param {number} amount - Amount in curreny's main unit i.e. dollars not cents. Required. 
     * @returns {{denomination: string, count: number}[]} Change amount solution,
     * or same amount as solution if not found. 
     * 
     * @throws {TypeError} If amount is invalid
     * @throws {RangeError} If amount < 0
     * @example 
     * new ChangeMaker("CAD").makeLeastChange(5.03)
     */
    makeLeastChange(amount) {
        // Implementation details...
    }
    /**
     * Finds a coins-only solution (no banknotes or paper money).
     *
     * Returns an array of objects represent the structure of change for 
     * the provided amount.
     * 
     * @param {number} amount - Amount in curreny's main unit i.e. dollars not cents. Required. 
     * @returns { Array<{denomination: string, count: number}>[] | null } Coins-only solution,
     * or null if impossible.
     * 
     * @throws {TypeError} If amount is invalid
     * @throws {RangeError} If amount < 0
     * @example 
     * new ChangeMaker("USD").makeCoinsOnlyChange(5.03)
     */
    makeCoinsOnlyChange(amount) {
        // Implementation details...
    }
}

export { ChangeMaker }