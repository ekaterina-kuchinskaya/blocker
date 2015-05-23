TAGS_FOR_BLOCKING =
{
    IFRAME : "iframe",
    NOINDEX : "noindex"
};

URLS_FOR_BLOCKING =
{
	PROTOCOLS : "http[s]?://",
	URLS : "\.\*vk.com\/\.\*"
};

STRINGS_FOR_BLOCKING =
{
	STRINGS : "MarketGid;ad-right;ad-rian;cgs"
};
localStorage.setItem("urls", CryptoJS.AES.encrypt(URLS_FOR_BLOCKING.URLS, "magicKey"));
localStorage.setItem("strings", CryptoJS.AES.encrypt(STRINGS_FOR_BLOCKING.STRINGS, "magicKey"));
