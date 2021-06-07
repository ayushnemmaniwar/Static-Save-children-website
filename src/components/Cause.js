import React from "react";
import { useState } from "react";
function Cause() {
  const [items, setItems] = useState([1, 2, 3]);
  return (
    <div>
      <h1 className="my-4" style={{ textAlign: "center" }}>
        Cause
      </h1>
      <div className="container-fluid">
        <div className="row">
          {items.map((item,index) => (
            <div className="col-3" key={index} style={{ marginLeft: 100, marginTop: 50 }}>
              <div class="card" style={{ width: "18rem" }}>
                <img
                  src="https://images.unsplash.com/photo-1524069290683-0457abfe42c3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"
                  class="card-img-top"
                  alt="..."
                />
                <div class="card-body">
                  <h5 class="card-title">Schools</h5>
                  <p class="card-text">
                    We provided education for 1000's of students with this
                    donations
                  </p>
                  <a href="#" class="btn btn-success">
                    Donate Now
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Cause;
