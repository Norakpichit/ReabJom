import IncomeIMG from "../../assets/pafa.jpg"

const Dashboard = () => {
    return ( 
        <div className='p-4'>
            <div className="grid md:grid-cols-3 xl:grid-cols-4 gap-4 sm:grid-cols-2 ">
                <div className="relative h-32 shadow-lg border flex items-center p-4 rounded-lg justify-between">
                    <img src={IncomeIMG} className='object-cover lg:w-20 lg:h-full h-10 w-14 wl-1' />
                    <div>
                        <h1 className="font-bold text-sm lg:text-md">Income</h1>
                        <h1 className="text-sm font-bold lg:text-xl">$1,300,000</h1>
                        <h1 className="text-green-500 font-bold mt-2 text-sm ">+$300</h1>
                    </div>
                </div>
                <div className="relative h-32 shadow-lg border flex items-center p-4 rounded-lg justify-between">
                    <div>
                        <h1 className="font-bold text-sm lg:text-md">Income</h1>
                        <h1 className="text-sm font-bold lg:text-xl">$1,300,000</h1>
                        <h1 className="text-green-500 font-bold mt-2 text-sm ">+$300</h1>
                    </div>
                    <img src={IncomeIMG} className='object-cover lg:w-20 lg:h-full w-14' />
                </div>
                <div className="relative h-32 shadow-lg border flex items-center p-4 rounded-lg justify-between">
                    <div>
                        <h1 className="font-bold text-sm lg:text-md">Income</h1>
                        <h1 className="text-sm font-bold lg:text-xl">$1,300,000</h1>
                        <h1 className="text-green-500 font-bold mt-2 text-sm ">+$300</h1>
                    </div>
                    <img src={IncomeIMG} className='object-cover lg:w-20 lg:h-full w-14' />
                </div>
                <div className="relative h-32 shadow-lg border flex items-center p-4 rounded-lg justify-between">
                    <div>
                        <h1 className="font-bold text-sm lg:text-md">Income</h1>
                        <h1 className="text-sm font-bold lg:text-xl">$1,300,000</h1>
                        <h1 className="text-green-500 font-bold mt-2 text-sm ">+$300</h1>
                    </div>
                    <img src={IncomeIMG} className='object-cover lg:w-20 lg:h-full w-14' />
                </div>
                <div className="relative h-32 shadow-lg border flex items-center p-4 rounded-lg justify-between">
                    <div>
                        <h1 className="font-bold text-sm lg:text-md">Income</h1>
                        <h1 className="text-sm font-bold lg:text-xl">$1,300,000</h1>
                        <h1 className="text-green-500 font-bold mt-2 text-sm ">+$300</h1>
                    </div>
                    <img src={IncomeIMG} className='object-cover lg:w-20 lg:h-full w-14' />
                </div>
                <div className="relative h-32 shadow-lg border flex items-center p-4 rounded-lg justify-between">
                    <div>
                        <h1 className="font-bold text-sm lg:text-md">Income</h1>
                        <h1 className="text-sm font-bold lg:text-xl">$1,300,000</h1>
                        <h1 className="text-green-500 font-bold mt-2 text-sm ">+$300</h1>
                    </div>
                    <img src={IncomeIMG} className='object-cover lg:w-20 lg:h-full w-14' />
                </div>
                <div className="relative h-32 shadow-lg border flex items-center p-4 rounded-lg justify-between">
                    <div>
                        <h1 className="font-bold text-sm lg:text-md">Income</h1>
                        <h1 className="text-sm font-bold lg:text-xl">$1,300,000</h1>
                        <h1 className="text-green-500 font-bold mt-2 text-sm ">+$300</h1>
                    </div>
                    <img src={IncomeIMG} className='object-cover lg:w-20 lg:h-full w-14' />
                </div>
            </div>

            

            {/* Table */}
            {/* <div className='mt-4 border shadow-lg rounded-lg overflow-hidden p-4 pb-20 lg:pb-0'>
                <h1 className='text-black font-bold lg:text-xl'>Transactions</h1>
                <div className='mt-4 md:flex gap-4'>
                    <div className='w-full md:w-[70%]'>
                        <table className='table w-full rounded-lg p-4 border'>
                            <div className='table-header-group'>
                                <div className='table-row'>
                                    <div className='table-cell text-left font-semibold lg:text-lg'>ID</div>
                                    <div className='table-cell text-left font-semibold lg:text-lg'>Customer</div>
                                    <div className='table-cell text-left font-semibold lg:text-lg'>Date</div>
                                    <div className='table-cell text-left font-semibold lg:text-lg'>Product</div>
                                    <div className='table-cell text-left font-semibold lg:text-lg'>Total</div>
                                </div>
                            </div>
                        </table>
                    </div>
                </div>
            </div> */}
        </div>
     );
}
 
export default Dashboard;