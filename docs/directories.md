# Directory locations

XPipe uses the following directories:

## Installation data
* `%LOCALAPPDATA%\XPipe` on Windows
* `/opt/xpipe` on Linux
* `/Applications/XPipe.app` on macOS

## User data and configuration files
* `%USERPROFILE%\.xpipe` on Windows
* `~/.xpipe` on Linux
* `~/.xpipe` on macOS

## Temporary shell script files

Any necessary temporary shell scripts are directly created in the system temp directory. These do not contain any sensitive information and are only created for convenience purposes or because of shell limitations.

## Editor bridge

Any files they are being edited in the file browser are downloaded locally and re-uploaded once they are changed. These files are downloaded to
* `%TEMP%\xpipe\bridge` on Windows
* `/tmp/xpipe/$USER/bridge` on Linux
* `$TMPDIR/xpipe/bridge` on macOS

## File downloads

Any files they are being downloaded in the file browser are saved to the following directories
* `%TEMP%\xpipe\download` on Windows
* `/tmp/xpipe/$USER/download` on Linux
* `$TMPDIR/download` on macOS

## Scripts

When you choose to bring certain user scripts to a remote system, they are copied to the following directory and automatically added to the PATH:
* `%TEMP%\xpipe\scripts` on Windows
* `/tmp/xpipe/$USER/scripts` on Linux
* `/tmp/xpipe/$USER/scripts` on macOS

## Script data

In case any created user script has to write some data to a system,
e.g., the starship scripts installing starship files;
they are created in
* `%TEMP%\xpipe\scriptdata` on Windows
* `/tmp/xpipe/$USER/scriptdata` on Linux
* `/tmp/xpipe/$USER/scriptdata` on macOS

