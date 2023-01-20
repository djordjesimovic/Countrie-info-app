let container = document.querySelector('.container');

function populate(arr, neig){
    container.innerHTML += `
    <div class="container-card">
        <span class="neighbor">${neig || ''}</span>
        <div class="image">
            <img src="${arr.flag}" alt="">
        </div>
        <div>
            <p>Name: <span class="name">${arr.name || "No name"}</span></p>
        </div>
        <div>
            <p>Capital: <span class="capital">${arr.capital || "No capital"}</span></p>
        </div>
        <div>
            <p>Population: <span class="population">${arr.population || "No population"}</span></p>
        </div>
        <div>
            <p>Language: <span class="language">${arr.languages[0].name || "No language"}</span></p>
        </div>
        <div>
            <p>Borders: <span class="borders">${arr.borders || "No borders"}</span></p>
        </div>
    </div>
    `
    // let card1 = document.querySelector('.container-card')
    // let image = document.querySelector('image');
    // let img = document.createElement('img').src = arr.flag || 'No flag';
    // image.appendChild(img);
    // let name = document.querySelector('.name').textContent = arr.name|| 'No name';
    // card1.appendChild(name)
    // let capital1 = document.querySelector('.capital').textContent = arr.capital || 'No capital';
    // card1.appendChild(capital1);
    // let population1 = document.querySelector('.population').textContent = arr.population || 'No population';
    // card1.appendChild(population1)
    // let language1 = document.querySelector('.language').textContent = arr.languages[0].name || 'No language';
    // card1.appendChild(language1);

    // document.querySelector('.image2 img').src = arr.flag || 'No flag';
    // document.querySelector('.name2').textContent = arr.name|| 'No name';
    // document.querySelector('.capital2').textContent = arr.capital || 'No capital';
    // document.querySelector('.population2').textContent = arr.population || 'No population';
    // document.querySelector('.language2').textContent = arr.languages[0].name || 'No language';



    // document.querySelector('.neighbor').textContent = arr.name || 'No name';
    // document.querySelector('.neighbor2').textContent = arr.name || 'No name';
    
    // if(arr.borders){
    //     for (const pom of arr.borders) {
    //         document.querySelector('.borders').textContent += pom + ', ';
    //         document.querySelector('.borders2').textContent += pom + ', ';
    //     }
    // }
    // else{
    //     document.querySelector('.borders').textContent = 'No borders'
    //     document.querySelector('.borders2').textContent = 'No borders'
    // }
}


let getCountrieData = (countriename) =>{
    let n = '';
    let n2 = '';
    fetch(`https://restcountries.com/v2/name/${countriename}`)
    .then(response => {
        return response.json();
    })
    .then(data => {
        let info = data[0];
        console.log(info);
        populate(info);
        n = info.name;
        return fetch(`https://restcountries.com/v2/alpha/${info.borders[0]}`);
    })
    .then(res => {return res.json()})
    .then(data2 => {
        console.log(data2);
        populate(data2, `Neighbor of ${n}`);
        n2 = data2.name;
        return fetch(`https://restcountries.com/v2/alpha/${data2.borders[0]}`);
    })
    .then(res2 => {return res2.json()})
    .then(data3 => {
        console.log(data3)
        populate(data3, `Neighbor of ${n2}`)
    })
    .catch(error => console.log(error))
}



let inputValue = document.querySelector('#inputCountrie');
let getInfoBtn = document.querySelector('.getInfo');

getInfoBtn.addEventListener('click', () => {
    if(inputValue.value !== ''){
        // document.querySelector('.borders').textContent = '';
        // document.querySelector('.borders2').textContent = '';
        container.innerHTML = '';
        getCountrieData(inputValue.value.toLowerCase());
        inputValue.value = '';
    }
    else{
        alert('Insert Countrie')
    }
})


// let obj = {
//     a : {
//         b : {
//             c : 'one'
//         }
//     }
    
// };

// if(obj.a && obj.a.b && obj.a.b.c){
//     console.log(obj.a.b.c);
// }
// else{
//     console.log('Nema');
// }







// fetch(`https://restcountries.com/v2/name/chile`)
//     .then(response => {
//         return response.json();
//     })
//     .then(data => {
//         let info = data[0];
//         console.log(info);
//         populate(info)

//     })
//     .catch(error => console.error)