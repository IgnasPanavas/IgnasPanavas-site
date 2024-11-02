import DynamicChart from "./DynamicLineChart";


const AccountView: React.FC = () => {
    return (
    <div className="flex flex-col flex-auto items-center drop-shadow-xl bg-white ">
    <div>
        <h1 className="text-xl">Trading Progress</h1>
    </div>
    <div className="flex flex-row p-10 max-h-full">
        <DynamicChart/>
        <h1>Hello </h1>
        
    </div>
    </div>
    );
}

export default AccountView;