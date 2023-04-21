//import React from 'react';
// import axios from "axios";
const btn_1 = document.getElementById('btn_1');
const btn_2 = document.getElementById('btn_2');
const result_1 = document.getElementById('result_1');
const result_2 = document.getElementById('result_2');


btn_1.addEventListener('click', Random);
btn_2.addEventListener('click', getRandom);

function Random() {
	fetch('https://aws.random.cat/meow')
		.then(res => res.json())
		.then(data => {
			result_1.innerHTML = `<img src=${data.file} alt="cat" />`
		});
}

function getRandom() {
	fetch('https://random.dog/woof.json')
		.then(res => res.json())
		.then(data => {
			if(data.url.includes('.mp4')) {
				getRandom();
			}
			else {
				result_2.innerHTML = `<img src=${data.url} alt="dog" />`;
			}
		});
}