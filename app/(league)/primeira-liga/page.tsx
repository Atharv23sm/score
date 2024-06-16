import {filterLeague} from "@/api"
import getTodayDate from "@/app/GetTodayDate"
import FilteredLeagueMatches from "@/app/components/FilteredLeagueMatches"

const LeagueMatches = async (context: any) => {
  const params = context.searchParams
  const d = getTodayDate()

  const getPortugueseLeague = await filterLeague('Primeira Liga',params.date||d)

  return (
    <FilteredLeagueMatches matchesList={getPortugueseLeague} pathname = '/primeira-liga'/>
  )
}

export default LeagueMatches