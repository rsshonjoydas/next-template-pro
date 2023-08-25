import { FC } from 'react';

interface TermsOfUsePageProps {}

const TermsOfUsePage: FC<TermsOfUsePageProps> = () => (
  <>
    <h1 className='mb-4 text-3xl font-bold'>Terms of Use</h1>
    <p className='mb-4'>
      Welcome to our website. By accessing and using this website, you accept and agree to be bound
      by the following terms and conditions.
    </p>
    <p className='mb-4'>
      The content on this website is provided for general informational purposes only. We make no
      representations or warranties of any kind, express or implied, about the accuracy,
      reliability, suitability, or availability of the website or the information, products,
      services, or related graphics contained on the website.
    </p>
    <p className='mb-4'>
      Your use of any information or materials on this website is entirely at your own risk. It
      shall be your own responsibility to ensure that any products, services, or information
      available through this website meet your specific requirements.
    </p>
    <p className='mb-4'>
      This website contains material that is owned or licensed to us. This material includes, but is
      not limited to, the design, layout, look, appearance, and graphics. Reproduction is prohibited
      without prior written consent.
    </p>
    <p className='mb-4'>
      From time to time, this website may also include links to other websites. These links are
      provided for your convenience to provide further information. They do not signify that we
      endorse the website(s). We have no responsibility for the content of the linked website(s).
    </p>
    <p>
      Your use of this website and any dispute arising out of such use of the website is subject to
      the laws of [your country/region].
    </p>
  </>
);

export default TermsOfUsePage;
