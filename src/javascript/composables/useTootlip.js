
export default {
    data(){
        return{
            show:false
        }
    },
    methods:{
        showTooltip(){
            this.show=true
        },
        closeTooltip(){
            this.show=false
        },
        toggleTooltip(){
            if(window.innerWidth<500){
                this.show=!this.show
            }
        }
    }
}