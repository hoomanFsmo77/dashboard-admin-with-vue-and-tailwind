

export default ()=>{
    const textClasses=(item)=>{
        return {'text-red-600':item==='red','text-sky-600':item==='blue','text-indigo-600':item==='indigo','text-green-600':item==='green','text-yellow-600':item==='yellow'}
    }
    const bgClasses=(item)=>{
        return {'bg-red-200':item==='red','bg-sky-200':item==='blue','bg-indigo-200':item==='indigo','bg-green-200':item==='green','bg-yellow-200':item==='yellow'}
    }
    const btnClass=item=>{
        return {
            'btn-primary-full':item==='indigo',
            'btn-sky-full':item==='blue',
            'btn-red-full':item==='red'
        }
    }

    return {textClasses,bgClasses,btnClass}
}