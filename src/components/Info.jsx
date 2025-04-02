import cardData from "../constants/cardData";

const Card = ({ cardInfo, index }) => {

    const { title, description, image, isVideo } = cardInfo;

    // return (
    //     <div className="flex flex-col items-start justify-center relative w-full h-[40vh] overflow-hidden border border-slate-800 shadow-lg rounded-lg p-6 bg-[#080020B7] hover:shadow-xl transition-shadow duration-300 ease-in-out">

    //         {/* Card Title */}
    //         <h1 className="absolute bottom-[40%] left-[5%] text-2xl z-10">
    //             {title}
    //         </h1>

    //         {/* Card Description */}
    //         <p className="absolute bottom-[3%] left-[5%] max-w-[300px] text-gray-600 text-sm leading-5 z-10">
    //             {description}
    //         </p>

    //         {isVideo ? (
    //             <video
    //                 loop
    //                 autoPlay
    //                 muted
    //                 playsInline
    //                 src={image}
    //                 className="mt-[10%] mix-blend-lighten w-[70%] h-[50%] object-cover"
    //             ></video>
    //         ) : (
    //             <img src={image} alt="card-image" className="mt-4 rounded-lg w-[80%] h-[50%] object-cover" />
    //         )}
    //     </div>
    // );

    return (
        <div
            className={`flex flex-col items-start justify-center relative w-full overflow-hidden border border-slate-800 shadow-lg rounded-lg p-6 bg-[#080020B7] hover:shadow-xl transition-shadow duration-300 ease-in-out 
          ${index === 2 ? "row-span-2 h-[83vh]" : "h-[40vh]"} 
          ${index === 3 ? "col-span-2 max-w-[1050px]" : ""}`}
        >
            {/* Card Title */}
            <h1
                className={`absolute text-2xl z-10 
            ${index === 2 ? "left-1/2 -translate-x-1/2 bottom-[22%]" : "left-4 bottom-[18%]"}
            
            `}
            >
                {title}
            </h1>

            {/* Card Description */}
            <p
                className={`absolute text-gray-500 leading-5 z-10 min-w-full pr-5 
                left-4
                    ${index === 2 ? "bottom-[12%]" : "bottom-[4%]"}
                    ${index === 3 ? "max-w-[650px]" : "max-w-[300px]"}
            `}
            >
                {description}
            </p>

            {isVideo ? (
                <video
                    loop
                    autoPlay
                    muted
                    playsInline
                    src={image}
                    className="mix-blend-lighten object-cover absolute top-8 left-1/2 -translate-x-1/2"
                ></video>
            ) : (
                <img
                    src={image}
                    alt="card-image"
                    className="mt-4 rounded-lg w-[90%] object-cover mx-auto"
                />
            )}
        </div>
    );
};

const Info = () => {

    return (
        <section className="flex flex-col items-center w-4/5 mt-24 pb-11 mx-auto">
            <h1 className="text-4xl font-bold">Hello, There</h1>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full mt-8">
                {cardData.map((card, index) => (
                    <Card key={card.id} cardInfo={card} index={index} />
                ))}
            </div>
        </section>
    );
}

export default Info;