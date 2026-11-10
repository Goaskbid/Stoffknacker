/* Operator configuration. Empty advertising credentials deliberately fail closed.
 * Never commit private API keys. Publisher/client/slot IDs and CMP public tags are public.
 * Before activation: Google approval, ads.txt, certified CMP/TCF 2.3, cookie/network tests,
 * adult-audience placement review and current privacy notice. No Auto Ads during lessons.
 */
window.SK_SITE_CONFIG = Object.freeze({
  release: 'r179-candidate',
  analytics: Object.freeze({enabled: true, id: 'G-48TLHWVD61'}),
  ads: Object.freeze({enabled: true, client: '', slots: Object.freeze({learnFooter:'',chapterEnd:''}),
    cmpName: '', approvedCmpId: 0, tcfVersion: '2.3', cmpScriptUrl: '',
    operatorApproved: false, adsTxtVerified: false, personalized: false}),
  testimonials: Object.freeze([])
});
