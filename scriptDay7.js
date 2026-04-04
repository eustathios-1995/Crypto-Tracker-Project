const symbolMap = {
    bitcoin: "BTCUSD",
    ethereum: "ETHUSD",
    tether: "USDTUSD",
    ripple: "XRPUSD",
    binancecoin: "BNBUSD",
    "usd-coin": "USDCUSD",
    solana: "SOLUSD",
    tron: "TRXUSD",
    dogecoin: "DOGEUSD",
    "figure-heloc": null
};

async function fetchCoins() {
    let response = await fetch("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1");

    
    let data = await response.json();
    let tbody = document.getElementById("coinList");
    tbody.innerHTML = "";
    

    for(let i=0; i< data.length; i++){
        let status = " ";
        data[i].price_change_percentage_24h >= 0 ? status = "+" : "";
        // console.log("CryptoCurrency: " + data[i].id + ", Current Price: " + data[i].current_price + ", Market Cap: " + data[i].market_cap + ", Volume: " + data[i].total_volume + ", Last 24h Price: " + status + data[i].price_change_percentage_24h + "%");
        let tr = document.createElement("tr");

        
        let td0 = document.createElement("td");
        td0.textContent = data[i].market_cap_rank;
        tr.appendChild(td0);

        let td = document.createElement("td");
        let img = document.createElement("img");
        img.src = data[i].image;
        img.width = 24;
        td.appendChild(img);
        td.appendChild(document.createTextNode(" " + data[i].id));
        tr.appendChild(td);

        let td1 = document.createElement("td");
        td1.textContent = data[i].current_price.toLocaleString('en-US', {style: 'currency', currency: 'USD'});
        tr.appendChild(td1);

        let td2 = document.createElement("td");
        td2.textContent = data[i].total_volume.toLocaleString('en-US');
        tr.appendChild(td2);

        let td3 = document.createElement("td");
        td3.textContent = data[i].price_change_percentage_24h.toFixed(2) + "%";
        status === "+" ? td3.classList = "positive" : td3.classList = "negative";
        tr.appendChild(td3);

        let td4 = document.createElement("td");
        td4.textContent = data[i].market_cap.toLocaleString('en-US');
        tr.appendChild(td4);
        

        tbody.appendChild(tr);

        tr.dataset.coinId = data[i].id;
        tr.onclick = function() {
            showChart(this.dataset.coinId);
        };
    }
}

async function showChart(coinId) {
    let response = await fetch(`https://api.coingecko.com/api/v3/coins/${coinId}/market_chart?vs_currency=usd&days=7`);
    let data = await response.json();
    let labels = data.prices.map(item => new Date(item[0]).toLocaleDateString());
    let prices = data.prices.map(item => item[1]);
    let symbol = symbolMap[coinId];
    if (!symbol) {
        alert("Chart not available for this coin");
        return;
    }
    let chartSection = document.getElementById("chartSection");
    chartSection.style.display = "block";
    document.getElementById("chartTitle").textContent = coinId + " — Last 7 Days";

new TradingView.widget({
    container_id: "tradingview_chart",
    symbol: symbol,
    interval: "60",
    theme: "light",
    style: "1",
    width: "100%",
    height: 400,
    hide_top_toolbar: false,
    save_image: false
});
}

fetchCoins();
setInterval(fetchCoins, 30000);