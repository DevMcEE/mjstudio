import { Contact } from "@/app/api/route.types";
import styles from "../page.module.css";
import { useTranslations } from "next-intl";
import { GoogleMapsEmbed } from "@next/third-parties/google";
import { SocialIconLinks } from "@/app/components/SocialIconLinks";

interface ContactsBlockProps {
  contacts?: Contact;
  contactsId?: string;
};

export const ContactsBlock = ({ contacts, contactsId = 'contacts' }: ContactsBlockProps) => {
  const { companyName, companyRegNum, companyAddress, workingHours, bookingNote, callToContact, email, phone, socialLinks, visiblePhone } = contacts || {};
  const googleMapsApiKey = process.env.GOOGLE_MAPS_API_KEY;
  const t = useTranslations();
  return contacts ? (
    <div className={styles.blockContainerFullWidth} id={contactsId}>
      <div className={styles.blockTitleContainer}>
        <h2 className={styles.blockTitle}>{t('contacts.title')}</h2>
      </div>

      {googleMapsApiKey && (
        <div className={`${styles.mapContainer} map-container` }>
        <GoogleMapsEmbed
          apiKey={googleMapsApiKey}
          height={400}
          width='100%;'
          mode="place"
          zoom="16"
          style="width: 100%; height: 400px;"
          q={companyAddress}
        />
        </div>
      )}

      <div className={`${styles.blockContentContainer} ${styles.innerBlockDelimiter}`}>
        <p className={styles.contentParagraph}>{ bookingNote }</p>
        <p className={styles.contentParagraph}></p>
        <p className={styles.contentParagraph}>{ callToContact }</p>
        <p className={styles.contentParagraph}><a href={`mailto:${email}`}>{email}</a></p>
        <p className={styles.contentParagraph}><a href={`tel:${phone}`}>{visiblePhone}</a></p>
        <div className={styles.socialIconLinksContainer}>
          <SocialIconLinks socialLinks={socialLinks}/>
        </div>

        <div className={styles.workingHours}>
          <h3>{t('contacts.workingHoursTitle')}</h3>
          {workingHours?.map((workingHour, index) => (
            <p key={index}>{workingHour.weekdays}: {workingHour.hours}</p>
          ))}
        </div>

        <h3 className={styles.boldText}>{companyName}</h3>
        <p>{companyRegNum}</p>
        <p>{companyAddress}</p>


      </div>
    </div>
  ) : null;
}