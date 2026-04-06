const symbolMap = {
    bitcoin: "BTCUSD",
    ethereum: "ETHUSD",
    tether: "USDTUSD",
    ripple: "XRPUSD",
    binancecoin: "BNBUSD",
    "usd-coin": "USDCUSD",
    solana: "SOLUSD",
    cardano: "ADAUSD",
    dogecoin: "DOGEUSD",
    polkadot: "DOTUSD",
    "shiba-inu": "SHIBUSD",
    "dai": "DAIUSD",
    "matic-network": "MATICUSD",
    "uniswap": "UNIUSD",
    "avalanche-2": "AVAXUSD",
    "leo-token": "LEOUSDT",
    "litecoin": "LTCUSD",
    "chainlink": "LINKUSD",
    "okb": "OKBUSDT",
    "tron": "TRXUSD",
    "bitcoin-cash": "BCHUSD",
    "cosmos": "ATOMUSD",
    "stellar": "XLMUSD",
    "etf": null,
    "figure-heloc": null,
    "binance-usd": "BUSDUSD",
    "internet-computer": "ICPUSD",
    "filecoin": "FILUSD",
    "hedera": "HBARUSD",
    "vechain": "VETUSD",
    "the-sandbox": "SANDUSD",
    "decentraland": "MANAUSD",
    "flow": "FLOWUSD",
    "frax": "FRAXUSD",
    "arbitrum": "ARBUSD",
    "aptos": "APTUSD",
    "optimism": "OPUSD",
    "injective": "INJUSD",
    "mantle": "MNTUSD",
    "first-digital-usd": null,
    "cronos": "CROUSD",
    "fantom": "FTMUSD",
    "thorchain": "RUNEUSD",
    "curve-dao-token": "CRVUSD",
    "gala": "GALAUSD",
    "klaytn": "KLAYUSD",
    "render": "RNDRUSD",
    "neo": "NEOUSD",
    "maker": "MKRUSD",    bitcoin: "BTCUSD",
    ethereum: "ETHUSD",
    tether: "USDTUSD",
    ripple: "XRPUSD",
    binancecoin: "BNBUSD",
    "usd-coin": "USDCUSD",
    solana: "SOLUSD",
    cardano: "ADAUSD",
    dogecoin: "DOGEUSD",
    polkadot: "DOTUSD",
    "shiba-inu": "SHIBUSD",
    "dai": "DAIUSD",
    "matic-network": "MATICUSD",
    "uniswap": "UNIUSD",
    "avalanche-2": "AVAXUSD",
    "leo-token": "LEOUSDT",
    "litecoin": "LTCUSD",
    "chainlink": "LINKUSD",
    "okb": "OKBUSDT",
    "tron": "TRXUSD",
    "bitcoin-cash": "BCHUSD",
    "cosmos": "ATOMUSD",
    "stellar": "XLMUSD",
    "binance-usd": "BUSDUSD",
    "internet-computer": "ICPUSD",
    "filecoin": "FILUSD",
    "hedera": "HBARUSD",
    "vechain": "VETUSD",
    "the-sandbox": "SANDUSD",
    "decentraland": "MANAUSD",
    "flow": "FLOWUSD",
    "frax": "FRAXUSD",
    "arbitrum": "ARBUSD",
    "aptos": "APTUSD",
    "optimism": "OPUSD",
    "injective": "INJUSD",
    "mantle": "MNTUSD",
    "first-digital-usd": null,
    "cronos": "CROUSD",
    "fantom": "FTMUSD",
    "thorchain": "RUNEUSD",
    "curve-dao-token": "CRVUSD",
    "gala": "GALAUSD",
    "klaytn": "KLAYUSD",
    "render": "RNDRUSD",
    "neo": "NEOUSD",
    "maker": "MKRUSD",
    pancakeswap: "CAKEUSD",
    "lido-dao": "LDOUSD",
    "optimism": "OPUSD",
    "mantle": "MNTUSD",
    "gnosis": "GNOUSD",
    "compound": "COMPUSD",
    "quant": "QNTUSD",
    "the-graph": "GRTUSD",
    "holo": "HOTUSD",
    "eos": "EOSUSD",
    "aave": "AAVEUSD",
    "neo": "NEOUSD",
    "tezos": "XTZUSD",
    "monero": "XMRUSD",
    "dash": "DASHUSD",
    "zcash": "ZECUSD",
    "nem": "XEMUSD",
    "stellar": "XLMUSD",
    "iota": "IOTAUSD",
    "vechain": "VETUSD",
    "qtum": "QTUMUSD",
    "trueusd": "TUSDUSD",
    "huobi-token": "HTUSD",
    "kava": "KAVAUSD",
    "zilliqa": "ZILUSD",
    "synthetix-network-token": "SNXUSD",
    "0x": "ZRXUSD",
    "bittorrent": "BTTUSD",
    "waves": "WAVESUSD",
    "thetan-coin": "THETAUSD",
    "neo": "NEOUSD",
    "enjincoin": "ENJUSD",
    "decred": "DCRUSD",
    "civic": "CVCUSD",
    "aeternity": "AEUSD",
    "power-ledger": "POWRUSD",
    "komodo": "KMDUSD",
    "ark": "ARKUSD",
    "bytecoin-bcn": null,
    "pundi-x": "NPXSUSD",
    "crypterium": null,
    "nuls": "NULSUSD",
    "loopring": "LRCUSD",
    "wax": "WAXPUSD",
    "status": "SNTUSD",
    "kin": "KINUSD",
    "digixdao": "DGDUSD",
    "singularitynet": "AGIXUSD",
    "zencash": "ZENUSD",
    "bytom": "BTMUSD",
    "nucleus-vision": null,
    "deepbrain-chain": null,
    "cortex": "CTXCUSD",
    "aelf": "ELFUSD",
    "wanchain": "WANUSD",
    "zilliqa": "ZILUSD",
    "bytom": "BTMUSD",
    "pirl": "PIRLUSD",
    "gochain": "GOUSD",
    "aeternity": "AEUSD",
    "steem": "STEEMUSD",
    "stratis": "STRATUSD",
    "nav-coin": "NAVUSD",
    "gxshares": "GXSUSD",
    "bitshares": "BTSUSD",
    "dent": "DENTUSD",
    "factom": "FCTUSD",
    "first-digital-usd": null,
    "figure-heloc": null
};


let cachedData = [];
let cachedDataTrending = [];


const element = document.getElementById('maintable');

const chartbtn = document.getElementById("closeChart");
let currentSort = "market_cap_rank"; // which column
let sortAscending = true; // which direction
function sortTable(column) {
    if (currentSort === column) {
        sortAscending = !sortAscending;
    } else {
        currentSort = column;
        sortAscending = true;
    }

    const sorted = [...cachedData].sort((a, b) => {
        let valA = a[column] || 0;
        let valB = b[column] || 0;
        return sortAscending ? valA - valB : valB - valA;
    });

    renderTable(sorted);
}



async function fetchCoins() {
    let response = await fetch("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=true");
    
    let data = await response.json();
    cachedData = data;
    renderTable(cachedData);
}

async function fetchTrending() {
    let responseTrending = await fetch("https://api.coingecko.com/api/v3/search/trending");
    
    let dataTrending = await responseTrending.json();
    for(let i = 0; i<3; i++){
    cachedDataTrending[i] = dataTrending.coins[i];
    }
    renderTable(cachedData);
    
}

function renderTable(data) {
    let tbody = document.getElementById("coinList");
    tbody.innerHTML = "";
    

    for(let i=0; i< data.length; i++){
        let status = " ";
        data[i].price_change_percentage_24h >= 0 ? status = "+" : "";
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
        if(data[i].price_change_percentage_24h != null)
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

    let tbodygainers = document.getElementById("gainersList");
    let tbodylosers = document.getElementById("losersList");
    let tbodytrendings = document.getElementById("trendingList");
    tbodygainers.innerHTML = "";
    tbodylosers.innerHTML = "";
    tbodytrendings.innerHTML = "";

    
for (const coin of threeHighest) {
  // Create a NEW <tr> for each coin
  let trgainers = document.createElement("tr"); // Moved inside the loop
  let tdgainers = document.createElement("td");
    let img = document.createElement("img");
    img.src = coin.img;
    img.width = 24;
    tdgainers.appendChild(img); 
    tdgainers.appendChild(document.createTextNode(" " + coin.id));
    tdgainers.classList = "grey";
    trgainers.appendChild(tdgainers); 

  let td3gainers = document.createElement("td");
  td3gainers.textContent = coin.price_change_percentage_24h.toFixed(2) + "%";
  td3gainers.classList = "positive";
  trgainers.appendChild(td3gainers);

  let td1gainers = document.createElement("td");
  td1gainers.textContent = coin.current_price.toLocaleString('en-US', {style: 'currency', currency: 'USD'});
  td1gainers.classList = "positive";
  trgainers.appendChild(td1gainers);
    
  tbodygainers.appendChild(trgainers); // Appends the new, unique row
        
    trgainers.dataset.coinId = coin.id;
    trgainers.onclick = function() {
        showChart(this.dataset.coinId);
    };
  
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
    tdlosers.classList = "grey";
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

        trlosers.dataset.coinId = coin.id;
        trlosers.onclick = function() {
            showChart(this.dataset.coinId);
        };

    }

    for (const coin of cachedDataTrending) {
    // Create a NEW <tr> for each coin
    let trtrending = document.createElement("tr");

    let tdtrending = document.createElement("td");
    let img = document.createElement("img");
    img.src = coin.item.small;
    img.width = 24;
    tdtrending.appendChild(img);
    tdtrending.appendChild(document.createTextNode(" " + coin.item.id));
    trtrending.appendChild(tdtrending);

    let td3trending = document.createElement("td");
    for (let i=0; i<data.length / 3; i++){
        if (coin.item.id == data[i].id){
            if (data[i].price_change_percentage_24h > 0){
                td3trending.classList = "positive";
            }else{
                td3trending.classList = "negative";
            }
            td3trending.textContent = data[i].price_change_percentage_24h.toFixed(2) + "%";
            trtrending.appendChild(td3trending);
            break;
        }else{
            td3trending.textContent = coin.item.data.price_change_percentage_24h.usd.toFixed(2) + "%";
            if (data[i].price_change_percentage_24h > 0){
                td3trending.classList = "positive";
            }else{
                td3trending.classList = "negative";
            }
            trtrending.appendChild(td3trending);
        }
    }
    

    let td1trending = document.createElement("td");
        for (let i=0; i<100; i++){
        if (coin.item.id == data[i].id){
            td1trending.textContent = data[i].current_price.toLocaleString('en-US', {style: 'currency', currency: 'USD'});
            td1trending.classList = "grey";
            trtrending.appendChild(td1trending);
            break;
        }else{
            td1trending.textContent = coin.item.data.price.toLocaleString('en-US', {style: 'currency', currency: 'USD'});
            td1trending.classList = "grey";
            trtrending.appendChild(td1trending);
        }
    }
    tbodytrendings.appendChild(trtrending); // Append to the losers tbody

        trtrending.dataset.coinId = coin.id;
        trtrending.onclick = function() {
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
        alert("Chart not available for this coin: " + coinId);
        return;
    }
    let chartSection = document.getElementById("chartSection");
    chartSection.style.display = "block";

    

const tvWidget = new TradingView.widget({
    container_id: "tradingview_chart",
    symbol: symbol,
    interval: "60",
    theme: "light",
    style: "1",
    width: "100%",
    height: 750,
    hide_top_toolbar: false,
    save_image: false
});
    chartbtn.onclick = function() {
    tvWidget.remove();
    chartSection.style.display = "none";
    };
}

fetchCoins();
fetchTrending();
setInterval(fetchCoins, 30000);
setInterval(fetchTrending, 30000);