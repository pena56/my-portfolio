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
            </div>
            <div className="codeEditor-codes">
              <span className="codeEditor-line">
                {' '}
                <span className="codeEditor-tag">&lt;</span>
                <span className="codeEditor-element">div</span>
                <span className="codeEditor-class"> class=</span>
                <span className="codeEditor-classname">"my__infos"</span>
                <span className="codeEditor-tag">&gt;</span>
              </span>

              <span className="codeEditor-line">
                {' '}
                <span className="tab" />
                <span className="codeEditor-tag">&lt;</span>
                <span className="codeEditor-element">p</span>
                <span className="codeEditor-class"> class=</span>
                <span className="codeEditor-classname">"greetings"</span>
                <span className="codeEditor-tag">&gt;</span>
                <span className="codeEditor-text">
                  Hello everybody, i am{' '}
                </span>{' '}
                <span className="codeEditor-tag">&lt;</span>
                <span className="codeEditor-element">p</span>
                <span className="codeEditor-tag">/&gt;</span>
              </span>

              <span className="codeEditor-line">
                {' '}
                <span className="tab" />
                <span className="codeEditor-tag">&lt;</span>
                <span className="codeEditor-element">h1</span>
                <span className="codeEditor-class"> class=</span>
                <span className="codeEditor-classname">"name"</span>
                <span className="codeEditor-tag">&gt;</span>
                <span className="codeEditor-text">
                  Moses Ogbopina{' '}
                </span>{' '}
                <span className="codeEditor-tag">&lt;</span>
                <span className="codeEditor-element">h1</span>
                <span className="codeEditor-tag">/&gt;</span>
              </span>

              <span className="codeEditor-line">
                {' '}
                <span className="tab" />
                <span className="codeEditor-tag">&lt;</span>
                <span className="codeEditor-element">p</span>
                <span className="codeEditor-class"> class=</span>
                <span className="codeEditor-classname">"position"</span>
                <span className="codeEditor-tag">&gt;</span>
                <span className="codeEditor-text">
                  Frontend Developer{' '}
                </span>{' '}
                <span className="codeEditor-tag">&lt;</span>
                <span className="codeEditor-element">p</span>
                <span className="codeEditor-tag">/&gt;</span>
              </span>

              <span className="codeEditor-line">
                {' '}
                <span className="tab" />
                <span className="codeEditor-tag">&lt;</span>
                <span className="codeEditor-element">p</span>
                <span className="codeEditor-class"> class=</span>
                <span className="codeEditor-classname">"about"</span>
                <span className="codeEditor-tag">&gt;</span>
                <span className="codeEditor-text">
                  Some details about my humble self
                </span>{' '}
                <span className="codeEditor-tag">&lt;</span>
                <span className="codeEditor-element">p</span>
                <span className="codeEditor-tag">/&gt;</span>
              </span>

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
