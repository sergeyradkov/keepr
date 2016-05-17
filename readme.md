##Keepr

Keepr is a social network that allows users to visually share, and discover new interests by posting (known as 'keeping' on Keepr) images or videos to their own or others' collections (i.e. a collection of 'vaults,' usually with a common theme) and browsing what other users have kept.   

###The Setup

Keepr has some basic structure and layout but its missing some key components. Like being functional. The idea here is to allow users to post items if they are logged in. They can also browse all of the items (aka keeps) that have been posted. If any user wants to store a reference to any paticular keep they will store it in the vault of their choice.  

###Step 1 -  Where is the output? `Total Points: 5`

The keeps that you currently can see are actually just dummy data. Be sure to look at the structure of the objects before removing them you will need to ensure your keeps have the same properties. Your first step is to tie the input form on the `/#/members` page to a location in firebase. The route in firebase should be `/keeps`. You will also need to add some other functionality like a way for users to group their keeps in vaults. Try storing the vaults in firebase under `/users/<YOURUSERID>/vaults` This way your vaults are kept private. Also be sure to store the author of the keep username.

Requirements:
- `2.5 points`: Users can add a keep to firebase
- `2.5 points`: Users can create vaults to store their keeps   

###Step 2 - Adding the functionality `Total Points: 10`

Adding keeps to the public keep should be easy enough. The tricky part will be to only show the keeps that have been marked as public. This might take some tweaking. Also When you get the `keeps-component` working with firebase users should be able to click the `keep button` on any of the items and should be prompted to select which of their `vaults` they would like to store the item. When Storing the item you should only need to store the item's `id`.   

Requirements: 
- `2.5 points`: Users can add items to their individual vaults
- `2.5 points`: Anytime a `keep` is viewed or `kept in a vault` that items count should go up.  
- `5 points`: Users can click the `view icon` to bring up a larger version of the individual `keep`
	- This one should use routing so each `keep` can be viewed in more detail by going to `/#/:keepId`
 

###Step 3 - Prettify `Total Points: 5`

What this site is already pretty. :) Make sure the feature you add are attactive.  

Requirements:
- `2.5 points`: When hovering over the keep show the three buttons from the bottm overlaid on the image
- `2.5 points`: The image should be on large display with at least one other element positioned over the top of the image.  

###BONUS - Sharing the fun `Total Points: 5`
Requirements: 
- When a user click the share icon they should be able to post that share to the various social medias (Facebook, Twitter, ect) 

###Finished?
When You are finished please slack the url for your github repo to me with in a DM.