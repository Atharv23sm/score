import { matchesType } from "@/types"
import Matches from "./Matches"
import InputButton from "./InputButton"

function FilteredLeagueMatches({ matchesList, pathname:string }: { matchesList: matchesType[], pathname:string }) {

  return (
    <section className="w-full md:w-[60%] h-[90vh] p-4 flex flex-col items-center gap-4 overflow-y-scroll">
      <div className="w-full flex justify-between items-center">
        <h1 className="text-md md:text-xl font-bold text-[#def]">Matches</h1>
        <div className="text-sm">
          <InputButton pathname=""/>
        </div>
      </div>
     {matchesList.length == 0 ? <div>No matches found.</div> :      
      <Matches matchesList={matchesList} />}
    </section>
  )
}

export default FilteredLeagueMatches