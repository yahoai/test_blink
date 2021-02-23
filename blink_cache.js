function createLink(e) {
	let t;
	return (t =
		e.indexOf('?') > -1
			? `${e}&ver=${new Date().getTime()}`
			: `${e}?ver=${new Date().getTime()}`);
}
window.addEventListener('load', () => {
	let e = document.querySelectorAll("head>link[rel='stylesheet']"),
		t = document.querySelectorAll('head>script[src]'),
		r = document.querySelectorAll("body>link[rel='stylesheet']"),
		l = document.querySelectorAll('body>script[src]'),
		c = document.querySelector('head'),
		n = document.querySelector('body');
	e.forEach((e) => {
		let t = createLink(e.href),
			r = document.createElement('link');
		(r.rel = 'stylesheet'), (r.href = t), c.appendChild(r), setTimeout(() => e.remove(), 10);
	}),
		t.forEach((e) => {
			let t = createLink(e.src),
				r = document.createElement('script');
			(r.src = t), c.appendChild(r), setTimeout(() => e.remove(), 10);
		}),
		r.forEach((e) => {
			let t = createLink(e.href),
				r = document.createElement('link');
			(r.rel = 'stylesheet'),
				(r.href = t),
				n.appendChild(r),
				setTimeout(() => e.remove(), 10);
		}),
		l.forEach((e) => {
			let t = createLink(e.src),
				r = document.createElement('script');
			(r.src = t), n.appendChild(r), setTimeout(() => e.remove(), 10);
		});
});
