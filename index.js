function calcular() {
	let txtv = document.querySelector("#txtvel");
	let res = document.querySelector(".result");
	let vel = Number(txtv.value);
	let multar = document.querySelector(".multa");
	let multa = (vel - 60) * 100;
	let multa2 = (30 % vel) * 50;
	res.innerText = `Sua velocidade atual é ${vel}`;
	if (vel > 60) {
		multar.innerText = `Você está acima da velocidade máxima permitida. O valor da multa é de R$${multa}`;
	} else if (vel < 30) {
		multar.innerText = `Você está abaixo da velocidade mínima.O valor da multa é de ${multa2}`;
	} else {
		multar.innerText = `Dirija com segurança.`;
	}
}
