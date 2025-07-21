export default function Header() {
    return (
        <header className="[@media(min-width:900px)]:max-w-[740px] xl:max-w-[1120px] ml-auto mr-auto pt-10 flex justify-between items-center">
            <ul>
                <img src="/assets/Icon.svg" alt="Logo" />
            </ul>
            <ul className="flex gap-8 items-center  text-[1rem]">
                <li className="text-[#353535]">Help</li>
                <li className="text-[#353535]">Account</li>
                <li className="text-[#353535]">Upload Recipe</li>
            </ul>
        </header>
    )
}
