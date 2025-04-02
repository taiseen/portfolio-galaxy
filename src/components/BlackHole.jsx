const BlackHole = () => {
    return (
        <div className="absolute top-0 w-full flex justify-center mix-blend-lighten -z-10">
            <video
                loop
                muted
                autoPlay
                playsInline
                className="w-full mt-[-25%]"
                type="video/mp4"
                src="/blackhole.mp4"
            >
            </video>
        </div>
    );
};

export default BlackHole;
