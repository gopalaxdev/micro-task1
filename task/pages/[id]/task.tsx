import React from 'react';
import {useRouter} from 'next/router';

const Task = () => {
    const router = useRouter();

    console.log(router.query.id);
    return (
        <div>
            Task {router.query.id}
        </div>
    )
}

export default Task;