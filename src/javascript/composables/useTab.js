import {ref} from "vue";


export default ()=>{
    const tabList=ref(['all products','archived','drafts','out of stock'])
    const activeTab=ref(1)
    const changeTab=index=>{
        activeTab.value=index+1
    }

    return {tabList,activeTab,changeTab}
}