import { filterLeague } from "@/api"
import getTodayDate from "@/app/GetTodayDate"
import FilteredLeagueMatches from "@/app/components/FilteredLeagueMatches"

const LeagueMatches = async (context: any) => {
  const params = context.searchParams
  const d = getTodayDate()

  const getBrazilLeague = await filterLeague('Campeonato Brasileiro Série A', (params.date || d))

  return (
    <FilteredLeagueMatches matchesList={getBrazilLeague} pathname={"/brazilian-series-a"} />
  )
}

export default LeagueMatches