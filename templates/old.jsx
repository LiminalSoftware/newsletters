import React from 'react';
import './css/old.css';

let MyImage = React.createClass({
  getInitialState() {
    return {
      src: this.props.src,
      alt: this.props.alt
    }
  },

  render() {
    return (
      <img src={this.state.src} alt={this.state.alt}/>
    )
  }
});

export default React.createClass({
  render () {
    return (
      <div align="center">
        <table class="MsoNormalTable" border="0" cellspacing="0" cellpadding="0" width="100%"
               style={{width: '100.0%', background: '#191919'}}>
          <tbody>
          <tr>
            <td style={{padding: '0cm 0cm 0cm 0cm'}}>
              <div align="center">
                <table class="MsoNormalTable" border="0" cellspacing="0" cellpadding="0" width="660"
                       style={{width: '495.0pt'}}>
                  <tbody>
                  <tr>
                    <td colspan="2" style={{background: '#222222', padding: '0cm 0cm 0cm 0cm'}}>
                      <p align="center"
                         style={{'mso-marginTopalt': '15.0pt', 'marginRight': '0cm', 'marginBottom': '15.0pt', 'marginLeft': '0cm', 'textAlign': 'center', 'lineHeight': '18.0pt'}}>
                    <span style={{'fontSize': '7.5pt', 'fontFamily':"'Arial','sans-serif'", color: '#A8A8A8'}}>Unser Newsletter ist nicht sichtbarKlicken Sie<a
                      href="http://beeftea.de/wp-content/plugins/newsletter/do/view.php?id=29&amp;nk=40-e414497977"><span
                      style={{color: '#A8A8A8'}}>hier</span>
                    </a> für die Online-Version.</span>
                      </p>
                    </td>
                  </tr>
                  <tr>
                    <td style={{background: '#222222', padding: '7.5pt 7.5pt 7.5pt 7.5pt'}}>
                      <p class="ballz MsoNormal">
                        <MyImage src="http://beeftea.de/wp-content/extensions/newsletter/emails/themes/beeftea/logo.png"
                                 alt="test"/>

                      </p>
                    </td>
                    <td style={{background: '#222222', padding: '7.5pt 7.5pt 7.5pt 7.5pt'}}>
                      <p class="MsoNormal" align="right" style={{'textAlign': 'right', 'lineHeight': '18.0pt'}}><span
                        style={{'fontSize': '9.0pt', 'fontFamily':"'Arial','sans-serif'", color: '#A8A8A8', 'textTransform': 'uppercase'}}><a
                        href="http://beeftea.de/wp-content/plugins/newsletter/statistics/link.php?r=Mjk7NDA7aHR0cDovL2JlZWZ0ZWEuZGUvbGVpc3R1bmdlbi87"><span
                        style={{color: 'white', 'textDecoration': 'none'}}>Leistungen</span>
                      </a>  |   <a
                        href="http://beeftea.de/wp-content/plugins/newsletter/statistics/link.php?r=Mjk7NDA7aHR0cDovL2JlZWZ0ZWEuZGUvam9icy87"><span
                        style={{color: 'white', 'textDecoration': 'none'}}>Jobs</span>
                      </a>   |   <a
                        href="http://beeftea.de/wp-content/plugins/newsletter/statistics/link.php?r=Mjk7NDA7aHR0cDovL2JlZWZ0ZWEuZGUvbWVldGluZy87"><span
                        style={{color: 'white', 'textDecoration': 'none'}}>Kalender</span>
                      </a>  </span>
                      </p>
                    </td>
                  </tr>
                  <tr>
                    <td colspan="2" style={{padding: '15.0pt 0cm 15.0pt 0cm', 'textWrap': ' none'}}>
                      <p class="MsoNormal">
                        <img border="0" width="132" height="69" id="_x0000_i1026"
                             src="http://beeftea.de/wp-content/extensions/newsletter/emails/themes/beeftea/header_dummy-1.png"/><img
                        border="0" width="132" height="69" id="_x0000_i1027"
                        src="http://beeftea.de/wp-content/extensions/newsletter/emails/themes/beeftea/header_dummy-2.png"/><img
                        border="0" width="132" height="69" id="_x0000_i1028"
                        src="http://beeftea.de/wp-content/extensions/newsletter/emails/themes/beeftea/header_dummy-3.png"/><img
                        border="0" width="132" height="69" id="_x0000_i1029"
                        src="http://beeftea.de/wp-content/extensions/newsletter/emails/themes/beeftea/header_dummy-4.png"/><img
                        border="0" width="132" height="69" id="_x0000_i1030"
                        src="http://beeftea.de/wp-content/extensions/newsletter/emails/themes/beeftea/header_dummy-5.png"/>

                      </p>
                    </td>
                  </tr>
                  <tr>
                    <td colspan="2" style={{padding: '0cm 0cm 0cm 0cm'}}>
                      <div align="center">
                        <table class="MsoNormalTable" border="0" cellspacing="0" cellpadding="0" width="100%"
                               style={{width: '100.0%', background: '#222222', 'backgroundPositionX': '0%', 'backgroundPositionY': '0%', 'backgroundAttachment': 'scroll'}}>
                          <tbody>
                          <tr>
                            <td style={{padding: '15.0pt 15.0pt 15.0pt 15.0pt'}}>
                              <table class="MsoNormalTable" border="0" cellpadding="0" width="100%"
                                     style={{width: '100.0%'}}>
                                <tbody>
                                <tr>
                                  <td colspan="2" style={{padding: '0cm 0cm 30.0pt 0cm'}}>
                                    <h1 align="right"
                                        style={{'textAlign': 'right', 'mso-lineHeightalt': '18.0pt'}}><span
                                      style={{'fontFamily':"'Helvetica','sans-serif'", color: 'white', 'fontWeight': 'normal'}}>trend</span><span
                                      style={{'fontFamily':"'Helvetica','sans-serif'", color: '#FD5241', 'fontWeight': 'normal'}}>flash</span><span
                                      style={{'fontFamily':"'Helvetica','sans-serif'", color: 'white', 'fontWeight': 'normal'}}>09/13</span>
                                    </h1>
                                    <p style={{'lineHeight': '18.0pt'}}><span
                                      style={{'fontSize': '10.5pt', 'fontFamily':"'Helvetica','sans-serif'", color: '#A8A8A8'}}>Hallo Grunszky,</span>
                                    </p>
                                    <p style={{'lineHeight': '18.0pt'}}><span
                                      style={{'fontSize': '9.0pt', 'fontFamily':"'Helvetica','sans-serif'", color: '#A8A8A8'}}>Us ineo, vel loquor, hic sed, Viva tam. Ico explorator mos, Expello hinc hac talio, mensa plures utor to tutamen eia Extundo sentus ita Novus, hisSecurus, tam nam Crepundia, Torreo fas Prolixus, nec flecto alibi peragro. Nam Deficio contradictio ops Posco laeto aeger Freno ruo, votum Spero ergo Penetro, Pulmo pro, ops infra Vacuus ususfructus qui Perturpis, neco Illas his Libro. Vel emo mons lib.</span>
                                    </p>
                                  </td>
                                </tr>
                                <tr>
                                  <td width="100%" valign="top"
                                      style={{width: '100.0%', padding: '0cm 15.0pt 30.0pt 0cm'}}>
                                    <h3
                                      style={{margin: '0cm', 'marginBottom': '.0001pt', 'lineHeight': '13.5pt'}}><span
                                      style={{'fontSize': '12.0pt', 'fontFamily':"'Arial','sans-serif'", color: '#FD5241', 'fontWeight': 'normal'}}><a
                                      href="http://beeftea.de/wp-content/plugins/newsletter/statistics/link.php?r=Mjk7NDA7aHR0cDovL2JlZWZ0ZWEuZGUvaGFtYnVyZy13YXJlbi1kaWUtbG9ld2VuLWxvcy87"
                                      target="_blank">
                                          <span
                                            style={{color: '#FD5241', 'textDecoration': 'none'}}>InHamburg waren die Löwen los</span>
                                    </a></span>
                                    </h3>
                                    <p
                                      style={{margin: '0cm', 'marginBottom': '.0001pt', 'lineHeight': '18.0pt'}}><span
                                      style={{'fontSize': '9.0pt', 'fontFamily':"'Helvetica','sans-serif'", color: '#A8A8A8'}}>BEEFTEA live war an der Organisation des größten Kongresses beteiligt, den Hamburg je gesehen hat &nbsp;
                                      Mit über 24.000Teilnehmern aus 130 Ländern ist die Jahresversammlung des Lions Clubs International der größte Kongress, der je in Hamburg stattfand. Über zwei…</span>
                                    </p>
                                    <p align="right" style={{'textAlign': 'right', 'lineHeight': '18.0pt'}}><span
                                      style={{'fontSize': '9.0pt', 'fontFamily':"'Helvetica','sans-serif'", color: '#A8A8A8'}}><a
                                      href="http://beeftea.de/wp-content/plugins/newsletter/statistics/link.php?r=Mjk7NDA7aHR0cDovL2JlZWZ0ZWEuZGUvaGFtYnVyZy13YXJlbi1kaWUtbG9ld2VuLWxvcy87"
                                      target="_blank">
                                      <span style={{color: '#A8A8A8'}}>weiterlesen</span><span
                                      style={{color: '#A8A8A8', 'textDecoration': 'none'}}><img border="0"
                                                                                                 id="_x0000_i1031"
                                                                                                 src="http://beeftea.de/wp-content/extensions/newsletter/emails/themes/beeftea/readmore.png"/></span>
                                    </a></span>
                                    </p>
                                  </td>
                                  <td width="225" valign="top"
                                      style={{width: '168.75pt', padding: '0cm 0cm 30.0pt 0cm'}}>
                                    <p class="MsoNormal" align="right"
                                       style={{'textAlign': 'right', 'lineHeight': '18.0pt'}}><span
                                      style={{'fontSize': '9.0pt', 'fontFamily':"'Helvetica','sans-serif'", color: '#A8A8A8'}}><a
                                      href="http://beeftea.de/wp-content/plugins/newsletter/statistics/link.php?r=Mjk7NDA7aHR0cDovL2JlZWZ0ZWEuZGUvaGFtYnVyZy13YXJlbi1kaWUtbG9ld2VuLWxvcy87"
                                      target="_blank"><span style={{'textDecoration': 'none'}}><img border="0"
                                                                                                     width="134"
                                                                                                     height="120"
                                                                                                     id="_x0000_i1032"
                                                                                                     src="http://beeftea.de/wp-content/uploads/2014/02/Logo-Lions-134x120.png"
                                                                                                     alt="Logo Lions International"/></span>
                                    </a></span>
                                    </p>
                                  </td>
                                </tr>
                                <tr>
                                  <td width="100%" valign="top"
                                      style={{width: '100.0%', padding: '0cm 15.0pt 30.0pt 0cm'}}>
                                    <h3
                                      style={{margin: '0cm', 'marginBottom': '.0001pt', 'lineHeight': '13.5pt'}}><span
                                      style={{'fontSize': '12.0pt', 'fontFamily':"'Arial','sans-serif'", color: '#FD5241', 'fontWeight': 'normal'}}><a
                                      href="http://beeftea.de/wp-content/plugins/newsletter/statistics/link.php?r=Mjk7NDA7aHR0cDovL2JlZWZ0ZWEuZGUvbWVldC1iZWVmLXRyZW5kLXRhbGstMjAxNC1zb2NpYWwtbWVkaWEtZWluLW11c3MtZnVlci1kYXMtZXZlbnRtYXJrZXRpbmcvOw%3D%3D"
                                      target="_blank">
                                      <span style={{color: '#FD5241', 'textDecoration': 'none'}}>MEETTHE BEEF – Trend Talk 2014 Social Media: Ein Muss für das Eventmarketing</span>
                                    </a></span>
                                    </h3>
                                    <p
                                      style={{margin: '0cm', 'marginBottom': '.0001pt', 'lineHeight': '18.0pt'}}><span
                                      style={{'fontSize': '9.0pt', 'fontFamily':"'Helvetica','sans-serif'", color: '#A8A8A8'}}>Soziale Netzwerke entscheiden jetzt und in Zukunft über den Erfolg von Marken und Unternehmen. Das war die Quintessenzdes Workshops „MEET THE BEEF – Trend Talk 2014“ am 22. Januar in Dortmund, der diesmal unter dem Motto „Creating Digital Ideas“ stand.</span>
                                    </p>
                                    <p align="right" style={{'textAlign': 'right', 'lineHeight': '18.0pt'}}><span
                                      style={{'fontSize': '9.0pt', 'fontFamily':"'Helvetica','sans-serif'", color: '#A8A8A8'}}><a
                                      href="http://beeftea.de/wp-content/plugins/newsletter/statistics/link.php?r=Mjk7NDA7aHR0cDovL2JlZWZ0ZWEuZGUvbWVldC1iZWVmLXRyZW5kLXRhbGstMjAxNC1zb2NpYWwtbWVkaWEtZWluLW11c3MtZnVlci1kYXMtZXZlbnRtYXJrZXRpbmcvOw%3D%3D"
                                      target="_blank">
                                      <span style={{color: '#A8A8A8'}}>weiterlesen</span><span
                                      style={{color: '#A8A8A8', 'textDecoration': 'none'}}><img border="0"
                                                                                                 id="_x0000_i1033"
                                                                                                 src="http://beeftea.de/wp-content/extensions/newsletter/emails/themes/beeftea/readmore.png"/></span>
                                    </a></span>
                                    </p>
                                  </td>
                                  <td width="225" valign="top"
                                      style={{width: '168.75pt', padding: '0cm 0cm 30.0pt 0cm'}}>
                                    <p class="MsoNormal" align="right"
                                       style={{'textAlign': 'right', 'lineHeight': '18.0pt'}}><span
                                      style={{'fontSize': '9.0pt', 'fontFamily':"'Helvetica','sans-serif'", color: '#A8A8A8'}}><a
                                      href="http://beeftea.de/wp-content/plugins/newsletter/statistics/link.php?r=Mjk7NDA7aHR0cDovL2JlZWZ0ZWEuZGUvbWVldC1iZWVmLXRyZW5kLXRhbGstMjAxNC1zb2NpYWwtbWVkaWEtZWluLW11c3MtZnVlci1kYXMtZXZlbnRtYXJrZXRpbmcvOw%3D%3D"
                                      target="_blank"><span style={{'textDecoration': 'none'}}><img border="0"
                                                                                                     width="225"
                                                                                                     height="120"
                                                                                                     id="_x0000_i1034"
                                                                                                     src="http://beeftea.de/wp-content/uploads/2014/02/Vortrag-Andreas-Grunszky-Kopie-225x120.jpg"
                                                                                                     alt="Vortrag Andreas Grunszky - Kopie"/></span>
                                    </a></span>
                                    </p>
                                  </td>
                                </tr>
                                <tr>
                                  <td width="100%" valign="top"
                                      style={{width: '100.0%', padding: '0cm 15.0pt 30.0pt 0cm'}}>
                                    <h3
                                      style={{margin: '0cm', 'marginBottom': '.0001pt', 'lineHeight': '13.5pt'}}><span
                                      style={{'fontSize': '12.0pt', 'fontFamily':"'Arial','sans-serif'", color: '#FD5241', 'fontWeight': 'normal'}}><a
                                      href="http://beeftea.de/wp-content/plugins/newsletter/statistics/link.php?r=Mjk7NDA7aHR0cDovL2JlZWZ0ZWEuZGUvZHUtYmlzdC1oYW1idXJnLW1hY2gtbWl0LWVyZm9sZ3JlaWNoZXItaGFtYnVyZy1tYXJrZXRpbmctdGFnLTIwMTMvOw%3D%3D"
                                      target="_blank">
                                      <span style={{color: '#FD5241', 'textDecoration': 'none'}}>Dubist Hamburg! Mach mit! Erfolgreicher Hamburg-Marketing-Tag 2013</span>
                                    </a></span>
                                    </h3>
                                    <p
                                      style={{margin: '0cm', 'marginBottom': '.0001pt', 'lineHeight': '18.0pt'}}><span
                                      style={{'fontSize': '9.0pt', 'fontFamily':"'Helvetica','sans-serif'", color: '#A8A8A8'}}>Mit Beeftea werden Gäste Teil des Hamburg-Marketings BEEFTEA live Hamburg freut sich über den erfolgreich umgesetzten3. Hamburg-Marketing-Tag. Das Hamburger Team richtete im Auftrag der Hamburg Marketing GmbH das Event am 24. September im</span>
                                    </p>
                                    <p align="right" style={{'textAlign': 'right', 'lineHeight': '18.0pt'}}><span
                                      style={{'fontSize': '9.0pt', 'fontFamily':"'Helvetica','sans-serif'", color: '#A8A8A8'}}><a
                                      href="http://beeftea.de/wp-content/plugins/newsletter/statistics/link.php?r=Mjk7NDA7aHR0cDovL2JlZWZ0ZWEuZGUvZHUtYmlzdC1oYW1idXJnLW1hY2gtbWl0LWVyZm9sZ3JlaWNoZXItaGFtYnVyZy1tYXJrZXRpbmctdGFnLTIwMTMvOw%3D%3D"
                                      target="_blank">
                                      <span style={{color: '#A8A8A8'}}>weiterlesen</span><span
                                      style={{color: '#A8A8A8', 'textDecoration': 'none'}}><img border="0"
                                                                                                 id="_x0000_i1035"
                                                                                                 src="http://beeftea.de/wp-content/extensions/newsletter/emails/themes/beeftea/readmore.png"/></span>
                                    </a></span>
                                    </p>
                                  </td>
                                  <td width="225" valign="top"
                                      style={{width: '168.75pt', padding: '0cm 0cm 30.0pt 0cm'}}>
                                    <p class="MsoNormal" align="right"
                                       style={{'textAlign': 'right', 'lineHeight': '18.0pt'}}><span
                                      style={{'fontSize': '9.0pt', 'fontFamily':"'Helvetica','sans-serif'", color: '#A8A8A8'}}><a
                                      href="http://beeftea.de/wp-content/plugins/newsletter/statistics/link.php?r=Mjk7NDA7aHR0cDovL2JlZWZ0ZWEuZGUvZHUtYmlzdC1oYW1idXJnLW1hY2gtbWl0LWVyZm9sZ3JlaWNoZXItaGFtYnVyZy1tYXJrZXRpbmctdGFnLTIwMTMvOw%3D%3D"
                                      target="_blank"><span style={{'textDecoration': 'none'}}><img border="0"
                                                                                                     width="225"
                                                                                                     height="120"
                                                                                                     id="_x0000_i1036"
                                                                                                     src="http://beeftea.de/wp-content/uploads/2013/12/130924_Hamburg_Marketing_Emporio-1119-225x120.jpg"
                                                                                                     alt="Mit Beeftea werden Gäste Teil des Hamburg-Marketings. Du bist Hamburg! Mach mit! Erfolgreicher Hamburg-Marketing-Tag 2013"/></span></a></span>
                                    </p>
                                  </td>
                                </tr>
                                </tbody>
                              </table>
                            </td>
                          </tr>
                          </tbody>
                        </table>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td colspan="2" style={{padding: '0cm 0cm 0cm 0cm'}}>
                      <div align="center">
                        <table class="MsoNormalTable" border="0" cellspacing="0" cellpadding="0" width="100%"
                               style={{width: '100.0%', background: '#222222'}}>
                          <tbody>
                          <tr>
                            <td style={{padding: '0cm 0cm 11.25pt 0cm'}}>
                              <p style={{margin: '0cm', 'marginBottom': '.0001pt', 'lineHeight': '18.0pt'}}><span
                                style={{'fontSize': '9.0pt', 'fontFamily':"'Helvetica','sans-serif'", color: '#A8A8A8'}}>Folgen Sie uns auf<a
                                href="http://beeftea.de/wp-content/plugins/newsletter/statistics/link.php?r=Mjk7NDA7aHR0cDovL3d3dy5mYWNlYm9vay5jb20vcGFnZXMvQkVFRlRFQS1HUk9VUC1wZW9wbGUtYnJhbmQtY29tbXVuaWNhdGlvbnMtR21iSC8xMzI4NjAxOTM5NDI7"
                                target="_blank">
                                <img border="0"
                                     id="_x0000_i1037"
                                     src="http://beeftea.de/wp-content/extensions/newsletter/emails/themes/beeftea/facebook.png"/>
                              </a>
                                <a
                                  href="http://beeftea.de/wp-content/plugins/newsletter/statistics/link.php?r=Mjk7NDA7aHR0cDovL3d3dy55b3V0dWJlLmNvbS91c2VyL2JlZWZ0ZWF0djs%3D"
                                  target="_blank"><img border="0"
                                                       id="_x0000_i1038"
                                                       src="http://beeftea.de/wp-content/extensions/newsletter/emails/themes/beeftea/youtube.png"/>
                                </a>
                              <a
                                href="http://beeftea.de/wp-content/plugins/newsletter/statistics/link.php?r=Mjk7NDA7aHR0cHM6Ly9wbHVzLmdvb2dsZS5jb20vMTEyMzQ2MDM2OTY4MDMzNjgzMDI4L3Bvc3RzOw%3D%3D"
                                target="_blank"><img border="0"
                                                     id="_x0000_i1039"
                                                     src="http://beeftea.de/wp-content/extensions/newsletter/emails/themes/beeftea/google.png"/>
                              </a>
                            <a
                              href="http://beeftea.de/wp-content/plugins/newsletter/statistics/link.php?r=Mjk7NDA7aHR0cHM6Ly90d2l0dGVyLmNvbS9iZWVmdGVhZ3JvdXA7"
                              target="_blank"><img border="0"
                                                   id="_x0000_i1040"
                                                   src="http://beeftea.de/wp-content/extensions/newsletter/emails/themes/beeftea/twitter.png"/>
                            </a>
                          oderauf unserer Website
                          <a
                            href="http://beeftea.de/wp-content/plugins/newsletter/statistics/link.php?r=Mjk7NDA7aHR0cDovL2JlZWZ0ZWEuZGU7"><span
                            style={{color: '#FD5241'}}>beeftea.de</span>
                          </a>

                          </span>
                              </p>
                            </td>
                          </tr>
                          <tr>
                            <td style={{padding: '0cm 0cm 11.25pt 0cm'}}>
                              <h3 style={{margin: '0cm', 'marginBottom': '.0001pt', 'lineHeight': '12.0pt'}}><span
                                style={{'fontSize': '10.5pt', 'fontFamily':"'Arial','sans-serif'", color: '#A8A8A8'}}>Impressum</span>
                              </h3>
                              <div>
                                <p style={{'lineHeight': '14.4pt'}}><strong><span
                                  style={{'fontSize': '7.5pt', 'fontFamily':"'Helvetica','sans-serif'", color: '#A8A8A8'}}>BEEFTEA group</span>
                                </strong><span
                                  style={{'fontSize': '7.5pt', 'fontFamily':"'Helvetica','sans-serif'", color: '#A8A8A8'}}><br/>people &amp;
                                  brand communications GmbH
                                        </span>
                                </p>
                                <p style={{'lineHeight': '14.4pt'}}><span
                                  style={{'fontSize': '7.5pt', 'fontFamily':"'Helvetica','sans-serif'", color: '#A8A8A8'}}>Kreuzbergstraße 30<br/>D-10965
                                        Berlin<br/>T 030 26 93 92-3<br/>F 030 26 93 92-40<br/><a
                                    href="mailto:berlin@beeftea.de"><span
                                    style={{color: '#FD5241'}}>berlin@beeftea.de</span>
                                  </a>
                                          </span>
                                </p>
                              </div>
                              <p style={{margin: '0cm', 'marginBottom': '.0001pt', 'lineHeight': '18.0pt'}}><span
                                style={{'fontSize': '7.5pt', 'fontFamily':"'Helvetica','sans-serif'", color: '#A8A8A8'}}>Wenn Sie unseren Newsletter nicht mehr erhalten möchten, melden Sie sich bitte<a
                                href="http://beeftea.de/wp-content/plugins/newsletter/do/profile.php?nk=40-e414497977"><span
                                style={{color: '#A8A8A8'}}>hier</span>
                              </a> ab.</span>
                              </p>
                            </td>
                          </tr>
                          </tbody>
                        </table>
                      </div>
                    </td>
                  </tr>
                  </tbody>
                </table>
              </div>
            </td>
          </tr>
          </tbody>
        </table>
      </div>
    )
  }
})
