let vm = new Vue({
    el: '#name',
    data: {
        firstName: '',
        lastName: 'Brrr',
        job: 'Web Developer',
        seen: "seenFalse",
    },
    mounted: function () {
        setTimeout(() => { // ERASE BRRR
            let count = 0;
            let eraseBrrr = setInterval(() => {
                if (count == 1) clearInterval(eraseBrrr);
                this.lastName = this.lastName.slice(0, -1);
                count++;
            }, 200);
        }, 1500)

        setTimeout(() => { // INSERT BROUILLARD
            let letters = ['o', 'u', 'i', 'l', 'l', 'a', 'r', 'd'];
            let insertBrouillard = setInterval(() => {
                if (letters.length == 1) clearInterval(insertBrouillard);
                this.lastName += letters.shift();
            }, 100);
        }, 2500)

        setTimeout(() => { // INSERT MATTHIEU
            let letters = ['M', 'a', 't', 't', 'h', 'i', 'e', 'u'];
            let insertMatthieu = setInterval(() => {
                if (letters.length == 1) clearInterval(insertMatthieu);
                this.firstName += letters.shift();
            }, 100);
        }, 2500)

        setTimeout(() => {
            this.seen = "seenTrue";
        }, 3700)
    }
})