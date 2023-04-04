const app = new Vue({

    el: '#main',

    data: {

        result: "",
        responseAvailable: false,
        apiKey: '9bc0a587e9mshe2071efc82ef5dbp1c9d01jsna6fc889f2edb'

    },

    methods: {

        fetchAPIData() {
            this.responseAvailable = false;

            fetch("https://dad-jokes.p.rapidapi.com", {
                "method": "GET",
                "headers": {
                    "x-rapidapi-host": "dad-jokes.p.rapidapi.com",
                    "x-rapidapi-key": this.apiKey
                }
            })
                .then(response => {
                    if(response.ok){
                        return response.json()
                    } else{
                        alert("Server returned " + response.status + " : " + response.statusText);
                    }
                })
                .then(response => {
                    this.result = response.body;
                    this.responseAvailable = true;
                })
                .catch(err => {
                    console.log(err);
                });
        }
    }

})