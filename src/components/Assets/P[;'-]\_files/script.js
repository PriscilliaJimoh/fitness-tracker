 	// Edit this file to add your customized JavaScript or load additional JavaScript files.

/* Example customization - Show a click through screen on web and native */

/*
 */

/* End of example customization */

//* Change log */
//*Storefromt web EXTERNAL customization*
//20221110 - Update to added autolaunch functions
//20230131 - Update to fix log off issue for CTXS.Extensions.beforeWebLogoffWebSession
//20230531 - Update Mytechub links
//20240528 - Update function showDisclaimer to inlcude focus for discalimer button
//20241114 - Update to change MYTECHUB name to HELP
//20241115 - Update help link for resource page

const disclaimerHTML = `<div class="popup messageBoxPopup" id="jpmcDisclaimerBox" role="alertdialog" aria-describedby="messageBoxTitle">
        <div class="messageBoxContent">
            <h1 class="messageBoxTitle">Systems Usage and Monitoring</h1>
            <p class="messageBoxText">This system is restricted to authorized users. <br>Individuals attempting unauthorized access will be prosecuted. <br>If unauthorized, terminate access now! <br><br>JPMorgan Chase's technology resources, including, but not limited to computers, e-mail, Internet equipment and systems, and messaging technologies should be used for JPMorgan Chase's business purposes.<br><br>JPMorgan Chase monitors usage of these resources, subject to applicable laws and regulations. If you use these resources for unlawful, abusive, unethical, or other inappropriate purposes, your employment may be terminated. <br><p></p><p class="messageBoxText messageBoxBulletsHeader">By clicking OK, you agree that:<br></p><ul><li>Your use of this system may be monitored and you do not have an expectation of privacy, subject to applicable laws and regulations</li><li>Your usage does not violate any law or JPMorgan Chase policy</li><li>You will not disclose confidential information, as defined in the JPMorgan Chase Code of Conduct</li></ul><p class="messageBoxText">For more information, please refer to the Code of Conduct, the Acceptable Use Policy, your regional Privacy Policy Supplement, or for contingent workers, the Suppliers Relations page on JPMorganChase.com.</p></p>
        </div>
        <div class="messageBoxAction"><a href="#" class="dialog button default" id="jpmcAcceptDisclaimerBtn">OK</a></div>
</div>`



CTXS.Extensions.doLaunch = function (app,launchFn) {
	if (CTXS.getCookie("jpmc_clickThroughFinished")==="1"){
		launchFn();
	}else{
        showDisclaimer();
	}
}



var userDesktops = [];
var userAutoLaunchNameList = localStorage.getItem('jpmc_autoLaunchList');
userAutoLaunchNameList = ((userAutoLaunchNameList != null) ? userAutoLaunchNameList : []);
var autoLaunchResourceList = [];

CTXS.Extensions.noteApp = function (app) {
       if (app.isdesktop){
             userDesktops.push(app);
       }     
}

function autoLaunchResources(){
	if ((CTXS.getCookie("CtxsIsPassThrough")!=="true")&&(CTXS.getCookie("CtxsUserPreferredClient")!=="Native")){//Check if user is within a published destkop and do not autolaunch desktop.
             if (userDesktops.length === 1){ //Does the user only have one desktop?
                    CTXS.ExtensionAPI.launch(userDesktops[0]); //Add the single desktop to the autolaunch list.
             }      
       }      
}

function showDisclaimer(){
	$("#jpmcDisclaimerBox").show();
	$("#genericMessageBoxOverlay").show();
	$("#jpmcAcceptDisclaimerBtn").focus();
}

function hideDisclaimer(){
	$("#jpmcDisclaimerBox").hide();
	$("#genericMessageBoxOverlay").hide();
}

function setAuthorizationAccepted(){
	CTXS.setCookie("jpmc_clickThroughFinished","1");
	hideDisclaimer();
	autoLaunchResources();
}

// Before main screen (both web and native)
CTXS.Extensions.beforeDisplayHomeScreen = function (callback) {
    buildAlertBox();	
	$("#genericMessageBoxOverlay").after(disclaimerHTML);
	$("#jpmcAcceptDisclaimerBtn").click(setAuthorizationAccepted);
	callback();
};

CTXS.Extensions.afterDisplayHomeScreen = function () {
	loadAnnouncementData();
	
	if (CTXS.getCookie("jpmc_clickThroughFinished")!=="1"){
        showDisclaimer();
    } else {
		autoLaunchResources();
    }   
	
	
};

CTXS.Extensions.beforeWebLogoffWebSession = function () {
	var expires = new Date();
	expires.setTime(expires.getTime() - 1);
	document.cookie = 'jpmc_clickThroughFinished=0;expires=' + expires.toUTCstring + ';max-age=0;';

	return true;
}

document.title = 'MyWorkSpace';

$('link[rel="icon"]').attr('href','custom/my.png');


//Links for Logon page



		




//Links for About page
var $markup = $('<div id="mytechub"><a href="javascript:LaunchMyTecHubResource();"><img src="custom/askJPMC.png" align="center"></img></a></div>');
$markup.insertAfter('.citrixLink');


//Pre-logon timeout Header
var $markup = $('<div id="customExplicitAuthHeader" class="customAuthHeader"><div id="mws-header-logo" class="logo-container"></div><div id="mws-lower-header"></div></div>');
$('#customAuthHeader').replaceWith($markup);

//Login Header
var $markup = $('<div id="customExplicitAuthHeader" class="customAuthHeader"><div id="mws-header-logo" class="logo-container"></div><div id="mws-lower-header"></div></div>');
$('#customExplicitAuthHeader').replaceWith($markup);

//Login Message
/*var $markup = $('<div id="MWS-message">Log on to access your workspace.</div>');
$markup.insertBefore('.form-content');*/

//Remove Login Logo
$('.logon-logo-container').remove();

//Login Text
//$('#pluginExplicitAuthTop').replaceWith('<div id="pluginExplicitAuthTop" class="pluginAuthTop"><div class="logon-text">Enter your credentials to log on<br>to your workspace</div></div>');

//Login footer
var cdate = new Date();
var cyear = cdate.getFullYear();

var $markup = $('<div id="customAuthFooter" class="customAuthFooter"><div class="footer-bottom"><div class="JPMC-logo"></div><div class="copyright-text">Copyright © '+cyear+' JPMorgan Chase & Co.</div></div></div>');
$('.customAuthFooter').replaceWith($markup);

//Post-login footer
var $markup = $('<div class="JPMC-logo"></div><div class="copyright-text">Copyright © '+cyear+' JPMorgan Chase & Co.</div><div class="footer-bottom"></div>');
$markup.insertAfter('#customBottom');

//Move Desktop icon next to Home button
$("#desktopsBtn").insertAfter("#myHomeBtn")
//Post-login MyTechHub button
var $markup = $('<a id="myTechubButton" href="javascript:LaunchMyTecHubResource();" class="mth-button"><div class="mtg-bg"></div><span class="theme-header-color">HELP</span></a>');
$markup.insertAfter('#allAppsBtn');


//Logoff header
var $markup = $('<div id="customExplicitAuthHeader" class="customAuthHeader"><div id="mws-header-logo" class="logo-container"></div><div id="mws-lower-header"></div></div><div class="logon-small logon-logo-container"></div><div class="logoff-progress content-area"><h1 class="_ctxstxt_LoggingOff main-text">Logging off Citrix Receiver...</h1><div class="spinner authentication-spinner" style="background-position: -25px 50%;"></div></div>');
$('div.logoff-progress.content-area').replaceWith($markup);

// Custom Timeout for Passthru Auth
CTXS.Controllers.AuthenticationController.prototype.origCompleteAuthentication = CTXS.Controllers.AuthenticationController.prototype._completeAuthentication;

CTXS.Controllers.AuthenticationController.prototype._completeAuthentication = function (authenticationMethod, authInfo) {
    if (authenticationMethod.name == CTXS.Authentication.Method.PASSTHROUGH) {
        CTXS.Config._config.session.timeout = 480;
	$.ajax({ url: 'customweb/UpdateSessionTimeout.aspx'});

    }

    this.origCompleteAuthentication(authenticationMethod, authInfo);
};


// MyTechHub link - External
function LaunchMyTecHubResource()
{
	NewWindow = window.open("https://hr.jpmorganchase.com/mytechub");			
}

// Remove logon-spacer from time out page
var logonspacer = document.querySelectorAll(".logon-spacer")[0];
logonspacer.parentNode.removeChild(logonspacer);

//Create the box that will host the alert
function buildAlertBox(){
 $('#customTop').html('<div id="mrg-alert"><img id="mrg-alertimg" src="custom/alert3.png"></img><p id="mrg-announcement"></p></div>');

};


//Fetch the alert
function loadAnnouncementData() {
CTXS.ExtensionAPI.proxyRequest({
    url: "customWeb/alert.txt",
    success: function(alertText){
      if(!alertText.includes("<title>404 - File or directory not found.</title>")){//Fix for Workspace App
	$('#customTop').show();
      	$('#mrg-announcement').text(alertText);
      	CTXS.ExtensionAPI.resize();
      }else{
      	$('#customTop').hide();
      	$('#mrg-announcement').empty();
      	CTXS.ExtensionAPI.resize();
      }
    },
    error: function(alertText){
      $('#customTop').hide();
      $('#mrg-announcement').empty();
      CTXS.ExtensionAPI.resize();
    }
  });
  			
};

//Reload the content of the alert box every 5 minutes.  This can be adjusted as needed.  Decreasing the time will increase the strain on StoreFront.
setTimeout(function run() {
  loadAnnouncementData();
  setTimeout(run,300000);
}, 0);



// Delay VDI after restart


(function ($) {

	// The environment context
	var tech = 'LVDI';

	// The actual amount to stall the restart
	var delay = 120;
	
	// Set the delay timeout in seconds
	var delayLaunchInSeconds = 0;

	// Set the body tag listener
	var target = document.body;

	// create an observer instance
	var observer = new MutationObserver(function(mutations) {
		var restart = [];
		mutations.forEach(function(mutation) {
			if($('body').hasClass('appinfo-view')) {
				if($('h1.appInfoName').text()) {
					restart.push('restart');
					var env = $('h1.appInfoName').text();
					if(env.search(tech) !== -1&&restart.length===1) {
						delayLaunchInSeconds = delay;
					}else if(env.search(tech) === -1&&restart.length===1) {
						delayLaunchInSeconds = 0;
					}
				}
			}
		});
	});
	
	// configuration of the observer:
	var config = { attributes: true, childList: true, characterData: true };
	
	// pass in the target node, as well as the observer options
	observer.observe(target, config);
	
	// Default Citrix event binding tool chain
	CTXS.Events.unsubscribe(CTXS.Events.resources.powerOffStatus);
	CTXS.Events.subscribe(CTXS.Events.resources.powerOffStatus, function (event, data) {
	    if (data.status == CTXS.POWEROFF_STARTING) {
	    
	    }
		else if (data.status == CTXS.POWEROFF_SUCCESS) {
			window.setTimeout(function() {
				CTXS.Store.launchApp(data.desktop);
			}, ((data.desktop.poweroffurl || "").indexOf("ServiceProxy.ashx") === 0 ? 200 : delayLaunchInSeconds) * 1000);
		} 
		else if (data.status == CTXS.POWEROFF_FAILURE) {
		     if(data.errorId == 'no-session'){

                          CTXS.Environment.showDialog({

				messageText: 'Please login again and try.', //$.localization.string(messageKey, data.desktop.displayNameDesktopTitle),

                                id: "PowerOffError"
		        
                          });
		    
                     }

		    else if (data.errorId == 'power-off-error') {		
			       CTXS.Environment.showDialog({

		                   messageText: 'Please try again after some time.', //$.localization.string(messageKey, data.desktop.displayNameDesktopTitle),
		            
                                   id: "PowerOffError"

  		               });

		    }
		    else if (data.errorId == 'operation-in-progress') {
				return;
			} else if (data.errorId == 'no-machine') {
				CTXS.Store.launchApp(data.desktop);
			} else {
				// Report all other errors to the user
				var messageKey = (data.errorId == "in-maintenance-mode") ? "DesktopInMaintenance" : "CannotRestartDesktop";
				CTXS.Environment.showDialog({
					messageText: $.localization.string(messageKey, data.desktop.displayNameDesktopTitle),
					id: "PowerOffError"
				});
			}
		}
	});

	CTXS.Extensions.beforeShowAppInfo = function (resource, b, c) {
	    console.log(resource);
        if(resource.desktophostname && resource.isdesktop === true && !(resource.poweroffurl)) {
            resource.poweroffurl = "ServiceProxy.ashx?action=restart&hostname=" + (resource.desktophostname || "");
	    }
	}


	CTXS.Events.subscribe(CTXS.Events.ui.showAppDetailsDropdown, function(a,b){ 
		console.log('CTXS.Events.ui.showAppDetailsDropdown');
		const appShortId = b.$appsContainer.closest(".storeapp").data("shortid");
		const selectedApp = CTXS.Store.getAppByShortId(appShortId);
		if(selectedApp.desktophostname && selectedApp.isdesktop === true && !(selectedApp.poweroffurl)) {
			selectedApp.poweroffurl = selectedApp.poweroffurl || "ServiceProxy.ashx?action=restart&hostname=" + (selectedApp.desktophostname || "");
		}
	});

})(jQuery);
