import {filterLeague} from "@/api"
import FilteredLeagueMatches from "@/app/components/FilteredLeagueMatches"
import getTodayDate from "@/app/GetTodayDate"

const LeagueMatches = async (context:any) => {
  const params = context.searchParams
  const d = getTodayDate()

  const getEnglishLeague = await filterLeague('Premier League',params.date||d)

  return (
    <FilteredLeagueMatches matchesList={getEnglishLeague} pathname="/premier-league"/>
  )
}

export default LeagueMatches