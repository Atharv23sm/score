import Matches from "./components/Matches"
import InputButton from "./components/InputButton"
import LeaguePageLoading from "./components/LeaguePageLoad";
import { getMatches } from "@/api";
import getTodayDate from "./GetTodayDate";

export const metadata = {
    icons: {
      icon: '/logo.png',
    },
  }

export default async function Home(context: any) {
    const params = context.searchParams

    const d = getTodayDate()
    const getData = await getMatches(params.date || d)
    const matchesData = getData?.matches

    return matchesData.length < 0 ? <LeaguePageLoading /> :
        <section className="w-full md:w-[60%] h-[90vh] p-4 flex flex-col items-center gap-4 overflow-y-scroll">
            <div className="w-full flex justify-between items-center">
                <h1 className="text-md md:text-xl font-bold text-[#def]">Matches</h1>
                <div className="text-xs bg-[#101619] p-2 rounded-lg">
                    <InputButton pathname={'/'}/>
                </div>
            </div>
            {matchesData.length == 0 ? <div>No matches found.</div> :
                <Matches matchesList={matchesData} />
            }
        </section>
}

