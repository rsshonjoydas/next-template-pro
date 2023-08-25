import { FC } from 'react';

interface PrivacyPolicyPageProps {}

const PrivacyPolicyPage: FC<PrivacyPolicyPageProps> = () => (
  <>
    <h1 className='mb-4 text-3xl font-bold'>Privacy Policy</h1>
    <p className='mb-4'>
      Your privacy is important to us. This Privacy Policy explains how we collect, use, and
      disclose your personal information when you use our website.
    </p>
    <p className='mb-4'>
      We may collect personal information from you when you fill out a contact form, subscribe to
      our newsletter, or interact with our website in any other way. This information may include
      your name, email address, and any other information you choose to provide.
    </p>
    <p className='mb-4'>
      We use your personal information to respond to your inquiries, send you newsletters or other
      promotional materials, and improve our website and services. We will not share your personal
      information with any third parties without your consent, except in cases where we are legally
      required to do so.
    </p>
    <p className='mb-4'>
      Our website may use cookies to enhance your browsing experience. These cookies are stored on
      your computer and can be deleted at any time. You can also configure your browser to reject
      cookies, but this may limit your ability to use certain features of our website.
    </p>
    <p>
      By using our website, you consent to the collection, use, and disclosure of your personal
      information as described in this Privacy Policy.
    </p>
  </>
);

export default PrivacyPolicyPage;
