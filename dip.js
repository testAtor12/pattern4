// Dependency inversion principle (DIP)
// более высоко ур. модули не должны зависить от
// более низко ур.  или на оборот , желательно чтобы
// модули классы зависили от обстракций

// class Fetch {
//     request(url) {
//         // return fetch(url).then(r => r.json())
//         return Promise.resolve("data from fetch")
//     }
// }
//
// class LocalStorage {
//     get() {
//         const dataFromLocalStorage = 'data from local storage'
//         return dataFromLocalStorage
//     }
// }
// // класс зависит от контретных реализаций
// class Database {
//     constructor() {
//         // this.fetch = new Fetch()
//         this.localStorage = new LocalStorage()
//     }
//
//     getData() {
//         // return this.fetch.request("vk.com")
//         return this.localStorage.get('ls key')
//     }
// }
//
// const db = new Database()
// console.log(db.getData())


// ---------------------------------------------------------------------------
//

class Fetch {
    request(url) {
        // return fetch(url).then(r => r.json())
        return Promise.resolve("data from fetch")
    }
}

class LocalStorage {
    get() {
        const dataFromLocalStorage = 'data from local storage'
        return dataFromLocalStorage
    }
}

// класс который обворачивает функционал классa Fetch
class FetchClient {
    constructor() {
        this.fetch = new Fetch()
    }
// общий метод для клиетов
    clientGet() {
       return this.fetch.request("vk.com")
    }
}

// класс который обворачивает функционал класс LocalStorage
class LocalStorageClient {
    constructor() {
        this.localStorage = new LocalStorage()
    }
    clientGet() {
        return this.localStorage.get()
    }
}

// класс не от чего не зависит просто выполняет метод getData
class Database {
    constructor(client) {
        this.client = client
    }
// точный метод
    getData() {
        return this.client.clientGet()
    }
}
// не меняем нечего другово
const db = new Database( new LocalStorageClient())

console.log(db.getData())
