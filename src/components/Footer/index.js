import React from 'react' 
import {FaFacebook, FaInstagram, FaYoutube, FaTwitter} from 'react-icons/fa'
import {FooterContainer, FooterWrap, FooterLinksContainer, FooterLinksWrapper, FooterLinkItems, FooterLinkTitle, FooterLink, SocialMediaWrap, SocialMedia, SocialLogo, WebsiteRights, SocialIcons, SocialIconLink} from './FooterElements'
import {animateScroll as scroll} from 'react-scroll'

const Footer = () => {
    const onToggleHome = () => {
        scroll.scrollToTop();
    }

    return (
        <FooterContainer>
            <FooterWrap>
                <FooterLinksContainer>
                    <FooterLinksWrapper>
                        <FooterLinkItems>
                            <FooterLinkTitle>About Us</FooterLinkTitle>
                                <FooterLink to="/"> About us</FooterLink>
                                <FooterLink to="/"> How it works</FooterLink>
                                <FooterLink to="/"> Testimonials</FooterLink>
                                <FooterLink to="/"> Careers</FooterLink>
                                <FooterLink to="/"> Investors</FooterLink>
                                <FooterLink to="/"> Terms of Service</FooterLink>
                        </FooterLinkItems>
                        <FooterLinkItems>
                            <FooterLinkTitle>Contact Us</FooterLinkTitle>
                                <FooterLink to="/"> Contact</FooterLink>
                                <FooterLink to="/"> Suport</FooterLink>
                                <FooterLink to="/"> Destinations</FooterLink>
                                <FooterLink to="/"> Sponsorships</FooterLink> 
                        </FooterLinkItems>
                    </FooterLinksWrapper>
                    <FooterLinksWrapper>
                        <FooterLinkItems>
                            <FooterLinkTitle>Videos</FooterLinkTitle>
                                <FooterLink to="/"> Submit Video</FooterLink>
                                <FooterLink to="/"> Ambassadors</FooterLink>
                                <FooterLink to="/"> Agency</FooterLink>
                                <FooterLink to="/"> Influencer</FooterLink> 
                        </FooterLinkItems>
                        <FooterLinkItems>
                            <FooterLinkTitle>Social Media</FooterLinkTitle>
                                <FooterLink to="/"> Instagram</FooterLink>
                                <FooterLink to="/"> Facebook</FooterLink>
                                <FooterLink to="/"> Youtube</FooterLink>
                                <FooterLink to="/"> Twitter</FooterLink> 
                        </FooterLinkItems>
                    </FooterLinksWrapper>
                </FooterLinksContainer>
                <SocialMedia>
                <SocialMediaWrap>
                    <SocialLogo to='/' onClick={onToggleHome}>
                        jonax
                    </SocialLogo>
                    <WebsiteRights>jonax © {new Date().getFullYear()} All rights reserved.</WebsiteRights>
                    <SocialIcons>
                        <SocialIconLink href="/" target="_blank" aria-label="Facebook">
                            <FaFacebook />
                        </SocialIconLink>
                        <SocialIconLink href="/" target="_blank" aria-label="Instagram">
                            <FaInstagram />
                        </SocialIconLink>
                        <SocialIconLink href="/" target="_blank" aria-label="Youtube">
                            <FaYoutube />
                        </SocialIconLink>
                        <SocialIconLink href="/" target="_blank" aria-label="Twitter">
                            <FaTwitter/>
                        </SocialIconLink>
                    </SocialIcons>
                </SocialMediaWrap>
                </SocialMedia>
            </FooterWrap>
        </FooterContainer>
    )
}

export default Footer
