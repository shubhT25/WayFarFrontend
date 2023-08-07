import React, {useState} from "react";
import { useNavigate } from "react-router-dom";

import "./main.css";
import "./responsive.css";

const Enquire = () => {

  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const navigate = useNavigate();

  const getSuccess = (e) => {
    e.preventDefault();
    if(to <= from) {
      alert('"To" date must be after "From" Date')
    } else {
      navigate("./success")
    }
  };

  return (
    <main>
      <section className="enquire-main">
        <header>
          <h3 className="enquire-head">Send us a query</h3>
        </header>
        <br />
        <form
          className="enquire-content"
          onSubmit={getSuccess}
          autoComplete="off"
        >
          <div className="form-row">
            <div className="form-col">
              <label htmlFor="name">Name</label> <br />
              <input
                id="name"
                type="text"
                required={true}
                placeholder="Ex : John Davis"
                pattern="^[A-Za-z\s]+$"
              />
            </div>
            <div className="form-col">
              <label htmlFor="email">Email Id</label> <br />
              <input
                id="email"
                type="email"
                placeholder="Ex : john.davis@example.com"
                required={true}
                pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
              />
            </div>
            <div className="form-col">
              <label htmlFor="citi">Destination</label> <br />
              <input id="citi" list="city" placeholder="Ex : India" />
              <datalist id="city">
                <option value="India" />
                <option value="France" />
                <option value="Singapore" />
                <option value="Thailand" />
                <option value="United Arab Emirates" />
                <option value="United States of America" />
              </datalist>
            </div>
          </div>
          <div className="form-row">
            <div className="form-col">
              <label>No. of Travellers</label> <br />
              <input
                type="number"
                required={true}
                id="adult"
                placeholder="Adult"
                min={0}
              />
              <input
                type="number"
                required={true}
                id="children"
                placeholder="Children"
                min={0}
              />
            </div>
            <div className="form-col">
              <label htmlFor="code">Phone Number</label> <br />
              <select id="code" className="code">
                <option value="" defaultValue="" disabled="">
                  Code
                </option>
                <option value={+213}>+213</option>
                <option value={+91}>+91</option>
                <option value={+244}>+244</option>
                <option value={+61}>+61</option>
                <option value={+973}>+973</option>
              </select>
              <input
                id="phone"
                type="tel"
                pattern="^[0-9]{10}$"
                required={true}
                placeholder="Ex : 9897979086"
              />
            </div>
            <div className="form-col">
              <label htmlFor="">Start &amp; End dates of Trip</label> <br />
              <input type="date" id="from" required={true} onChange={(e) => {setFrom(e.target.value)}}/>
              <input type="date" id="to" required={true} onChange={(e) => {setTo(e.target.value)}}/>
            </div>
          </div>
          <div className="form-row">
            <div className="form-col">
              <label htmlFor="queries">Add your Queries</label> <br />
              <textarea
                id="queries"
                rows={4}
                cols={15}
                required={true}
                pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                defaultValue={""}
              />
            </div>
            <div className="form-col" id="notifications">
              <label className="check">Send notifications</label> <br />
              <input type="checkbox" />
              via Email
              <input type="checkbox" />
              via SMS
            </div>
          </div>
          <button type="submit">Raise your query</button>
        </form>
      </section>
    </main>
  );
};

export default Enquire;
