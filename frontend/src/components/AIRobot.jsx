import React from 'react';
import './AIRobot.css';

export default function AIRobot() {
  return (
    <div className="ai-stage">
      <div className="ai-scanline-wrap">
        <div className="ai-scanline"></div>
      </div>
      
      <div className="ai-data-stream">
        <div className="ai-ds-line">010101</div>
        <div className="ai-ds-line">101010</div>
        <div className="ai-ds-line">SYS.OK</div>
      </div>
      
      <div className="ai-circuit-left">
        <div className="ai-cl-line">NODE.01</div>
        <div className="ai-cl-line">LINK.UP</div>
      </div>
      
      <div className="ai-bot">
        <div className="ai-head">
          <div className="ai-antenna"></div>
          <div className="ai-ear ai-ear-l"></div>
          <div className="ai-ear ai-ear-r"></div>
          <div className="ai-visor">
            <div className="ai-eye"></div>
            <div className="ai-eye"></div>
            <div className="ai-scan-line"></div>
          </div>
          <div className="ai-mouth">
            <div className="ai-mouth-bar"></div>
            <div className="ai-mouth-bar"></div>
            <div className="ai-mouth-bar"></div>
            <div className="ai-mouth-bar"></div>
            <div className="ai-mouth-bar"></div>
            <div className="ai-mouth-bar"></div>
          </div>
        </div>
        
        <div className="ai-neck"></div>
        
        <div className="ai-body">
          <div className="ai-chest-panel">
            <div className="ai-chest-bar-wrap">
              <div className="ai-cbar"></div>
              <div className="ai-cbar"></div>
              <div className="ai-cbar"></div>
              <div className="ai-cbar"></div>
              <div className="ai-cbar"></div>
            </div>
            <div className="ai-chest-dot-row">
              <div className="ai-cdot"></div>
              <div className="ai-cdot"></div>
              <div className="ai-cdot"></div>
            </div>
          </div>
        </div>
        
        <div className="ai-arm ai-arm-l">
          <div className="ai-hand"></div>
        </div>
        <div className="ai-arm ai-arm-r">
          <div className="ai-hand"></div>
        </div>
        
        <div className="ai-leg ai-leg-l">
          <div className="ai-foot"></div>
        </div>
        <div className="ai-leg ai-leg-r">
          <div className="ai-foot"></div>
        </div>
      </div>
      
      <div className="ai-float-tag" style={{ top: '20px', left: '40px' }}>MUSIC.SYS</div>
      <div className="ai-float-tag" style={{ bottom: '40px', right: '40px', animationDelay: '1.5s' }}>BEATS.ON</div>
      
      <div className="ai-status">
        <div className="ai-status-dot"></div>
        <div className="ai-status-text">VIBE_CHECK: PASSED</div>
      </div>
    </div>
  );
}
