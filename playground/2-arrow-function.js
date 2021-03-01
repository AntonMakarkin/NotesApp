/*const square = function (x) {
    return x * x;
};*/

/*const square = (x) => {
    return x * x;
};*/

//const square = (x) => x * x;

//console.log(square(2));

/*const party = {
    name: 'Birthday Party',
    printGuestList: function () {
        console.log('Guest list for ' + this.name);
    }
};*/

/*const party = {
    name: 'Birthday Party',
    printGuestList: () => {
        console.log('Guest list for ' + this.name);
    }
};*/

/*const party = {
    name: 'Birthday Party',
    guestList: ['Anton', 'Vika', 'Vova'],
    printGuestList() {
        const that = this;

        console.log('Guest list for ' + this.name);

        this.guestList.forEach(function (guest) {
            console.log(guest + ' is attending ' + that.name);
        });
    }
};*/

const party = {
    name: 'Birthday Party',
    guestList: ['Anton', 'Vika', 'Vova'],
    printGuestList() {
        console.log('Guest list for ' + this.name);

        this.guestList.forEach((guest) => {
            console.log(guest + ' is attending ' + this.name);
        });
    }
};

party.printGuestList();