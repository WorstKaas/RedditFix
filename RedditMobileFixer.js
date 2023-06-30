// ==UserScript==
// @name         RedditMobileFixer
// @namespace    https://www.reddit.com
// @version      0.1
// @description  Makes the browsing experience of reddit mobile better
// @author       WorstKaasScenario
// @match        *.reddit.com/*
// @icon         https://www.redditstatic.com/desktop2x/img/favicon/android-icon-192x192.png
// @license      MIT
// @grant        GM_addStyle
// ==/UserScript==

(function() {
    'use strict';

    //posts
    GM_addStyle('.aAprpkg6XvIsjmyc5LX8M { display: none !important; }'); //Big-ass header
    GM_addStyle('.PostHeader__avatar { display: none !important; }'); //avatar next to posts
    GM_addStyle('.PostFooter__award-button { display: none !important; }'); //award button in posts
    GM_addStyle('._2OSerrGqsksmXpb-ulVmEG { display: none !important; }'); //award button in comments
    GM_addStyle('.m-comment.CommentTree__comment { padding-top: 1px;padding-bottom: 1px;}');
    GM_addStyle('.m-toplevel.m-comment.CommentTree__comment { margin-top: 2px; }');
    GM_addStyle(' p { margin-top: 0px;margin-bottom: 0px !important; }');
    GM_addStyle('.CommentHeader__col2 { padding-left: 0px !important; }');
    GM_addStyle('.Comment__body { padding-left: 0px !important; }');
    //GM_addStyle('.PostContent__img.PostContent__img { height: auto; width: auto; object-fit: fill; position: inherit;}');

    //GM_addStyle('.PostContent__image-link { padding-top: 0px !important; }');

    //subreddit
    GM_addStyle('.CommentHeader__avatar { display: none !important; }'); //avatar next to username comments
    GM_addStyle('.CommunityHeader-description { display: none !important; }'); //the fun fact about the subreddit
    GM_addStyle('.CommunityHeader-banner-icon-holder { display: none !important; }'); //massive ass banner
    GM_addStyle('.CommunityHeader-banner { display: none !important; }'); //subreddit icon
    GM_addStyle('.PostHeader__post-descriptor-line-overflow { padding-top: 1px;padding-bottom: 1px; }');
    GM_addStyle('.PostHeader__overflowMenu { padding-top: 1px;padding-bottom: 1px; }');

    GM_addStyle('.PostFooter.m-redesign.m-compact { padding-top: 1px;padding-bottom: 0px; }');
    GM_addStyle('.Post__awards.PostAwards { overflow-x: hidden !important;}'); //fix for too many awards
    GM_addStyle('.PostFooter__award-wrapper { overflow-x: hidden !important;}');
    GM_addStyle('.SubNav__leftContent > div:nth-of-type(2) { display: none !important; }'); // content layout selector

    //menu
    GM_addStyle('li._26Dt6IpEyQMadkdcI_SxEy:nth-of-type(3) { display: none !important; }'); //coins
    GM_addStyle('li._26Dt6IpEyQMadkdcI_SxEy:nth-of-type(4) { display: none !important; }'); //Premium
    GM_addStyle('li._26Dt6IpEyQMadkdcI_SxEy:nth-of-type(5) { display: none !important; }'); //Recent communities
    GM_addStyle('li._26Dt6IpEyQMadkdcI_SxEy:nth-of-type(10) { display: none !important; }'); //Popular
    GM_addStyle('li._26Dt6IpEyQMadkdcI_SxEy:nth-of-type(12) { display: none !important; }'); //Help center
    GM_addStyle('li._26Dt6IpEyQMadkdcI_SxEy:nth-of-type(13) { display: none !important; }'); //More
    GM_addStyle('li._26Dt6IpEyQMadkdcI_SxEy:nth-of-type(14) { display: none !important; }'); //Terms & Policies
    GM_addStyle('.DropdownLinkRow__backlink.DropdownLinkRow { display: none !important; }'); //Terms & Policies
    GM_addStyle('.DropdownModal { overflow: visible !important; }'); //Terms & Policies
