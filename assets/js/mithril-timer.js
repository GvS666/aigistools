webpackJsonp([6],[function(t,a,n){(function(t){"use strict";function a(){var a=parseInt(t("[name=current]:input").val()),n=parseInt(t("[name=objective]:input").val()),i=(new Date).getTime(),r=h.reduce(function(t,a){return t+Math.max(a[1],i)-Math.max(a[0],i)},0),s=Math.max(n-a,0),o=r/864e5,p=s/Math.max(o,1),c=r/36e5,u=s/Math.max(c,1),m=r/18e5,l=s/Math.max(m,1),d=e(p,3).split(".");t("#norma_per_day").find(".norma-amount-actual").text(d[0]).parent().find(".norma-amount-fraction").text("."+d[1]).parent(),d=e(u,3).split("."),t("#norma_per_hour").find(".norma-amount-actual").text(d[0]).parent().find(".norma-amount-fraction").text("."+d[1]).parent(),d=e(l,3).split("."),t("#norma_per_minute").find(".norma-amount-actual").text(d[0]).parent().find(".norma-amount-fraction").text("."+d[1]).parent(),t("#remains_days").text(e(o,0)),t("#remains_hours").text(e(c,0)),t("#remains_minutes").text(e(60*c,0));var f,v=100*Math.min(a,n),g=parseInt(v/n)||0,b=N-r,x=parseInt(100*b/N)||0;f=100==g?"progress-bar-success":g>=x?"progress-bar-success":g>.7*x?"progress-bar-info":g>.4*x?"progress-bar-warning":"progress-bar-danger",t("#objective_progress > .progress-bar").width(g+"%").removeClass("progress-bar-success progress-bar-info progress-bar-danger progress-bar-warning").addClass(f).children("span").text(g+"%達成"),t("#period_progress > .progress-bar").width(x+"%").children("span").text(x+"%経過");var _=a*N/b;t("#prediction_collection").text(e(Math.floor(_)));var y=Math.min(_/n,1),k=t("#objective_progress").width(),M=k*y-47;t(".pointer").css("left",M+"px");var w=230>k-M?-250:0;t(".pointer-label").css("margin-left",w+"px");var I="";if(n>a&&_>=n){var j,C;h.forEach(function(t){j=j||t[0],C=C||t[1]});var D=n/_*N,E=h.reduce(function(t,a){if(t)return t;var n=a[1]-a[0];return D>n?(D-=n,null):new Date(a[0]+D)},null),T=E.getMonth(),q=E.getDate(),z=E.getHours(),R=E.getMinutes(),S=T+1+"/"+q+" "+(10>z?"0"+z:z)+":"+(10>R?"0"+R:R);I=S+"頃に目標達成できそうよ。"}t("#prediction_completion_date").text(I)}function e(t,a){if(a=a||0,isNaN(t))return"?";if(t===1/0||t===-(1/0))return"∞";var n=t.toFixed(a).split("."),e=parseInt(n[0]);return e.toLocaleString()+(1===n.length?"":"."+n[1])}function i(){if(D){var a=t("#map").find("tbody tr input[name=num_drops]").map(function(){return parseInt(t(this).val())||0}).toArray().reduce(function(t,a){return t+a},0);t("input[name=current]").val(a).trigger("change")}}function r(){var a=(new Date).getTime(),n=t("#period_dates");if(h.forEach(function(e){var i=e[1]-e[0],r=100*i/N+"%",s=new Date(e[0]),o=new Date(e[1]-1),p=s.getMonth()+1+"/"+s.getDate()+"-"+(o.getMonth()+1)+"/"+o.getDate(),c=a>=e[0]&&a<e[1],u=a>=e[1],m=c?"progress-bar-active":u?"progress-bar-expired":"progress-bar-remain";t('<div class="progress-bar">').width(r).text(p).addClass(m).appendTo(n)}),t('[data-objective-mode="'+v+'"]').show(),t('[data-objective-mode][data-objective-mode!="'+v+'"]').remove(),t("[name=current]:input").click(function(){this.select()}).TouchSpin({min:0,max:g,step:1}),"achievement"==v){var r=t("[name=objective]:input");t.each(E,function(a,n){t("<option />").attr("value",a).text(n+" ("+a+"個)").appendTo(r)})}else{t("select[name=objective]").click(function(){this.select()});var b=t("#increse_objective_list");T.forEach(function(a){t('<button class="btn btn-default" name="add"  type="button" />').val(a.value).attr("title",a.name).append(t('<i class="fa fa-arrow-up" />')).append(t("<span />").addClass("icon icon-"+a.unit)).appendTo(b)})}t("button[name=add]").click(function(a){a.preventDefault();var n=parseInt(t(this).val()),e=parseInt(t("[name=objective]:input").val());t("[name=objective]:input").val(e+n).trigger("change")}),t("button[name=reset]").click(function(a){a.preventDefault(),t("[name=objective]:input").val(0).trigger("change")}),t("[name=expectation]:input").change(function(){u(),m()}).val(j);var x=t("#prize_list");T.forEach(function(a){t('<div class="prize-list" />').append(t('<h4 class="prize-list-header" />').text(a.name).append(t('<span class="prize-value" />').text("@"+a.value))).append(t('<div class="prize-list-body" />').attr("data-prize",a.unit)).appendTo(x)});var y=q.reduce(function(t,a){return Math.max(t,a.drops.length)},0),k=s();k.maps.forEach(function(t,a){q[a].expectation=t.expectation}),D=k.syncCurrentEnabled;var M,w=function(){M&&clearTimeout(M),setTimeout(function(){var a=t("#map");q.forEach(function(t,n){var i=a.find("tr[data-map="+n+"]"),r=Math.max(parseInt(i.find("input[name=num_laps]").val())||0,0),s=Math.max(parseInt(i.find("input[name=num_drops]").val())||0,0),o=i.find("input[name=actual_expectation]"),p=Math.max(parseFloat(o.val())||0,0);"aggregate"===C&&(p=s/r||0,o.val(p));var c=Math.floor(p);i.find("button[name=increase]").val(c).text("+"+e(c)),k.maps[n].numLaps=r,k.maps[n].numDrops=s,t.expectation=k.maps[n].expectation=p}),o(k),l(),u(),m()},100)},I=t("#map").on("keyup","input[type=number]",function(){w(),i()}).on("change","input[type=number]",function(){w(),i()}).on("click","input[type=number]",function(){this.select()}).on("click","button[name=increase]",function(a){a.preventDefault();var n=t(this).closest("tr"),e=n.find("input[name=num_laps]"),i=parseInt(e.val())+1;e.val(i);var r=n.find("input[name=num_drops]"),s=parseInt(r.val())+parseInt(this.value);r.val(s),r.trigger("change")}).on("change","input[name=expectation_input_mode]",function(){C=t(this).val(),k.expectationInputMode=C,o(k),I.find("input[name=num_laps], input[name=num_drops]").parent().toggle("aggregate"===C).end().end().find("input[name=actual_expectation]").parent().toggle("direct"===C).end().end().find("input[name=sync]").closest("tfoot").toggle("aggregate"===C),w()}).on("click","input[name=sync]",function(){k.syncCurrentEnabled=D=this.checked,o(k),i()}),R=I.find("tbody");if(q.forEach(function(a,n){var e=k.maps[n],i=t("<td />").attr("data-chart",n).append(t('<span class="barchart" />')).append(t('<span class="barchart-label" />')).append(t('<span class="marathon" />'));t("<tr />").attr("data-map",n).append(t("<th />").text(a.name)).append(t("<td />").text(""+a.charisma+"/"+a.stamina)).append(function(){for(var n=a.drops.map(function(a){var n=a.icon?t("<i />").attr("title",a.name).addClass("icon icon-"+a.icon):t("<span />").text(a.name),e=a.set?t('<span class="badge" />').text("x"+a.set):null;return t("<td />").append(n).append(e)}),e=a.drops.length;y>e;e++)n.push(t("<td />"));return n}).append(function(){var a=t('<span class="input-group input-group-sm" />').append(t('<span class="input-group-addon">1周の期待値</span>')).append(t('<input type="number" name="actual_expectation" min="0" class="form-control" />').val(e.expectation)),n=t('<span class="input-group input-group-sm" />').append(t('<span class="input-group-addon">周回</span>')).append(t('<input type="number" name="num_laps" min="0" class="form-control" />').val(e.numLaps)).append(t('<span class="input-group-addon">ドロップ</span>')).append(t('<input type="number" name="num_drops" min="0" class="form-control" />').val(e.numDrops)).append(t('<span class="input-group-btn"><button name="increase" class="btn btn-default"></button></span>'));return t('<td class="expectation" />').append(n).append(a)}).append(i).prependTo(R)}),t("#map thead th.drops").attr("colspan",y),_){var S=t("#rewards tbody");z.forEach(function(a){t("<tr />").attr("data-amount",a.amount).append(t('<td class="text-right" />').html('<span class="diff"></span> '+a.amount)).append(t("<td />").html('<span class="icon icon-'+a.unit+'"></span>')).appendTo(S)})}var L=t("[name=estimate_map]:input").change(function(){l(),k.estimateMap=parseInt(t(this).val()),o(k)});q.forEach(function(a,n){t("<option />").val(n).text(a.name+" ("+a.charisma+"/"+a.stamina+")").prependTo(L)});for(var J=t("[name=estimate_rank]:input").change(function(){l(),k.estimateRank=parseInt(t(this).val()),o(k)}),U=1;200>=U;U++){var F=d(U),O=f(U),A=""+U+" ("+F+"/"+O+")";t("<option />").val(U).text(A).appendTo(J)}var H=t("[name=estimate_use_crystal]").change(function(){l(),k.estimateUseCrystal=t(this).val(),o(k)}),B=t("[name=estimate_natural_recovery]:input").change(function(){l(),k.estimateNaturalRecovery=this.checked,o(k)});t("*[title]").tooltip(),t("[name=current]:input").val(k.current),"exchange"==v?t("[name=objective]:input").val(k.objective):t("[name=objective]:input").val([k.objective]),t("[name=current]:input, [name=objective]:input").change(function(){k[this.name]=t(this).val(),o(k),p(),c(),m(),l()}),L.val(k.estimateMap),J.val(k.estimateRank),H.val(k.estimateUseCrystal),B.prop("checked",k.estimateNaturalRecovery),"exchange"==v&&c(),_&&p(),I.find("input[name=sync]").prop("checked",D).end().find('input[name=expectation_input_mode][value="'+k.expectationInputMode+'"]').prop("checked",!0).trigger("change").parent().addClass("active")}function s(){var a={},n=q.map(function(t){return{numLaps:0,numDrops:0,expectation:t.expectation}}),e={current:x,objective:b,estimateMap:k,estimateRank:M,estimateUseCrystal:w,estimateNaturalRecovery:I,expectationInputMode:C,maps:n,syncCurrentEnabled:D};try{a=JSON.parse(t.cookie(y))}catch(i){}return t.extend(!0,e,a)}function o(a){t.cookie(y,JSON.stringify(a),{expires:30})}function p(){if(_){var a=45,n=7,e=parseInt(t("[name=current]:input").val()),i=t("#rewards tbody");i.find("tr").removeClass("active").each(function(){var i=t(this),r=i.attr("data-amount")-e;if(-a>r)i.hide();else if(0>r)i.css("opacity",.5).show();else if(a>r)i.addClass("active").css("opacity",1).show();else if(a*n>r){var s=1-Math.floor(r/a)*a/(a*(n+1));i.show().css("opacity",s)}else i.hide();var o=0===r?"diff-eq":r>0?"diff-plus":"diff-minus",p=0===r?"":(r>0?"+":"")+r;i.find("span.diff").removeClass("diff-eq diff-plus diff-minus").addClass(o).text(p)})}}function c(){if("exchange"==v){var a=parseInt(t("[name=current]:input").val());T.forEach(function(n){for(var e=t('[data-prize="'+n.unit+'"]').empty(),i=0;a>i;i+=n.value){var r=t("<i />").addClass("icon icon-"+n.unit),s=25*Math.min(a-i,n.value)/n.value;t('<div class="prize-gage" />').append(r.clone().css({position:"absolute",opacity:.2,boxShadow:"none",paddingRight:25-s})).append(r.clone().css({width:s+"px"})).appendTo(e)}})}}function u(){var a=t("[name=expectation]:input").val(),n=1/0,i=0,r="drop"==a?null:a,s=q.map(function(t){var a=t.expectation/(r&&t[r]||1);return n=0,i=Math.max(i,a),a}),o=r?3:2;q.forEach(function(a,r){var p=t("[data-chart="+r+"]"),c=s[r],u=c/(i-n),m=120*u+240;p.find("span.barchart-label").text(e(c,o)+"個"),p.find("span.barchart").css({width:100*u+"%",backgroundColor:"hsla("+m+", 80%, 50%, 0.5)"})})}function m(){var a=parseInt(t("[name=objective]:input").val()),n=parseInt(t("[name=current]:input").val()),i=Math.max(a-n,0);q.forEach(function(a,n){var r=t("[data-chart="+n+"]"),s=i?Math.ceil(i/a.expectation):0;r.find("span.marathon").text("残り"+e(s)+"周")})}function l(){var a=parseInt(t("[name=current]:input").val()),n=parseInt(t("[name=objective]:input").val()),i=q[parseInt(t("[name=estimate_map]:input").val())],r=Math.max(n-a,0),s=Math.ceil(r/i.expectation);t("#estimate_required_marathon").text(e(s));var o=(new Date).getTime(),p=h.reduce(function(t,a){return t+Math.max(a[1],o)-Math.max(a[0],o)},0),c=0+t("[name=estimate_natural_recovery]:input").prop("checked"),u=Math.floor(p/18e4)*c,m=Math.floor(p/36e5)*c,l=parseInt(t("[name=estimate_rank]").val()),v=d(l),g=f(l),b=Math.ceil(i.charisma*s),x=Math.ceil(i.stamina*s),_=t("[name=estimate_use_crystal]:input").val(),y=0+("both"===_||"charisma"===_),k=0+("both"===_||"stamina"===_),M=Math.ceil(Math.max(b-u,0)/v)*y,w=Math.ceil(Math.max(x-m,0)/g)*k,I=M+w;t("#estimate_required_crystal").text(e(I));var j=0===M?"diff-eq":M>0?"diff-plus":"diff-minus";t("#estimate_required_crystal_for_charisma").attr("class",j).text(e(M)),j=0===w?"diff-eq":w>0?"diff-plus":"diff-minus",t("#estimate_required_crystal_for_stamina").attr("class",j).text(e(w));var C=u+v*M,D=m+g*w,E=Math.floor(Math.min(C/i.charisma,D/i.stamina,s));t("#estimate_available_marathon").text(e(E));var T=E-s;j=0===T?"diff-eq":T>0?"diff-plus":"diff-minus";var z=(T>=0?"+":"")+e(T);t("#estimate_available_marathon_diff").attr("class",j).text(z);var N=i.charisma*E;t("#estimate_using_charisma").text(e(N)),T=N-b,j=0===T?"diff-eq":T>0?"diff-plus":"diff-minus",z=(T>=0?"+":"")+e(T),t("#estimate_using_charisma_diff").attr("class",j).text(z);var R=Math.ceil(i.stamina*E);t("#estimate_using_stamina").text(e(R)),T=R-x,j=0===T?"diff-eq":T>0?"diff-plus":"diff-minus",z=(T>=0?"+":"")+e(T),t("#estimate_using_stamina_diff").attr("class",j).text(z);var S=a+Math.ceil(i.expectation*E);t("#estimate_result_collection").text(e(S)),T=S-n,j=0===T?"diff-eq":T>0?"diff-plus":"diff-minus",z=(T>=0?"+":"")+e(T),t("#estimate_result_collection_diff").attr("class",j).text(z)}function d(t){return 27+(100>=t?3*t:300+t-100)}function f(t){return 12+(100>=t?0:Math.floor((t-100)/20)+1)}n(10);var h=[["2015/06/11 15:00:00","2015/06/18 10:00:00"],["2015/06/18 15:00:00","2015/06/25 10:00:00"]].map(function(t){return t.map(Date.parse)}),v="achievement",g=1/0,b=1500,x=20,_=!0,y="mithril-timer",k=3,M=100,w="both",I=!0,j="stamina",C="direct",D=!0,E={25:"セラが仲間になる",50:"スキルレベル2",100:"初期レベル10",150:"スキルレベル3",200:"出撃コスト-1",250:"スキルレベル4",300:"出撃コスト-2",400:"スキルレベル5",500:"初期レベル20",600:"スキルレベル6",700:"出撃コスト-3",800:"スキルレベル7",900:"初期レベル30",1000:"スキルレベル8",1100:"出撃コスト-4",1200:"初期レベル40",1300:"スキルレベル9",1400:"出撃コスト-5",1500:"スキルレベル10",1600:"初期レベル50"},T=[],q=[{name:"ミスリルの洞窟",charisma:20,stamina:1,expectation:0,drops:[{name:"ミスリル鉱1",icon:"mithril-1",set:1}]},{name:"硬質の魔物",charisma:30,stamina:2,expectation:0,drops:[{name:"ミスリル鉱1",icon:"mithril-1",set:3},{name:"ハリッサ",icon:"harissa"},{name:"魔水晶1",icon:"demon-crystal-1"}]},{name:"ミスリル争奪戦",charisma:40,stamina:4,expectation:0,drops:[{name:"ミスリル鉱3",icon:"mithril-3",set:2},{name:"ミスリル鉱1",icon:"mithril-1",set:1},{name:"モーティマ",icon:"motima"},{name:"花束",icon:"flower"}]},{name:"交錯する陣容",charisma:50,stamina:7,expectation:11,drops:[{name:"ミスリル鉱3",icon:"mithril-3",set:3},{name:"ミスリル鉱1",icon:"mithril-1",set:2},{name:"カズハ",icon:"kazuha"},{name:"魔水晶2",icon:"demon-crystal-2"}]},{name:"怒涛の炎獣",charisma:80,stamina:9,expectation:0,drops:[{name:"ミスリル鉱5",icon:"mithril-5",set:4},{name:"フドウ",icon:"fudou"},{name:"白バケツ",icon:"platinum-bucket"},{name:"極上酒",icon:"hq-liquor"}]},{name:"痺れる毒針",charisma:40,stamina:5,expectation:0,drops:[{name:"ミスリル鉱3",icon:"mithril-3",set:2},{name:"ミスリル鉱1",icon:"mithril-1",set:1},{name:"カズハ",icon:"rosalie"},{name:"白精霊",icon:"platinum-sprit"}]},{name:"目覚まし機甲兵",charisma:70,stamina:8,expectation:0,drops:[{name:"ミスリル鉱5",icon:"mithril-5",set:2},{name:"ミスリル鉱3",icon:"mithril-3",set:2},{name:"アリサ",icon:"arisa"},{name:"ルビー",icon:"ruby"}]},{name:"魔の決戦兵器",charisma:90,stamina:12,expectation:0,drops:[{name:"ミスリル鉱5",icon:"mithril-5",set:4},{name:"ミスリル鉱3",icon:"mithril-3",set:2},{name:"虹精霊",icon:"rainbow-sprit"}]},{name:"妖精郷の決戦",charisma:100,stamina:2,expectation:0,drops:[{name:"金精霊",icon:"gold-sprit"},{name:"白精霊",icon:"platinum-sprit"},{name:"黒精霊",icon:"black-sprit"},{name:"虹精霊",icon:"rainbow-sprit"}]}],z=[{amount:45,unit:"gold-bucket"},{amount:90,unit:"gold-sprit"},{amount:135,unit:"platinum-bucket"},{amount:180,unit:"gold-sprit"},{amount:225,unit:"crystal-fragment"},{amount:270,unit:"platinum-sprit"},{amount:315,unit:"gold-bucket"},{amount:360,unit:"platinum-sprit"},{amount:405,unit:"platinum-bucket"},{amount:450,unit:"black-sprit"},{amount:495,unit:"crystal-fragment"},{amount:540,unit:"black-sprit"},{amount:585,unit:"gold-bucket"},{amount:630,unit:"rainbow-sprit"},{amount:675,unit:"platinum-bucket"},{amount:720,unit:"platinum-sprit"},{amount:765,unit:"crystal-fragment"},{amount:810,unit:"platinum-sprit"},{amount:855,unit:"gold-bucket"},{amount:900,unit:"black-sprit"},{amount:945,unit:"platinum-bucket"},{amount:990,unit:"platinum-sprit"},{amount:1035,unit:"crystal-fragment"},{amount:1080,unit:"platinum-sprit"},{amount:1125,unit:"gold-bucket"},{amount:1170,unit:"black-sprit"},{amount:1215,unit:"platinum-bucket"},{amount:1260,unit:"black-sprit"},{amount:1305,unit:"crystal-fragment"},{amount:1350,unit:"rainbow-sprit"},{amount:1395,unit:"gold-bucket"},{amount:1440,unit:"platinum-sprit"},{amount:1485,unit:"platinum-bucket"},{amount:1530,unit:"platinum-sprit"},{amount:1575,unit:"crystal-fragment"},{amount:1620,unit:"black-sprit"},{amount:1665,unit:"gold-bucket"},{amount:1710,unit:"black-sprit"},{amount:1755,unit:"platinum-bucket"},{amount:1800,unit:"rainbow-sprit"}],N=h.reduce(function(t,a){return t+a[1]-a[0]},0);t(function(){r(),setInterval(a,1e3)})}).call(a,n(1))}]);