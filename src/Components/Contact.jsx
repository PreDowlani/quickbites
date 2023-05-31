import React from "react";
import { useTranslation } from "react-i18next";

const Contact = () => {
  const { t } = useTranslation();
  return (
    <div className="contacto">
      <div className="contact">
        <h1>{t("home-container.contact.title")}</h1>
      </div>
      <div className="info">
        <h1>Quick Bites</h1>
        <h3>{t("home-container.contact.info.address")}</h3>
        <h3>{t("home-container.contact.info.phone")}</h3>
        <h3>{t("home-container.contact.info.email")}</h3>
        <div className="timings">
          <ul>{t("home-container.contact.info.timings.openingHours")}</ul>
          <li>{t("home-container.contact.info.timings.weekday")}</li>
          <li>{t("home-container.contact.info.timings.weekend")}</li>
        </div>
      </div>
    </div>
  );
};

export default Contact;
