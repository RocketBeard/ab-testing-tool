If a user arrives and does not have a version cookie set, the script assigns a user a random number which determines which of 2 specified pages they are directed to.

Once a user is redirected, a cookie is set containing the version reference. This utilises cookieBot's callback functionality
that means even if a user opts-in to cookies after the page has loaded, the cookie will be retroactively set.

Every time the user returns to the main page (index.html), if there is a set cookie, they will be directed to that page. 
Therefore the user experience is always the same.

--

GA4 reporting instructions:

1. On the conversion page, create a custom event to send to GA4 when a user takes a specific action (e.g., form submission, button click) that you consider a conversion. 
Include the user's assigned version (A or B) as an event parameter by retireving it from the cookie using GTM.

2. In GA4, create a new conversion event based on the custom events you've sent from your conversion page.

5. Use GA4's reporting tools to analyze and compare the performance of each version (A and B) based on the conversion events. You can create a custom report or use the event parameter ab_version to segment the data.

JM.