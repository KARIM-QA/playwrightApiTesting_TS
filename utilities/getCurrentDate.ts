export const getCurrentDate = () => {
    const now = new Date();
    const offset = now.getTimezoneOffset();
    const localNow = new Date(now.getTime() - offset * 60 * 1000);
    
    const day = String(localNow.getUTCDate()).padStart(2, '0');
    const month = String(localNow.getUTCMonth() + 1).padStart(2, '0'); // Months are 0-indexed
    const year = localNow.getUTCFullYear();
    
    return `${day}${month}${year}`; // Returns date in DDMMYYYY format
};