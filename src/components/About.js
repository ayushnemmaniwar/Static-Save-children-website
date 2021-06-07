import { useState } from "react";
import React from "react";

function About() {
    const [items,setItems]=useState([1,2,3]);
    return (
    <div>
      <h1 style={{ textAlign: "center", marginTop: 50 }}>About</h1>
      <div className="container-fluid">
        <div className="row">
          <div className="col-6">
            <div className="embed-responsive embed-responsive-16by9">
              <iframe
                width="560"
                height="315"
                style={{ marginLeft: 100, marginTop: 100 }}
                src="https://www.youtube.com/embed/rR89M7ImAxI"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
            </div>
          </div>
          <div className="col-6" style={{ marginTop: 100 }}>
            <h2>Welcome to charity</h2>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Obcaecati ipsum sapiente minima modi tempora quis reprehenderit,
              quam repellat! Recusandae fugiat praesentium ratione delectus
              dolor dolorum, ipsum tenetur similique at. Eveniet ea voluptate
              ipsum excepturi, iste dicta distinctio consequatur laborum illum
              culpa voluptas fuga impedit eum provident aspernatur. Fuga,
              laboriosam voluptate.
            </p>
          </div>
        </div>
        <div className="container-fluid">
          <div className="row">
          {
              items.map((item,index)=>(
                <div className="col-3" key={index} style={{ marginLeft: 100,marginTop:50 }}>
              <div className="card" style={{ width: "13rem", height: "13rem" }}>
                <div className="card-body">
                  <h5 className="card-title" style={{textAlign:"center"}}><img src="https://img.icons8.com/fluent/48/000000/happy.png"/></h5>
                  <h6 className="card-subtitle mb-2 text-muted" style={{textAlign:"center"}}>Donate</h6>
                  <p className="card-text">
                   Everyone donation counts
                  </p>
                  <strong style={{textAlign:"center"}}>700K this Year</strong>
                </div>
              </div>
            </div>
              ))
          }
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
