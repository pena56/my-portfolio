import React from 'react';

import './CodeEditor.css';

function CodeEditor() {
  return (
    <div>
      <div className="codeArea">
        <div className="codeEditor">
          <div className="codeEditor-header">
            <div className="hero-codeEditor-header-circle circle-1"></div>
            <div className="hero-codeEditor-header-circle circle-2"></div>
            <div className="hero-codeEditor-header-circle circle-3"></div>
          </div>
          <div className="codeEditor-body">
            <div className="codeEditor-lineNumber">
              <span>1</span>
              <span>2</span>
              <span>3</span>
              <span>4</span>
              <span>5</span>
              <span>6</span>
              <span>7</span>
              <span>8</span>
              <span>9</span>
              <span>10</span>
              <span>11</span>
              <span>12</span>
              <span>13</span>
              <span>14</span>
              <span>15</span>
              <span>16</span>
              <span>17</span>
              <span>18</span>
              <span>19</span>
            </div>
            <div className="codeEditor-codes">
              {/* Opening div */}
              <span className="codeEditor-line">
                {' '}
                <span className="codeEditor-tag">&lt;</span>
                <span className="codeEditor-element">div</span>
                <span className="codeEditor-class"> class=</span>
                <span className="codeEditor-classname">"my__infos"</span>
                <span className="codeEditor-tag">&gt;</span>
              </span>
              {/* End Opening div */}

              {/* P tag */}
              <span className="codeEditor-line">
                {' '}
                <span className="tab" />
                <span className="codeEditor-tag">&lt;</span>
                <span className="codeEditor-element">p</span>
                <span className="codeEditor-class"> class=</span>
                <span className="codeEditor-classname">"greetings"</span>
                <span className="codeEditor-tag">&gt;</span>
                <span className="codeEditor-text">Hello, i am </span>{' '}
                <span className="codeEditor-tag">&lt;</span>
                <span className="codeEditor-element">p</span>
                <span className="codeEditor-tag">/&gt;</span>
              </span>
              {/* End P tag */}

              {/* h1 tag */}
              <span className="codeEditor-line">
                {' '}
                <span className="tab" />
                <span className="codeEditor-tag">&lt;</span>
                <span className="codeEditor-element">h1</span>
                <span className="codeEditor-class"> class=</span>
                <span className="codeEditor-classname">"name"</span>
                <span className="codeEditor-tag">&gt;</span>
                <span className="codeEditor-text">Moses Ogbopina </span>{' '}
                <span className="codeEditor-tag">&lt;</span>
                <span className="codeEditor-element">h1</span>
                <span className="codeEditor-tag">/&gt;</span>
              </span>
              {/* End h1 tag */}

              {/* p tag */}
              <span className="codeEditor-line">
                {' '}
                <span className="tab" />
                <span className="codeEditor-tag">&lt;</span>
                <span className="codeEditor-element">p</span>
                <span className="codeEditor-class"> class=</span>
                <span className="codeEditor-classname">"position"</span>
                <span className="codeEditor-tag">&gt;</span>
                <span className="codeEditor-text">
                  A Frontend Developer{' '}
                </span>{' '}
                <span className="codeEditor-tag">&lt;</span>
                <span className="codeEditor-element">p</span>
                <span className="codeEditor-tag">/&gt;</span>
              </span>
              {/* End p tag */}

              {/* p tag */}
              <span className="codeEditor-line">
                {' '}
                <span className="tab" />
                <span className="codeEditor-tag">&lt;</span>
                <span className="codeEditor-element">p</span>
                <span className="codeEditor-class"> class=</span>
                <span className="codeEditor-classname">"about__me"</span>
                <span className="codeEditor-tag">&gt;</span>
                <span className="codeEditor-text">
                  A design Oriented Frontend Developer, with aKnack for Problem
                  Solving
                </span>{' '}
                <span className="codeEditor-tag">&lt;</span>
                <span className="codeEditor-element">p</span>
                <span className="codeEditor-tag">/&gt;</span>
              </span>
              {/* End p tag */}

              {/* Opening div */}
              <span className="codeEditor-line">
                {' '}
                <span className="tab" />
                <span className="codeEditor-tag">&lt;</span>
                <span className="codeEditor-element">div</span>
                <span className="codeEditor-class"> class=</span>
                <span className="codeEditor-classname">"phone__number"</span>
                <span className="codeEditor-tag">&gt;</span>
              </span>
              {/* End Opening div */}

              {/* Icon Element */}
              <span className="codeEditor-line">
                <span className="tab" />
                <span className="tab" />
                <span className="codeEditor-tag">&lt;</span>
                <span className="codeEditor-element">PhoneIcon</span>
                <span className="codeEditor-tag">/&gt;</span>
              </span>
              {/* End Icon element */}

              {/* Span element */}
              <span className="codeEditor-line">
                {' '}
                <span className="tab" />
                <span className="tab" />
                <span className="codeEditor-tag">&lt;</span>
                <span className="codeEditor-element">span</span>
                <span className="codeEditor-tag">&gt;</span>
                <span className="codeEditor-text">
                  (+234) 815 2067 550
                </span>{' '}
                <span className="codeEditor-tag">&lt;</span>
                <span className="codeEditor-element">span</span>
                <span className="codeEditor-tag">/&gt;</span>
              </span>
              {/* end span element */}

              {/* Closing div element */}
              <span className="codeEditor-line">
                <span className="tab" />
                <span className="codeEditor-tag">&lt;</span>
                <span className="codeEditor-element">div</span>
                <span className="codeEditor-tag">/&gt;</span>
              </span>
              {/* end closing div element */}

              {/* Opening div element */}
              <span className="codeEditor-line">
                {' '}
                <span className="tab" />
                <span className="codeEditor-tag">&lt;</span>
                <span className="codeEditor-element">div</span>
                <span className="codeEditor-class"> class=</span>
                <span className="codeEditor-classname">"email"</span>
                <span className="codeEditor-tag">&gt;</span>
              </span>
              {/* end opening div element */}

              {/* Icon element */}
              <span className="codeEditor-line">
                <span className="tab" />
                <span className="tab" />
                <span className="codeEditor-tag">&lt;</span>
                <span className="codeEditor-element">MailIcon</span>
                <span className="codeEditor-tag">/&gt;</span>
              </span>
              {/* end Icon element */}

              {/* span element */}
              <span className="codeEditor-line">
                {' '}
                <span className="tab" />
                <span className="tab" />
                <span className="codeEditor-tag">&lt;</span>
                <span className="codeEditor-element">span</span>
                <span className="codeEditor-tag">&gt;</span>
                <span className="codeEditor-text">
                  ogbopinamoses@gmail.com
                </span>{' '}
                <span className="codeEditor-tag">&lt;</span>
                <span className="codeEditor-element">span</span>
                <span className="codeEditor-tag">/&gt;</span>
              </span>
              {/* end span element */}

              {/* closing div element */}
              <span className="codeEditor-line">
                <span className="tab" />
                <span className="codeEditor-tag">&lt;</span>
                <span className="codeEditor-element">div</span>
                <span className="codeEditor-tag">/&gt;</span>
              </span>
              {/* end closing div element */}

              {/* Opening div element */}
              <span className="codeEditor-line">
                {' '}
                <span className="tab" />
                <span className="codeEditor-tag">&lt;</span>
                <span className="codeEditor-element">div</span>
                <span className="codeEditor-class"> class=</span>
                <span className="codeEditor-classname">"location"</span>
                <span className="codeEditor-tag">&gt;</span>
              </span>
              {/* end opening div element */}

              {/* Icon element */}
              <span className="codeEditor-line">
                <span className="tab" />
                <span className="tab" />
                <span className="codeEditor-tag">&lt;</span>
                <span className="codeEditor-element">HomeIcon</span>
                <span className="codeEditor-tag">/&gt;</span>
              </span>
              {/* end Icon element */}

              {/* span element */}
              <span className="codeEditor-line">
                {' '}
                <span className="tab" />
                <span className="tab" />
                <span className="codeEditor-tag">&lt;</span>
                <span className="codeEditor-element">span</span>
                <span className="codeEditor-tag">&gt;</span>
                <span className="codeEditor-text">
                  Port Harcourt, Nigeria (GMT +1)
                </span>{' '}
                <span className="codeEditor-tag">&lt;</span>
                <span className="codeEditor-element">span</span>
                <span className="codeEditor-tag">/&gt;</span>
              </span>
              {/* end span element */}

              {/* closing div element */}
              <span className="codeEditor-line">
                <span className="tab" />
                <span className="codeEditor-tag">&lt;</span>
                <span className="codeEditor-element">div</span>
                <span className="codeEditor-tag">/&gt;</span>
              </span>
              {/* end closing div element */}

              <span className="codeEditor-line">
                <span className="codeEditor-tag">&lt;</span>
                <span className="codeEditor-element">div</span>
                <span className="codeEditor-tag">/&gt;</span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CodeEditor;
