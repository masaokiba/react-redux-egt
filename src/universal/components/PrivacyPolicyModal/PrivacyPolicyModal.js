import React, {Component, PropTypes} from 'react';
import {FlatButton, Dialog} from 'material-ui';
import {white, black} from 'universal/styles/colors';
import shallowCompare from 'react-addons-shallow-compare';

const styles = {
  link: {
    color: white,
    cursor: 'pointer',
    textDecoration: 'underline'
  },
  pFirst: {
    marginTop: 0
  }
};

export default class PrivacyPolicyModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
    };
  }

  shouldComponentUpdate(nextProps, nextState) {
    // pure render
    return shallowCompare(this, nextProps, nextState);
  }

  handleOpen = () => {
    this.setState({open: true});
  };

  handleClose = () => {
    this.setState({open: false});
  };

  render() {

    const actions = [
      <FlatButton
        label="Close"
        primary
        onTouchTap={this.handleClose}
      />
    ];

    const color = this.props.color || white;
    const linkStyle = Object.assign({}, styles.link, {
      color
    });

    return (
      <span>
        <a style={linkStyle} onTouchTap={this.handleOpen} >
          {this.props.children}
        </a>
        <Dialog title="Privacy Policy"
          actions={actions}
          modal
          open={this.state.open}
          autoScrollBodyContent >
          <p style={styles.pFirst}>Welcome to Taylor Allan Training LTD. We have created this privacy policy to demonstrate our commitment to protecting your privacy, and to disclose our information-gathering and dissemination practices. This privacy policy is here to tell you about, among other things, the information Taylor Allan Training LTD. collects, how we use that information, how you can opt out of certain uses of the information we collect, and how Taylor Allan Training LTD. can make changes to this privacy policy. Please let us know if you have any questions regarding this privacy policy by contacting us at helpdesk@eliteguardtraining.com</p>
          <p>But first a note about children’s privacy...</p>
          <p>We do not knowingly collect personal information from children under the age of 13. If we learn that we have inadvertently obtained personal information on a child under the age of 13, that information will be deleted from our systems Taylor Allan Training LTD. encourages parents to go online with their kids. Here are a few tips to help make a child’s online experience safer:</p>
          <p>Teach kids never to give out personal information, unless supervised by a parent or responsible adult. This includes their name, address, phone number, school, etc.</p>
          <p>Know the sites your kids are visiting and which sites are appropriate.</p>
          <p>Look for Web site and other privacy policies. Know how your child’s information is being treated.</p>
          <p>What information does Taylor Allan Training LTD. collect?</p>
          <p>In collecting your personal information, we aim to provide you with a more customized experience. This information lets us provide services and features that we think are more likely to meet your needs. Of course, users may be able to use our products or services or browse our Web sites without providing any personal information, but once you give us this personal information, you are not anonymous to us.</p>
          <p>Taylor Allan Training LTD. collects two types of information when you visit our Web site(s) or you do business with us via any medium: information that may be used to identify you individually, such as your name, physical address, phone number, and email address (“personal information”); and nonpersonal information, such as IP addresses, the type of browser you are using, and aggregated information about user activities on our Web site(s) (“nonpersonal information”).</p>
          <p>Personal Information: We specifically request personal information from you at certain points on and off our Web site(s). For example, when you sign up for our newsletter, subscribe to our Web site(s), or when you purchase an item or service, we collect personal information to complete the transaction. This information may include, without limitation, your name, shipping and billing addresses, telephone number, email address, and credit card information. If you apply to join our Affiliate Program, we may collect information about your business, including, without limitation, your (or your organization’s) name, email address, street address, telephone number, tax identification number, and information about your Web site (e.g., the URL, the number of unique users and page views, the demographics of your user base, etc.). From time to time, we may also request personal information about you and your interests in surveys, contest entry forms, or in other ways. You may always choose not to provide us with your personal information; however, this may limit our ability to provide you with a specific product or service, or to offer you personalized content.</p>
          <p>Nonpersonal Information: When you visit our Web site(s), we also collect nonpersonal information, such as your IP address, which is a number that can be used to identify your location and Internet Service Provider. We may also collect the URL from which you came to our Web site(s) and the URLs visited on our Web site(s). A URL is the full address of a Web site page, which may contain some personal or identifying information about the person who is viewing it.</p>
          <p>Information We Obtain from Other Sources: We may collect information about you from other sources, including through interactive applications (such as mobile devices/applications and third-party services) and from commercially available sources (such as data aggregators and public databases). For example, if you access third-party services (such as Facebook Connect) through or in connection with our Web site(s), we collect information available about you through those services, including, but not limited to, Personal Information as well as publicly observable data, such as activities on blogs, videos, and other online postings.</p>
          <p>Use of Cookies: We also use a feature of your browser called a cookie to assign identification to your computer. The unique user ID contained within your cookie automatically identifies your computer—but not you—to our servers every time you visit our Web site(s). Cookies by themselves cannot be used to find out the identity of any user, but may be correlated with identity information in our log files. You can turn off the cookie feature by using your browser preference options, but you may not be able to utilize some services properly. Current versions of many Web browsers offer enhanced user controls for the placement and duration of cookies. Search for “cookies” under your Web browser’s Help menu for more information on the cookie management features available to you.</p>
          <p>Use of Pixel Tags: We also collect information through the use of “pixel tags” included in email messages we may send to you. Pixel tags, also known as “Web beacons,” are tiny graphic files, not visible to the human eye, that are included in HTML-encoded email messages. When such a message is opened in an HTML-capable email program, the recipient’s computer will access our server to retrieve the pixel tag file, allowing us to record and store, along with the recipient’s email address, the date and time the recipient viewed the email message, the fact that the recipient’s email program is capable of receiving HTML-encoded email, and other standard logging information. The pixel tag may also see or read cookies. Taylor Allan Training LTD. may use pixel tags in order to measure and understand traffic better, to track visitor behavior to improve user experience, and for tracking promotional and marketing campaign response, among others. You can disable the pixel tag feature by changing your browser settings to omit images and disable Javascript; or there are commercial software packages available that can omit pixel tags and most advertisements.</p>
          <p>How does Taylor Allan Training LTD. use or disclose the information it collects?</p>
          <p>Taylor Allan Training LTD. Use of Personal Information and Nonpersonal Information: We use your personal information to process your requests and to improve our business, including, but not limited to, improving the features of our Web site(s), and to communicate with you. We may also use your personal information to personalize our Web site(s), to target advertising or promotions that may be of interest to you, to conduct business in any manner that we, in our sole discretion, deem appropriate, and to analyze aggregate user data in order to improve our services. On occasion, we may also contact you about Taylor Allan Training LTD. or any of its business units’ or partners’ products or services that we think you will find useful. We might also contact you to see if you are interested in participating in market research regarding Taylor Allan Training LTD. For information about opting out of such communications, please see our Opt-Out Policy section below.</p>
          <p>Cookies (again): We may use cookie and IP address information to count and track Web site visits in the aggregate, to personalize the Web site(s) for each unique user, to control the frequency of individual advertisements to individual computers, and to target advertisements and promotions to broad demographic segments. We may also use IP addresses to help diagnose problems with our server, and to administer our Web site(s).</p>
          <p>Customer Service Issues and Contacts: We may use your personal information to contact you in response to customer service complaints you have submitted, to address a problem affecting your use of a product or service, or to verify information concerning a transaction.</p>
          <p>Transaction Processing: When you make a purchase, we may need to provide personal information, including information such as your shipping address, billing information, telephone number, and credit card information, to third parties, including product manufacturers and shipping companies, as necessary solely to complete the transaction.</p>
          <p>Legal Requirements: We may, in our sole discretion, disclose personal information when we deem necessary or appropriate to law enforcement or other entities or third parties as required by law or to protect our rights or the rights of others, to prevent harm to persons or property, to fight fraud, identity theft, or otherwise to comply with the law or legal process, to respond to claims, to protect our systems and customers, to ensure the integrity and operation of our business and systems, or to protect the rights, property, or safety of Taylor Allan Training LTD. and its employees or others.</p>
          <p>Business and Accounting Disclosures: We may also disclose non-identifying transaction information to third parties for the purpose of accounting and record keeping. We may also disclose aggregate user data or nonpersonal information in order to describe our services to prospective business partners, advertisers, and others, but will do so only in a form that does not identify individual users.</p>
          <p>Third-Party Tools/Services: At various points and pages on our Web site(s), you may be able to access or utilize tools and/or services offered by or in conjunction with third parties, including tools and services in connection with third-party “social media” and other sites that would allow personal information to be transferred to such third parties (for example, Facebook Connect). These third parties have separate data collection and privacy practices independent from ours, and thus Taylor Allan Training LTD. cannot be responsible for their policies or activities. Please contact those third parties directly if you have questions about their privacy policies.</p>
          <p>Other Disclosures: Occasionally, we may disclose personal information in other circumstances, but we will only do this if we have explained at the time we collect the information the purpose for which it will be disclosed.</p>
          <p>Opt-Out Policy</p>
          <p>You may opt out of receiving communication from us, from Affiliated Companies, or from other third parties by emailing us at helpdesk@taylorallantraining or writing to us at:
            <br/>
            <br/> Taylor Allan Training LTD.
            <br/> 5-555 Chablis Street
            <br/> Waterloo, Ontario
            <br/> N2T 2Y7
            <br/>
            <br/> Attention: Privacy Policy Department</p>
          <p>In addition, when we contact you via email, we may include instructions to enable you to unsubscribe from future emails if you so choose. You agree and understand that while we will do our best to comply with your request, we shall not be liable for any problems or delays associated with the opt-out process.</p>
          <p>Security</p>
          <p>Taylor Allan Training LTD. uses industry-standard security measures in place to protect the loss, misuse, and alteration of the information under our control, and we make good-faith efforts to store your personal information in a secure operating environment. Unfortunately, no data transmission over the Internet can be guaranteed to be absolutely secure. As a result, while we strive to protect your personal information, we cannot ensure or warrant the security of any information you transmit to us or our online products or services, and you do so at your own risk.</p>
          <p>Other Web Sites; Links</p>
          <p>On our Web site(s) and in communication with you, we may include links or referrals to businesses and Web sites operated by our business partners, affiliates, advertisers, and others. These third parties have separate data collection and privacy practices independent from ours, and thus Taylor Allan Training LTD. cannot be responsible for their policies or activities. Please contact those third parties directly if you have questions about their privacy policies.</p>
          <p>How can I correct, update, or delete my information?</p>
          <p>Taylor Allan Training LTD. does not currently have a method for users to delete the personal information contained in our database. However, you may change or update the personal information we have collected by sending an email to helpdesk@eliteguardtraining.com. Please include your email address, your order number, the name of the product you purchased, and the information you wish to change. In addition, you may delete the cookie stored on your computer, which will cause our system to perceive you as a new user with no known user data. You may also set your browser to reject cookies, but doing so may prevent you from using some of our services.</p>
          <p>Users Based Outside of the Canada</p>
          <p>Like almost every Web site and business, Taylor Allan Training LTD. and its Web site(s) may be accessed by an international audience. By visiting any of our Web site(s) and providing us with data, you acknowledge and agree that your personal information may be processed for the purposes identified in this policy. In addition, such data may be stored on servers located in Canada or otherwise outside your resident jurisdiction; such jurisdictions may have less stringent privacy practices than your own. By providing us with your data, you consent to the transfer of such data.</p>
          <p>What happens to my information if Taylor Allan Training LTD. is sold to or merges with another company?</p>
          <p>It is possible that Taylor Allan Training LTD. and/or any of our assets may be acquired by an unrelated third party. In such a transaction, as the owner of this customer information, we may disclose or sell the information as an asset of the company in conjunction with the sale of our company or the sale of a portion of our assets to a third party. While we will endeavor to require the successor company to maintain this privacy policy, we cannot guarantee that our policy will remain in effect.</p>
          <p>Changes to This Policy</p>
          <p>This policy may change from time to time. If we make any substantive changes to the policy in the future with regard to how we use your information, we will post those changes on our Web site(s) in this location together with the date of the last update. Your continued business relationship or use of the Web site(s) after the changes are posted constitutes your agreement to the changes, both with regard to information we have previously collected from you and with regard to information we collect from you in the future. If you do not agree to the changes, please discontinue your use of our Web site(s) or business relationship with us.</p>
          <p>Contacting Taylor Allan Training</p>
          <p>Please feel free to share any comments and concerns with us. If you have any questions about this privacy policy or the practices of this Web site, please contact:</p>
          <p>Taylor Allan Training LTD.
            <br/> 5-555 Chablis Street
            <br/> Waterloo, Ontario
            <br/> N2T 2Y7
            <br/>
            <br/> Attention: Privacy Policy Department
            <br/>
            <br/> or email us: helpdesk@eliteguardtraining.com
            <br/>
            <br/> Last updated and effective November 27, 2012
          </p>
        </Dialog>
      </span>
    );
  }
}
