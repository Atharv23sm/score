import {filterLeague} from "@/api"
import FilteredLeagueMatches from "@/app/components/FilteredLeagueMatches"
import getTodayDate from "@/app/GetTodayDate"

const LeagueMatches = async (context:any) => {
  const params = context.searchParams
  const d = getTodayDate()

  const getGermanLeague = await filterLeague('Bundesliga',params.date || d)

  return (
    <FilteredLeagueMatches matchesList={getGermanLeague} pathname="bundesliga"/>
  )
}

export default LeagueMatches