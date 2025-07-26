"use client"
import React from 'react'
import { useRouter } from 'next/router';
import Header from '@/components/Header';
import { indianDishes } from "@/lib/Herosectiondata"
import Image from 'next/image';

export default function ExploreId() {
    const router = useRouter();
    const { name } = router.query;
    const IndianDish = indianDishes.filter((dish) => dish.name === name)


    return <>
        {IndianDish.length > 0 ?
            <div className="flex flex-col gap-10">
                <Header />
                <div className="relative h-[30vh] sm:h-[35vh] w-[55vw]  sm:w-[40vw] md:w-[30vw] ml-auto mr-auto rounded-md overflow-hidden">
                    <Image src={IndianDish[0].img} alt='indiandish' fill />
                </div>
                <div className='w-[85%] ml-auto mr-auto'>
                    <h1 className='text-[#414141] text-xl sm:text-2xl'>{IndianDish[0].name} <span className='text-[#168B5D]'> {`(${IndianDish[0].diettype})`}</span></h1>
                    <div></div>
                </div>
            </div > : null
        }
    </>
}
