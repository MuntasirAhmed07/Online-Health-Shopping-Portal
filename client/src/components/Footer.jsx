import {
  Facebook,
  Instagram,
  MailOutline,
  Phone,
  Pinterest,
  Room,
  Twitter,
} from "@material-ui/icons";
import styled from "styled-components";
import { mobile } from "../responsive";

const Container = styled.div`
  display: flex;
  ${mobile({ flexDirection: "column" })}
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
`;

const Logo = styled.h2``;

const Desc = styled.p`
  margin: 20px 0px;
`;

const SocialContainer = styled.div`
  display: flex;
  margin-top: 130px;
  justify-content: center;
  ${mobile({ marginTop: "0px" })}
`;

const SocialIcon = styled.div`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  color: white;
  background-color: #${(props) => props.color};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
`;

const Center = styled.div`
  flex: 1;
  padding: 20px;
  ${mobile({ display: "none" })}
`;

const Title = styled.h3`
  margin-bottom: 30px;
`;

const Right = styled.div`
  flex: 1;
  padding: 20px;
  ${mobile({ backgroundColor: "#fff8f8" })}
`;

const ContactItem = styled.div`
  margin-bottom: 20px;
  display: flex;
  align-items: center;
`;

const Payment = styled.img`
  width: 50%;
`;

const Footer = () => {
  return (
    <Container>
      <Left>
        <SocialContainer>
          <SocialIcon color="3B5999">
            <Facebook />
          </SocialIcon>
          <SocialIcon color="E4405F">
            <Instagram />
          </SocialIcon>
          <SocialIcon color="55ACEE">
            <Twitter />
          </SocialIcon>
          <SocialIcon color="E60023">
            <Pinterest />
          </SocialIcon>
        </SocialContainer>
      </Left>
      <Center>
        <Logo>Online Health Shopping Portal With Product Recomendation.</Logo>
        <Desc>
          This project helps the users in curing its disease by giving the list
          of fruits and herbs that the user should consume in order to get rid
          of its disease. The main purpose of this project is to help the user
          to easily search for herbs and fruits that will be good for the health
          of the user depending on any health issue or disease that he/she is
          suffering from. This system helps the user to reduce its searching
          time to a great extent by allowing the user to enter its health
          problem and search accordingly. The admin can add fruits and herbs to
          the system and its information. This system also allows the user to
          view the selected fruit or the herb’s description which describes how
          the fruit or the herb will help to improve the user’s health. This
          system also allows the user to place order which will add the items to
          the user’s cart and make payment for the same.Thus, this system helps
          to to get food products best suited for user health to a great extent.
          System can recommended some product to the user.
        </Desc>
      </Center>
      <Right>
        <Title>Contact</Title>
        <ContactItem>
          <Room style={{ marginRight: "10px" }} /> 622 Dixie Path , South
          Tobinchester 98336
        </ContactItem>
        <ContactItem>
          <Phone style={{ marginRight: "10px" }} /> +1 234 56 78
        </ContactItem>
        <ContactItem>
          <MailOutline style={{ marginRight: "10px" }} /> contact@admin.dev
        </ContactItem>
        <Payment src="https://i.ibb.co/Qfvn4z6/payment.png" />
      </Right>
    </Container>
  );
};

export default Footer;
