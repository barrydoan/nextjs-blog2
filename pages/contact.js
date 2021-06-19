import ContactForm from '../components/contact/contact-form';
import {Fragment} from "react";

function ContactPage() {
  return (
    <Fragment>
      <Head>
        <title>Contact Me</title>
        <meta name='description' content='Send me you message'/>
      </Head>
      <ContactForm />
    </Fragment>
  );
}
export default ContactPage;