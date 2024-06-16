import { apiOptions, matchesType } from "@/types"

const options: apiOptions = {
    next: { revalidate: 30 },
    headers: {
        "X-Auth-Token": process.env.FOOTBALL_API_KEY,
        "Content-Type": "application/json",
    },
}

export const getMatches = async (date: string) => {
    const matchData = await fetch(`https://api.football-data.org/v4/matches?date=${date}`, options)
    return matchData.json()
}

export const getNews = async () => {
    const newsData = await fetch(`https://newsapi.org/v2/everything?apiKey=${process.env.NEWS_API_KEY}&q=soccer&pageSize=10`, { next: { revalidate: 20 } })
    return newsData.json()
}

export const filterLeague = async (filterData:string, date:string) => {
    const tempMatches = await getMatches(date)
    let filteredMatches: matchesType[] = []
    for (let m of tempMatches.matches) {
        if (m.competition.name === filterData)
            filteredMatches.push(m)
    }
    return filteredMatches
}