const init = () => {
	if(location.hash === '#/') {
		location.hash = '#/login';
		location.reload();
	}
	if(location.hash === '#/login') {
		location.hash = '#/';
	}
}

if(document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
else init();
