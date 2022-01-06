import React, {useEffect, useState} from 'react';
import {useRouter} from 'next/router';

const Task = () => {
    const router = useRouter();
    
    const [id , setId] = useState<string | string[] | undefined>('0');
    const queryId = router.query.id;
    console.log(router.query.id);
    useEffect(() => {
        setId(queryId)
    }, [])
    return (
        <div>
            Task {id}
        </div>
    )
}

export default Task;