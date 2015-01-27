// Simple Call Forwarding Sample Application
// Copyright Zapappi Ltd - 2015, http://www.zapappi.com
//
// Calls sent to this applications Uri will be forwarded
// to the destinations setup in "NumbersToDial". 
// Once a destination answers, the callee will be prompted 
// to press 1 to answer the call. This prevents voicemail 
// accepting the call by answering.
// If no one answers, or accepts the call after  30 seconds, 
// Dial will return with a Disposition of Timeout.
//
// Each of the config KeyValue should be included in your 
// applications configuration section.
// E.g. Home Number, Mobile Number, Work Number


// Get all the destinations from a config KeyValue and split the string 
// based on a delimiter of "," (e.g. "sip:user@domain.com,sip:user2@domain.com")
var numbersToCall = config.GetKeyValue("NumbersToDial").split(",");

var rtn = call.Dial(numbersToCall, {
	Timeout: 30,
	OnAnswer: function () {
		return call.Say("Press 1 to answer the call.", {
			EscapeDigits: "#",
			MaxDigits: 1,       // only accept one digit
			Timeout: 10         // max time to wait, 10 seconds
		}) == "1";
	}
});
   
sys.Trace("Call returned " + rtn.Disposition + ", with a Ringtime of " 
	+ rtn.Ringtime.TotalSeconds + "s, and a Talktime of " 
	+ rtn.TalkTime.TotalSeconds + "s. " 
	+ rtn.WhoHungUp + " hungup.");


call.Hangup();
