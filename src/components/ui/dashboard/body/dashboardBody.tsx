import Participants from "./participants/participants";

const DashboardBody= () => {

    return (
        <div className="flex-grow bg-primary-color border-transparent rounded-t-[32px] overflow-auto pt-3">
            <Participants />
        </div>
    )
}

export default DashboardBody;