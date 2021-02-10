# Fancy-Discord: Migrating from other services

## Migrating from Heroku

You have probably used Procfile configuration for your Heroku project. You just need to change it so you start your entry file like in example below.

See configuration examples at [Language-specific Requirements](/docs/language-specific-requirements).
- Remove anything other than `web` property from your `Procfile`
- Remove CHECKS and other Heroku-related files from your project since they will slow down your deployment or can cause it's failure.

## Other services

There are no known issues with migrating from other services yet. If you have any issues, feel free to contact via [Contacts page](/docs/contacts)
