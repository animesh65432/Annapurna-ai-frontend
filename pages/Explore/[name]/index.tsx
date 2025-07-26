"use client"
import React from 'react'
import { useRouter } from 'next/router';
import Header from '@/components/Header';
import { indianDishes } from "@/lib/Herosectiondata"
import Image from 'next/image';
import Link from 'next/link';

export default function ExploreId() {
    const router = useRouter();
    const { name } = router.query;
    const IndianDish = indianDishes.filter((dish) => dish.name === name)
    return <>
        {IndianDish.length > 0 ?
            <div className="flex flex-col gap-10">
                <Header />
                <div className='absolute rounded-md flex justify-center items-center text-[#006C41] bg-white h-[5%] z-50  w-[35%] sm:w-[17%] md:w-[14%] xl:w-[10%] top-[15%] left-[40%] sm:left-[49%] xl:left-[54%] bottom-[0%] '>
                    <Link href={`/?dishname=${IndianDish[0].name}`}>
                        <div className='whitespace-nowrap'>
                            Check recipe
                        </div>
                    </Link>
                </div>
                <div className="relative h-[30vh] sm:h-[35vh] w-[55vw]  sm:w-[40vw] md:w-[35vw] xl:w-[30vw] ml-auto mr-auto rounded-md overflow-hidden">
                    <Image src={IndianDish[0].img} alt='indiandish' fill />
                </div>
                <div className='w-[85%] ml-auto mr-auto flex flex-col gap-4'>
                    <div className='flex'>
                        <h1 className='text-[#414141] text-2xl lg:text-3xl'>{IndianDish[0].name}</h1>
                        <div></div>
                    </div>
                    <div className='flex flex-col'>
                        <div className='text-[#414141] text-xl '>Required Ingredients :</div>
                        <div className='text-[#414141]'>
                            {IndianDish[0].ingredients}
                        </div>
                    </div>
                    <div className="flex flex-col  ">
                        <div className='text-[#414141] text-xl'>Season :</div>
                        <div className='text-[#414141] '>
                            {IndianDish[0].season}
                        </div>
                    </div>
                    <div>
                        <div className='text-[#414141] text-xl'>
                            Nutrient Focus :
                        </div>
                        <div className='text-[#414141] '>
                            {IndianDish[0].variant.join(", ")}
                        </div>
                    </div>
                </div>
            </div > : null
        }
    </>
}
