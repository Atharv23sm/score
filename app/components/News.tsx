import Link from "next/link"
import { getNews } from "@/api"
import { newsType } from "@/types"
import NewsLoading from "./NewsLoading"

const News = async () => {
  const news = await getNews()
  const newsData: newsType[] = news.articles

  return (
    <div className='w-full md:w-[20%] h-[90vh] overflow-y-scroll p-8 md:p-[1vw] bg-[#101619] flex flex-col gap-8 md:gap-4'>
      <h1 className='font-bold text-xl text-[#def]'>News - Top Headlines</h1>
      <div className="flex flex-col gap-8 md:gap-4">
        {newsData.length < 0 ? <NewsLoading/> :
          newsData.slice(1).map((news: any) => (
            <Link key={`${news.title}`} href={news.url} legacyBehavior>
              <a target="_blank">
                <div className="relative group duration-300">
                  <img src={news?.urlToImage != null ? news?.urlToImage : '/img/news-football.webp'} alt={news.title} className="object-cover" />
                  <div className="bottom-0 left-0 w-full p-2 z-10 bg-[#253337] group-hover:bg-[#0f9] duration-300">
                    <p className="font-semibold text-md group-hover:text-black duration-200">{news.title}</p>
                  </div>
                </div>
              </a>
            </Link>
          ))}
      </div>
    </div>
  )
}

export default News