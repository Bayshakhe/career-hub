import toast from 'react-hot-toast';

export const handleToApply = (id,name) => {
    const exists = JSON.parse(localStorage.getItem('apply'))
    let applied = []
    const job = {id, name};
    

    if(exists){
        const alreadyApplied = exists.find(a => a.id == id)
        if(alreadyApplied){
            toast.success('You Already Applied Here.');
            return ;
        }
       else{
            applied.push(...exists, job)
            localStorage.setItem('apply', JSON.stringify(applied))
       }
    }
    else{
        applied.push(job)
        localStorage.setItem('apply', JSON.stringify(applied))
    }
    
}
