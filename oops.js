class Product{
    constructor(n, p, d, i){
        this.name = n;
        this.desc = d;
        this.price = p;
        this.image = i;
    }

    displayProduct(){

    }
}

const p1 = new Product("Iphone", 100000, "Apple Iphone", "some image");
console.log(p1);