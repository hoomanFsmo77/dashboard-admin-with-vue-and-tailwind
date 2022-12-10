import {ref} from "vue";


export default ()=>{
    const status=ref('')
    const visibility=ref('Public')
    const date=new Date()
    const show=ref(false)

    const input=ref('')
    const tags=ref(['tag 1','tag 2'])
    const tagInput=ref(null)

    const showHint=ref(false)

    const openSection = (e) => {
        e.target.parentElement.parentElement.nextElementSibling.classList.toggle('!h-full')
        e.target.parentElement.parentElement.nextElementSibling.classList.toggle('!overflow-visible')
    }

    const setValue = e => {
        status.value=e
    }

    const increaseWidth = (e) => {
        let inputWidth=tagInput.value.style.width
        showHint.value=true
        if(e.key!=='Backspace'){
            tagInput.value.style.width=`${Number(inputWidth.slice(0,inputWidth.length-2))+1}ch`
        }else{
            if(inputWidth>'2ch'){
                tagInput.value.style.width=`${Number(inputWidth.slice(0,inputWidth.length-2))-1}ch`
            }else{
                showHint.value=false
                tags.value.pop()
            }
        }
    }

    const addTag = () => {
        tags.value.push(input.value)
        tagInput.value.style.width=`2ch`
        showHint.value=false
        input.value=''
    }
    const removeTag = index => {
        tags.value.splice(index,1)
    }
    const closeHint = () => {
        showHint.value=false
    }

    return {status,show,visibility,date,openSection,setValue,increaseWidth,addTag,removeTag,closeHint,input,tagInput,showHint,tags}

}