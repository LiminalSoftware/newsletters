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
              <EditableLink id="online-version" text="Online-Version" ></EditableLink>
              <div className="icon-container">
                <EditableImage src="templates/default/img/fb.png" ></EditableImage>
                <EditableImage src="templates/default/img/youtube.png" ></EditableImage>
                <EditableImage src="templates/default/img/gplus.png" ></EditableImage>
                <EditableImage src="templates/default/img/twitter.png" ></EditableImage>
              </div>
            </div>
            <div id="logo">
              <EditableImage src="templates/default/img/logo.png" alt="beeftea-logo"/>
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
              <EditableImage src="templates/default/img/640x150.png" alt="teaser"/>
            </div>
          </div>
          <div id="body">
            <Title />
            <div id="intro">
                <EditableText className="greeting" text="Hallo Grunszky," expandWidth={10}/>
                <EditableText text={require('./tutorial/intro.md')}/>
            </div>

            <div className="divider"></div>

            <div className="entry">
              <EditableImage src="templates/default/img/280x200.png" alt="coca-cola"/>
              <div className="tag">
                #<EditableText markdown="false" text="click to edit"/>
              </div>
              <div className="title">
                <EditableLink text="I'm a title link, click me to edit" />
              </div>
                <EditableText expandWidth="-300" text={require('./tutorial/entry1.md')}/>
            </div>

            <div className="divider"></div>

            <div className="entry">
              <EditableImage src="templates/default/img/280x200.png" alt="3d drucker"/>
              <div className="tag">
                #<EditableText markdown="false" text="click to edit"/>
              </div>
              <div className="title">
                <EditableLink text="While editing me, you can click the 'test' button to test your link" href="http://www.google.com"/>

              </div>
                <EditableText expandWidth="-300" text={require('./tutorial/entry2.md')}/>
            </div>

            <div className="divider"></div>

            <div className="entry">
              <EditableImage src="templates/default/img/280x200.png" alt="kompetenztage"/>
              <div className="tag">
                #<EditableText markdown="false" text="click to edit"/>
              </div>
              <div className="title">
                <EditableLink text="How to use images!" />
              </div>
                <EditableText expandWidth="-300" text={require('./tutorial/entry3.md')}/>
            </div>

            <div className="divider"></div>

            <div id="footer">
              <div className="copyright">
                <div className="highlight-text">{unescape('%A9')} 2014 BEEFTEA group</div>
                people & brand communications GmbH
              </div>
              <div id="footer-left">
                Kreuzbergstra{unescape('%DF')}e 30 | D-10965 Berlin
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
                Wenn Sie unseren Newsletter nicht mehr erhalten m{unescape('%F6')}chten, melden Sie sich bitte <EditableLink
                text="heir ab"/>.
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
})
