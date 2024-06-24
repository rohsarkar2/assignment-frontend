import React from "react";
import { Colors } from "../../configs/Colors";
import { Button } from "primereact/button";
import "./MiddleComponent.css";

export const MiddleComponent = () => {
  return (
    <div className="grid m-8">
      <div className="col-6 flex flex-column ml-8">
        <div
          style={{
            width: "100px",
            height: "5px",
            backgroundColor: Colors.darkRed,
          }}
        />
        <h1>Approdable Packages</h1>
        <p
          style={{
            // fontFamily: "Roboto-Light",
            fontWeight: "300",
            fontSize: 12,
          }}
        >
          Problems trying to resolve the conflict between <br />
          the two major realms of Classical physics <br /> and newtonian
          mechanics.
        </p>
        <div>
          <Button
            className="learn-more"
            icon="pi pi-chevron-right"
            label="Learn More"
            iconPos="right"
            text
            style={{ color: Colors.lightGreen, padding: 0, marginTop: "20px" }}
          />
        </div>
      </div>
      <div className="col-6"></div>
    </div>
  );
};
