import React from 'react'
import { useRouter } from 'next/router';

export default function ExploreId() {
    const router = useRouter();
    const { name } = router.query;

    return <div className='text-black'>Product Name: {name}</div>;
}
