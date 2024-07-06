# License Activation

Once you purchase a license for XPipe from buy.xpipe.io, the next step is usually activating it in the application.
Essentially, it will activate the license by communicating with the API at `api.lemonsqueezy.com` and fetching license data.

## Activation problems

There are several problems that can occur when trying to activate or validate a license:
- The system that you are running XPipe on it might not have any internet connectivity
- You might be using restrictive proxy settings that don't allow it to reach `api.lemonsqueezy.com`
- You might be using a VPN that is blocked by spam and DDoS protections

## Offline activation

If you are unable to activate your license online, you can also activate it manually offline. There are two options to do this:
- If you're only offline temporarily, activate the license key in another XPipe installation that has connectivity and copy the file `<User Home>/.xpipe/settings/license` into the directory `<User Home>/.xpipe/settings/` on your target machine and restart XPipe
- Email us at [sales@xpipe.io](mailto:sales@xpipe.io) so that we can send you an offline license file that you can use for unlimited offline periods