
function NewsLoading() {
    return [...Array(3)].map(
        (e, i) => {
            return (
                <div className="flex flex-col gap-8 md:gap-4 animate-pulse" key={i}>
                    <div>
                        <div className="w-68 h-20 bg-[#aaa]" />
                        <div className="w-68 h-24 bg-[#123]" />
                    </div>
                </div>
            )
        }
    )
}

export default NewsLoading