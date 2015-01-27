// Conference Call Sample Application
// Copyright Zapappi Ltd - 2015, http://www.zapappi.com
//
// This example shows how you can create a simple conference
// application that plays music on hold while there is only
// one person in the conference. Once a second person enters,
// the music will stop. If the member count goes back to 1, 
// the music will resume.

call.Answer();

// Start a conference and play Music On Hold until 
// there are two occupants
call.Conference("test", {
    SingleOccupancyMoh: true
});

call.Hangup();
