import React from 'react';
import Title from './components/title.jsx';
import EditableText from './components/editableText.jsx';
import EditableLink from './components/editableLink.jsx';
require('./css/style.css');

export default React.createClass({
  render () {
    return (
      <div id="content-container">
        <div id="content">
          <div id="header">
            <div id="social-links">
              <a id="online-version" href="#">Online-Version</a>
              <div className="icon-container">
                <a className="facebook" href="#"></a>
                <a className="youtube" href="#"></a>
                <a className="gplus" href="#"></a>
                <a className="twitter" href="#"></a>
              </div>
            </div>
            <div id="logo">
              <img src="/templates/default/img/logo.png" alt="beeftea-logo"/>
            </div>
            <div id="menu">
              <div className="item">Home</div>
              <div className="item">Units</div>
              <div className="item">Leistungen</div>
              <div className="item">Jobs</div>
              <div className="item">Kalender</div>
              <div className="item">Kontakt</div>
            </div>
            <div id="splash">
              <img src="/templates/default/img/teaser.jpg" alt="teaser"/>
            </div>
          </div>
          <div id="body">
            <Title />
            <div id="intro">
              <p className="greeting">
                <EditableText placeholder="Hallo Grunszky," expandWidth={10}/>
              </p>
              <p>
                <EditableText
                  placeholder="
                  Us ineo, vel loquor, hic sed, Viva tam. Ico explorator mos, Expello hinc hac talio, mensa plures utor
                  to tutamen eia Extundo sentus ita Novus.
                  "/>
              </p>
            </div>
            <div className="entry">
              <img src="/templates/default/img/cocacola.jpg" alt="coca-cola"/>
              <div className="tag">
                <EditableText placeholder="Hotspot" />
              </div>
              <div className="title">
                <EditableLink text="Coca-Cola Tag mit BEEFTEA live GmbH" href="#" />
              </div>
              <p>
                <EditableText placeholder="
                BAm 21. Juni lud Coca-Cola seine Kunden und Mitarbeiter zum 24. Coca-Cola Tag in den Europa-Park Rust
                ein. 9.000 Gäste erlebten einen ereignisreichen Tag in Deutschlands größtem Freizeitpark.Bereits um
                08:00 Uhr und somit exklusiv für die &hellip;<a href='#'>weiterlesen</a>
                "/>
              </p>
            </div>
            <div className="entry">
              <img src="/templates/default/img/3ddrucker.jpg" alt="3d drucker"/>
              <div className="tag">
                Extern
              </div>
              <div className="title">
                <a className="highlight-text" href="#">Katjes geht in die Zukunft: Fruchtgummis aus dem 3D-Drucker</a>
              </div>
              <p>
                Unser "süsser" Location Tipp der Woche für Berlin: Die Magic Candy Factory in Berlin Mitte.
                Gestalten Sie Ihre Weingummis am ersten und einzigen 3D Drucker in Deutschland. Essen dürfen Sie die
                Süßigkeiten auch. Na dann Guten Appetit! <a href="#">http://ow.ly/3yaq9H</a>
              </p>
            </div>
            <div className="entry">
              <img src="/templates/default/img/kompetenztage.jpg" alt="kompetenztage"/>
              <div className="tag">
                Inside
              </div>
              <div className="title">
                <a className="highlight-text" href="#">Kompetenztage der tw tagungswirtschaft mit BEEFTEA</a>
              </div>
              <p>
                Unter diesem Thema stand der Vortrag unseres Geschäftsführers Andreas Grunszky bei den„Kompetenztagen
                der tw tagungswirtschaft und tp tagungsplaner.de in München.Diese Veranstaltung beleuchtete ...
                <a href="#">weiterlesen</a>
              </p>
            </div>
            <div id="footer">
              <div className="copyright">
                <div className="highlight-text">&copy; 2014 BEEFTEA group</div>
                people & brand communications GmbH
              </div>
              <div id="footer-left">
                Kreuzbergstraße 30 | D-10965 Berlin
                <br />
                T 030 26 93 92-3 | F 030 26 93 92-40
                <br />
                <a href="mailto:berlin@beeftea.de">berlin@beeftea.de</a> | <a href="http://www.beeftea.de">www.beeftea.de</a>
              </div>
              <div id="footer-right">
                Lehmweg 10C | D-20251 Hamburg
                <br />
                T 040 32 89 01 56-1 | F 030 26 93 92-40
                <br />
                <a href="mailto:berlin@beeftea.de">berlin@beeftea.de</a> | <a href="http://www.beeftea.de">www.beeftea.de</a>
              </div>
              <div id="unsubscribe">
                Wenn Sie unseren Newsletter nicht mehr erhalten möchten, melden Sie sich bitte <a href="#">hier ab</a>.
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
})
