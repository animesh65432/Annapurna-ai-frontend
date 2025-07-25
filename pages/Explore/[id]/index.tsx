import React from 'react'
import { useRouter } from 'next/router';

export default function ExploreId() {
    const router = useRouter();
    const { id } = router.query;

    return <div className='text-black'>Product ID: {id}</div>;
}
