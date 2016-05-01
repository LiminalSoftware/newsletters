import React from 'react';
import Title from './components/title.jsx';
import EditableText from './components/editableText.jsx';
import EditableLink from './components/editableLink.jsx';
import EditableImage from './components/editableImage.jsx';
require('./css/style.css');

export default React.createClass({
  render () {
    return (
      <div id="content-container">
        <div id="content">
          <div id="header">
            <div id="social-links">
              <EditableLink id="online-version" text="Online-Version" href="#"></EditableLink>
              <div className="icon-container">
                <EditableImage src="/templates/default/img/fb.png" href="#"></EditableImage>
                <EditableImage src="/templates/default/img/youtube.png" href="#"></EditableImage>
                <EditableImage src="/templates/default/img/gplus.png" href="#"></EditableImage>
                <EditableImage src="/templates/default/img/twitter.png" href="#"></EditableImage>
              </div>
            </div>
            <div id="logo">
              <EditableImage src="/templates/default/img/logo.png" alt="beeftea-logo"/>
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
              <EditableImage src="/templates/default/img/teaser.jpg" alt="teaser"/>
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

            <div className="divider"></div>

            <div className="entry">
              <EditableImage src="/templates/default/img/cocacola.jpg" alt="coca-cola"/>
              <div className="tag">
                #<EditableText placeholder="Hotspot"/>
              </div>
              <div className="title">
                <EditableLink text="Coca-Cola Tag mit BEEFTEA live GmbH" href="#"/>
              </div>
              <p>
                <EditableText placeholder="
                  BAm 21. Juni lud Coca-Cola seine Kunden und Mitarbeiter zum 24. Coca-Cola Tag in den Europa-Park Rust
                  ein. 9.000 G&amp;#228;ste erlebten einen ereignisreichen Tag in Deutschlands gr&amp;#246;&amp;#223;tem Freizeitpark.Bereits um
                  08:00 Uhr und somit exklusiv f&amp;#252;r die &amp;hellip; <a href='#'>weiterlesen</a>
                "/>
              </p>
            </div>

            <div className="divider"></div>

            <div className="entry">
              <EditableImage src="/templates/default/img/3ddrucker.jpg" alt="3d drucker"/>
              <div className="tag">
                #<EditableText placeholder="Extern"/>
              </div>
              <div className="title">
                <EditableLink text="Katjes geht in die Zukunft: Fruchtgummis aus dem 3D-Drucker" href="#"/>

              </div>
              <p>
                <EditableText placeholder="
                  Unser &amp;#39;s&amp;#252;sser&amp;#39; Location Tipp der Woche f&amp;#252;r Berlin: Die Magic Candy Factory in Berlin Mitte.
                  Gestalten Sie Ihre Weingummis am ersten und einzigen 3D Drucker in Deutschland. Essen d&amp;#252;rfen Sie die
                  S&amp;#252;&amp;#223;igkeiten auch. Na dann Guten Appetit! <a href='#'>http://ow.ly/3yaq9H</a>
                "/>
              </p>
            </div>

            <div className="divider"></div>

            <div className="entry">
              <EditableImage src="/templates/default/img/kompetenztage.jpg" alt="kompetenztage"/>
              <div className="tag">
                #<EditableText placeholder="Inside"/>
              </div>
              <div className="title">
                <EditableLink text="Kompetenztage der tw tagungswirtschaft mit BEEFTEA" href="#"/>
              </div>
              <p>
                <EditableText placeholder="
                  Unter diesem Thema stand der Vortrag unseres Gesch&amp;#228;ftsf&amp;#252;hrers Andreas Grunszky bei den„Kompetenztagen
                  der tw tagungswirtschaft und tp tagungsplaner.de in M&amp;#252;nchen.Diese Veranstaltung beleuchtete &amp;hellip;
                  <a href='#'>weiterlesen</a>
                "/>
              </p>
            </div>

            <div className="divider"></div>

            <div id="footer">
              <div className="copyright">
                <div className="highlight-text">&amp;copy; 2014 BEEFTEA group</div>
                people & brand communications GmbH
              </div>
              <div id="footer-left">
                Kreuzbergstra&amp;#223;e 30 | D-10965 Berlin
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
                Wenn Sie unseren Newsletter nicht mehr erhalten m&amp;#246;chten, melden Sie sich bitte <EditableLink
                text="heir ab"/>.
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
})
