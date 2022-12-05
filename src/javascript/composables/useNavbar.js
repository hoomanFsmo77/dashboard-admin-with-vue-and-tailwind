import {ref} from "vue";

export default (emit)=>{
    let show=ref(false)

    let isSidebarActive=ref(false)

    const focus = () => {
        show.value=true
    }

    const toggleFocus = e => {
        show.value=e.focus
    }

    const blur = () => {
        show.value=false
    }
    const showUpSidebar = () => {
        isSidebarActive.value=!isSidebarActive.value
        emit('sidebar',{
            showSidebar:isSidebarActive.value
        })
    }


    return {show,focus,blur,showUpSidebar,isSidebarActive,toggleFocus}
}