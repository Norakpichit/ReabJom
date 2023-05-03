import IncomeIMG from '../Dashboard/profits.png';
import SellerIMG from '../Dashboard/seller.png';
import UserIMG from '../Dashboard/user.png';
const Dashboard = () => {
    return ( 
        <div className='p-4'>
            <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-4">
                <div className="h-28 shadow-lg border flex items-center p-4 rounded-lg justify-between">
                    <div>
                        <h1 className="font-bold">Sellers</h1>
                        <h1 className="text-md font-bold lg:text-2xl">500</h1>
                        <h1 className="text-green-500 font-bold mt-2">+20</h1>
                    </div>
                    <img src={SellerIMG} className='w-24 h-auto' />
                </div>
                <div className="h-28 shadow-lg border flex items-center p-4 rounded-lg justify-between"> 
                    <div>
                        <h1 className="font-bold">Users</h1>
                        <h1 className="text-md font-bold lg:text-2xl">23,000</h1>
                        <h1 className="text-green-500 font-bold mt-2">+200</h1>
                    </div>
                    <img src={UserIMG} className='w-24 h-auto' />
                </div>
                <div className="h-28 shadow-lg border flex items-center p-4 rounded-lg justify-between">
                    <div>
                        <h1 className="font-bold">Income</h1>
                        <h1 className="text-md font-bold lg:text-2xl">$1,300</h1>
                        <h1 className="text-green-500 font-bold mt-2">+$300</h1>
                    </div>
                    <img src={IncomeIMG} className='w-24 h-auto' />
                </div>
                <div className="h-28 shadow-lg border flex items-center p-4 rounded-lg justify-between">
                    <div>
                        <h1 className="font-bold">Income</h1>
                        <h1 className="text-md font-bold lg:text-2xl">$1,300</h1>
                        <h1 className="text-green-500 font-bold mt-2">+$300</h1>
                    </div>
                    <img src={IncomeIMG} className='w-24 h-auto' />
                </div>
            </div>

            {/* Table */}
            <div className='mt-4 border shadow-lg rounded-lg overflow-hidden p-4 pb-20 lg:pb-0'>
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
            </div>
        </div>
     );
}
 
export default Dashboard;