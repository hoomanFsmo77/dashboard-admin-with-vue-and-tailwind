import {ref} from "vue";

export default ()=>{
    const form=ref({
        firstname:{
            value:'Mark',
            valid:null
        },
        lastname:{
            value:'Otto',
            valid:null
        },
        username:{
            value:'',
            valid:null
        },
        city:{
            value:'',
            valid:null
        },
        country:{
            value:'',
            valid:null
        },
        zip:{
            value:'',
            valid:null
        },
        term:false
    })

    const checkValidation = () => {
        (form.value.country.value && form.value.term && form.value.firstname.valid && form.value.lastname.valid && form.value.city.valid && form.value.zip.valid && form.value.username.valid) && alert(JSON.stringify(form.value))
    }
    const success = prop => {
        form.value[prop].valid=form.value[prop].value.length > 0
        return form.value[prop].value.length > 0;
    }
    const error=prop=>{
        return form.value[prop].value.length===0
    }

    return{form,checkValidation,success,error}
}