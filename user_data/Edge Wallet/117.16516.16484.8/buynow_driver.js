!function(){"use strict";let t=!1;window.BuyNowRuntime=new class{constructor(){this.onCheckoutFinished=void 0,this.orderDetails=void 0}raiseMessageFromHost(t){const s=t.shift();s&&"StartMerchantAuth"===s||s&&"CheckoutFinished"===s&&this.onCheckoutFinished&&this.onCheckoutFinished(t[0])}postMessageToHost(t,s){try{walletBuyNowNativeHandler&&walletBuyNowNativeHandler.sendMessageToHost(t,s)}catch(t){}}initialize(s){return t||(t=!0),!0}OnBuyNowClick(t,s){this.onCheckoutFinished=s;const e=JSON.stringify(t);this.postMessageToHost("StartBuyNow",[e])}}}();