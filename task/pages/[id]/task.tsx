import React from 'react';
import {useRouter} from 'next/router';

const Task = () => {
    const router = useRouter();

    console.log(router.query);
    return (
        <div>
            Task
        </div>
    )
}