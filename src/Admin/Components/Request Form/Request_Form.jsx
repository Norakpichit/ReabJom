const Request_Form = () => {
  return (
    <div>

      <div className="card w-auto bg-neutral p-4 m-2">
        <div className="flex justify-between">
          <div>
            <h2 className="card-title">Cookies!</h2>
            <p>We are using looking forward to working with you.</p>
          </div>
          <div className="card-actions justify-end">
            <button className="btn btn-primary bg-green-500 text-white font-bold hover:bg-green-600">Accept</button>
            <button className="btn btn-ghost bg-red-500 text-white font-bold hover:bg-red-600">Deny</button>
          </div>
        </div>
      </div>

    </div>
  );
};

export default Request_Form;
