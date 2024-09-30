# SSH agent socket

To interact with an SSH agent, XPipe utilizes the same interface as the SSH client. On Windows, this is a named pipe, which it does not require any setup and will usually work out of the box. On Linux, you have to properly configure the agent via the `SSH_AUTH_SOCK` environment variable such that other applications know where to find the socket.

Note that this also applies to various other agents and environment variables, not only the OpenSSH agent.

## Configuration pitfalls

In practice, this can sometimes fail when the environment variable is set up in the wrong init file. If you initialize the variable in the rc file of your login shell, you have to move the initialization to your shell profile. Otherwise, GUI-based applications like XPipe do not pick up the variable.

The rc init files like `.bashrc` or `.zshrc` are intended for terminal sessions, whereas the profile files like `.bash_profile` or `.zprofile` are intended to run on a login session. That means that if you run a GUI application from, for example, a .desktop file, it will not apply any variables set in your rc init scripts.

## Proper configuration

If you set your `SSH_AUTH_SOCK` variable in your rc file, you can either move that initialization to your profile script or source it in your profile by adding `. ~/.bashrc` or `. ~/.zshrc` to your profile script. If you then log out of your current session, it should correctly apply the environment variable in the next session and XPipe should be able to communicate to your agent.
