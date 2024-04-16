import { defineStore } from "pinia";
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
        white:1
    }
    },

    getters: {
    },

    actions:{
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
            fetch("src/components/API.JSON")
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