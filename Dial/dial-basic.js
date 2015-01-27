// Simple Dial Sample Application
// Copyright Zapappi Ltd - 2015, http://www.zapappi.com
//
// This example shows how you can dial an array of sip uri's
// concurrently. The first uri to answer will be the leg that is
// bridged with the main call.
//
// A the end of the script, we show how you can get information
// about the call.

// Get an array of SIP Uris from the Key Value Pair 'NumbersToDial'
var numbersToCall = config.GetKeyValue("NumbersToDial").split(",");
 
// Dial the Uri's with a timeout of 30 seconds
var rtn = call.Dial(numbersToCall, {
        Timeout: 30
        }
);
      
// Trace output information about the result of Dial	  
sys.Trace("Call returned " + rtn.Disposition + ", with a Ringtime of "
    + rtn.Ringtime.TotalSeconds + "s, and a Talktime of "
    + rtn.TalkTime.TotalSeconds + "s. "
    + rtn.WhoHungUp + " hungup.");
