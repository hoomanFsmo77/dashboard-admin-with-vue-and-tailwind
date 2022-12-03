import {onMounted, ref} from "vue";

export default (props)=>{
    const show=ref(props.isOpen)

    const showSlide = () => {
      show.value=!show.value
    }

    let ulHeight=ref(null)

    onMounted(()=>{
        let ulStyles=getComputedStyle(document.querySelector('ul'))
        ulHeight.value=ulStyles.height
    })


    return {show,showSlide,ulHeight}
}