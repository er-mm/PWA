var deferredPrompt;
if ('serviceWorker' in navigator) {
	navigator.serviceWorker
	.register('/sw.js')
	.then(() => console.log('Service Worker Registered'))
	.catch((err) => console.log('error occured in app.js while regestering service worker', err));
}
// register is aync so use then when its done. 
// register also has a 2nd optional property i.e. scope which takes string
// you can define scope their eg:  .register('/sw.js', {scope: '/help/'})
// SW only works on https : but localhost is http go to sw.js

window.addEventListener('beforeinstallprompt', (event) => {
	console.log('beforeinstallprompt fired----->');
	deferredPrompt = event;
	event.preventDefault();
})