// Conference Call Advanced Sample Application
// Copyright Zapappi Ltd - 2015, http://www.zapappi.com
//
// This example build on the simple conference sample.
// It adds the following functionality
// 1. Conference Recording
// 2. Conference Events (Join, Leave and KeyPress)
// 3. Cloud based storage access (AWS S3)
// 4. Prompt Recording (participants name)
// 5. Checking conference return values


call.Answer();
 
// Record callers name
call.Say("Please say your name after the tone, then press the hash key.");
var nameRec = call.Record({
    Format: "wav",
    Timeout: 5,
    MaxSilence: 2,
    Beep: true,
    EscapeDigit: "#"
});
 
// Start a conference
var result = call.Conference("test", {
    SingleOccupancyMoh: true,
    RecordConference: true,
    OnConferenceJoin: function(conf) {
        // Fired when we join and before MOH started
        if(conf.MemberCount == 1) {
            conf.Say("You're the only person in this conference");   
        }else{
            conf.Play(nameRec.Filename);
            conf.Say("Has joined the conference");
        }
    },
    OnConferenceLeave: function(conf) {
        // Fired when we leave
        conf.Play(nameRec.Filename);
        conf.Say("Has left the conference");
    }
});
    
// If we were the last ones out (ConferenceState Completed) then
// we can upload the recording to AWS
if(result.ConferenceState == "Completed"){
    // upload to AWS
    ext.AWS.UploadToBucket(result.RecordingFilename, 
        config.GetKeyValue("Bucket"), 
        config.GetKeyValue("Key"), 
        config.GetKeyValue("Secret"), 
        config.GetKeyValue("Folder"), 
        config.GetKeyValue("AWSRegion"), 
        "audio/x-wav", 
        result.RecordingFilename);
}
 
call.Hangup();
