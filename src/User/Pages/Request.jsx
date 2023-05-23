import { doc, setDoc } from "firebase/firestore";
import { useState } from "react";
import { db } from "../../Firebase/firebase.config";

export default function Request() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    contactName: "",
    businessName: "",
    phoneNumber: "",
    email: "",
    streetAddress: "",
    commune: "",
    district: "",
    location: "",
    postalCode: "",
    nationalID: null,
    sellerCertificate: null,
    businessCategory: "",
  });

  const onChangeHandler = (event) => {
    setFormData(() => ({
      ...formData,
      [event.target.name]: event.target.value,
    }));
  };

  const onSubmitHandler = async () => {
    await setDoc(doc(db, "requestForms", "business name"), formData);
  };

  return (
    <form onSubmit={onSubmitHandler}>
      <div className="flex flex-col my-10">
        <div className="font-bold text-center ">
          Seller Contract Request Form
        </div>
        <br />
        <hr />
        <br />
        <div className="flex max-sm:flex-col mx-16 gap-10 max-sm:gap-0">
          <div className="form-control w-full ">
            <label className="label">
              <span className="label-text font-bold">First Name</span>
            </label>
            <input
              type="text"
              name="firstName"
              placeholder="Type here"
              className="input input-bordered w-full max-w-xl"
              onChange={onChangeHandler}
            />
          </div>
          <div className="form-control w-full ">
            <label className="label">
              <span className="label-text font-bold">Last Name</span>
            </label>
            <input
              type="text"
              name="lastName"
              placeholder="Type here"
              className="input input-bordered w-full max-w-xl"
              onChange={onChangeHandler}
            />
          </div>
        </div>
        <div className="flex max-sm:flex-col mx-16 gap-10 max-sm:gap-0">
          <div className="form-control w-full ">
            <label className="label">
              <span className="label-text font-bold">Contact Name</span>
            </label>
            <input
              type="text"
              name="contactName"
              placeholder="Type here"
              className="input input-bordered w-full max-w-xl"
              onChange={onChangeHandler}
            />
          </div>
          <div className="form-control w-full ">
            <label className="label">
              <span className="label-text font-bold">Business Name</span>
            </label>
            <input
              type="text"
              name="businessName"
              placeholder="Type here"
              className="input input-bordered w-full max-w-xl"
              onChange={onChangeHandler}
            />
          </div>
        </div>
        <div className="flex max-sm:flex-col mx-16 gap-10 max-sm:gap-0">
          <div className="form-control w-full ">
            <label className="label">
              <span className="label-text font-bold">Phone Number</span>
            </label>
            <input
              type="tel"
              name="phoneNumber"
              placeholder="012-345-678 "
              className="input input-bordered w-full max-w-xl"
              onChange={onChangeHandler}
              required
              pattern="0\d{2}[\-]\d{3}[\-]\d{3}"
            />
          </div>
          <div className="form-control w-full ">
            <label className="label">
              <span className="label-text font-bold">Email Address</span>
            </label>
            <input
              type="email"
              name="email"
              placeholder="Type here"
              className="input input-bordered w-full max-w-xl min-w-xs"
              onChange={onChangeHandler}
            />
          </div>
        </div>
        <div className="mx-16 lg:mr-24">
          <div className="form-control w-full ">
            <label className="label">
              <span className="label-text font-bold">Address</span>
            </label>
            <input
              type="text"
              name="streetAddress"
              placeholder="Type here"
              className="input input-bordered w-full min-w-xs"
              onChange={onChangeHandler}
            />
            <label className="label">
              <span className="text-sm font-light">Street Address</span>
            </label>
          </div>
        </div>
        <div className="flex max-sm:flex-col mx-16 gap-10 max-sm:gap-0">
          <div className="form-control w-full ">
            <input
              type="text"
              name="commune"
              placeholder="Type here"
              className="input input-bordered w-full max-w-xl"
            />
            <label className="label">
              <span className="text-sm font-light">Commune (Sangkat)</span>
            </label>
          </div>
          <div className="form-control w-full ">
            <input
              type="text"
              name="district"
              placeholder="Type here"
              className="input input-bordered w-full max-w-xl min-w-xs"
              onChange={onChangeHandler}
            />
            <label className="label">
              <span className="text-sm font-light">District (Khan)</span>
            </label>
          </div>
        </div>
        <div className="flex justify-evenly gap-10 mx-16">
          <div className="form-control w-full ">
            <select
              name="City/Province"
              placeholder="Type here"
              className="input input-bordered w-full max-w-xl"
              onChange={onChangeHandler}
              defaultValue={"Phnom Penh"}
            >
              <option value="Phnom Penh">Phnom Penh</option>
              <option value="Beanteay Meanchey">Banteay Meanchey</option>
              <option value="Battambang">Battambang</option>
              <option value="Kampong Cham">Kampong Cham</option>
              <option value="Kampong Chhnang">Kampong Chhnang</option>
              <option value="Kampong Speu">Kampong Speu</option>
              <option value="Kampong Thom">Kampong Thom</option>
              <option value="Kampot">Kampot</option>
              <option value="Kandal">Kandal</option>
              <option value="Kep">Kep</option>
              <option value="Koh Kong">Koh Kong</option>
              <option value="Kratie">Kratie</option>
              <option value="Mondulkiri">Mondulkiri</option>
              <option value="Oddar Meanchey">Oddar Meanchey</option>
              <option value="Pailin">Pailin</option>
              <option value="Preah Vihear">Preah Vihear</option>
              <option value="Pursat">Pursat</option>
              <option value="Prey Veng">Prey Veng</option>
              <option value="Ratanakiri">Ratanakiri</option>
              <option value="Siem Reap">Siem Reap</option>
              <option value="Preah Sihanouk">Preah Sihanouk</option>
              <option value="Stueng Treng">Stueng Treng</option>
              <option value="Svay Rieng">Svay Rieng</option>
              <option value="Takeo">Takeo</option>
              <option value="Tboung Khmum">Tboung Khmum</option>
            </select>
            <label className="label">
              <span className="text-sm font-light">City/Province</span>
            </label>
          </div>
          <div className="form-control w-full ">
            <input
              type="text"
              name="postalCode"
              className="input input-bordered w-full max-w-xl min-w-xs"
              onChange={onChangeHandler}
            />
            <label className="label">
              <span className="text-sm font-light">Postal Code</span>
            </label>
          </div>
        </div>
        <div className="flex max-sm:flex-col mx-16 gap-10 max-sm:gap-0">
          <div className="form-control w-full ">
            <label className="label">
              <span className="label-text font-bold">National ID</span>
            </label>
            <input
              type="file"
              name="nationalID"
              className="file-input file-input-bordered file-input-info w-full max-w-xs"
              onChange={onChangeHandler}
            />
          </div>
          <div className="form-control w-full ">
            <label className="label">
              <span className="label-text font-bold">Seller Certificate</span>
            </label>
            <input
              type="file"
              name="sellerCertificate"
              className="file-input file-input-bordered file-input-info w-full max-w-xs"
              onChange={onChangeHandler}
            />
          </div>
        </div>
        <div className="flex max-sm:flex-col mx-16 gap-10 max-sm:gap-0">
          <div className="form-control w-1/2 ">
            <label className="label">
              <span className="label-text font-bold">Business Cateogry</span>
            </label>
            <select
              className="file-input file-input-bordered file-input-info w-full max-w-xs p-3"
              name="businessCategory"
              onChange={onChangeHandler}
            >
              <option value="Chef"> Chef</option>
              <option value="Decoration"> Decoration</option>
            </select>
          </div>
        </div>
        <button
          className="btn btn-md w-32 rounded-xl mt-10 font-bold bg-light text-[#548BBE] border-none self-center hover:translate-y-2 hover:bg-light "
          type="submit"
        >
          Submit
        </button>
      </div>
    </form>
  );
}
