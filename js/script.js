const {createApp} = Vue;

createApp({
    data(){
        return{
            mailsArray: [],    
        }
    },
    
    created(){
        for (let i = 0; i < 10; i++) {
            axios
                .get("https://flynn.boolean.careers/exercises/api/random/mail")
                .then((resp)=>{
                    this.rndMail = resp.data.response
                    this.mailsArray.push(this.rndMail)
                });
        }
   },

    
}).mount("#root");