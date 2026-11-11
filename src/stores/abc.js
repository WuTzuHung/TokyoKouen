import { defineStore } from "pinia";
import { WARDS, describeWeather } from "./wards";
export default defineStore("data", {
    //需要輸入兩個參數，1自建資料庫名稱，2資料庫內容

//與.vue中 script 預設匯出概念相同，只是名稱不同data
    state(){
        return{
        objs: [],
        objb: [],
        objc: [],
//以下是天氣資料用的
        objw1:[], //千代田區
        objw2:[], //練馬區
        objw3:[], 
        objw4:[],
        objw5:[],
        objw6:[],
        objw7:[],
        objw8:[],
        objw9:[],
        objw10:[],
        objw11:[],
        objw12:[],
        objw13:[],
        objw14:[],
        objw15:[],
        objw16:[],
        objw17:[],
        objw18:[],
        objw19:[],
        objw20:[],
        objw21:[],
        objw22:[],
        objw23:[],
        //請在這裡加入新的陣列更應存取，不要使用重複的陣列，例如新資料b就使用陣列 objb
        x:"",
        white:1,
        // 新版天氣（Open-Meteo，免費、不需金鑰）
        wx: {},          // { 區名: { temp, feels, min, max, humidity, wind, text, icon } }
        wxTime: "",
        wxLoading: false,
        wxError: "",
        // 新版公園資料（東京都オープンデータ API）
        parks: [],
        parksLoading: false,
        parksError: ""
    }
    },

    getters: {
    },

    actions:{
        // 一次取得 23 區的即時天氣（Open-Meteo）
        async getWeatherAll(){
            if (this.wxLoading || Object.keys(this.wx).length) return
            this.wxLoading = true
            this.wxError = ""
            const lat = WARDS.map(w => w.lat).join(",")
            const lon = WARDS.map(w => w.lon).join(",")
            const url = "https://api.open-meteo.com/v1/forecast?latitude=" + lat + "&longitude=" + lon +
                "&current=temperature_2m,apparent_temperature,relative_humidity_2m,weather_code,wind_speed_10m,is_day" +
                "&daily=temperature_2m_max,temperature_2m_min&timezone=Asia%2FTokyo&wind_speed_unit=ms&forecast_days=1"
            try {
                const res = await fetch(url)
                if (!res.ok) throw new Error(res.status)
                const list = await res.json()
                const result = {}
                list.forEach((d, i) => {
                    const c = d.current
                    const desc = describeWeather(c.weather_code, c.is_day)
                    result[WARDS[i].name] = {
                        temp: Math.round(c.temperature_2m),
                        feels: Math.round(c.apparent_temperature),
                        min: Math.round(d.daily.temperature_2m_min[0]),
                        max: Math.round(d.daily.temperature_2m_max[0]),
                        humidity: c.relative_humidity_2m,
                        wind: c.wind_speed_10m,
                        text: desc.text,
                        icon: desc.icon,
                    }
                })
                this.wx = result
                this.wxTime = list[0].current.time.replace("T", " ")
            } catch (e) {
                this.wxError = "天氣資料暫時無法取得，請稍後再試。"
            } finally {
                this.wxLoading = false
            }
        },
        // 取得東京都管理的公園・公共設施
        async getParks(){
            if (this.parksLoading || this.parks.length) return
            this.parksLoading = true
            this.parksError = ""
            try {
                const res = await fetch("https://api.data.metro.tokyo.lg.jp/v1/PublicFacility?limit=1000")
                if (!res.ok) throw new Error(res.status)
                const data = await res.json()
                this.parks = (data[0] || []).map(p => {
                    const address = p.住所?.表記 || ""
                    const ward = (address.match(/東京都(.+?区)/) || [])[1] || ""
                    const site = (p.参照 || []).map(r => r.参照先).find(u => u) || ""
                    return {
                        id: p.ID?.識別値 || p.名称?.表記,
                        name: p.名称?.表記 || "",
                        kana: p.名称?.カナ表記 || "",
                        address,
                        ward,
                        access: p.アクセス?.備考 || "",
                        intro: (p.説明 || []).filter(t => t).join("\n"),
                        site,
                        lat: p.地理座標?.緯度,
                        lon: p.地理座標?.経度,
                    }
                })
            } catch (e) {
                this.parksError = "公園資料暫時無法取得，請稍後再試。"
            } finally {
                this.parksLoading = false
            }
        },
        getWeather(){
            fetch("https://api.openweathermap.org/data/2.5/weather?lat=35.684884&lon=139.753708&appid=59c6fd5a18b14258d6f6736a73fe8460&lang=zh_tw&units=metric")
            .then(response => response.json())
            .then(data => {
            this.objw1 =data
            })
            //千代田區
            fetch("https://api.openweathermap.org/data/2.5/weather?lat=35.737289&lon=139.653920&appid=59c6fd5a18b14258d6f6736a73fe8460&lang=zh_tw&units=metric")
            .then(response => response.json())
            .then(data => {
            this.objw2 =data
            })
            //中央區
            fetch("https://api.openweathermap.org/data/2.5/weather?lat=35.657760&lon=139.750214&appid=59c6fd5a18b14258d6f6736a73fe8460&lang=zh_tw&units=metric")
            .then(response => response.json())
            .then(data => {
            this.objw3 =data
            })
            //港區
            fetch("https://api.openweathermap.org/data/2.5/weather?lat=35.607635&lon=139.732925&appid=59c6fd5a18b14258d6f6736a73fe8460&lang=zh_tw&units=metric")
            .then(response => response.json())
            .then(data => {
            this.objw4 =data
            })
            //品川區
            fetch("https://api.openweathermap.org/data/2.5/weather?lat=35.561885&lon=139.750214&appid=59c6fd5a18b14258d6f6736a73fe8460&lang=zh_tw&units=metric")
            .then(response => response.json())
            .then(data => {
            this.objw5 =data
            })
            //大田區
            fetch("https://api.openweathermap.org/data/2.5/weather?lat=35.628199&lon=139.690659&appid=59c6fd5a18b14258d6f6736a73fe8460&lang=zh_tw&units=metric")
            .then(response => response.json())
            .then(data => {
            this.objw6 =data
            })
            //目黑區
            fetch("https://api.openweathermap.org/data/2.5/weather?lat=35.638040&lon=139.634833&appid=59c6fd5a18b14258d6f6736a73fe8460&lang=zh_tw&units=metric")
            .then(response => response.json())
            .then(data => {
            this.objw7 =data
            })
            //世田谷區
            fetch("https://api.openweathermap.org/data/2.5/weather?lat=35.668259&lon=139.695964&appid=59c6fd5a18b14258d6f6736a73fe8460&lang=zh_tw&units=metric")
            .then(response => response.json())
            .then(data => {
            this.objw8 =data
            })
            //涉谷區
            fetch("https://api.openweathermap.org/data/2.5/weather?lat=35.700859&lon=139.708729&appid=59c6fd5a18b14258d6f6736a73fe8460&lang=zh_tw&units=metric")
            .then(response => response.json())
            .then(data => {
            this.objw9 =data
            })
            //新宿區
            fetch("https://api.openweathermap.org/data/2.5/weather?lat=35.709969&lon=139.664958&appid=59c6fd5a18b14258d6f6736a73fe8460&lang=zh_tw&units=metric")
            .then(response => response.json())
            .then(data => {
            this.objw10 =data
            })
            //中野區
            fetch("https://api.openweathermap.org/data/2.5/weather?lat=35.696510&lon=139.625015&appid=59c6fd5a18b14258d6f6736a73fe8460&lang=zh_tw&units=metric")
            .then(response => response.json())
            .then(data => {
            this.objw11 =data
            })
            //杉並區
            fetch("https://api.openweathermap.org/data/2.5/weather?lat=35.749037&lon=139.618733&appid=59c6fd5a18b14258d6f6736a73fe8460&lang=zh_tw&units=metric")
            .then(response => response.json())
            .then(data => {
            this.objw12 =data
            })
            //練馬區
            fetch("https://api.openweathermap.org/data/2.5/weather?lat=35.772241&lon=139.676447&appid=59c6fd5a18b14258d6f6736a73fe8460&lang=zh_tw&units=metric")
            .then(response => response.json())
            .then(data => {
            this.objw13 =data
            })
            //板橋區
            fetch("https://api.openweathermap.org/data/2.5/weather?lat=35.729775&lon=139.712219&appid=59c6fd5a18b14258d6f6736a73fe8460&lang=zh_tw&units=metric")
            .then(response => response.json())
            .then(data => {
            this.objw14 =data
            })
            //豐島區
            fetch("https://api.openweathermap.org/data/2.5/weather?lat=35.763468&lon=139.730086&appid=59c6fd5a18b14258d6f6736a73fe8460&lang=zh_tw&units=metric")
            .then(response => response.json())
            .then(data => {
            this.objw15 =data
            })
            //北區
            fetch("https://api.openweathermap.org/data/2.5/weather?lat=35.717283&lon=139.746802&appid=59c6fd5a18b14258d6f6736a73fe8460&lang=zh_tw&units=metric")
            .then(response => response.json())
            .then(data => {
            this.objw16 =data
            })
            //文京區
            fetch("https://api.openweathermap.org/data/2.5/weather?lat=35.714871&lon=139.788914&appid=59c6fd5a18b14258d6f6736a73fe8460&lang=zh_tw&units=metric")
            .then(response => response.json())
            .then(data => {
            this.objw17 =data
            })
            //台東區
            fetch("https://api.openweathermap.org/data/2.5/weather?lat=35.739686&lon=139.783068&appid=59c6fd5a18b14258d6f6736a73fe8460&lang=zh_tw&units=metric")
            .then(response => response.json())
            .then(data => {
            this.objw18 =data
            })
            //荒川區
            fetch("https://api.openweathermap.org/data/2.5/weather?lat=35.778913&lon=139.803219&appid=59c6fd5a18b14258d6f6736a73fe8460&lang=zh_tw&units=metric")
            .then(response => response.json())
            .then(data => {
            this.objw19 =data
            })
            //足立區
            fetch("https://api.openweathermap.org/data/2.5/weather?lat=35.743564&lon=139.847832&appid=59c6fd5a18b14258d6f6736a73fe8460&lang=zh_tw&units=metric")
            .then(response => response.json())
            .then(data => {
            this.objw20 =data
            })
            //葛飾區
            fetch("https://api.openweathermap.org/data/2.5/weather?lat=35.711087&lon=139.814633&appid=59c6fd5a18b14258d6f6736a73fe8460&lang=zh_tw&units=metric")
            .then(response => response.json())
            .then(data => {
            this.objw21 =data
            })
            //墨田區
            fetch("https://api.openweathermap.org/data/2.5/weather?lat=35.690772&lon=139.882009&appid=59c6fd5a18b14258d6f6736a73fe8460&lang=zh_tw&units=metric")
            .then(response => response.json())
            .then(data => {
            this.objw22 =data
            })
            //江戶川區
            fetch("https://api.openweathermap.org/data/2.5/weather?lat=35.650672&lon=139.811500&appid=59c6fd5a18b14258d6f6736a73fe8460&lang=zh_tw&units=metric")
            .then(response => response.json())
            .then(data => {
            this.objw23 =data
            })
            //江東區

        },
        getPublic(){
            fetch("https://api.data.metro.tokyo.lg.jp/v1/PublicFacility?limit=1000")
            .then(response => response.json())
            .then(data => {
            this.objc =data
            })
        },
        getWenhua() {
            fetch("./bunnka/bunnka.json")
                .then(response => response.json())
                .then(data => {
                    this.objb = data
                    // console.log(data)
                })
        },
        getSport() {
            fetch("/src/components/API.JSON")
                .then(response => response.json())
                .then(data => {
                    this.objs = data
                })
        },
        ck() {
            const idarr = document.querySelectorAll("path[name='area']")
            // console.dir(idarr)
            idarr.forEach(item => {
                item.addEventListener("click", () => {
                    // console.dir(item)
                    console.log(item.id)
                    this.x = item.id
                })
            })
        },
        setWhite(x){
            this.white = x
        },
    }

})