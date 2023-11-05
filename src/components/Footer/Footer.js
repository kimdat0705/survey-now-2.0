import React from "react";
import styles from "./Footer.module.css";
import { Divider } from "antd";

const Footer = () => {
  return (
    <nav className={`${styles.navbarWrapper} center`}>
      <div className={`${styles.navbarColumn} center`}>
        <div className={`${styles.navbarInner} center`}>
          <div className={`${styles.navLeft}`}>Survey Now 2023</div>
          <div className="center">
            <a href="/" className={`${styles.navLink}`}>
              Terms of use
            </a>
            <a href="/" className={`${styles.navLink}`}>
              Privacy policy
            </a>
          </div>
          <div>
            <span>
              <a href="https://www.facebook.com/surveynow23" className="fab fa-facebook-square" style={{ color: "white" }}>
                {" "}
              </a>
            </span>
            <span>
              <a href="#linkedin" className="fab fa-linkedin" style={{ color: "white" }}>
                {" "}
              </a>
            </span>
            <span>
              <a
                href="https://www.instagram.com/surveynow.2023/"
                className="fab fa-instagram"
                style={{ color: "white" }}
              >
                {" "}
              </a>
            </span>
            <span>
              <a href="https://www.pinterest.com/" className="fab fa-pinterest" style={{ color: "white" }}>
                {" "}
              </a>
            </span>
          </div>
          {/* </div> */}
        </div>
        <div className={`${styles.footerText} center`}>
          <p>
          © Copyright 2023 Survey Now | All Rights Reserved
          </p>
          
        </div>
        <Divider style={{ borderColor: 'white' }}/>
      </div>
    </nav>
  );
};
export default Footer;
