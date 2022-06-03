import React from 'react';
import './PrivacyMain.scss';

import ColumnText from '../../../components/ColumnText/ColumnText';

import { privacyPolicyData } from '../PrivacyPolicyData';
import { sources } from '../PrivacyPolicyData'; 
import { howUse } from '../PrivacyPolicyData';
import PrivacyBlock from './component/PrivacyBlock/PrivacyBlock';
import PrivacySources from './component/PrivacySources/PrivacySources';
import PrivacyHowUse from './component/PrivacyHowUse/PrivacyHowUse';

const PrivacyMain = () => {
  return (
    <div className="privacy">
      <h1 className="privacy__title">Privacy Policy</h1>
      <span className="privacy__date">Effective Date: January 12, 2021</span>
      <div className="privacy__descr">
        <p>Hireterra LLC <b>(“Hireterra,” “we,” “us” or “our”)</b> is committed to respecting and protecting your privacy. This Privacy Policy describes our privacy practices pertaining to our Website <a href="https://hireterra.com">https://hireterra.com</a> and the services we offer through our Website (“Services”) and the rights and choices available to individuals with respect to their information.</p>  
        <p>By submitting information, including your personal information, through our Services, you agree to the terms of this Privacy Policy as well as our Cookie Policy located at <a href="https://hireterra.com/cookie-policy">https://hireterra.com/cookie-policy</a> and our Terms of Use located at <a href="https://hireterra.com/terms">https://hireterra.com/terms.</a> If you do not agree with any of these policies or terms, discontinue use of the Services immediately.</p>
      </div>
      
      <div className="privacy__content">
        <h2>1. Changes to this Privacy Policy</h2>
        <ColumnText 
          text="If we make a material change to this Privacy Policy, we will post a notice of those changes on the Website and will use commercially reasonable efforts to notify you by email (sent to the email address specified in your account) prior to the change becoming effective. You are bound to changes to this Privacy Policy when you use the Website or Services after those changes have been posted on the Website or have been emailed to you. We encourage you to periodically review this page for the latest version of this Privacy Policy. Information you provide to us. We collect personal information to provide you with the Services as follows:" 
          title="Browsing:" 
          descr="No personal information - such as your name, address, contact phone numbers or email address — will be collected if you are only browsing our Website except as stated in the Website Information below."
        />
        <ColumnText 
          title="Log-in Credentials:" 
          descr="If you create an account to access and use our Services, we collect your first name, last name, company, address, telephone number, email address, user identifier and password."
        />
        <ColumnText 
          title="Your Material you choose to upload to the Service" 
          descr="such as your resume or CV, links to your LinkedIn profile, text, images, audio, and video, along with the metadata associated with the files you upload. Your Material may include protected classification information under federal and California law, such as: age if 40 years or older, race, color, citizenship, religion or creed, marital status, medical condition, physical or mental disability, sex (including gender, pregnancy or childbirth and related medical conditions), veteran or military status, genetic information (including familial genetic information) or information pertaining to your education or employment or visual, audio, olfactory, electronic or similar data. Inferences may be drawn from personal information such as personal preferences, characteristics, psychological trends, predispositions, behavior, attitudes, intelligence, abilities, or aptitudes."
        />
        <ColumnText 
          title="Website Information:" 
          descr="When you access our Website, we automatically collect your computer’s internet protocol (IP) address and other technical information about your computer and Website usage, namely, your browser type and version, internet service provider, time zone setting, referring/exit pages, operating system, date/time stamps and/or clickstream data. We also use cookies and similar tracking technologies on our websites; for more information, please see the Cookies and Similar Technologies Information section below."
        />
        <ColumnText 
          title="Other information" 
          descr="that we may collect which is not specifically listed here, but which we will use in accordance with this Privacy Policy or as otherwise disclosed at the time of collection."
        />
      </div>

      <div className="privacy__sources">
        <h2>2. Sources of Information</h2>
        <div className="privacy__sources-wrapp">
          {
            sources.map(item => (
              <PrivacySources {...item} />
            ))
          }
        </div>
      </div>

      <div className="privacy__use">
        <h2>4. How We Use Your Personal Information</h2>
        <div className="privacy__use-wrapp">
          {
            howUse.map(item => (
              <PrivacyHowUse {...item} />
            ))
          }
        </div>
      </div>

      <div className="privacy__content">
        <h2>5. How We Share your Personal Information</h2>
        <ColumnText 
          text="We may share your personal information as follows:" 
          title="Users." 
          descr="Your personal information and Your Materials will be shared with others, e.g. recruiters, employers, with your consent. We cannot control, and are not responsible for, use of your personal information or Your Materials once disclosed to such users with your consent.Your personal information and Your Materials will be shared with others, e.g. recruiters, employers, with your consent. We cannot control, and are not responsible for, use of your personal information or Your Materials once disclosed to such users with your consent."
        />
        <ColumnText 
          title="Affiliates." 
          descr="We may share your personal inform"
        />
        <ColumnText 
          title="Service providers." 
          descr="We may share your personal information with third party companies and individuals that provide services on our behalf or help us operate, support and improve the Service (such as customer support, hosting, analytics, email delivery, marketing, and database management services). These third parties may use your personal information only as directed or authorized by us and in a manner consistent with this Privacy Policy, and are prohibited from using or disclosing your information for any other purpose."
        />
        <ColumnText 
          title="Other Users of the Service and the Public." 
          descr="We do provide functionality that enables you to disclose personal information to other users of the Service or the public including third party platforms or social media networks. For instance, you may be able to maintain a user profile with information about yourself that you can make available to other users or the public. You may also be able to submit Your Material Content to the Service (such as comments, reviews, surveys, blogs, photos, and videos), and we will display your name, username, and a link to your user profile along with Your Materials The content you submit. [We may make available settings through the [My Account] page that enable you to exercise choice regarding certain information that is displayed publicly or to other users.] We do not control how other users or third parties use any personal information that you make available to such users or the public."
        />
        <ColumnText 
          title="Professional advisors." 
          descr="We may disclose your personal information to professional advisors, such as lawyers, bankers, auditors and insurers, where necessary in the course of the professional services that they render to us."
        />
        <ColumnText 
          title="For compliance, fraud prevention and safety." 
          descr="We may share your personal information for the compliance, fraud prevention and safety purposes as described above."
        />
        <ColumnText 
          title="Business transfers." 
          descr="We may sell, transfer or otherwise share some or all of our business or assets, including your personal information, in connection with a business transaction (or potential business transaction) such as a corporate divestiture, merger, consolidation, acquisition, reorganization or sale of assets, or in the event of bankruptcy or dissolution."
        />
      </div>

      <div className="privacy__wrapp">
        {
          privacyPolicyData.map(item => (
            <PrivacyBlock {...item}/>
          ))
        }
      </div>
    </div>
  )
}

export default PrivacyMain