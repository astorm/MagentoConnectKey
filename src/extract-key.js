// The MIT License (MIT)
// 
// Copyright (c) 2013 Pulse Storm LLC
// 
// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the "Software"), to deal
// in the Software without restriction, including without limitation the rights
// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
// copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:
// 
// The above copyright notice and this permission notice shall be included in
// all copies or substantial portions of the Software.
// 
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
// THE SOFTWARE.

var url = 'http:' + document.getElementsByTagName('body')[0].innerHTML.match(/.extensionKey20..+?connect20\.magentocommerce\.com.+?\u0022/)[0].split('http:').pop().split('\\').join('').replace(/\u0022/, '');
var field = document.createElement('input');
void(field.setAttribute('type', 'text'));
void(field.setAttribute('id', 'text'));
void(field.setAttribute('value', url));
void(field.setAttribute('style', 'width:100%;font-size:24px;position:relative;top:0'));
void(document.body.insertBefore(field, document.body.childNodes[0]));