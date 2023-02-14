export function PlaceholderCarousel() {
    return (
        <>
            <div className="flex w-full items-center justify-between">
                <h3 className="h-6 w-72 bg-neutral-800"></h3>
                <div className="flex w-20 justify-between">
                    <button
                        className="bg-neutral-800 w-8 h-8 rounded-full cursor-default"
                    />
                    <button
                        className="bg-neutral-800 w-8 h-8 rounded-full cursor-default"
                    />          
                </div>
            </div>
            <div className="flex gap-4  h-[364px] justify-between">
                <div className="flex gap-4 w-32 h-[364px] bg-neutral-800 animate-pulse" style={{animationDelay:"1s"}}/>
                <div className="flex gap-4 w-32 h-[364px] bg-neutral-800 animate-pulse" style={{animationDelay:"3s"}}/>
                <div className="flex gap-4 w-32 h-[364px] bg-neutral-800 animate-pulse" style={{animationDelay:"2s"}}/>
                <div className="flex gap-4 w-32 h-[364px] bg-neutral-800 animate-pulse" style={{animationDelay:"1s"}}/>
                <div className="flex gap-4 w-32 h-[364px] bg-neutral-800 animate-pulse" style={{animationDelay:"3s"}}/>
            </div>
        </>
    )
}