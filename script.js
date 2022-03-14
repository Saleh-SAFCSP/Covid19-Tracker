const button = document.getElementById('submit-button');
const symbolName = document.getElementById('symbol');
const recover = document.getElementById('recover');
const confirm = document.getElementById('confirm');
const death = document.getElementById('death');
const update = document.getElementById('update');

const handleClick = async () => {
  try {
    const symbol = symbolName.value;

    const result = await fetch(
      'https://covid19.mathdro.id/api/countries/' + symbol
    );

    const data = await result.json();

    confirm.innerText = `The total number of confirmed cases is : ${data.confirmed.value}`;

    recover.innerText = `The total number of recovered cases is : ${data.recovered.value}`;

    death.innerText = `The total number of death cases is : ${data.deaths.value}`;

    update.innerText = `The last update was in : ${data.lastUpdate}`;

    console.log(data);
  } catch (error) {
    console.log(error);
  }
};

button.addEventListener('click', handleClick);
