console.log(axios);
//API index

async function getDataIndexApi() {
    try {
        let response = await axios({
            url: 'https://shop.cyberlearn.vn/api/Product',
            method: 'GET',
            responseType: 'json'
        });
        console.log(response.data);
        renderProduct(response.data.content);
    } catch (err) {
        console.log(err);
    }
}

window.renderProduct = function (arr) {
    let htmlString = '';
    //for (let product of arr) {
    for (let i = 0; i < 6 && i < arr.length; i++) {
        let product = arr[i];
        console.log(product);
        htmlString += `
                <div class="col">
                    <div class="card item-1">
                        <img src=${product.image} alt="product1">
                        <div class="card-body">
                            <div class="name-price">
                                <h1 class="name">${product.name}</h1>
                                <h2 class="desc">${product.shortDescription}</h2>
                                <div class="buy-money">
                                    <a href="./detail.html?productid=${product.id}" class="buy-now" onclick="buyNow('${product.id}')">
                                        Buy now
                                    </a>
                                    <div class="money">${product.price}$</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        `;
    }
    document.querySelector('#render').innerHTML = htmlString;
    return htmlString
}

window.onload = function (e) {
    getDataIndexApi();
}

window.buyNow = async function (id) {
    let url = `https://shop.cyberlearn.vn/api/Product/getbyid?id=${id}`;
    let res = await axios({
        url: url,
        method: 'GET',
        responseType: 'json'
    });
    console.log(res.data);
}