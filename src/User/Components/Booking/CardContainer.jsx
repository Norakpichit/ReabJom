export default function CardContainer() {
  return (
    <div className="grid grid-cols-3 max-md:grid-cols-2 max-sm:grid-cols-1 p-10 gap-10 max-md:gap-8 bg-gradient-to-t from-[#CDDEFF] to-white">
      <a href="">
        <div className="card w-full h-56 text-primary-content flex justify-center items-center text-2xl font-extrabold bg-sen-sok bg-cover bg-center hover:opacity-70 hover:translate-y-[-20px] transition-all">
          Venue
        </div>
      </a>
      <a href="">
        <div className="card w-full h-56 text-primary-content flex justify-center items-center text-2xl font-extrabold hover:opacity-50 hover:translate-y-[-20px] transition-transform bg-secondary">
          Salon
        </div>
      </a>
      <a href="">
        <div className="card w-full h-56 text-primary-content flex justify-center items-center text-2xl font-extrabold hover:opacity-50 hover:translate-y-[-20px] transition-transform bg-secondary">
          Chef
        </div>
      </a>
      <a href="">
        <div className="card w-full h-56 text-primary-content flex justify-center items-center text-2xl font-extrabold hover:opacity-50 hover:translate-y-[-20px] transition-transform bg-secondary">
          Invitation
        </div>
      </a>
      <a href="">
        <div className="card w-full h-56 text-primary-content flex justify-center items-center text-2xl font-extrabold hover:opacity-50 hover:translate-y-[-20px] transition-transform bg-secondary">
          Preparation
        </div>
      </a>
      <a href="">
        <div className="card w-full h-56 text-primary-content flex justify-center items-center text-2xl font-extrabold hover:opacity-50 hover:translate-y-[-20px] transition-transform bg-secondary">
          Decoration
        </div>
      </a>
    </div>
  );
}
