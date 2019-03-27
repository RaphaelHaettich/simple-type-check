module.exports = (value, type, throwError = true) => {
    if (typeof value === `${type}` || ((typeof type === 'function' || typeof type === 'object') && value instanceof type)) {
        return true;
    }
    if (throwError) {
        throw new Error(`${value} is not of type: ${type.toString()}`);
    }
    return false;
};
