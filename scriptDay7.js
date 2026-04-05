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

const element = document.getElementById('maintable');

const chartbtn = document.getElementById("closeChart");

async function fetchCoins() {
    let response = await fetch("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=true");
    
    let data = await response.json();
        // console.log(data[0].sparkline_in_7d.price);
        

    let tbody = document.getElementById("coinList");
    tbody.innerHTML = "";
    

    for(let i=0; i< data.length; i++){
        let status = " ";
        data[i].price_change_percentage_24h >= 0 ? status = "+" : "";
        // console.log("CryptoCurrency: " + data[i].id + ", Current Price: " + data[i].current_price + ", Market Cap: " + data[i].market_cap + ", Volume: " + data[i].total_volume + ", Last 24h Price: " + status + data[i].price_change_percentage_24h + "%");
        let tr = document.createElement("tr");

        const xprices = data[i].sparkline_in_7d.price;
        let canvas = document.createElement("canvas");
        canvas.width = 100;
        canvas.height = 40;
        let ctx = canvas.getContext("2d");
        const minValue = Math.min(...xprices);
        const maxValue = Math.max(...xprices);
        const range = maxValue - minValue;
        ctx.beginPath();
        ctx.moveTo(0, canvas.height - (xprices[0] - minValue) / range * canvas.height);
        for (let i = 0; i < xprices.length; i++) {
        const y = canvas.height - (xprices[i] - minValue) / range * canvas.height;
        ctx.lineTo(i, y);
        }
        status === "+" ? ctx.strokeStyle = 'green' : ctx.strokeStyle = 'red';
        ctx.stroke();



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

        let td5 = document.createElement("td");
        td5.appendChild(canvas);
        tr.appendChild(td5);
        

        tbody.appendChild(tr);
        
        td5.dataset.coinId = data[i].id;
        td5.onclick = function() {
            showChart(this.dataset.coinId);
        };

    }
// Sort the data array by price_change_percentage_24h
const sorted = [...data].sort((a, b) => (a.price_change_percentage_24h || 0) - (b.price_change_percentage_24h || 0));

// Get the 3 with the lowest and highest change
const threeLowest = sorted.slice(0, 3).map(item => ({
  id: item.id,
  price_change_percentage_24h: item.price_change_percentage_24h,
  current_price: item.current_price,
  img: item.image
}));

const threeHighest = sorted.slice(-3).map(item => ({
  id: item.id,
  price_change_percentage_24h: item.price_change_percentage_24h,
  current_price: item.current_price,
  img: item.image
}));
threeHighest.reverse();

// console.log("Lowest:", threeLowest);
// console.log("Highest:", threeHighest);
    let tbodygainers = document.getElementById("gainersList");
    let tbodylosers = document.getElementById("losersList");
    tbodygainers.innerHTML = "";
    tbodylosers.innerHTML = "";
    
for (const coin of threeHighest) {
  // Create a NEW <tr> for each coin
  let trgainers = document.createElement("tr"); // Moved inside the loop
  let tdgainers = document.createElement("td");
    let img = document.createElement("img");
    img.src = coin.img;
    img.width = 24;
    tdgainers.appendChild(img); 
    tdgainers.appendChild(document.createTextNode(" " + coin.id));
    trgainers.appendChild(tdgainers); 
    // console.log(threeHighest);

  let td3gainers = document.createElement("td");
  td3gainers.textContent = coin.price_change_percentage_24h.toFixed(2) + "%";
  td3gainers.classList = "positive";
  trgainers.appendChild(td3gainers);

  let td1gainers = document.createElement("td");
  td1gainers.textContent = coin.current_price.toLocaleString('en-US', {style: 'currency', currency: 'USD'});
  td1gainers.classList = "positive";
  trgainers.appendChild(td1gainers);

  tbodygainers.appendChild(trgainers); // Appends the new, unique row
}
    for (const coin of threeLowest) {
    // Create a NEW <tr> for each coin
    let trlosers = document.createElement("tr"); // Create inside the loop
    let tdlosers = document.createElement("td");
    let img = document.createElement("img");
    img.src = coin.img;
    img.width = 24;
    tdlosers.appendChild(img); 
    tdlosers.appendChild(document.createTextNode(" " + coin.id));
    trlosers.appendChild(tdlosers);

    let td3losers = document.createElement("td");
    td3losers.textContent = coin.price_change_percentage_24h.toFixed(2) + "%";
    td3losers.classList = "negative";
    trlosers.appendChild(td3losers);

    let td1losers = document.createElement("td");
    td1losers.textContent = coin.current_price.toLocaleString('en-US', {style: 'currency', currency: 'USD'});
    td1losers.classList = "negative";
    trlosers.appendChild(td1losers);

    tbodylosers.appendChild(trlosers); // Append to the losers tbody
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

    

new TradingView.widget({
    container_id: "tradingview_chart",
    symbol: symbol,
    interval: "60",
    theme: "light",
    style: "1",
    width: "100%",
    height: element.clientHeight - 33,
    hide_top_toolbar: false,
    save_image: false
});
    chartbtn.onclick = function() {
    chartSection.style.display = "none";
    };
}

fetchCoins();
setInterval(fetchCoins, 30000);
