const shopCart: any[] = []

function setShopcart () {
    localStorage.setItem('shopCart', JSON.stringify(shopCart))

    if(localStorage.getItem('localStorageData') === null)   {
        localStorage.setItem("localStorageData", JSON.stringify(shopCart))
    }
}



export default setShopcart