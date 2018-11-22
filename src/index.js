module.exports = (attribute, type, throwError = true) => {
    if (typeof attribute === type || (typeof type === 'function' && attribute instanceof type)) {
        return true;
    }
    if(throwError) {
        throw new Error(`${attribute} is not of type: ${type.toString()}`);
    }
    return false;
};