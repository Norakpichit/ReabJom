import Hacker from './profile.png';
const Mailbox = () => {
  return (
    <div>
      <div className="card w-auto bg-neutral p-4 m-2">
        <div className="flex justify-between">
          <div className="flex items-center">
            <div className="mr-4">
              <h1 className="font-semibold text-md lg:text-lg">K_Panha</h1>
              <p className="text-slate-500">Seller</p>
            </div>
            <img src={Hacker} className="rounded-full object-cover w-10 h-10 lg:w-14 lg:h-14"/>
          </div>
          <div>
            <h2 className="card-title">Report!</h2>
            <p>
              We are having problem with the customer, We need your help !
            </p>
          </div>
          <div className="card-actions justify-end">
            <button className="btn btn-primary bg-green-500 text-white font-bold hover:bg-green-600">
              Accept
            </button>
            <button className="btn btn-ghost bg-red-500 text-white font-bold hover:bg-red-600">
              Deny
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mailbox;
