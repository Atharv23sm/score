'use client'
import { matchesType } from '@/types'

const Matches = ({ matchesList }: { matchesList: matchesType[] }) => {

    return (
        <div className='w-full flex flex-col gap-8 items-center md:p-4'>
            {matchesList.map(
                (match) => {
                    <div>{match.competition.name}</div>

                    let status = match.status

                    return (
                        <div className='w-full flex flex-col gap-4 justify-center items-center p-4 bg-bg1 rounded-lg relative overflow-hidden' key={match.id}>

                            <div className='text-xs'>{match.competition.name}</div>

                            <div className='z-20 w-full flex flex-row gap-4 p-2 justify-center items-center bg-[#fff2] backdrop-blur-sm rounded-md' key={match.id}>

                                <div className='w-[45%] flex flex-row items-center justify-end text-center gap-4'>

                                    <div className='flex flex-col md:flex-row items-center gap-2 md:gap-4'>

                                        <div className='text-xs md:text-sm'>{match.homeTeam?.name}</div>
                                        <img src={match.homeTeam?.crest} alt={match.homeTeam?.name} className='w-10 md:w-16' />

                                    </div>

                                    {status == 'FINISHED' &&
                                        <div className='text-[32px] font-bold'>{match.score?.fullTime.home}</div>}
                                </div>

                                <div>Vs</div>

                                <div className='w-[45%] flex flex-row items-center justify-start text-center gap-4'>

                                    {status == 'FINISHED' &&
                                        <div className='text-[32px] font-bold'>{match.score?.fullTime.away}</div>}

                                    <div className='flex flex-col-reverse md:flex-row items-center gap-2 md:gap-4'>

                                        <img src={match.awayTeam?.crest} alt={match.awayTeam?.name} className='w-10 md:w-16' />
                                        <div className='text-xs md:text-sm'>{match.awayTeam?.name}</div>

                                    </div>
                                </div>
                            </div>
                            <div className='text-xs'>{status == 'FINISHED' ? 'FullTime' : match.utcDate.substring(11, match.utcDate.length - 4) + ' (UTC)'}</div>

                        </div>
                    )
                }
            )}
        </div>
    )
}

export default Matches