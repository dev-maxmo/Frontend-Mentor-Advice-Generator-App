const fetchAdvice = async () => {
    const res = await fetch("https://api.adviceslip.com/advice");
    const data = await res.json();

    console.log(data);

    document.querySelector(".advice__number__input").innerHTML = `${data.slip.id}`;
    document.querySelector(".advice__quote__input").innerHTML = `${data.slip.advice}`;
}

fetchAdvice();