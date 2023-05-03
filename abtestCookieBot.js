function redirectToABVersion() {
    console.log('Inside redirectToABVersion function');
  
    const versionA = 'indexa.html';
    const versionB = 'indexb.html';
  
    // Check if a version cookie is already set
    const versionCookie = getCookie('ab_version');
  
    if (versionCookie === 'A') {
      window.location.href = versionA;
    } else if (versionCookie === 'B') {
      window.location.href = versionB;
    } else {
      const randomNum = Math.random();
      let selectedVersion = '';
  
      if (randomNum < 0.5) {
        selectedVersion = 'A';
        window.location.href = versionA;
      } else {
        selectedVersion = 'B';
        window.location.href = versionB;
      }
  
      if (typeof Cookiebot !== 'undefined') {
        // Check if the user has already given consent
        if (Cookiebot.consent.preferences || Cookiebot.consent.statistics || Cookiebot.consent.marketing) {
          setCookie('ab_version', selectedVersion, 30); // Set version cookie with 30 days expiry
        } else {
          
        /* Use Cookiebot's onConsent callback to set the cookie if consent is given. 
        This allows the cookie to be set even if the user opts-in after the page has
        already loaded. */
          Cookiebot.onConsent = function() {
            if (Cookiebot.consent.preferences || Cookiebot.consent.statistics || Cookiebot.consent.marketing) {
              setCookie('ab_version', selectedVersion, 30); // Set version cookie with 30 days expiry
            }
          };
        }
      } else {
        console.error("Cookiebot script not included.");
        // Fallback mechanism or error handling here, if needed
      }
    }
  }
  