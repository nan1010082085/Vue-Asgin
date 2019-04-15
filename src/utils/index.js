/**
 * 判断localstorage是否可用
 * @return true 可用, false 不可用
 * @returns {boolean}
 */
function isLocalStorageSupported() {
	let testKey = 'test',
		storage = window.sessionStorage;
	try {
		storage.setItem(testKey, 'testValue');
		storage.removeItem(testKey);
		return true;
	} catch (error) {
		return false;
	}
}




export {
	isLocalStorageSupported
}