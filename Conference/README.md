# Conference Samples
A collection of samples showcasing features of the Zapappi Conference feature in ZapApp.

## Basic Conference [![Deploy to Zapappi](https://portal.zapappi.com/content/images/deploy_to_zapappi.png)](https://portal.zapappi.com/Portal/Application/Create?manifestUrl=https://raw.githubusercontent.com/Zapappi/zapapp-samples/master/Conference/conference-basic.deploy.json)
A simple conference script that adds each caller into a named conference. When there's only one person in the conference, Music On Hold is played.

[View Script](https://github.com/Zapappi/zapapp-samples/blob/master/Conference/conference-basic.js)

## Intermediate Conference [![Deploy to Zapappi](https://portal.zapappi.com/content/images/deploy_to_zapappi.png)](https://portal.zapappi.com/Portal/Application/Create?manifestUrl=https://raw.githubusercontent.com/Zapappi/zapapp-samples/master/Conference/conference-intermediate.deploy.json)
Extends on the functionality of the Basic Conference, by adding features such as:
* Welcome Prompt (TTS)
* Join Event (with TTS into the conference bridge)

[View Script](https://github.com/Zapappi/zapapp-samples/blob/master/Conference/conference-intermediate.js)

## Advanced Conference [![Deploy to Zapappi](https://portal.zapappi.com/content/images/deploy_to_zapappi.png)](https://portal.zapappi.com/Portal/Application/Create?manifestUrl=https://raw.githubusercontent.com/Zapappi/zapapp-samples/master/Conference/conference-advanced.deploy.json)
Builds on the Intermediate example by adding the following: 
* Conference Recording
* Conference events (Join, Leave, KeyPress)
* Cloud based storage (AWS)
* Prompt and Recordings (participants name)
* Checking conference return values

[View Script](https://github.com/Zapappi/zapapp-samples/blob/master/Conference/conference-advanced.js)
