class Vehicles { 
    model : string; 
    kilometers : Number; 
    fuel : string; 
    year :string;
    img : string;
    constructor(model: string, kilometers: Number, fuel : string, year :string, img : string) { 
        this.model = model;
        this.kilometers = kilometers;
        this.fuel  = fuel ;
        this.year = year;
        this.img = img;
    }
    printcar() { 
    return `<div class="card" style="width: 18rem;">
    <img src="${this.img}" class="card-img-top" alt="...">
    <div class="card-body">
        <h5 class="card-title">Model :${this.model} </h5>
        <p class="card-text">Year : ${this.year} </p>
        <p class="card-text">fuel type : ${this.fuel} </p>
        <p class="card-text">kilometers : ${this.kilometers }</p>
        <button class="btn btn-info">See Price</button>
    </div>`; 
    }
}
let car = new Vehicles("BMW", 6000,"diesel", "2021,01,01", "https://cdn.pixabay.com/photo/2019/10/19/03/50/bmw-4560531__340.jpg");
let car1 = new Vehicles("Ferrari", 10000,"benzin", "2020,01,01", "https://cdn.pixabay.com/photo/2020/02/20/18/43/car-4865483_960_720.jpg");
(document.getElementById("card") as HTMLElement).innerHTML = car.printcar();
(document.getElementById("card") as HTMLElement).innerHTML += car1.printcar();

