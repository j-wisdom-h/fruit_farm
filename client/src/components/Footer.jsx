import styled from 'styled-components';

const StyledContainer = styled.footer`
    position:sticky;
    bottom:0;
    font-size: 1rem;
    border-top: 1px solid lightgray;
    width: 100%;
    padding: 1% 2.1%;
    background-color:#fff;
`;

const StyledFooter= styled.div`
    display:flex;
`

const StyledFooterMenu = styled.a`
 &:not(:last-of-type) {
    padding-right: 2%;
  }
 font-size: 0.9rem;
`

const Footer = () => {
    return (
        <StyledContainer>
            <StyledFooter>
                <StyledFooterMenu href="#">이용약관</StyledFooterMenu>
                <StyledFooterMenu href="#">개인정보처리방침</StyledFooterMenu>
                <StyledFooterMenu href="#">고객센터</StyledFooterMenu>
                <StyledFooterMenu href="#">사이트 소개</StyledFooterMenu>
            </StyledFooter>
        </StyledContainer>
    )
}

export default Footer;
