const box = document.getElementById('game-box');
const result = document.getElementById('result');

let startTime;    // 반응 시작 시각
let timeoutId;    // 타이머 ID
let state = 'ready'; // ready -> wating -> active

box.addEventListener( 'click', () => {
	if (state === 'ready') {
		box.textContent = '초록색으로 바뀌면 클릭!';
		box.className = 'waiting';
		state = 'waiting';

		// 1~3초 랜덤 대기 후 초록색으로 변경
		const delay = Math.random() * 2000 + 1000;
		timeoutId = setTimeout(() => {
			box.textContent = '지금 클릭!';
			box.className = 'active';
			startTime = Date.now();
			state = 'active';
		}, delay);
		
	} else if (state === 'waiting') {
		// 너무 빨릭 클릭했을 때
		clearTimeout(timeoutId);
		box.textContent = '너무 빨랐습니다! 다시 클릭해서 시작하세요.';
		box.className = 'ready';
		result.textContent = '';
		state = 'resdy';
	
	} else if (state === 'active') {
		const reactionTime = Date.now() - startTime;
		box.textContent = '클릭하여 다시 시작';
		box.className = 'ready';
		result.textContent = '반응 속도: ${reactionTime}ms';
		state = 'ready';
	} 
	
});