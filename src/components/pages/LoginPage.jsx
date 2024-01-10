import React from "react";
import Button from "../Button";
import FooterContent from "../footercontent/FooterContent";
import { AiFillMessage } from "react-icons/ai";
import { MdOutlineVideoCameraFront } from "react-icons/md";
import { FaCode } from "react-icons/fa6";
import { TbBrandFacebook } from "react-icons/tb";
import { TiSocialGooglePlus } from "react-icons/ti";
import { GrLinkedin } from "react-icons/gr";

const LoginPage = ({ primary_btn, secondary_btn, tertiary_btn }) => {
  return (
    <div className="main_container">
      <div className="image_overlay">
        <div className="form-content">
          <form className="login_page left-content">
            <div className="form_title">
              {" "}
              <h3
                className="form_header"
                style={{
                  color: "#69289d",
                  fontWeight: "bold",
                  fontFamily: "poppins",
                  fontSize: "20px",
                }}
              >
                Channakya Software
              </h3>
              <p style={{ fontSize: "10px", color: "grey" }}>
                {" "}
                A peace of mind is piece of mine
              </p>
            </div>
            <p className="signup_text"> Sign Up With</p>
            <div className="web_buttons">
              <Button type="primary_btn">
                <span>
                  <TbBrandFacebook />
                </span>
                Facebook
              </Button>
              <Button type="secondary_btn">
                <span>
                  <TiSocialGooglePlus />
                </span>
                <span>Google</span>
              </Button>
              <Button type="tertiary_btn">
                <GrLinkedin />
                LinkedIn
              </Button>
            </div>
            <p className="filling_text">
              {" "}
              Or fill in required fields and become a member
            </p>

            <div className="label_align">
              {" "}
              <label>Name</label>
              <input type="text" name="name" />
            </div>

            <div className="label_align">
              {" "}
              <label>Email</label>
              <input type="text" name="email" />
            </div>

            <div className="label_align">
              {" "}
              <label>Password</label>
              <input type="text" name="password" />
            </div>

            <div className="checkbox_type">
              {" "}
              <input type="checkbox" />
              <label>
                Agree to{" "}
                <span
                  style={{
                    color: "#7030a0",
                    fontWeight: "600",
                    fontSize: "12px",
                  }}
                >
                  {" "}
                  Terms & Conditions
                </span>
              </label>
            </div>
            <button className="sign_up">Sign Up</button>

            <FooterContent />
          </form>
          <div className="rightCard">
            <h1 className="right_heading">
              Create professional survey with our online survey tool.
            </h1>
            <p className="right_para">
              We are a company that specifies in using video entertainment for
              the purpose of market research and advertising. The mix of video
              entertainment and market research creates a synergy that greatly
              enhances the quality of both sectors.
            </p>

            <div className="listing_items">
              <h4 className="list_heading">
                Create survey with this 3 easy steps
              </h4>
              <ul className="list_steps_icons">
                <li>
                  <span>
                    <AiFillMessage className="react_icons" />
                  </span>
                  <h3>Step 1</h3>
                  <p>Lorem ipsum dolor sit.</p>
                </li>
                <li>
                  <span>
                    <MdOutlineVideoCameraFront className="react_icons" />
                  </span>
                  <h3>Step 2</h3>
                  <p>Lorem ipsum dolor sit.</p>
                </li>
                <li>
                  <span>
                    <FaCode className="react_icons" />
                  </span>
                  <h3>Step 3</h3>
                  <p>Lorem ipsum dolor sit.</p>
                </li>
              </ul>
            </div>
            <p className="paragraph_last">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Laboriosam repudiandae vero doloremque nobis nostrum autem ad
              laudantium hic sit, aspernatur porro, ipsum doloribus. Accusantium
              est assumenda architecto dicta culpa beatae.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
