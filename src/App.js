import './App.scss';
import MyNavbar from './components/MyNavbar.js';
import Hero from './components/Hero.js';
import Card from './components/Card.js';
import Button from './components/Button.js';
import navLogo from './assets/logo-nav.png';
import shipImage from './assets/ship.png';
import TextBlock from './components/TextBlock.js';
import { ShieldSharp, NavigateNextOutlined } from "@ricons/material";

import { Icon, IconConfigProvider } from "@ricons/utils";

function App() {
  return (
    <div className="container-fluid">
      <div className="container">
        <MyNavbar
          logo={navLogo}
          logo_name="QuantumSky Solutions"
          items={[
            { text: 'Home', href: "/" },
            { text: 'Solutions', href: "/contact" },
            { text: 'About us', href: "/about" },
            { text: 'Pricing', href: "/pricing" },
            { text: 'Contact', href: "/contact" },
          ]}
        />
      </div>

      <div className="container-fluid">
        <Hero
          bg_image="//via.placeholder.com/2560x600"
          h_title="Lorem ipsum"
          h_text="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
          overlay_position="position-absolute bottom-50 end-50"
        />
      </div>
      <div className="container d-flex justify-content-center">
        <Card
          title="Lorem ipsum"
          text="Dolor sit amet"
          card_styling="w-25 mt-n5 mx-5"
          actions={
            <>
              <Button text="View more" href="/" />
            </>
          }
        />
        <Card
          title="Lorem ipsum"
          text="Dolor sit amet"
          card_styling="w-25 mt-n5 mx-5"
          actions={
            <>
              <Button text="Get started" href="/" variant="info" />
            </>
          }
        />
      </div>

      <div className="container">
        <TextBlock
          image={shipImage}
          title="Our mission"
          text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
          styling="d-flex align-items-center w-75 m-5"
        />

        <TextBlock
          image={shipImage}
          title="Newest technology"
          text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
          styling="d-flex align-items-center flex-row-reverse w-75 m-5"
        />
      </div>

      <div className="container text-center">
        <h1>Why QuantumSky</h1>
        <div className="row row-cols-3">
          <div className="col">
            <IconConfigProvider color="blue" size="42">
              <Icon>
                <ShieldSharp />
              </Icon>
            </IconConfigProvider>
            <Card

              title="DDOS Protection"
              text="Lorem ipsum Dolor sit amet, sonsectetur"
              card_styling=""
              actions={
                <>
                  <Button text="Get started" href="/" variant="info" />
                </>
              }
            />
          </div>
          <div className="col">
            <IconConfigProvider color="blue" size="42">
              <Icon>
                <ShieldSharp />
              </Icon>
            </IconConfigProvider>
            <Card

              title="DDOS Protection"
              text="Lorem ipsum Dolor sit amet, sonsectetur"
              card_styling=""
              actions={
                <>
                  <Button text="Get started" href="/" variant="info" />
                </>
              }
            />
          </div>
          <div className="col">
            <IconConfigProvider color="blue" size="42">
              <Icon>
                <ShieldSharp />
              </Icon>
            </IconConfigProvider>
            <Card

              title="DDOS Protection"
              text="Lorem ipsum Dolor sit amet, sonsectetur"
              card_styling=""
              actions={
                <>
                  <Button text="Get started" href="/" variant="info" />
                </>
              }
            />
          </div>
          <div className="col">
            <IconConfigProvider color="blue" size="42">
              <Icon>
                <ShieldSharp />
              </Icon>
            </IconConfigProvider>
            <Card

              title="DDOS Protection"
              text="Lorem ipsum Dolor sit amet, sonsectetur"
              card_styling=""
              actions={
                <>
                  <Button text="Get started" href="/" variant="info" />
                </>
              }
            />
          </div>
          <div className="col">
            <IconConfigProvider color="blue" size="42">
              <Icon>
                <ShieldSharp />
              </Icon>
            </IconConfigProvider>
            <Card

              title="DDOS Protection"
              text="Lorem ipsum Dolor sit amet, sonsectetur"
              card_styling=""
              actions={
                <>
                  <Button text="Get started" href="/" variant="info" />
                </>
              }
            />
          </div>
          <div className="col">
            <IconConfigProvider color="blue" size="42">
              <Icon>
                <ShieldSharp />
              </Icon>
            </IconConfigProvider>
            <Card

              title="DDOS Protection"
              text="Lorem ipsum Dolor sit amet, sonsectetur"
              card_styling=""
              actions={
                <>
                  <Button text="Get started" href="/" variant="info" />
                </>
              }
            />
          </div>
        </div>
        <div className="container d-flex justify-content-center">
          <button type="button" className="btn btn-outline-info d-flex align-items-center m-5">Get started today
            <IconConfigProvider color="info" size="32">
              <Icon>
                <NavigateNextOutlined />
              </Icon>
            </IconConfigProvider>
          </button>
        </div>
      </div>

      <div className="bg-dark">
        <div className="container text-light">
          <div className="row">
            <div className="col mt-3 d-flex">
              <img src={navLogo} className="img footer-logo" alt="logo"></img>
              <p className="fs-3">QuantumSky Solutions</p>
            </div>
            <div className="col mt-3">
              <ul className="footer-nav">
                <h4 className="fw-bold">Navigation</h4>
                <li><a href="/">Home</a></li>
                <li><a href="/">Solutions</a></li>
                <li><a href="/">About us</a></li>
                <li><a href="/">Pricing</a></li>
                <li><a href="/">Contact</a></li>
              </ul>
            </div>
            <div className="col mt-3">
              <h3>About us</h3>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;