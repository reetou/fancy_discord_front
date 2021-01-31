# Fancy-Discord: Troubleshooting Guide

### App has been deployed successfully but bot isn't online

* Please make sure you have a valid Bot token. If you had an invalid bot token you need to change it in app settings and press Deploy again.
* It's also possible that your code is crashing. We try to restart bot 10 times on failure.

### Deploy has a status `failed`

* First, make sure your code is working on your local machine
* Make sure your bot token is valid
* Try to `git clone` a repository URL you provided in app settings - it should be successfuly cloned in order to deploy
* Check if there's a misconfiguration or incompatibility with our [Language-specific Requirements](/docs/language-specific-requirements).
* Try again
* If none of above helps - feel free to contact via [Contacts page](/docs/contacts)

### Deploy is `pending` for a long time

* Probably there a lot of builds currently running. Waiting can take up to an hour and if there is still no place to start your build, it will fail. Feel free to retry in this case.

### It says there are not enough resources 

* Our project is free for alpha stage and there is a possibility where we can run out of free space for bots. In this case you can wait and retry later.

### I don't really understand where to start

* Feel free to contact and ask for help via [Contacts page](/docs/contacts). It's absolutely free.
