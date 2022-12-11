import {ref,onMounted} from "vue";


export default ()=>{
    let show=ref(true)
    const height=ref('')
    const uploadSection=ref(null)
    const files=ref([])





    const toggleUploader = () => {
      show.value=!show.value
    }

    onMounted(()=>{
        height.value=getComputedStyle(uploadSection.value).height
        show.value=false
    })

    const uploadFileHandler = event => {
        let format=new FileReader()
        format.readAsDataURL(event.target.files[0])
        format.addEventListener('load',e=>{
            files.value.push({
                type:event.target.files[0].type,
                data:e.explicitOriginalTarget.result,
                name:event.target.files[0].name,
                size:(event.target.files[0].size / 1000000).toFixed(3)
            })

        })
    }

    const removeItem = index => {
        files.value.splice(index,1)
    }

    const loader =  target => {
        if(target){
            setTimeout(()=>{
                target.style.width='20%'
            },1000)
            setTimeout(()=>{
                target.style.width='100%'
            },1500)
            setTimeout(()=>{
                target.parentElement.parentElement.remove()
            },2000)
        }

    }


    return {show,toggleUploader,uploadSection,height,uploadFileHandler,files,removeItem,loader}

}