const scrollTo = function (elemID: string, offset = 0) {
	if (!document) {
		console.warn("'document' not available during SSR.")
		return
	}
	if (!window) {
		console.warn("'window' not available during SSR.")
		return
	}
	let elem = document.getElementById(elemID)
	if (!elem) {
		console.error("No element with ID: " + elemID)
		return
	}

	let elemY = elem.offsetTop
	window.scrollTo({ behavior: "smooth", top: elemY - offset })
}

export default scrollTo
