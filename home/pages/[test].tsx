import React from 'react'
import {useRouter} from 'next/router';

const Test = () => {
    const router = useRouter();
    return (
        <div>
            Test - {router.query.test}
        </div>
    )
}