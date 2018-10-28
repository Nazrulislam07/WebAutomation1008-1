$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("features/GoogleFooterLinkTests.feature");
formatter.feature({
  "line": 3,
  "name": "Google Footer links Checkup",
  "description": "As a Google Lover,\r\nI want to learn about the legal policies and terms of service of Google and Gmail.",
  "id": "google-footer-links-checkup",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@GoogleFooterLinks"
    },
    {
      "line": 2,
      "name": "@regression"
    }
  ]
});
formatter.before({
  "duration": 3986626379,
  "status": "passed"
});
formatter.background({
  "line": 7,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 8,
  "name": "I launch the Google home page",
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "I scroll down to the end of the page",
  "keyword": "And "
});
formatter.match({
  "location": "CommonSteps.i_launch_the_Google_home_page()"
});
formatter.result({
  "duration": 1159707936,
  "status": "passed"
});
formatter.match({
  "location": "CommonSteps.i_scroll_down_to_the_end_of_the_page()"
});
formatter.result({
  "duration": 2061372505,
  "status": "passed"
});
formatter.scenario({
  "line": 11,
  "name": "Terms Link test",
  "description": "",
  "id": "google-footer-links-checkup;terms-link-test",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 12,
  "name": "I click on the Terms link",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "I see the Terms page",
  "keyword": "Then "
});
formatter.match({
  "location": "GoogleFooterLinkTests.i_click_on_the_Terms_link()"
});
formatter.result({
  "duration": 2633911728,
  "status": "passed"
});
formatter.match({
  "location": "GoogleFooterLinkTests.i_see_the_Terms_page()"
});
formatter.result({
  "duration": 2087872188,
  "status": "passed"
});
formatter.after({
  "duration": 1280298387,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 16,
  "name": "Selecting different footer links and checking the corresponding page",
  "description": "",
  "id": "google-footer-links-checkup;selecting-different-footer-links-and-checking-the-corresponding-page",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 17,
  "name": "I select \"\u003cfooterLink_text\u003e\" link in the Google footer",
  "keyword": "When "
});
formatter.step({
  "line": 18,
  "name": "I verify the selected Google page by the existence of the \"\u003clinkedPage_text\u003e\" text",
  "keyword": "Then "
});
formatter.examples({
  "line": 20,
  "name": "",
  "description": "",
  "id": "google-footer-links-checkup;selecting-different-footer-links-and-checking-the-corresponding-page;",
  "rows": [
    {
      "cells": [
        "footerLink_text",
        "linkedPage_text"
      ],
      "line": 21,
      "id": "google-footer-links-checkup;selecting-different-footer-links-and-checking-the-corresponding-page;;1"
    },
    {
      "cells": [
        "Privacy",
        "Welcome to the Google Privacy Policy"
      ],
      "line": 22,
      "id": "google-footer-links-checkup;selecting-different-footer-links-and-checking-the-corresponding-page;;2"
    },
    {
      "cells": [
        "Terms",
        "Google Terms of Service"
      ],
      "line": 23,
      "id": "google-footer-links-checkup;selecting-different-footer-links-and-checking-the-corresponding-page;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 1526319657,
  "status": "passed"
});
formatter.background({
  "line": 7,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 8,
  "name": "I launch the Google home page",
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "I scroll down to the end of the page",
  "keyword": "And "
});
formatter.match({
  "location": "CommonSteps.i_launch_the_Google_home_page()"
});
formatter.result({
  "duration": 1299380687,
  "status": "passed"
});
formatter.match({
  "location": "CommonSteps.i_scroll_down_to_the_end_of_the_page()"
});
formatter.result({
  "duration": 2031082638,
  "status": "passed"
});
formatter.scenario({
  "line": 22,
  "name": "Selecting different footer links and checking the corresponding page",
  "description": "",
  "id": "google-footer-links-checkup;selecting-different-footer-links-and-checking-the-corresponding-page;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@GoogleFooterLinks"
    },
    {
      "line": 2,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 17,
  "name": "I select \"Privacy\" link in the Google footer",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 18,
  "name": "I verify the selected Google page by the existence of the \"Welcome to the Google Privacy Policy\" text",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Privacy",
      "offset": 10
    }
  ],
  "location": "GoogleFooterLinkTests.i_select_link_in_the_Google_footer(String)"
});
formatter.result({
  "duration": 2471765134,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Welcome to the Google Privacy Policy",
      "offset": 59
    }
  ],
  "location": "GoogleFooterLinkTests.i_verify_the_selected_Google_page_by_the_existence_of_the_text(String)"
});
formatter.result({
  "duration": 2718397300,
  "error_message": "java.lang.AssertionError: expected:\u003ctrue\u003e but was:\u003cfalse\u003e\r\n\tat org.junit.Assert.fail(Assert.java:88)\r\n\tat org.junit.Assert.failNotEquals(Assert.java:743)\r\n\tat org.junit.Assert.assertEquals(Assert.java:118)\r\n\tat org.junit.Assert.assertEquals(Assert.java:144)\r\n\tat step_definitions.GoogleFooterLinkTests.i_verify_the_selected_Google_page_by_the_existence_of_the_text(GoogleFooterLinkTests.java:59)\r\n\tat ✽.Then I verify the selected Google page by the existence of the \"Welcome to the Google Privacy Policy\" text(features/GoogleFooterLinkTests.feature:18)\r\n",
  "status": "failed"
});
formatter.after({
  "duration": 1253150858,
  "status": "passed"
});
formatter.before({
  "duration": 1587874036,
  "status": "passed"
});
formatter.background({
  "line": 7,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 8,
  "name": "I launch the Google home page",
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "I scroll down to the end of the page",
  "keyword": "And "
});
formatter.match({
  "location": "CommonSteps.i_launch_the_Google_home_page()"
});
formatter.result({
  "duration": 1131339025,
  "status": "passed"
});
formatter.match({
  "location": "CommonSteps.i_scroll_down_to_the_end_of_the_page()"
});
formatter.result({
  "duration": 2027966984,
  "status": "passed"
});
formatter.scenario({
  "line": 23,
  "name": "Selecting different footer links and checking the corresponding page",
  "description": "",
  "id": "google-footer-links-checkup;selecting-different-footer-links-and-checking-the-corresponding-page;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@GoogleFooterLinks"
    },
    {
      "line": 2,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 17,
  "name": "I select \"Terms\" link in the Google footer",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 18,
  "name": "I verify the selected Google page by the existence of the \"Google Terms of Service\" text",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Terms",
      "offset": 10
    }
  ],
  "location": "GoogleFooterLinkTests.i_select_link_in_the_Google_footer(String)"
});
formatter.result({
  "duration": 2431273953,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Google Terms of Service",
      "offset": 59
    }
  ],
  "location": "GoogleFooterLinkTests.i_verify_the_selected_Google_page_by_the_existence_of_the_text(String)"
});
formatter.result({
  "duration": 2043336282,
  "status": "passed"
});
formatter.after({
  "duration": 1105230595,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 26,
  "name": "Selecting different sublinks on the Google Privacy footer link",
  "description": "",
  "id": "google-footer-links-checkup;selecting-different-sublinks-on-the-google-privacy-footer-link",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 27,
  "name": "I select the Privacy link in the Google footer",
  "keyword": "Given "
});
formatter.step({
  "line": 28,
  "name": "I click on the Privacy Policy tab",
  "keyword": "When "
});
formatter.step({
  "line": 29,
  "name": "I click on a specific Privacy Policy \"\u003cprivacy_policy\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "I verify the selected \"\u003cpolicy_detail\u003e\" Privacy Policy detail",
  "keyword": "Then "
});
formatter.examples({
  "line": 32,
  "name": "",
  "description": "",
  "id": "google-footer-links-checkup;selecting-different-sublinks-on-the-google-privacy-footer-link;",
  "rows": [
    {
      "cells": [
        "privacy_policy",
        "policy_detail"
      ],
      "line": 33,
      "id": "google-footer-links-checkup;selecting-different-sublinks-on-the-google-privacy-footer-link;;1"
    },
    {
      "cells": [
        "Information we collect",
        "We collect information"
      ],
      "line": 34,
      "id": "google-footer-links-checkup;selecting-different-sublinks-on-the-google-privacy-footer-link;;2"
    },
    {
      "cells": [
        "How we use information we collect",
        "We use the information we collect"
      ],
      "line": 35,
      "id": "google-footer-links-checkup;selecting-different-sublinks-on-the-google-privacy-footer-link;;3"
    },
    {
      "cells": [
        "Transparency and choice",
        "People have different privacy concerns"
      ],
      "line": 36,
      "id": "google-footer-links-checkup;selecting-different-sublinks-on-the-google-privacy-footer-link;;4"
    },
    {
      "cells": [
        "Information you share",
        "Many of our services let you share information with others"
      ],
      "line": 37,
      "id": "google-footer-links-checkup;selecting-different-sublinks-on-the-google-privacy-footer-link;;5"
    },
    {
      "cells": [
        "Accessing and updating your personal information",
        "We aim to maintain our services in a manner that protects information"
      ],
      "line": 38,
      "id": "google-footer-links-checkup;selecting-different-sublinks-on-the-google-privacy-footer-link;;6"
    },
    {
      "cells": [
        "Information we share",
        "We do not share personal information with companies"
      ],
      "line": 39,
      "id": "google-footer-links-checkup;selecting-different-sublinks-on-the-google-privacy-footer-link;;7"
    },
    {
      "cells": [
        "Information security",
        "We work hard to protect Google and our users"
      ],
      "line": 40,
      "id": "google-footer-links-checkup;selecting-different-sublinks-on-the-google-privacy-footer-link;;8"
    },
    {
      "cells": [
        "When this Privacy Policy applies",
        "Our Privacy Policy applies to all of the services offered by Google LLC"
      ],
      "line": 41,
      "id": "google-footer-links-checkup;selecting-different-sublinks-on-the-google-privacy-footer-link;;9"
    },
    {
      "cells": [
        "Compliance and cooperation with regulatory authorities",
        "We regularly review our compliance with our Privacy Policy"
      ],
      "line": 42,
      "id": "google-footer-links-checkup;selecting-different-sublinks-on-the-google-privacy-footer-link;;10"
    },
    {
      "cells": [
        "Changes",
        "Our Privacy Policy may change from time to time"
      ],
      "line": 43,
      "id": "google-footer-links-checkup;selecting-different-sublinks-on-the-google-privacy-footer-link;;11"
    },
    {
      "cells": [
        "Specific product practices",
        "The following notices explain specific privacy practices"
      ],
      "line": 44,
      "id": "google-footer-links-checkup;selecting-different-sublinks-on-the-google-privacy-footer-link;;12"
    },
    {
      "cells": [
        "Other useful privacy and security related materials",
        "Further useful privacy and security related materials can be found"
      ],
      "line": 45,
      "id": "google-footer-links-checkup;selecting-different-sublinks-on-the-google-privacy-footer-link;;13"
    },
    {
      "comments": [
        {
          "line": 46,
          "value": "# \t|Self Regulatory Frameworks|Self Regulatory Frameworks|"
        }
      ],
      "cells": [
        "Key terms",
        "An affiliate is an entity that belongs"
      ],
      "line": 47,
      "id": "google-footer-links-checkup;selecting-different-sublinks-on-the-google-privacy-footer-link;;14"
    },
    {
      "cells": [
        "Partners",
        "How Google uses data when you use our partners"
      ],
      "line": 48,
      "id": "google-footer-links-checkup;selecting-different-sublinks-on-the-google-privacy-footer-link;;15"
    },
    {
      "cells": [
        "Updates",
        "We want to be as transparent as possible about the changes"
      ],
      "line": 49,
      "id": "google-footer-links-checkup;selecting-different-sublinks-on-the-google-privacy-footer-link;;16"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 1475370161,
  "status": "passed"
});
formatter.background({
  "line": 7,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 8,
  "name": "I launch the Google home page",
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "I scroll down to the end of the page",
  "keyword": "And "
});
formatter.match({
  "location": "CommonSteps.i_launch_the_Google_home_page()"
});
formatter.result({
  "duration": 1376824940,
  "status": "passed"
});
formatter.match({
  "location": "CommonSteps.i_scroll_down_to_the_end_of_the_page()"
});
formatter.result({
  "duration": 2016997534,
  "status": "passed"
});
formatter.scenario({
  "line": 34,
  "name": "Selecting different sublinks on the Google Privacy footer link",
  "description": "",
  "id": "google-footer-links-checkup;selecting-different-sublinks-on-the-google-privacy-footer-link;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@GoogleFooterLinks"
    },
    {
      "line": 2,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 27,
  "name": "I select the Privacy link in the Google footer",
  "keyword": "Given "
});
formatter.step({
  "line": 28,
  "name": "I click on the Privacy Policy tab",
  "keyword": "When "
});
formatter.step({
  "line": 29,
  "name": "I click on a specific Privacy Policy \"Information we collect\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "I verify the selected \"We collect information\" Privacy Policy detail",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "GoogleFooterLinkTests.i_select_the_Privacy_link_in_the_Google_footer()"
});
formatter.result({
  "duration": 2409479978,
  "status": "passed"
});
formatter.match({
  "location": "GoogleFooterLinkTests.i_click_on_the_Privacy_and_Policy_tab()"
});
formatter.result({
  "duration": 2176665647,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"link text\",\"selector\":\"Privacy Policy\"}\n  (Session info: chrome\u003d69.0.3497.100)\n  (Driver info: chromedriver\u003d2.35.528161 (5b82f2d2aae0ca24b877009200ced9065a772e73),platform\u003dWindows NT 10.0.10240 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 2.17 seconds\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.4.0\u0027, revision: \u0027unknown\u0027, time: \u0027unknown\u0027\nSystem info: host: \u0027MININT-3R3M1CE\u0027, ip: \u0027192.168.1.13\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_181\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities [{applicationCacheEnabled\u003dfalse, rotatable\u003dfalse, mobileEmulationEnabled\u003dfalse, networkConnectionEnabled\u003dfalse, chrome\u003d{chromedriverVersion\u003d2.35.528161 (5b82f2d2aae0ca24b877009200ced9065a772e73), userDataDir\u003dC:\\Users\\mhossa12\\AppData\\Local\\Temp\\scoped_dir15464_19550}, takesHeapSnapshot\u003dtrue, pageLoadStrategy\u003dnormal, databaseEnabled\u003dfalse, handlesAlerts\u003dtrue, hasTouchScreen\u003dfalse, version\u003d69.0.3497.100, platform\u003dXP, browserConnectionEnabled\u003dfalse, nativeEvents\u003dtrue, acceptSslCerts\u003dfalse, acceptInsecureCerts\u003dfalse, locationContextEnabled\u003dtrue, webStorageEnabled\u003dtrue, browserName\u003dchrome, takesScreenshot\u003dtrue, javascriptEnabled\u003dtrue, cssSelectorsEnabled\u003dtrue, setWindowRect\u003dtrue, unexpectedAlertBehaviour\u003d}]\nSession ID: 212cd72c8fb471c9983e30d4e29cd2d7\n*** Element info: {Using\u003dlink text, value\u003dPrivacy Policy}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.lang.reflect.Constructor.newInstance(Unknown Source)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:215)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:167)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:671)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:410)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByLinkText(RemoteWebDriver.java:461)\r\n\tat org.openqa.selenium.By$ByLinkText.findElement(By.java:246)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:402)\r\n\tat step_definitions.GoogleFooterLinkTests.i_click_on_the_Privacy_and_Policy_tab(GoogleFooterLinkTests.java:73)\r\n\tat ✽.When I click on the Privacy Policy tab(features/GoogleFooterLinkTests.feature:28)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "Information we collect",
      "offset": 38
    }
  ],
  "location": "GoogleFooterLinkTests.i_click_on_a_specific_Privacy_Policy(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "We collect information",
      "offset": 23
    }
  ],
  "location": "GoogleFooterLinkTests.i_verify_the_selected_Privacy_Policy_detail(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 1165369812,
  "status": "passed"
});
formatter.before({
  "duration": 1623545375,
  "status": "passed"
});
formatter.background({
  "line": 7,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 8,
  "name": "I launch the Google home page",
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "I scroll down to the end of the page",
  "keyword": "And "
});
formatter.match({
  "location": "CommonSteps.i_launch_the_Google_home_page()"
});
formatter.result({
  "duration": 1195925716,
  "status": "passed"
});
formatter.match({
  "location": "CommonSteps.i_scroll_down_to_the_end_of_the_page()"
});
formatter.result({
  "duration": 2020085271,
  "status": "passed"
});
formatter.scenario({
  "line": 35,
  "name": "Selecting different sublinks on the Google Privacy footer link",
  "description": "",
  "id": "google-footer-links-checkup;selecting-different-sublinks-on-the-google-privacy-footer-link;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@GoogleFooterLinks"
    },
    {
      "line": 2,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 27,
  "name": "I select the Privacy link in the Google footer",
  "keyword": "Given "
});
formatter.step({
  "line": 28,
  "name": "I click on the Privacy Policy tab",
  "keyword": "When "
});
formatter.step({
  "line": 29,
  "name": "I click on a specific Privacy Policy \"How we use information we collect\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "I verify the selected \"We use the information we collect\" Privacy Policy detail",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "GoogleFooterLinkTests.i_select_the_Privacy_link_in_the_Google_footer()"
});
formatter.result({
  "duration": 2426226258,
  "status": "passed"
});
formatter.match({
  "location": "GoogleFooterLinkTests.i_click_on_the_Privacy_and_Policy_tab()"
});
formatter.result({
  "duration": 1989919799,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"link text\",\"selector\":\"Privacy Policy\"}\n  (Session info: chrome\u003d69.0.3497.100)\n  (Driver info: chromedriver\u003d2.35.528161 (5b82f2d2aae0ca24b877009200ced9065a772e73),platform\u003dWindows NT 10.0.10240 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 1.99 seconds\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.4.0\u0027, revision: \u0027unknown\u0027, time: \u0027unknown\u0027\nSystem info: host: \u0027MININT-3R3M1CE\u0027, ip: \u0027192.168.1.13\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_181\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities [{applicationCacheEnabled\u003dfalse, rotatable\u003dfalse, mobileEmulationEnabled\u003dfalse, networkConnectionEnabled\u003dfalse, chrome\u003d{chromedriverVersion\u003d2.35.528161 (5b82f2d2aae0ca24b877009200ced9065a772e73), userDataDir\u003dC:\\Users\\mhossa12\\AppData\\Local\\Temp\\scoped_dir20152_27484}, takesHeapSnapshot\u003dtrue, pageLoadStrategy\u003dnormal, databaseEnabled\u003dfalse, handlesAlerts\u003dtrue, hasTouchScreen\u003dfalse, version\u003d69.0.3497.100, platform\u003dXP, browserConnectionEnabled\u003dfalse, nativeEvents\u003dtrue, acceptSslCerts\u003dfalse, acceptInsecureCerts\u003dfalse, locationContextEnabled\u003dtrue, webStorageEnabled\u003dtrue, browserName\u003dchrome, takesScreenshot\u003dtrue, javascriptEnabled\u003dtrue, cssSelectorsEnabled\u003dtrue, setWindowRect\u003dtrue, unexpectedAlertBehaviour\u003d}]\nSession ID: 728d1bae73f72726f1bc7045f2ddf651\n*** Element info: {Using\u003dlink text, value\u003dPrivacy Policy}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.lang.reflect.Constructor.newInstance(Unknown Source)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:215)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:167)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:671)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:410)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByLinkText(RemoteWebDriver.java:461)\r\n\tat org.openqa.selenium.By$ByLinkText.findElement(By.java:246)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:402)\r\n\tat step_definitions.GoogleFooterLinkTests.i_click_on_the_Privacy_and_Policy_tab(GoogleFooterLinkTests.java:73)\r\n\tat ✽.When I click on the Privacy Policy tab(features/GoogleFooterLinkTests.feature:28)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "How we use information we collect",
      "offset": 38
    }
  ],
  "location": "GoogleFooterLinkTests.i_click_on_a_specific_Privacy_Policy(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "We use the information we collect",
      "offset": 23
    }
  ],
  "location": "GoogleFooterLinkTests.i_verify_the_selected_Privacy_Policy_detail(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 1293874820,
  "status": "passed"
});
formatter.before({
  "duration": 1679144334,
  "status": "passed"
});
formatter.background({
  "line": 7,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 8,
  "name": "I launch the Google home page",
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "I scroll down to the end of the page",
  "keyword": "And "
});
formatter.match({
  "location": "CommonSteps.i_launch_the_Google_home_page()"
});
formatter.result({
  "duration": 1338923090,
  "status": "passed"
});
formatter.match({
  "location": "CommonSteps.i_scroll_down_to_the_end_of_the_page()"
});
