import {filterLeague} from "@/api"
import FilteredLeagueMatches from "@/app/components/FilteredLeagueMatches"
import getTodayDate from "@/app/GetTodayDate"

const LeagueMatches = async (context:any) => {
  const params = context.searchParams
  const d = getTodayDate()
  const getSALeague = await filterLeague('Copa Libertadores',params.date||d)

  return (
    <FilteredLeagueMatches matchesList={getSALeague} pathname={"/copa-libertadores"}/>
  )
}

export default LeagueMatches