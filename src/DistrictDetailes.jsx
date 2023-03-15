import React from "react";
import { useState } from "react";
import axios from "axios";

export const DistrictDetailes = () => {
  const [userInput, setuserInput] = useState("");
  const [searchDist, setsearchDist] = useState({});

  const searchDistrict = () => {
    console.log(userInput);
    axios.get("http://localhost:3000/districts").then((res) => {
      console.log(res.data);
      let dist = res.data.find((d) => d.constituencies.indexOf(userInput) > -1);
      console.log(dist);
      setsearchDist(dist);
    });
  };

  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col">
            <form>
              <div className="mb-3">
                <label className="form-label">
                  Enter Assembly constituency
                </label>
                <input
                  type="email"
                  className="form-control"
                  value={userInput}
                  onChange={(e) => {
                    setuserInput(e.target.value);
                  }}
                />
              </div>

              <button
                type="button"
                className="btn btn-primary"
                onClick={searchDistrict}
              >
                Find District
              </button>
            </form>
          </div>
          {searchDist.districtName && (
            <div className="col">
              <h2>Your New District Name is : {searchDist.districtName}</h2>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
