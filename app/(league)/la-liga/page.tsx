import {filterLeague} from "@/api"
import FilteredLeagueMatches from "@/app/components/FilteredLeagueMatches"
import getTodayDate from "@/app/GetTodayDate"

const LeagueMatches = async (context:any) => {
  const params = context.searchParams
  const d = getTodayDate()

  const getSpanishLeague = await filterLeague('Primera Division',params.date||d)

  return (
    <FilteredLeagueMatches matchesList={getSpanishLeague} pathname={'la-liga'}/>
  )
}

export default LeagueMatches