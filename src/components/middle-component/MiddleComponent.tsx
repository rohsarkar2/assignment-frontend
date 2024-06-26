import { Colors } from "../../configs/Colors";
import { Button } from "primereact/button";
import { Card } from "primereact/card";
import "./MiddleComponent.css";

export const MiddleComponent = () => {
  const card1Header = (
    <div
      className="flex justify-content-center align-items-center"
      style={{
        width: 60,
        height: 60,
        borderRadius: 6,
        backgroundColor: Colors.lightGreen,
      }}
    >
      <svg
        width="32"
        height="32"
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clip-path="url(#clip0_1_103)">
          <path
            d="M1.7143 20C1.7143 20.3156 1.97016 20.5714 2.28573 20.5714H29.7143C30.0299 20.5714 30.2857 20.3156 30.2857 20V2.28571H1.7143V20Z"
            fill="white"
          />
          <path
            d="M31.4286 0H0.571429C0.255859 0 0 0.255859 0 0.571429C0 0.886998 0.255859 1.14286 0.571429 1.14286H31.4286C31.7441 1.14286 32 0.886998 32 0.571429C32 0.255859 31.7441 0 31.4286 0Z"
            fill="white"
          />
          <path
            d="M20.5714 29.7143H16.5714V22.8572H17.1429C17.4584 22.8572 17.7143 22.6013 17.7143 22.2857V21.7143H14.2857V22.2857C14.2857 22.6013 14.5416 22.8572 14.8572 22.8572H15.4286V29.7143H11.4286C10.4819 29.7143 9.7143 30.4819 9.7143 31.4286V32H22.2857V31.4286C22.2857 30.4819 21.5182 29.7143 20.5714 29.7143Z"
            fill="white"
          />
        </g>
        <defs>
          <clipPath id="clip0_1_103">
            <rect width="32" height="32" fill="white" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );

  const card2Header = (
    <div
      className="flex justify-content-center align-items-center"
      style={{
        width: 60,
        height: 60,
        borderRadius: 6,
        backgroundColor: Colors.lightGreen,
      }}
    >
      <svg
        width="32"
        height="32"
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clip-path="url(#clip0_1_114)">
          <path
            d="M13.5949 12.4945C13.6325 12.4649 13.6717 12.4383 13.7107 12.4103C13.8098 12.3389 13.9132 12.2744 14.0208 12.2171C14.0631 12.194 14.104 12.171 14.1474 12.1506C15.1516 11.6629 16.3508 11.8273 17.1868 12.567C17.231 12.6054 17.267 12.6491 17.3087 12.6897C17.3927 12.7707 17.4717 12.8566 17.5453 12.9471C17.587 12.9993 17.6218 13.0556 17.6578 13.1107C17.7176 13.1975 17.7728 13.2875 17.8225 13.3805C17.8546 13.4412 17.8826 13.5029 17.91 13.5661C17.9512 13.6602 17.9869 13.7568 18.0173 13.8548C18.0377 13.9207 18.0569 13.9855 18.0736 14.0521C18.0967 14.1545 18.114 14.2577 18.1255 14.362C18.1332 14.4271 18.1428 14.4913 18.1461 14.5569C18.1502 14.6713 18.1472 14.7858 18.1373 14.9C18.1332 14.956 18.1337 15.0122 18.1266 15.0685C18.1038 15.2326 18.0659 15.3946 18.0141 15.5518C18.0141 15.5603 18.0113 15.5683 18.0086 15.5765L19.5179 16.448L22.3284 11.5756L6.75405 2.58191L3.94351 7.45369L13.2419 12.8212C13.3498 12.7023 13.4681 12.5931 13.5949 12.4945V12.4945Z"
            fill="white"
          />
          <path
            d="M1.15436 7.78827L5.65122 0L6.62421 0.561834L2.12734 8.3501L1.15436 7.78827Z"
            fill="white"
          />
          <path
            d="M26.4882 17.8722L27.0506 16.8981L30.9447 19.1465L30.3824 20.1206L26.4882 17.8722Z"
            fill="white"
          />
          <path
            d="M21.0584 16.0341L22.7447 13.114L26.6389 15.3627L24.9525 18.2828L21.0584 16.0341Z"
            fill="white"
          />
          <path
            d="M16.67 15.9646C16.6442 15.9171 16.6115 15.8738 16.5728 15.8359C16.6615 15.7439 16.7391 15.6418 16.8039 15.5318C17.268 14.7249 16.9938 13.6948 16.1899 13.2254C16.0744 13.1607 15.9514 13.1099 15.8241 13.0737C15.7865 13.0624 15.7478 13.0555 15.7118 13.047C15.6193 13.027 15.5252 13.0146 15.4308 13.01C15.3901 13.01 15.3503 13.005 15.3097 13.0061C15.1755 13.0092 15.0421 13.0281 14.9123 13.0624C14.3395 13.2131 13.8885 13.6553 13.7269 14.2253C13.5652 14.7954 13.7167 15.4083 14.1254 15.8375C14.087 15.8749 14.0546 15.9177 14.0288 15.9646L6.41205 31.1863C6.27344 31.4643 6.38625 31.8019 6.66401 31.9408C6.94177 32.0794 7.27964 31.9669 7.41824 31.6888L14.7847 16.9505V31.4377C14.7847 31.7481 15.0363 31.9998 15.3468 31.9998C15.6572 31.9998 15.9089 31.7481 15.9089 31.4377V16.9549L23.2725 31.6888C23.4114 31.9669 23.749 32.0794 24.027 31.9408C24.3048 31.8019 24.4176 31.4643 24.2787 31.1863L16.67 15.9646Z"
            fill="white"
          />
        </g>
        <defs>
          <clipPath id="clip0_1_114">
            <rect width="32" height="32" fill="white" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );

  return (
    <div className="grid m-8">
      <div
        className="sm:col-12 md:col-6 flex flex-column"
        style={{ paddingLeft: "80px" }}
      >
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
      <div
        className="grid sm:col-12 md:col-6 flex"
        style={{ paddingTop: "50px" }}
      >
        <Card
          title="Certified Teacher"
          header={card1Header}
          className="md:w-13rem mr-3 ml-3"
        >
          <div
            style={{
              width: "60px",
              height: "4px",
              backgroundColor: Colors.lightOrange,
              marginBottom: 20,
            }}
          />
          <p className="m-0" style={{ fontSize: "14px", lineHeight: "21px" }}>
            The gradual accumulation of information about
          </p>
        </Card>
        <Card
          title="Expert instruction"
          header={card2Header}
          className="md:w-13rem mr-2 ml-2"
        >
          <div
            style={{
              width: "60px",
              height: "4px",
              backgroundColor: Colors.lightOrange,
              marginBottom: 20,
            }}
          />
          <p className="m-0" style={{ fontSize: "14px", lineHeight: "21px" }}>
            The gradual accumulation of information about
          </p>
        </Card>
      </div>
    </div>
  );
};
