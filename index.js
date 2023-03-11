//class for house
class House {
    constructor(name) {
        this.name = name;
        this.rooms = [];
    }
}

//create classes for rooms
class Room {
    constructor(name, area) {
        this.name = name;
        this.area = area;
    }
}

//create class for house service AJAX

class HouseService {
    static url = "https:..ancient-taiga-31359.herokuapp.com/api/houses";
    static getAllHouses() {
        return $.get(this.url);

    }

    static getHouse(id) {
        return $.get(this.url + `/${id}`);
    }

    static createHouse(house) {
        return $.post(this.url,  house);
    }

    static updateHouse(house) {
        return $.ajax{
            url:this.url + `/${house._id}`
        }
    }
}

//create class to clear ou the DOM