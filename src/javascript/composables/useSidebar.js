import {onMounted, ref,watch} from "vue";
import {useRoute} from "vue-router";

const sidebar = () => {
    const isUnder1200=window.innerWidth < 1200
    const side_item=ref(null)


    const closeAll = e => {
        if(side_item.value[e.id - 1][0]){
            closeAllItems()
        }else{
            closeAllItems()
            side_item.value[e.id - 1][0] =true
        }
    }

    const closeAllItems = () => {
        side_item.value.forEach(item=>{
            item[0]=false
        })
    }

    return {isUnder1200,closeAll,side_item}
}



const sidebarItem= (props,emit)=>{
    const show=ref(true)
    let ulHeight=ref(null)
    let sub_container=ref(null)
    let sidebarLink=ref(null)
    const route=useRoute()
    const currentRoutePath=ref('')
    const isFocus=ref(false)

    const showSlide = e => {
        emit('close',{id:props.id})
        currentRoutePath.value=route.path
    }

    onMounted(()=>{
        updateUlHeight()
        if(!props.hasSub){
            show.value=false
        }

    })

    const addActiveClass = () => {
        document.querySelectorAll('.sidebar-item ').forEach(item=>{item.classList.remove('sidebar-active')})
        if(!sidebarLink.value.classList.contains('sidebar-active')){
            sidebarLink.value.classList.add('sidebar-active')
        }
    }
    watch(()=>props.isActive,()=>{
        updateUlHeight()
    })

    const updateUlHeight = () => {
        currentRoutePath.value=route.path
        show.value=true
        if(props.hasSub){
            setTimeout(function () {
                let ulStyles=getComputedStyle(sub_container.value)
                ulHeight.value=ulStyles.height
                show.value=currentRoutePath.value.includes(props.title)
            },500)
        }
    }
    const singleLinkItemHandler = () => {
        document.querySelectorAll('.sidebar-item ').forEach(item=>{item.classList.remove('sidebar-active')})
        showSlide()
    }



    return {show,showSlide,ulHeight,sub_container,addActiveClass,sidebarLink,currentRoutePath,singleLinkItemHandler,isFocus}
}
export {sidebar,sidebarItem}