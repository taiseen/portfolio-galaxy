const BgVideo = () => {

    return (
        <div className="relative w-full h-full flex flex-col items-center gap-[100px]">
            <video
                loop
                autoPlay
                muted
                playsInline
                className="bgVideo fixed right-0 bottom-0 min-w-full min-h-full w-auto h-auto object-cover -z-10 mix-blend-overlay"
                src="/galaxy.mp4"
            />
        </div>
    )
}

export default BgVideo