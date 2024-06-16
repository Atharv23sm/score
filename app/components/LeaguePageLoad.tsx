export default function LeaguePageLoading() {

    return (
        <section className="w-full md:w-[60%] h-screen flex flex-col gap-8 items-center p-4 pt-16 md:p-8 md:pt-20 ">
            {[...Array(3)].map(
                (e, i) => {
                    return (
                        <div className='w-full flex flex-col gap-4 justify-center items-center p-4 bg-bg1 rounded-lg animate-pulse' key={i}>
                            <div className='bg-[#fff6] w-40 h-2' />
                            <div className='w-full flex flex-row gap-4 p-2 justify-center items-center bg-[#fff2] backdrop-blur-lg rounded-md'>
                                <div className='md:w-[45%] flex flex-row items-center justify-end text-center gap-4'>
                                    <div className='flex flex-col md:flex-row items-center gap-2 md:gap-4'>
                                        <div className='w-16 h-2 bg-[#fff6]' />
                                        <div className='w-10 h-10 md:w-16 md:h-16 bg-[#fff5]' />
                                    </div>
                                </div>
                                <div>Vs</div>
                                <div className='md:w-[45%] flex flex-row items-center justify-start text-center gap-4'>
                                    <div className='flex flex-col-reverse md:flex-row items-center gap-2 md:gap-4'>
                                        <div className='w-10 h-10 md:w-16 md:h-16 bg-[#fff5]' />
                                        <div className='w-16 h-2 bg-[#fff6]' />
                                    </div>
                                </div>
                            </div>
                            <div className='bg-[#fff6] w-20 h-2' />
                        </div>
                    )
                }
            )}
        </section>

    )

}