import React from 'react';
import {
  Col,
  Container,
  Navbar,
  NavbarBrand,
  Row,
  Button
} from 'reactstrap';
import Logo from './assets/images/logo.png';
import './App.scss';

import GithubIcon from './assets/images/icon-github.png';
import TwitterIcon from './assets/images/icon-twitter.png';
import TelegramIcon from './assets/images/icon-telegram.png';
import MediumICon from './assets/images/icon-medium.png';
import BooksIcon from './assets/images/icon-books.png';

function App() {
  return (
    <div className="App">
        <Navbar color="transparent" light expand="md" className="position-absolute px-5">
          <NavbarBrand href="/">
            <img src={Logo} alt="" />
          </NavbarBrand>
        </Navbar>
        <Container fluid >
          <Row>
            <Col md={{ size: 4, offset: 4 }} sm={{ size: 8, offset: 2 }}>
              <h2 className="text-white">Multi-chain DeFi Hub based on Binance Smart Chain with functional NFTs</h2>
            </Col>
            <Col className="my-5" md={{ size: 6, offset: 3 }} sm={{ size: 8, offset: 2 }}>
              <Button color="primary">Launch App</Button>
            </Col>
            <Col md={{ size: 6, offset: 3 }} sm={{ size: 8, offset: 2 }}>
              <a className="social-icon" href="https://github.com/MathTheOneAndOnly/ZeniFinance"><img src={GithubIcon} alt="" /></a>
              <a className="social-icon" href="https://twitter.com/ZeniProtocol "><img src={TwitterIcon} alt="" /></a>
              <a className="social-icon" href="https://t.me/zeniprotocol "><img src={TelegramIcon} alt="" /></a>
              <a className="social-icon" href="https://medium.com/@zeniprotocol"><img src={MediumICon} alt="" /></a>
              <a className="social-icon" href="https://books.google.com"><img src={BooksIcon} alt="" /></a>
            </Col>
          </Row>
        </Container>
    </div>
  );
}

export default App;
