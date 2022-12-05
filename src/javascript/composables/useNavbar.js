import {ref} from "vue";

export default (emit)=>{
    let show=ref(false)

    let isSidebarActive=ref(false)

    const toggle = () => {
        show.value=!show.value
    }
    const focus = () => {
        show.value=true
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


    return {show,toggle,focus,blur,showUpSidebar,isSidebarActive}
}