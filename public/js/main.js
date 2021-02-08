const cityname = document.getElementById("cityname");
const city_name = document.getElementById("city_name");
const submitbtn = document.getElementById("submitbtn");
const temp = document.getElementById("temp");
const temp_status = document.getElementById("temp_status");
const getInfo = async(event) => {
    event.preventDefault();
    //let url = `api.openweathermap.org/data/2.5/weather?q=Anand&appid=8946550d7e4a10191bcac6f81786e011`;
    let cityVal = cityname.value;

    if (cityVal === "") {
        city_name.innerText = `plz enter proper city name`;

    } else {
        try {


            let url = `http://api.openweathermap.org/data/2.5/weather?q=${cityVal}&appid=8946550d7e4a10191bcac6f81786e011`;
            const response = await fetch(url);
            const data = await response.json();
            // console.log(data);
            const arrData = [data];
            city_name.innerText = `${arrData[0].name},${arrData[0].sys.country}`;
            temp.innerText = arrData[0].main.temp;

            const tempMood = arrData[0].weather[0].main;

            if (tempMood == "Clear") {
                temp_status.innerHTML = "<i class='fas fa-sun' style='color:#eccc68;'></i>";
            } else if (tempMood == "Clouds") {
                temp_status.innerHTML = "<i class='fas fa-cloud'style='color:#f1f2f6;'></i>";
            } else if (tempMood == "Rain") {
                temp_status.innerHTML = "<i class='fas fa-cloud-rain' style='color:#a4b0be;'></i>";
            } else if (tempMood == "snow") {
                temp_status.innerHTML = "<i class='fas fa-cloud-snow' style='color:#a4b0be;'></i>";
            } else {
                temp_status.innerHTML = "<i class='fas fa-sun' style='color:#eccc68;'></i>";
            }
            temp_status.innerText = arrData[0].weather[0].main;
        } catch {
            city_name.innerText = `plz enter proper city name `;


        }
    }
}
submitbtn.addEventListener("click", getInfo)