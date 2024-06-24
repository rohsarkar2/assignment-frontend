import { Button } from "primereact/button";
import { Colors } from "../../configs/Colors";
import mainlogo from "../../assets/hero-cover-1.png";
import "./MainComponent.css";

export default function TopComponent() {
  return (
    <>
      <div className="grid">
        <div
          className="sm:col-12 md:col-6 flex flex-column justify-content-center"
          style={{ alignItems: "flex-start", padding: "0 0 0 150px" }}
        >
          <p
            style={{
              fontWeight: "bolder",
              fontSize: 14,
              color: Colors.lightGreen,
            }}
          >
            Welcome
          </p>
          <h1 style={{ fontWeight: "bolder", fontSize: 40 }}>
            Best Learning <br />
            Oppurtunities
          </h1>
          <p>
            Our goal is to make online <br /> education work for everyone.
          </p>
          <div className="flex align-items-center mt-4">
            <Button
              label="JOIN US"
              raised
              size="small"
              style={{
                backgroundColor: Colors.lightGreen,
                border: "none ",
                marginRight: 10,
              }}
            />
            <Button
              label="Learn More"
              outlined
              size="small"
              style={{ color: Colors.lightGreen }}
            />
          </div>
        </div>
        <div className="sm:col-12 md:col-6 main-logo">
          <img
            src={mainlogo}
            alt=""
            style={{ height: "600px", width: "600px" }}
          />
        </div>
      </div>
    </>
  );
}
