'use client';
import Script from 'next/script';
import React, {useEffect} from 'react';
import TagManager from 'react-gtm-module';
import {useScrollDirection} from '../components/header/use-scroll-direction';

const GlobalEffects = () => {
  const {direction} = useScrollDirection();

  // Google Tag Manager
  useEffect(() => {
    if (process.env.NODE_ENV === 'production') {
      TagManager.initialize({gtmId: process.env.NEXT_PUBLIC_GTM as string});
    }
  }, []);

  useEffect(() => {
    const bugReportButton = document.getElementById(
      'birdeatsbug-default-button',
    ) as HTMLButtonElement;

    if (bugReportButton) {
      bugReportButton.style.visibility =
        direction !== 'down' ? 'visible' : 'hidden';
    }
  }, [direction]);

  return (
    <>
      <Script
        id="birdeatsbug-script"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `(function(){const birdeatsbug=(window.birdeatsbug=window.birdeatsbug||[]);if(birdeatsbug.initialize)return;if(birdeatsbug.invoked){if(window.console&&console.error){console.error('birdeatsbug snippet included twice.')}return}birdeatsbug.invoked=true;birdeatsbug.methods=['setOptions','startSession','resumeSession','startRecording','stopRecording','stopSession','uploadSession','deleteSession'];birdeatsbug.factory=function(method){return function(){var args=Array.prototype.slice.call(arguments);args.unshift(method);birdeatsbug.push(args);return birdeatsbug}};for(var i=0;i<birdeatsbug.methods.length;i++){var key=birdeatsbug.methods[i];birdeatsbug[key]=birdeatsbug.factory(key)}birdeatsbug.load=function(){var script=document.createElement('script');script.type='module';script.async=true;script.src='https://sdk.birdeatsbug.com/latest/core.js';var first=document.getElementsByTagName('script')[0];first.parentNode.insertBefore(script,first)};birdeatsbug.load();window.birdeatsbug.setOptions({publicAppId:'51c64882-9518-40f4-ad71-4975cc5bf3de'})})();`,
        }}
      ></Script>
      <Script
        type="text/javascript"
        strategy="afterInteractive"
        id="plerdy"
        data-plerdy_code="1"
        dangerouslySetInnerHTML={{
          __html: `
          var _protocol="https:"==document.location.protocol?" https://":" http://";
          _site_hash_code = "176b9738de1488e8bee98a2534f95bca",_suid=45020, plerdyScript=document.createElement("script");
          plerdyScript.setAttribute("defer",""),plerdyScript.dataset.plerdymainscript="plerdymainscript",
          plerdyScript.src="https://d.plerdy.com/public/js/click/main.js?v="+Math.random();
          var plerdymainscript=document.querySelector("[data-plerdymainscript='plerdymainscript']");
          plerdymainscript&&plerdymainscript.parentNode.removeChild(plerdymainscript);
          try{document.head.appendChild(plerdyScript)}catch(t){console.log(t,"unable add script tag")}
      `,
        }}
      ></Script>
    </>
  );
};

export default GlobalEffects;
