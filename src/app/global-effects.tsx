'use client';
import Script from 'next/script';
import  {useEffect} from 'react';
import TagManager from 'react-gtm-module';

const GlobalEffects = () => {
  // Google Tag Manager
  useEffect(() => {
    if (process.env.NODE_ENV === 'production') {
      TagManager.initialize({gtmId: process.env.NEXT_PUBLIC_GTM as string});
    }
  }, []);


  return (
    <>
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
