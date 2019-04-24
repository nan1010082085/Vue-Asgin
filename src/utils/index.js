/**
 * 判断localstorage是否可用
 * @return true 可用, false 不可用
 * @returns {boolean}
 */
function isLocalStorageSupported () {
	let testKey = 'test',
		storage = window.sessionStorage
	try {
		storage.setItem(testKey, 'testValue')
		storage.removeItem(testKey)
		return true
	} catch (error) {
		return false
	}
}

/**
 * 验证码发送倒计时
 * @callback 回调函数 返回code
 */
function sendCode (codeNumber, callback) {
	if (/\D+/.test(codeNumber)) {
		throw 'code is not number'
		return
	}
	var code = {
		numbers: Number(codeNumber),
		timer: ''
	}
	var success = function () {
		code.timer = setInterval(() => {
			code.numbers--
			if (code.numbers == 0) {
				clearInterval(code.timer)
			}
			if(typeof callback === 'function'){
				callback(code)
			}
		}, 1000)
	}
	success()
}

/**
 * 视口改变时
 * @callback 回调函数 返回 Event
 */
function resize (callback) {
	addEventListener('resize',(r)=>{
		if(typeof callback === 'function'){
			callback(r)
		}
	}, false)
}

function isHanzi (str) {
	let reg = /^[\u4e00-\u9fa5]+$/
  return !reg.test(str)
}

export {
	isLocalStorageSupported,
	sendCode,
	resize,
	isHanzi
}