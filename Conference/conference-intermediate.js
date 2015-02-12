// Conference Call Intermediate Sample Application
// Copyright Zapappi Ltd - 2015, http://www.zapappi.com
//
// This example build on the simple conference sample.
// It adds the following functionality
// 1. Welcome Prompt
// 2. Conference Events (Join)

call.Answer();

call.Say("Please hold while we add you to the conference.");

// Start a conference
var result = call.Conference("test", {
    SingleOccupancyMoh: true,
    OnConferenceJoin: function(conf) {
        // Fired when we join and before MOH started
        if(conf.MemberCount == 1) {
            conf.Say("You're the only person in this conference");   
        }
    }
});

call.Hangup();
