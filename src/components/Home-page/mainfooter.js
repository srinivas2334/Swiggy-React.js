// App.js or any component
import Footer from  "../common/Footer"
import { FaLinkedin, FaInstagram, FaFacebook, FaPinterest, FaTwitter } from "react-icons/fa";

function Foot() {
  return (
    <Footer>
      <Footer.Logo src="https://media-assets.swiggy.com/portal/testing/seo-home/Group.svg" alt="Swiggy" />

      <Footer.Section title="Company">
        <Footer.Link href="#">About Us</Footer.Link>
        <Footer.Link href="#">Swiggy Corporate</Footer.Link>
        <Footer.Link href="#">Careers</Footer.Link>
        <Footer.Link href="#">Team</Footer.Link>
        <Footer.Link href="#">Swiggy One</Footer.Link>
        <Footer.Link href="#">Swiggy Instamart</Footer.Link>
        <Footer.Link href="#">Swiggy Dineout</Footer.Link>
        <Footer.Link href="#">Minis</Footer.Link>
        <Footer.Link href="#">Pyng</Footer.Link>
      </Footer.Section>
      <Footer.Section title="">
      <Footer.Section title="Contact us">
        <Footer.Link href="#">Help & Support</Footer.Link>
        <Footer.Link href="#">Partner With Us</Footer.Link>
        <Footer.Link href="#">Ride With Us</Footer.Link> 
      </Footer.Section>
      <div></div>
      <Footer.Section title="Legal">
        <Footer.Link href="#">Terms & Conditions</Footer.Link>
        <Footer.Link href="#">Cookie Policy</Footer.Link>
        <Footer.Link href="#">Privacy Policy</Footer.Link>
      </Footer.Section>
      </Footer.Section>

      <Footer.Section title="Available in">
        <Footer.Link href="#">Bangalore</Footer.Link>
        <Footer.Link href="#">Gurgaon</Footer.Link>
        <Footer.Link href="#">Hyderabad</Footer.Link>
        <Footer.Link href="#">Delhi</Footer.Link>
        <Footer.Link href="#">Mumbai</Footer.Link>
        <Footer.Link href="#">Pune</Footer.Link>
      </Footer.Section>
        <Footer.Section title="">
      <Footer.Section title="Life at Swiggy">
        <Footer.Link href="#">Explore With Swiggy</Footer.Link>
        <Footer.Link href="#">Swiggy News</Footer.Link>
        <Footer.Link href="#">Snackables</Footer.Link>
      </Footer.Section>
        <div></div>
      <Footer.Section title="Social Links">
        <Footer.Social>
          <Footer.SocialIcon icon={<FaLinkedin />} href="#" />
          <Footer.SocialIcon icon={<FaInstagram />} href="#" />
          <Footer.SocialIcon icon={<FaFacebook />} href="#" />
          <Footer.SocialIcon icon={<FaPinterest />} href="#" />
          <Footer.SocialIcon icon={<FaTwitter />} href="#" />
        </Footer.Social>
      </Footer.Section>
      </Footer.Section>
    </Footer>
  );
}

export default Foot;
