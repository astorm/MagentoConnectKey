#!/usr/bin/env php
<?php
namespace Pulsetorm\Buildscripts\MagentoConnectKey;
function main($argv)
{
    $content = `uglifyjs src/extract-key.js`;
    $content = str_replace('"',"'",$content);
    echo '<a href="javascript:' . $content . ">Connect Key</a>";
}
main($argv);

