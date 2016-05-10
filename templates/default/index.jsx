import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import Title from './components/title.jsx';
import EditableText from './components/editableText.jsx';
import EditableLink from './components/editableLink.jsx';
import EditableImage from './components/editableImage.jsx';
require('./css/style.css');

const DefaultTemplatePres = ({
  links,
  texts
  }) => {
  return (
    <div id="content-container">
      <table id="content" width="600" cellPadding="0" cellSpacing="0">
        <tbody>
        <tr>
          <td>
            <table width="100%">
              <tbody>
              <tr>
                <td width="20px">&nbsp;</td>
                <td width="46.66%">
                  <EditableLink {...links.onlineVersion} />
                </td>
                <td width="46.66%" id="social-links">
                  <EditableImage vspace="6" hspace="6" width="17" height="17"
                                 src="templates/default/img/fb.png"></EditableImage>
                  <EditableImage vspace="6" hspace="6" width="17" height="17"
                                 src="templates/default/img/youtube.png"></EditableImage>
                  <EditableImage vspace="6" hspace="6" width="17" height="17"
                                 src="templates/default/img/gplus.png"></EditableImage>
                  <EditableImage vspace="6" hspace="6" width="17" height="17"
                                 src="templates/default/img/twitter.png"></EditableImage>
                </td>
                <td width="20px">&nbsp;</td>
              </tr>
              </tbody>
            </table>
          </td>
        </tr>
        <tr>
          <td>
            <table width="100%">
              <tbody>
              <tr>
                <td id="logo" height="60px">
                  <EditableImage src="templates/default/img/logo.png" alt="beeftea-logo"/>
                </td>
              </tr>
              </tbody>
            </table>
          </td>
        </tr>
        <tr>
          <td>
            <table width="100%">
              <tbody>
              <tr>
                <td id="menu">
                  <table width="100%">
                    <tbody>
                    <tr>
                      <td className="item" width="1.66%" height="30px">
                        <a className="item" target="_blank" href="http://beeftea.de/">Home</a>
                      </td>
                      <td className="item" width="1.66%">
                        <a className="item" target="_blank"
                           href="http://beeftea.de/beeftea-group-vier-units-fur-eine-gemeinsame-sache/">Units</a>
                      </td>
                      <td className="item" width="1.66%">
                        <a className="item" target="_blank" href="http://beeftea.de/leistungen/">Leistengen</a>
                      </td>
                      <td className="item" width="1.66%">
                        <a className="item" target="_blank" href="http://beeftea.de/jobs/">Jobs</a>
                      </td>
                      <td className="item" width="1.66%">
                        <a className="item" target="_blank" href="http://beeftea.de/meeting/">Kalender</a>
                      </td>
                      <td className="item" width="1.66%">
                        <a className="item" target="_blank" href="http://beeftea.de/kontakt/">Kontakt</a>
                      </td>
                    </tr>
                    </tbody>
                  </table>
                </td>
              </tr>
              </tbody>
            </table>
          </td>
        </tr>
        <tr>
          <td id="splash">
            <EditableImage src="templates/default/img/640x150.png" alt="teaser"/>
          </td>
        </tr>
        <tr height="20px">
          <td>&nbsp;</td>
        </tr>
        <tr>
          <td>
            <table width="100%">
              <tbody>
              <tr>
                <td width="20px">&nbsp;</td>
                <td>
                  <table width="100%">
                    <tbody>
                    <tr>
                      <td>
                        <Title />
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div id="intro">
                          <EditableText className="greeting" expandWidth={10} {...texts.greeting} />
                          <EditableText {...texts.intro} />
                        </div>
                      </td>
                    </tr>

                    <tr className="divider">
                      <td></td>
                    </tr>
                    <tr className="divider">
                    </tr>

                    <tr>
                      <td className="entry">
                        <table>
                          <tbody>
                          <tr>
                            <td width="300px">
                              <table cellPadding="3px">
                                <tbody>
                                <tr>
                                  <td className="tag">
                                    #<EditableText markdown="false" {...texts.tag1} />
                                  </td>
                                </tr>
                                </tbody>
                              </table>
                              <div className="title">
                                <EditableLink {...links.titleLink1} />
                              </div>
                              <EditableText {...texts.entry1} />
                            </td>
                            <td width="20px">&nbsp;</td>
                            <td width="280px">
                              <EditableImage src="templates/default/img/280x200.png"/>
                            </td>
                          </tr>
                          </tbody>
                        </table>
                      </td>
                    </tr>

                    <tr className="divider">
                      <td></td>
                    </tr>
                    <tr className="divider">
                    </tr>

                    <tr>
                      <td className="entry">
                        <table>
                          <tbody>
                          <tr>
                            <td width="300px">
                              <table cellPadding="3px">
                                <tbody>
                                <tr>
                                  <td className="tag">
                                    #<EditableText markdown="false" {...texts.tag2} />
                                  </td>
                                </tr>
                                </tbody>
                              </table>
                              <div className="title">
                                <EditableLink {...links.titleLink2} />
                              </div>
                              <EditableText {...texts.entry2} />
                            </td>
                            <td width="20px">&nbsp;</td>
                            <td width="280px">
                              <EditableImage src="templates/default/img/280x200.png"/>
                            </td>
                          </tr>
                          </tbody>
                        </table>
                      </td>
                    </tr>

                    <tr className="divider">
                      <td></td>
                    </tr>
                    <tr className="divider">
                    </tr>

                    <tr>
                      <td className="entry">
                        <table>
                          <tbody>
                          <tr>
                            <td width="300px">
                              <table cellPadding="3px">
                                <tbody>
                                <tr>
                                  <td className="tag">
                                    #<EditableText markdown="false" {...texts.tag3} />
                                  </td>
                                </tr>
                                </tbody>
                              </table>
                              <div className="title">
                                <EditableLink {...links.titleLink3} />
                              </div>
                              <EditableText {...texts.entry3} />
                            </td>
                            <td width="20px">&nbsp;</td>
                            <td width="280px">
                              <EditableImage src="templates/default/img/280x200.png"/>
                            </td>
                          </tr>
                          </tbody>
                        </table>
                      </td>
                    </tr>

                    <tr className="divider">
                      <td></td>
                    </tr>
                    <tr className="divider">
                    </tr>

                    <tr>
                      <td id="footer">
                        <div className="copyright">
                          <div className="highlight-text">© 2014 BEEFTEA group</div>
                          people & brand communications GmbH
                        </div>
                        <table width="100%">
                          <tbody>
                          <tr height="20px"></tr>
                          <tr>
                            <td width="50%">
                              <div id="footer-left">
                                Kreuzbergstraße 30 | D-10965 Berlin
                                <br />
                                T 030 26 93 92-3 | F 030 26 93 92-40
                                <br />
                                <a href="mailto:berlin@beeftea.de">berlin@beeftea.de</a> | <a
                                href="http://www.beeftea.de">www.beeftea.de</a>
                              </div>
                            </td>
                            <td width="50%">
                              <div id="footer-right">
                                Lehmweg 10C | D-20251 Hamburg
                                <br />
                                T 040 32 89 01 56-1 | F 030 26 93 92-40
                                <br />
                                <a href="mailto:berlin@beeftea.de">berlin@beeftea.de</a> | <a
                                href="http://www.beeftea.de">www.beeftea.de</a>
                              </div>
                            </td>
                          </tr>
                          </tbody>
                        </table>
                        <div id="unsubscribe">
                          Wenn Sie unseren Newsletter nicht mehr erhalten möchten, melden Sie sich bitte
                          <EditableLink {...links.unsubscribe} />.
                        </div>
                      </td>
                    </tr>

                    </tbody>
                  </table>
                </td>
                <td width="20px">&nbsp;</td>
              </tr>
              </tbody>
            </table>
          </td>
        </tr>
        </tbody>
      </table>
    </div>
  )
};

DefaultTemplatePres.propTypes = {
  links: PropTypes.object
};

const DefaultTemplate = connect(
  ({ stickyHeader: {defaultTemplate}, aws: { images } }) => {
    return {...defaultTemplate, images};
  }
)(DefaultTemplatePres);

export default DefaultTemplate;
