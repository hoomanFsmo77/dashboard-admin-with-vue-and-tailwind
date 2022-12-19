

const textColor= {
    install(app,options){
        app.config.globalProperties.$textColor=key=>{
            return {'text-red-600':key==='red','text-sky-600':key==='blue','text-indigo-600':key==='indigo','text-green-600':key==='green','text-yellow-600':key==='yellow'}
        }
    }
}
const bgColor={
    install(app,options){
        app.config.globalProperties.$bgColor=key=>{
            return {'bg-red-200':key==='red','bg-sky-200':key==='blue','bg-indigo-200':key==='indigo','bg-green-200':key==='green','bg-yellow-200':key==='yellow'}
        }
    }
}

const btnColor={
    install(app,options){
        app.config.globalProperties.$btnColor=key=>{
            return {
                'btn-primary-full':key==='indigo',
                'btn-sky-full':key==='blue',
                'btn-red-full':key==='red'
            }
        }
    }
}


export {textColor,bgColor,btnColor}