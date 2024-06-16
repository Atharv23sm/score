import {filterLeague} from "@/api"
import FilteredLeagueMatches from "@/app/components/FilteredLeagueMatches"
import getTodayDate from "@/app/GetTodayDate"

const LeagueMatches = async (context:any) => {
  const params = context.searchParams
  const d = getTodayDate()

  const getFrenchLeague = await filterLeague('Ligue 1', params.date||d)

  return (
    <FilteredLeagueMatches matchesList={getFrenchLeague} pathname='/ligue-1'/>
  )
}

export default LeagueMatches