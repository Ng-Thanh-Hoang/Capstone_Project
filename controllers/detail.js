window.renderProduct = function (arr) {
    let htmlString = '';
    for (let i = 0; i < 6 && i < arr.length; i++) {
        let product = arr[i];
        console.log(product);
        htmlString += `
        <div class="item-left">
                <img src=${product.image} alt="product" id="hinh">
            </div>
            <div class="item-right">
                <h1>${product.name}</h1>
                <p class="mt-2 fs-6 mb-0">${product.description}</p>
                <h3 class="mt-5 pt-5 mt-0">Available size</h3>
                <div class="size mt-4">
                    <p>${product.size[1]}</p>
                    <p>${product.size[2]}</p>
                    <p>${product.size[3]}</p>
                    <p>${product.size[4]}</p>
                </div>
                <p class="price mb-0 mt-3">${product.price}$</p>
                <div class="soLuong d-flex">
                    <button class="border-0">+</button>
                    <div class="number">1</div>
                    <button class="border-0">-</button>
                </div>
                <button class="button mt-1" id="add">Add to cart</button>
            </div>
        `;
    }
    document.querySelector('#renderProduct').innerHTML = htmlString;
    return htmlString
}

window.onload = async function () {
    const urlParams = new URLSearchParams(window.location.search);
    const myParam = urlParams.get('productid');
    console.log('params', myParam);

    if (myParam) {
        try {
            let url = `https://shop.cyberlearn.vn/api/Product/getbyid?id=${myParam}`;
            let response = await axios({
                url: url,
                method: 'GET',
                responseType: 'json'
            });
            console.log(response.data);
            renderProduct([response.data.content]);
        } catch (error) {
            console.error('Error fetching product:', error);
        }
    } else {
        console.log('No product ID found in URL.');
    }
}
