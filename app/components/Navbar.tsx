import Link from 'next/link'

const Navbar = () => {
    return (
        <div className="w-full h-[10vh] px-4 flex items-center bg-[#080909] border-b-[1px] border-[#cde] relative overflow-hidden">
            <Link href="/" className='absolute z-30 w-12 h-12 font-[righteous] text-black hover:text-white duration-500 group flex justify-center items-center
                overflow-hidden rounded-full border-[1px] border-black'>
                <div className='absolute z-30 -mt-[2px] text-sm'>score</div>
                <div className='absolute w-16 h-40 translate-y-32 group-hover:translate-y-0 duration-1000 bg-black blur z-0 rounded-full' />
            </Link>
            <div className='-left-48 md:-left-32 w-60 h-36 rotate-45 bg-[#6fa] blur-2xl absolute z-20 animate-[navbar_8s_infinite]' />
            <div className='-left-48 md:-left-20 w-60 h-48 -rotate-45 bg-[#0a6] blur-2xl absolute z-10 animate-[navbar_5s_infinite]' />
            <div className='-left-60 md:-left-20 w-80 h-80 bg-[#0f9] blur-2xl absolute z-0 animate-[navbar_7s_infinite]' />

        </div>
    )
}

export default Navbar