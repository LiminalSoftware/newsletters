import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import Title from './components/title.jsx';
import EditableText from './components/editableText.jsx';
import EditableLink from './components/editableLink.jsx';
import EditableImage from './components/editableImage.jsx';
require('./css/style.less');

let EventIslandTemplate = ({
  links,
  texts
}) => {
  return (
    <table id="content-container" className="event-island">
      <tbody>
      <tr>
        <td data-align="center">
          <table id="content" width="640" cellPadding="0" cellSpacing="0">
            <tbody>
            <tr>
              <td>
                <table width="100%">
                  <tbody>
                  <tr>
                    <td width="20px">&nbsp;</td>
                    <td>
                      <EditableLink {...links.onlineVersion} />
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
                    <td id="logo" height="133px">
                      <img src="http://hosted.liminal.software/beeftea/newsletters/templates/eventIsland/img/logo.png"
                           alt="event-island-logo"/>
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
                      <table width="100%" cellspacing="2px">
                        <tbody>
                        <tr>
                          <td className="item" width="1.66%" height="30px">
                            <a className="item" target="_blank" href="http://www.eventisland.de/">über uns</a>
                          </td>
                          <td className="item" width="1.66%">
                            <a className="item" target="_blank"
                               href="http://www.eventisland.de/leistungen/">leistungen</a>
                          </td>
                          <td className="item" width="1.66%">
                            <a className="item" target="_blank" href="http://www.eventisland.de/referenzen/">referenzen</a>
                          </td>
                          <td className="item" width="1.66%">
                            <a className="item" target="_blank" href="http://www.eventisland.de/kontakt-anfahrt/">anfahr/kontakt</a>
                          </td>
                          <td className="item" width="1.66%">
                            <a className="item" target="_blank" href="http://www.eventisland.de/category/news/">news/presse</a>
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
                            <Title text={texts}/>
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
                                <td>
                                  <table cellPadding="3px">
                                    <tbody>
                                    <tr>
                                      <td className="tag">
                                        #<EditableText markdown="false" {...texts.tag1} />
                                      </td>
                                    </tr>
                                    </tbody>
                                  </table>
                                </td>
                              </tr>
                              <tr>
                                <td width="300px">
                                  <div className="title">
                                    <EditableLink {...links.titleLink1} />
                                  </div>
                                  <EditableText {...texts.entry1} />
                                </td>
                                <td width="20px">&nbsp;</td>
                                <td width="280px">
                                  <table width="100%">
                                    <tbody>
                                    <tr>
                                      <td height="15px"></td>
                                    </tr>
                                    <tr>
                                      <td>
                                        <EditableImage src="templates/default/img/280x200.png"/>
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
                                <td>
                                  <table cellPadding="3px">
                                    <tbody>
                                    <tr>
                                      <td className="tag">
                                        #<EditableText markdown="false" {...texts.tag2} />
                                      </td>
                                    </tr>
                                    </tbody>
                                  </table>
                                </td>
                              </tr>
                              <tr>
                                <td width="300px">
                                  <div className="title">
                                    <EditableLink {...links.titleLink2} />
                                  </div>
                                  <EditableText {...texts.entry2} />
                                </td>
                                <td width="20px">&nbsp;</td>
                                <td width="280px">
                                  <table width="100%">
                                    <tbody>
                                    <tr>
                                      <td height="15px"></td>
                                    </tr>
                                    <tr>
                                      <td>
                                        <EditableImage src="templates/default/img/280x200.png"/>
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
                                <td>
                                  <table cellPadding="3px">
                                    <tbody>
                                    <tr>
                                      <td className="tag">
                                        #<EditableText markdown="false" {...texts.tag3} />
                                      </td>
                                    </tr>
                                    </tbody>
                                  </table>
                                </td>
                              </tr>
                              <tr>
                                <td width="300px">
                                  <div className="title">
                                    <EditableLink {...links.titleLink3} />
                                  </div>
                                  <EditableText {...texts.entry3} />
                                </td>
                                <td width="20px">&nbsp;</td>
                                <td width="280px">
                                  <table width="100%">
                                    <tbody>
                                    <tr>
                                      <td height="15px"></td>
                                    </tr>
                                    <tr>
                                      <td>
                                        <EditableImage src="templates/default/img/280x200.png"/>
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

                        <tr className="divider">
                          <td></td>
                        </tr>
                        <tr className="divider">
                        </tr>

                        <tr>
                          <td id="footer">
                            <div className="copyright">
                              <div className="highlight-text">BEEFTEA Local</div>
                            </div>
                            <table width="100%">
                              <tbody>
                              <tr height="20px"></tr>
                              <tr>
                                <td data-align="center">
                                  <div id="footer-center">
                                    Kreuzbergstraße 30 | D-10965 Berlin
                                    <br />
                                    T +49 30 600 318 32 | F +49 30 600 318 39
                                    <br />
                                    <a href="mailto:berlin@beeftea.de">berlin@beeftea.de</a> | <a
                                    href="http://www.eventisland.de/">www.eventisland.de/</a>
                                  </div>
                                </td>
                              </tr>
                              </tbody>
                            </table>
                            <div id="unsubscribe">
                              Wenn Sie unseren Newsletter nicht mehr erhalten möchten, melden Sie sich bitte
                              {' '}
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
        </td>
      </tr>
      </tbody>
    </table>
  )
};

EventIslandTemplate.propTypes = {
  links: PropTypes.object
};

EventIslandTemplate = connect(
  ({ stickyHeader: { eventIslandTemplate }, aws: { images } }) => {
    return { ...eventIslandTemplate, images };
  }
)(EventIslandTemplate);

export default EventIslandTemplate;
