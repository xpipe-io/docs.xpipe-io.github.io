# xpipe

<h2 id="_name">Name</h2>
<div class="sectionbody">
<p>xpipe - Command-line interface for XPipe.</p>
</div>
<div class="sect1">
<h2 id="_synopsis">Synopsis</h2>
<div class="sectionbody">
<div class="paragraph">
<p><strong>xpipe</strong> &lt;subcommand&gt;</p>
</div>
</div>
</div>
<div class="sect1">
<h2 id="_description">Description</h2>
<div class="sectionbody">
<div class="paragraph">
<p>Command-line interface to interact with the XPipe daemon.</p>
</div>
<div class="paragraph">
<p>For a full reference, see either:
- The man pages (local with man xpipe or online at <a href="https://docs.xpipe.io/cli/man/" class="bare">https://docs.xpipe.io/cli/man/</a>)
- The command help, available via xpipe &lt;command&gt; --help</p>
</div>
</div>
</div>
<div class="sect1">
<h2 id="_commands">Commands</h2>
<div class="sectionbody">
<div class="dlist">
<dl>
<dt class="hdlist1"><a href="xpipe-open"><strong>open</strong></a></dt>
<dd>
<p>Opens the XPipe application</p>
</dd>
<dt class="hdlist1"><a href="xpipe-daemon"><strong>daemon</strong></a></dt>
<dd>
<p>Commands for controlling the XPipe daemon</p>
</dd>
<dt class="hdlist1"><a href="xpipe-version"><strong>version</strong></a></dt>
<dd>
<p>Reports version information</p>
</dd>
</dl>
</div>
</div>
</div>
<div class="sect1">
<h2 id="_exit_codes">Exit Codes:</h2>
<div class="sectionbody">
<div class="dlist">
<dl>
<dt class="hdlist1"><strong>0</strong></dt>
<dd>
<p>Successful execution</p>
</dd>
<dt class="hdlist1"><strong>1</strong></dt>
<dd>
<p>Client error: One or more inputs were not correctly specified</p>
</dd>
<dt class="hdlist1"><strong>2</strong></dt>
<dd>
<p>Internal error: An internal error occurred in the XPipe daemon while executing the command</p>
</dd>
<dt class="hdlist1"><strong>3</strong></dt>
<dd>
<p>Connection error: Could either not start or communicate with the XPipe daemon</p>
</dd>
</dl>
</div>
</div>
</div>
