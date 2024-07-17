

const counter = document.querySelector(".counter-number");
async function updateCounter() {
	let function = await fetch("https://is5tv6yzymjvjsqqssfv4h7iaq0lghpv.lambda-url.us-east-1.on.aws/");
	let data = await response.json();
	counter.innerHTML = ` Views: ${data}`;
}

updateCounter();
