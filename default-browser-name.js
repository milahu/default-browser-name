/*

default-browser-name.js

size is 1380 byte
license is CC0-1.0
author is milahu

usage is

const
	f = require('./default-browser-name.js'),

	b = f(),
	r = f({raw:1});

*/

const s=require('os'),
c=(s)=>require('child_process').execSync(
	s,{maxBuffer:1/0, encoding:'utf-8'});

String.prototype.m1=function(e,f=''){
	return[this.match(e)].map(r=>r?r[1]:f)[0]};

module.exports=(a={})=>([[
[/(linux|freebsd)/,()=>(
	[c('xdg-mime query default text/html')]
	.map(r=>a.raw?r:r.m1(/^.+?-(.+)-.+?/))[0])],
[/darwin/,()=> ( [
	JSON.parse(c('plutil -convert json -o - '+
		'~/Library/Preferences/com.apple.LaunchServices/'+
		'com.apple.launchservices.secure.plist'))
	.LSHandlers.filter(h => h.LSHandlerURLScheme == 'http')
	.map(h => h.LSHandlerRoleAll).filter(Boolean)[0]
	|| 'com.apple.Safari'].map(r=>a.raw?r:r.m1(/.+\.(.+?)$/)))],
[/win32/,()=>(
	[s.release().slice(0,3)=='10.'
	? ['HKEY_CURRENT_USER/SOFTWARE/Microsoft/Windows/Shell/'+
		'Associations/URLAssociations/http/UserChoice',
		'ProgId',/.+ {4}(.+?)\r/,/^(.+)(\.HTTP|URL|HTML)$/,'edge']
	: ['HKCU/Software/Clients/StartMenuInternet',
		'REG_SZ',/REG_SZ  "(.+?)"/,/.+\\(.+?)(\.[^.]+)?$/,'ie']
	].map(([p,k,e,f,d])=>c(
		'reg query '+p.replace(/\//g,'\\')+' | findstr '+k).m1(e))
	.map(r=>a.raw?r:r.m1(f,d))[0]
	)],
].find(x=>s.platform().match(x[0]))
].map(r=>r?r[1]().trim():'')
.map(r=>a.raw?r:r.toLowerCase())[0]
)
