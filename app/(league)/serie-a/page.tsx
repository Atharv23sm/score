import {filterLeague} from "@/api"
import getTodayDate from "@/app/GetTodayDate"
import FilteredLeagueMatches from "@/app/components/FilteredLeagueMatches"

const LeagueMatches = async (context: any) => {
  const params = context.searchParams
  const d = getTodayDate()

  const getItalianLeague = await filterLeague('Serie A', params.date||d)

  return (
    <FilteredLeagueMatches matchesList={getItalianLeague} pathname={"/serie-a"}/>
  )
}

export default LeagueMatches