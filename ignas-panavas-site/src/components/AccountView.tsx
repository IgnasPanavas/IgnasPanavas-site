import DynamicChart from "./DynamicLineChart";


const AccountView: React.FC = () => {
    return (
    <div className="flex flex-col flex-auto items-center drop-shadow-xl bg-white min-h-96">
    <div>
        <h1 className="text-xl">Account Growth</h1>
    </div>
        <DynamicChart/>
    <div>
        <p>Values are experimental data for testing purposes only*</p>
    </div>
    </div>
    );
}

export default AccountView;