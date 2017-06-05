// ==UserScript==
// @name         auto load
// @namespace http://eldhosejohn.com
// @include https://console.aws.amazon.com/datapipeline/
// @include https://console.aws.amazon.com/datapipeline/*
// @version      1.0
// @description  Auto-load all datapipelines
// @author       eldhosejohn
// @grant        none

// ==/UserScript==

(function() {
    'use strict';
    function click_me(){
        var element = document.getElementsByClassName("GND1IDUBD GND1IDUBO GND1IDUBK GND1IDUBNK")[0];
        if (element.style.display === "") {
             element.click();
        }
        else{
            var click_element = document.getElementsByClassName("GND1IDUBPK")[0];
            click_element.addEventListener("click",start);
        }
    }
    function start(){
        for (i=1;i<12;i++){
            setTimeout(click_me, i*1000);
        }
    }
    start();
})();
