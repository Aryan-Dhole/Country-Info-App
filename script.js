const countryInput = document.getElementById("countryInput")
const searchBtn = document.getElementById("searchBtn")
const resultDiv = document.getElementById("result")


searchBtn.addEventListener("click", fetchCountryData);

countryInput.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
        fetchCountryData();
    }
})

async function fetchCountryData() {

    const countryName = countryInput.value.trim()

    if (countryName === "") {
        resultDiv.innerHTML = `<p class="text-danger">Please enter a counrty name.</p>`
        return;
    }

    resultDiv.innerHTML = `
    <div class="d-flex flex-column align-items-center justify-content-center text-muted">
    <div class="spinner-border text-primary mb-2" role="status"></div>
    <span>Loading country info...</span>
    </div>`;



    try {
        const res = await fetch(`https://restcountries.com/v3.1/name/${countryName}?fullText=true`)
        const data = await res.json()

        displayCountry(data[0])
        function displayCountry(data) {
            const name = data.name.common;
            const capital = data.capital ? data.capital[0] : "N/A";
            const population = data.population.toLocaleString();
            const region = data.region;
            const flag = data.flags.png;
            const currency = Object.values(data.currencies)[0].name;
            const languages = Object.values(data.languages).join(", ");

            resultDiv.innerHTML = `
                <div class="card p-3 shadow-sm">
                <img src="${flag}" alt="Flag of ${name}" class="img-fluid mb-3" style="max-width: 150px;">
                <h3>${name}</h3>
                <p><strong>Capital:</strong> ${capital}</p>
                <p><strong>Population:</strong> ${population}</p>
                <p><strong>Region:</strong> ${region}</p>
                <p><strong>Currency:</strong> ${currency}</p>
                <p><strong>Languages:</strong> ${languages}</p>
                </div>`;
        }

    }
    catch (err) {
        resultDiv.innerHTML = `<p class="text-danger">❌Country Not found or Api failed</p>`
    }
}
