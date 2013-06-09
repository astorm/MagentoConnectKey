MagentoConnectKey
=================

A bookmarklet for extracting a Magento Connect key from a page. 

Build Instructions
--------------------------------------------------
Building requires the <a href="https://npmjs.org/package/uglify-js">`uglifyjs`</a> command. If you have a different minimizer you'd like you may alias it to `uglifyjs`, or edit

    bin/build.php
    
Building the script 

    $ bin/build.php 
        
    <a href="javascript:var url='http:'+document.getElementsByTagName('body')[0].innerHTML.match(/.extensionKey20..+?connect20\.magentocommerce\.com.+?\u0022/)[0].split('http:').pop().split('\\').join('').replace(/\u0022/,'');var field=document.createElement('input');void field.setAttribute('type','text');void field.setAttribute('id','text');void field.setAttribute('value',url);void field.setAttribute('style','width:100%;font-size:24px;position:relative;top:0');void document.body.insertBefore(field,document.body.childNodes[0]);>Connect Key</a>
    
Will output an HTML link suitable for putting on an HTML page.     