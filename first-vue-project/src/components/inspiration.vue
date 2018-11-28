<template>
    <div class="inspiration card col-sm-6 col-md-4 col-lg-3">
            <div v-colors>
                <div class="  card-body">
                    <p class="card-text text-center">{{quotes[cur] }}</p>
                </div>
            </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            quotes: [`“Walk as if you are kissing the Earth with your feet.” 
            ― Thich Nhat Hanh`,
            `“Do not spoil what you have by desiring what you have not; remember that what you now have was once among the things you only hoped for.” 
            ― Epicurus`,
            `“We can complain because rose bushes have thorns, or rejoice because thorns have roses.” 
            ― Alphonse Karr,`,
            `“Be grateful for what you already have while you pursue your goals. 
            If you aren’t grateful for what you already have, what makes you think you would be happy with more.” 
            ― Roy T. Bennett`,
            `“Cultivate the habit of being grateful for every good thing that comes to you, and to give thanks continuously. And because all things have contributed to your advancement, you should include all things in your gratitude.” 
            ― Ralph Waldo Emerson`,
            `“Always remember people who have helped you along the way, and don’t forget to lift someone up.” 
            ― Roy T. Bennett,`,
            `“Let gratitude be the pillow upon which you kneel to say your nightly prayer. And let faith be the bridge you build to overcome evil and welcome good.” 
            ― Maya Angelou`,
            `“Acknowledging the good that you already have in your life is the foundation for all abundance.” 
            ― Eckhart Tolle`,
            `“If the only prayer you said was thank you, that would be enough.” 
            ― Meister Eckhart`,
            `“Being grateful does not mean that everything is necessarily good. It just means that you can accept it as a gift.” 
            ― Roy T. Bennett`



            ],
            cur: Math.floor(Math.random() * 10) + 1  
        }
    }
}
</script>


<style scoped>
    .panel-body { 
        widows: 100%;
        font-size: 18px;
        color: #484848;
        filter:opacity(50%);
        z-index: -2;
    }

    .list {
        cursor: pointer;
    }

    .list:hover {
        background-color: pink;
    }

    .inspiration {
        width: 100%;
        margin-left: 20px;
        padding: 20px;
        overflow: hidden;
        margin-bottom: 0;
        background-color: transparent;
       
    }
    
    .card {
        margin: 5px;
        padding: 10px;
        border-radius: 5px;
        margin-bottom: 70px;
        

    }
    .card-body {
        vertical-align: center;
        padding: 10px;
        color: #595959;
        height: 150px;
        display: grid;
        place-items: center;
        border: 1px solid #484848;
        
    }

</style>