const container = document.querySelector(".container");

const fetchHouses = async () => {
 const data = await fetch("http://localhost:3001/niHome/gethouses", {
    method: "GET"
 });
 
 const data_object = await data.json()
 const houses =  data_object.body.data;

 houses.map(house => {
    const houseItem =  document.createElement('div');
    const image = document.createElement('img');
    const text = document.createElement('p')
    image.src = house.imageUrl;
    text.innerHTML = house.name;

    houseItem.appendChild(image)
    houseItem.appendChild(text)
    container.appendChild(houseItem)
 })
 }

fetchHouses()
