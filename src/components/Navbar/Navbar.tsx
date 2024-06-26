import { Menubar } from "primereact/menubar";
import { Button } from "primereact/button";
import { Colors } from "../../configs/Colors";
import "./Navbar.css";

export default function Navbar() {
  const items = [
    {
      label: "Home",
      //   icon: "pi pi-home",
    },
    {
      label: "Product",
      //   icon: "pi pi-star",
    },
    {
      label: "Pricing",
      //   icon: "pi pi-search",
    },
    {
      label: "Contact",
      //   icon: "pi pi-envelope",
    },
  ];

  return (
    <div
      className="grid flex justify-content-center align-items-center"
      style={{
        backgroundColor: "rgba(254, 188, 148, 0.2)",
      }}
    >
      <div
        className="sm:col-12 md:col-3 p-4 flex justify-content-end align-items-center"
        style={{ fontWeight: "bolder", fontSize: 20 }}
      >
        BrandName
      </div>
      <div className="sm:col-12 md:col-5 flex justify-content-center align-items-center">
        <Menubar
          model={items}
          style={{
            margin: "0px 10px",
          }}
        />
      </div>
      <div className="sm:col-12 md:col-4 flex justify-content-start align-items-center">
        <Button
          className="mr-4"
          label="Login"
          text
          style={{ color: Colors.lightGreen }}
        />
        <Button
          icon="pi pi-arrow-right"
          label="JOIN US"
          iconPos="right"
          raised
          size="small"
          style={{ backgroundColor: Colors.lightGreen, border: "none " }}
        />
      </div>
    </div>
  );
}
