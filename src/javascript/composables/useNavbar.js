import {ref} from "vue";

export default ()=>{
    let show=ref(false)
    const toggle = () => {
        show.value=!show.value
    }
    const focus = () => {
        show.value=true
    }

    const blur = () => {
        show.value=false
    }

    return {show,toggle,focus,blur}
}