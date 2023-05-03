//Simple verison of the script that does not set a cookie, utilise cookieBot etc. Simply randomly directs users.
function redirectToABVersion() {
    console.log('Inside redirectToABVersion function');
  
    const versionA = 'indexa.html';
    const versionB = 'indexb.html';
  
    const randomNum = Math.random();
  
    if (randomNum < 0.5) {
      window.location.href = versionA;
    } else {
      window.location.href = versionB;
    }
  }
  