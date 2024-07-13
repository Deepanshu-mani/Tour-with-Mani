import Card from "./Card";
function Tour({tours,removeTour}) {
    return(

        <div>
            <div className="flex justify-center items-center flex-col ">
            <h2 className="m-6 border-dotted rounded-[20px] border-[7px] text-[3rem] p-[1vh] px-10 border-[rgb(1,17,160)] font-bold ">Plan with Mani</h2>
            </div >
            <div className="flex  justify-center flex-wrap max-w-[1300px] mx-auto">
                {
                    tours.map((tour) => {
                        return <Card key={tour.id}{...tour} removeTour = {removeTour} ></Card>
                    })
                }
            </div>
        </div>

    )
}

export default Tour;