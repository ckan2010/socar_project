/*
============ MAJOR_JS =====
@AUTHOR : ckan2010@gmail.com
@CREATE DATE : 2016-9-8
@UPDATE DATE : 2016-9-9
@DESC : 전공
==============================
*/
var ADMIN_NOTICE = '<div id="admin_notice" class="notice1 box">'
	+'<div id="container">'
	+'<div id="content">'
	+'<div class="admin_lnb">'
	+'<ul class="admin_lnb">'
	+'<li><a id="a_admin_notice" title="공지사항" class="admin_lnb1">공지사항</a></li>'
	+'<li><a id="a_admin_inquiry_list" title="Q&A" class="admin_lnb2">묻의&답변</a></li>'
	+'<li><a id="a_admin_car_list" title="차량관리" class="admin_lnb3">차량관리</a></li>'
	+'<li><a id="a_admin_coupon_list" title="쿠폰관리" class="admin_lnb4">쿠폰관리</a></li>'
	+'</ul>'
	+'<div style="margin-top: 30px; margin-left: 170px;" class="section1">'
	+'<h3><img style="margin-bottom: 15px; margin-left: 10px;" src="'+app.img()+'/h3_notice.gif" alt="공지사항"></h3>'
	+'<div style="position:absolute; top:135px; right:60px;" class="notice-search">'
	+'<fieldset>'
	+'<input type="text" name="keyword" id="keyword" class="input">'
	+'<input id="btn_notice_search" type="image" src="'+app.img()+'/btn_notice_search.gif" alt="검색">'
	+'<a id="a_admin_notice_write">'
	+'<input id="btn_notice_write" type="image" src="'+app.img()+'/notice_write.gif" alt="등록">'
	+'</a>'
	+'</fieldset>'
	+'</div>'
	;
var ADMIN_NOTICE_TH = '<table cellspacing="0" summary="공지사항" class="cols">'
	+'<colgroup><col width="65"><col><col width="105"></colgroup>'
	+'<thead>'
	+'<tr>'
	+'<th>번호</th>'
	+'<th>제목</th>'
	+'<th>작성일</th>'
	+'</tr>'
	+'</thead>'
	+'<tbody>';
var ADMIN_NOTICE_END ='</div></div></div></div>';
var ADMIN_NOTICE_CONTENT = '<div id= "admin_notice" class="notice1 box">'
	+'<div id="container" class="box">'
	+'<div id="content">'
	+'<div class="admin_lnb">'
	+'<ul class="admin_lnb">'
	+'<li><a id="a_admin_notice" title="공지사항" class="admin_lnb1">공지사항</a></li>'
	+'<li><a id="a_admin_inquiry_list" title="Q&A" class="admin_lnb2">문의&답변</a></li>'
	+'<li><a id="a_admin_car_list" title="차량관리" class="admin_lnb3">차량관리</a></li>'
	+'<li><a id="a_admin_coupon_list" title="쿠폰관리" class="admin_lnb4">쿠폰관리</a></li>'
	+'</ul>'
	+'<div style="margin-top: 30px; margin-left: 170px;" class="section1">'
	+'<h3><img style="margin-bottom: 15px; margin-left: 165px;" src="'+app.img()+'/h3_notice.gif" alt="공지사항"></h3>'	;
var ADMIN_NOTICE_CONTENT_TH='<table cellspacing="0" summary="공지사항" class="cols">'
	+'<colgroup><col><col width="105"></colgroup>'
	+'<thead>'
	+'<tr>'
	+'<th>제목</th>'
	+'<th>작성일</th>'
	+'</tr>'
	+'</thead>'
	+'<tbody>';

var ADMIN_INQUIRY = '<div id= "admin_answer" class="box">'
	+'<div id="container">'
	+'<div id="content">'
	+'<div class="admin_lnb">'
	+'<ul class="admin_lnb">'
	+'<li><a id="a_admin_notice" title="공지사항" class="admin_lnb1">공지사항</a></li>'
	+'<li><a id="a_admin_inquiry_list" title="Q&A" class="admin_lnb2">문의&답변</a></li>'
	+'<li><a id="a_admin_car_list" title="차량관리" class="admin_lnb3">차량관리</a></li>'
	+'<li><a id="a_admin_coupon_list" title="쿠폰관리" class="admin_lnb4">쿠폰관리</a></li>'
	+'</ul>'
	+'<div class="section1">'
	+'<h3><img style="margin-top: 15px; margin-bottom: 15px;" src="'+app.img()+'/qna.gif" alt="묻의&답변">'
	+'</h3>'
	+'<table style="width: 89%" cellspacing="0" summary="공지사항" class="cols">'
	+'<colgroup><col width="65"><col width="65"><col width="200"><col width="65"><col width="65"></colgroup>'
	+'<thead>'
	+'<tr>'
	+'<th>번호</th>'
	+'<th>문의분류</th>'
	+'<th>제목</th>'
	+'<th>작성자</th>'
	+'<th>작성일</th>'
	+'</tr>'
	+'</thead>'
	+'<tbody>'
	+'<tr>'
	+'<td>48</td>'
	+'<td>예약/결제문의</td>'
	+'<td class="subj"><a id="a_admin_answer">딱 10분을 남겨두고 반납했어요. 바로반납 혜택이 제공이 되나요?</a></td>'
	+'<td>bae1</td>'
	+'<td>2016.10.11</td>'
	+'</tr>'
	+'<tr>'
	+'<td>49</td>'
	+'<td>예약/결제문의</td>'
	+'<td class="subj"><a id="a_admin_answer">바로반납 혜택이 아직 들어오지 않았어요!</a></td>'
	+'<td>bae1</td>'
	+'<td>2016.10.11</td>'
	+'</tr>'
	+'<tr>'
	+'<td>50</td>'
	+'<td>예약/결제문의</td>'
	+'<td class="subj"><a id="a_admin_answer">편도나 D2D 서비스의 경우에도 바로반납 혜택이 적용되나요?</a></td>'
	+'<td>bae1</td>'
	+'<td>2016.10.11</td>'
	+'</tr>'
	+'<tr>'
	+'<td>51</td>'
	+'<td>예약/결제문의</td>'
	+'<td class="subj"><a id="a_admin_answer">잔액부족으로 결제가 이루어지지 않은 경우에도 바로반납을 할 경우 혜택을 받을 수 있나요?</a></td>'
	+'<td>bae1</td>'
	+'<td>2016.10.11</td>'
	+'</tr>'
	+'<tr>'
	+'<td>52</td>'
	+'<td>예약/결제문의</td>'
	+'<td class="subj"><a id="a_admin_answer">바로반납으로 받은 혜택의 유효기간은 언제까지 인가요?</a></td>'
	+'<td>bae1</td>'
	+'<td>2016.10.11</td>'
	+'</tr>'
	+'<tr>'
	+'<td>53</td>'
	+'<td>예약/결제문의</td>'
	+'<td class="subj"><a id="a_admin_answer">예약 앞당기기, 반납연장을 했어요. 이때 발생한 시간도 바로반납 혜택에 포함되나요?</a></td>'
	+'<td>bae1</td>'
	+'<td>2016.10.11</td>'
	+'</tr>'
	+'<tr>'
	+'<td>54</td>'
	+'<td>가입문의</td>'
	+'<td class="subj"><a id="a_admin_answer">회원카드는 어떻게 구매할 수 있나요?</a></td>'
	+'<td>bae1</td>'
	+'<td>2016.10.11</td>'
	+'</tr>'
	+'<tr>'
	+'<td>55</td>'
	+'<td>가입문의</td>'
	+'<td class="subj"><a id="a_admin_answer">회원카드는 언제, 어떻게 등록할 수 있나요?</a></td>'
	+'<td>bae1</td>'
	+'<td>2016.10.11</td>'
	+'</tr>'
	+'<tr>'
	+'<td>56</td>'
	+'<td>가입문의</td>'
	+'<td class="subj"><a id="a_admin_answer">구매한 회원카드를 수령하신 이후, 모바일앱 마이페이지 > 내 정보 > 차량제어수단 > 카드수정 에서 회원카드번호 7자리를 등록해주세요.※ 회원카드 수령과 관계없이 가입승인 후 모바일앱/웹 스마트키로 쏘카를 이용하실 수 있습니다.</a></td>'
	+'<td>bae1</td>'
	+'<td>2016.10.11</td>'
	+'</tr>'
	+'<tr>'
	+'<td>57</td>'
	+'<td>가입문의</td>'
	+'<td class="subj"><a id="a_admin_answer">회원카드를 직접 방문수령하여 받을 수 있나요?</a></td>'
	+'<td>bae1</td>'
	+'<td>2016.10.11</td>'
	+'</tr>'
	+'</tbody>'
	+'</table>'
	+'<div id="admin_paginate" class="paginate">'
	+'&nbsp;<strong>1</strong>&nbsp;<a href="">2</a>&nbsp;<a href="">3</a>&nbsp;<a href="">4</a>'
	+'&nbsp;<a href="">5</a>&nbsp;<a href="">6</a>&nbsp;<a href="">7</a>&nbsp;<a href="">8</a>'
	+'&nbsp;<a href="">9</a>&nbsp;<a href="">10</a>&nbsp;<a href="">11</a>'
	+'&nbsp;<a href="">&gt;</a>'
	+'</div>'
	+'</div>'
	+'</div>'
	+'</div>'
	+'</div>'
	+'</div>';
var ADMIN_CAR = '<div id= "admin_car" class="box">'
+'<div id="container">'
+'<div id="content">'
+'<div class="admin_lnb">'
+'<ul class="admin_lnb">'
+'<li><a id="a_admin_notice" title="공지사항" class="admin_lnb1">공지사항</a></li>'
+'<li><a id="a_admin_inquiry_list" title="Q&A" class="admin_lnb2">문의&답변</a></li>'
+'<li><a id="a_admin_car_list" title="차량관리" class="admin_lnb3">차량관리</a></li>'
+'<li><a id="a_admin_coupon_list" title="쿠폰관리" class="admin_lnb4">쿠폰관리</a></li>'
+'</ul>'+''
+'<div class="section1">'
+'<h3><img style="padding-top: 15px; padding-bottom: 15px" src="'+app.img()+'/car_mag.jpg" alt="차량관리">'
+'<a id="a_admin_car_regist">'
+'<input style="padding-top: 15px; float: right;" id="btn_car_regist" type="image" src="'+app.img()+'/notice_write.gif" alt="등록" >'
+'</a>'
+'</h3>'
+'<table style="margin-left: 0" cellspacing="0" summary="차량관리" class="admin_cols">'
+'<colgroup><col width="84"><col width="137"><col width="200"><col width="84"><col width="200"><col width="200"><col width="84"><col></colgroup>'
+'<thead>'
+'<tr>'
+'<th>차량번호</th>'
+'<th>쏘카존</th>'
+'<th>차량</th>'
+'<th>유종</th>'
+'<th>옵션</th>'
+'<th>대여요금</th>'
+'<th>주행요금</th>'
+'<th>&nbsp;</th>'
+'</tr>'
+'</thead>'
+'<tbody>'
+'<tr>'
+'<td class="subj"><a id="a_admin_car_update">11가1234</a></td>'
+'<td>서울대입구역 6번출구(토마스빌)</td>'
+'<td><img src="http://socdnw.speedgabia.com/template/asset/images/car_image/car22.png" id="car_thumb"><p>아반떼AD</p></td>'
+'<td>휘발유</td>'
+'<td>오토변속기어, 내비게이션, 블랙박스</td>'
+'<td>2,620원</td>'
+'<td>170원/km</td>'
+'</tr>'
+'<tr>'
+'<td class="subj"><a id="a_admin_car_update">11너1234</a></td>'
+'<td>서울역 12번출구(트윈시티남산)</td>'
+'<td><img src="http://socdnw.speedgabia.com/template/asset/images/car_image/car28.png" id="car_thumb"><p>티볼리 뽈뽀리</p></td>'
+'<td>경유</td>'
+'<td>오토변속기어, 내비게이션, 블랙박스</td>'
+'<td>3,320원</td>'
+'<td>160원/km</td>'
+'</tr>'
+'<tr>'
+'<td class="subj"><a id="a_admin_car_update">11다1244</a></td>'
+'<td>신촌기차역 광장</td>'
+'<td><img src="http://socdnw.speedgabia.com/template/asset/images/car_image/car15.png" id="car_thumb"><p>엑센트  엑센트리올</p></td>'
+'<td>휘발유</td>'
+'<td>오토변속기어, 내비게이션, 블랙박스</td>'
+'<td>2,390원</td>'
+'<td>170원/km</td>'
+'</tr>'
+'<tr>'
+'<td class="subj"><a id="a_admin_car_update">12라2233</a></td>'
+'<td>증산시장 앞</td>'
+'<td><img src="http://socdnw.speedgabia.com/template/asset/images/car_image/car15.png" id="car_thumb"><p>엑센트  크레센도</p></td>'
+'<td>휘발유</td>'
+'<td>오토변속기어, 내비게이션, 블랙박스</td>'
+'<td>2,390원</td>'
+'<td>170원/km</td>'
+'</tr>'
+'<tr>'
+'<td class="subj"><a id="a_admin_car_update">12마3333</a></td>'
+'<td>증산시장 앞</td>'
+'<td><img src="http://socdnw.speedgabia.com/template/asset/images/car_image/car1_new2.png" id="car_thumb"><p>레이 다우니</p></td>'
+'<td>휘발유</td>'
+'<td>오토변속기어, 내비게이션, 블랙박스</td>'
+'<td>2,130원</td>'
+'<td>170원/km</td>'
+'</tr>'
+'<tr>'
+'<td class="subj"><a id="a_admin_car_update">15카8989</a></td>'
+'<td>증산시장 앞</td>'
+'<td><img src="http://socdnw.speedgabia.com/template/asset/images/car_image/car22.png" id="car_thumb"><p>아반떼AD 계반떼</p></td>'
+'<td>휘발유</td>'
+'<td>오토변속기어, 내비게이션, 블랙박스</td>'
+'<td>2,130원</td>'
+'<td>170원/km</td>'
+'</tr>'
+'<tr>'
+'<td class="subj"><a id="a_admin_car_update">15카8989</a></td>'
+'<td>증산시장 앞</td>'
+'<td><img src="http://socdnw.speedgabia.com/template/asset/images/car_image/car22.png" id="car_thumb"><p>아반떼AD 계반떼</p></td>'
+'<td>휘발유</td>'
+'<td>오토변속기어, 내비게이션, 블랙박스</td>'
+'<td>2,130원</td>'
+'<td>170원/km</td>'
+'</tr>'
+'<tr>'
+'<td class="subj"><a id="a_admin_car_update">15카8989</a></td>'
+'<td>증산시장 앞</td>'
+'<td><img src="http://socdnw.speedgabia.com/template/asset/images/car_image/car22.png" id="car_thumb"><p>아반떼AD 계반떼</p></td>'
+'<td>휘발유</td>'
+'<td>오토변속기어, 내비게이션, 블랙박스</td>'
+'<td>2,130원</td>'
+'<td>170원/km</td>'
+'</tr>'
+'<tr>'
+'<td class="subj"><a id="a_admin_car_update">15카8989</a></td>'
+'<td>증산시장 앞</td>'
+'<td><img src="http://socdnw.speedgabia.com/template/asset/images/car_image/car22.png" id="car_thumb"><p>아반떼AD 계반떼</p></td>'
+'<td>휘발유</td>'
+'<td>오토변속기어, 내비게이션, 블랙박스</td>'
+'<td>2,130원</td>'
+'<td>170원/km</td>'
+'</tr>'
+'<tr>'
+'<td class="subj"><a id="a_admin_car_update">15카8989</a></td>'
+'<td>증산시장 앞</td>'
+'<td><img src="http://socdnw.speedgabia.com/template/asset/images/car_image/car22.png" id="car_thumb"><p>아반떼AD 계반떼</p></td>'
+'<td>휘발유</td>'
+'<td>오토변속기어, 내비게이션, 블랙박스</td>'
+'<td>2,130원</td>'
+'<td>170원/km</td>'
+'</tr>'
+'<tr>'
+'<td class="subj"><a id="a_admin_car_update">15카8989</a></td>'
+'<td>증산시장 앞</td>'
+'<td><img src="http://socdnw.speedgabia.com/template/asset/images/car_image/car22.png" id="car_thumb"><p>아반떼AD 계반떼</p></td>'
+'<td>휘발유</td>'
+'<td>오토변속기어, 내비게이션, 블랙박스</td>'
+'<td>2,130원</td>'
+'<td>170원/km</td>'
+'</tr>'
+'<tr>'
+'<td class="subj"><a id="a_admin_car_update">15카8989</a></td>'
+'<td>증산시장 앞</td>'
+'<td><img src="http://socdnw.speedgabia.com/template/asset/images/car_image/car22.png" id="car_thumb"><p>아반떼AD 계반떼</p></td>'
+'<td>휘발유</td>'
+'<td>오토변속기어, 내비게이션, 블랙박스</td>'
+'<td>2,130원</td>'
+'<td>170원/km</td>'
+'</tr>'
+'<tr>'
+'<td class="subj"><a id="a_admin_car_update">15카8989</a></td>'
+'<td>증산시장 앞</td>'
+'<td><img src="http://socdnw.speedgabia.com/template/asset/images/car_image/car22.png" id="car_thumb"><p>아반떼AD 계반떼</p></td>'
+'<td>휘발유</td>'
+'<td>오토변속기어, 내비게이션, 블랙박스</td>'
+'<td>2,130원</td>'
+'<td>170원/km</td>'
+'</tr>'
+'<tr>'
+'<td class="subj"><a id="a_admin_car_update">15카8989</a></td>'
+'<td>증산시장 앞</td>'
+'<td><img src="http://socdnw.speedgabia.com/template/asset/images/car_image/car22.png" id="car_thumb"><p>아반떼AD 계반떼</p></td>'
+'<td>휘발유</td>'
+'<td>오토변속기어, 내비게이션, 블랙박스</td>'
+'<td>2,130원</td>'
+'<td>170원/km</td>'
+'</tr>'
+'<tr>'
+'<td class="subj"><a id="a_admin_car_update">15카8989</a></td>'
+'<td>증산시장 앞</td>'
+'<td><img src="http://socdnw.speedgabia.com/template/asset/images/car_image/car22.png" id="car_thumb"><p>아반떼AD 계반떼</p></td>'
+'<td>휘발유</td>'
+'<td>오토변속기어, 내비게이션, 블랙박스</td>'
+'<td>2,130원</td>'
+'<td>170원/km</td>'
+'</tr>'
+'</tbody>'
+'</table>'
+'<div id="admin_paginate" class="paginate">'
+'&nbsp;<strong>1</strong>&nbsp;<a href="">2</a>&nbsp;<a href="">3</a>&nbsp;<a href="">4</a>'
+'&nbsp;<a href="">5</a>&nbsp;<a href="">6</a>&nbsp;<a href="">7</a>&nbsp;<a href="">8</a>'
+'&nbsp;<a href="">9</a>&nbsp;<a href="">10</a>&nbsp;<a href="">11</a>'
+'&nbsp;<a href="">&gt;</a>'
+'</div>'
+'</div>'
+'</div>'
+'</div>'
+'</div>'
+'</div>';
var ADMIN_COUPON = '<div id= "admin_coupon" class="box">'
	+'<div id="container">'
	+'<div id="content">'
	+'<div class="admin_lnb">'
	+'<ul class="admin_lnb">'
	+'<li><a id="a_admin_notice" title="공지사항" class="admin_lnb1">공지사항</a></li>'
	+'<li><a id="a_admin_inquiry_list" title="Q&A" class="admin_lnb2">문의&답변</a></li>'
	+'<li><a id="a_admin_car_list" title="차량관리" class="admin_lnb3">차량관리</a></li>'
	+'<li><a id="a_admin_coupon_list" title="쿠폰관리" class="admin_lnb4">쿠폰관리</a></li>'
	+'</ul>'
	+'<div class="section1">'
	+'<h3><img style="padding-top: 15px; padding-bottom: 15px" src="'+app.img()+'/coupon_mag.jpg" alt="쿠폰관리"><a id="a_admin_coupon_regist">'
	+'<input id="btn_coupon_regist" style="padding-top: 15px; float: right;" type="image" src="'+app.img()+'/notice_write.gif" alt="등록" ></a>'
	+'</h3>'
	+'<table style="margin-left: 0" cellspacing="0" summary="쿠폰관리" class="admin_cols">'
	+'<colgroup><col width="100"><col width="400"><col width="300"><col width="100"><col width="200"><col></colgroup>'
	+'<thead>'
	+'<tr>'
	+'<th>쿠폰번호</th>'
	+'<th>쿠폰명</th>'
	+'<th>오픈기간</th>'
	+'<th>유효기간</th>'
	+'<th>사용조건</th>'
	+'<th>&nbsp;</th>'
	+'</tr>'
	+'</thead>'
	+'<tbody>'
	+'<tr>'
	+'<td class="subj"><a id="a_admin_coupon_detail">1</a></td>'
	+'<td><img src="'+app.img()+'/gif_coupon.jpg" id="car_thumb"><p>선물쿠폰</p></td>'
	+'<td>2012-01-03 0시 ~ 2012-02-04 0시</td>'
	+'<td>2012-02-04 0시</td>'
	+'<td>50%할인이가능</td>'
	+'</tr>'
	+'<tr>'
	+'<td class="subj"><a id="a_admin_coupon_detail">2</a></td>'
	+'<td><img src="'+app.img()+'/gif_coupon1.jpg" id="car_thumb"><p>반짝쿠폰</p></td>'
	+'<td>2012-01-04 0시 ~ 2012-02-05 0시</td>'
	+'<td>2012-02-05 0시</td>'
	+'<td>2000원 할인</td>'
	+'</tr>'
	+'<tr>'
	+'<td class="subj"><a id="a_admin_coupon_detail">3</a></td>'
	+'<td><img src="'+app.img()+'/gif_coupon2.jpg" id="car_thumb"><p>좋은쿠폰</p></td>'
	+'<td>2012-01-05 0시 ~ 2012-02-05 0시</td>'
	+'<td>2012-02-05 0시</td>'
	+'<td>500원 할인</td>'
	+'</tr>'
	+'<tr>'
	+'<td class="subj"><a id="a_admin_coupon_detail">4</a></td>'
	+'<td><img src="'+app.img()+'/gif_coupon3.jpg" id="car_thumb"><p>제주공항에서 쏘카타레이![레이32%할인쿠폰] 가을엔 제주올레이?</p></td>'
	+'<td>2016-09-29 11시 ~ 2016-10-08 0시</td>'
	+'<td>2016-10-09 0시</td>'
	+'<td>24시간 이상 대여시 사용가능 제주공항 전용쿠폰</td>'
	+'</tr>'
	+'<tr>'
	+'<td class="subj"><a id="a_admin_coupon_detail">5</a></td>'
	+'<td><img src="'+app.img()+'/gif_coupon4.jpg" id="car_thumb"><p>덤으로 영화티켓.기프티콘 선물이![2천원할인] 선물이 쏟아지는 쿠폰</p></td>'
	+'<td>2016-09-26 15시 ~ 2016-10-07 0시</td>'
	+'<td>2016-10-08 0시</td>'
	+'<td>2시간 이상 대여시 사용가능</td>'
	+'</tr>'
	+'<tr>'
	+'<td class="subj"><a id="a_admin_coupon_detail">6</a></td>'
	+'<td><img src="'+app.img()+'/gif_coupon5.jpg" id="car_thumb"><p>주중 낮 5시간 9,900원! [오늘낮할인] 핫 하게 특.급.할.인!</p></td>'
	+'<td>2016-08-01 0시 ~ 2016-10-31 17시</td>'
	+'<td>2016-10-31 17시</td>'
	+'<td>5시간 예약전용 주중전용 쿠폰</td>'
	+'</tr>'
	+'</tbody>'
	+'</table>'
	+'<div id="admin_paginate" class="paginate">'
	+'</div>'
	+'</div>'
	+'</div>'
	+'</div>'
	+'</div>'
	+'</div>';

var ADMIN_NOTICE_WRITE = '<div id= "admin_notice" class="notice1 box">'
	+'<div id="container">'
	+'<div id="content">'
	+'<div class="admin_lnb">'
	+'<ul class="admin_lnb">'
	+'<li><a id="a_admin_notice" title="공지사항" class="admin_lnb1">공지사항</a></li>'
	+'<li><a id="a_admin_inquiry_list" title="Q&A" class="admin_lnb2">문의&답변</a></li>'
	+'<li><a id="a_admin_car_list" title="차량관리" class="admin_lnb3">차량관리</a></li>'
	+'<li><a id="a_admin_coupon_list" title="쿠폰관리" class="admin_lnb4">쿠폰관리</a></li>'
	+'</ul>'
	+'<div class="section1">'
	+'<h3><img src="'+app.img()+'/h3_notice.gif" alt="공지사항"></h3>'
	+'<form id="admin_notice_write_form" accept-charset="utf-8" enctype="multipart/form-data">'
	+'<fieldset>'
	+'<input type="hidden" name="auth_token" value="fc11e5a1541403123da91ff8596dd4253c2b72bcdkhne">'
	+'<input type="hidden" name="return_url" value="http://www.socar.kr/inquiry">'
	+'<input type="hidden" name="channel" value="www">'
	+'<table cellspacing="0" class="rows">'
	+'<tbody>'
	+'<tr>'
	+'<th><img src="'+app.img()+'/inquiry_txt3.gif" alt="제목 / 내용"></th>'
	+'<td>'
	+'<input id="title" type="text" name="title" class="input" value="" style="width:90%; margin-bottom: 20px">'
	+'<textarea id="contents" cols="" name="contents" rows="15" class="textarea" style="width:90%"></textarea>'
	+'</td>'
	+'</tr>'
	+'</tbody></table>'
	+'<p class="centerBtn">'
	+'<input id="btn_notice_write_submit" type="submit" value="" class="btn_submit">'
	+'</p>'
	+'</fieldset>'
	+'</form>'
	+'</div>'
	+'</div>'
	+'</div>'
	+'</div>'
	+'</div>';
var ADMIN_ANSWER = '<div id="admin_answer" class="box">'
	+'<div id="container">'
	+'<div id="content">'
	+'<div class="admin_lnb">'
	+'<ul class="admin_lnb">'
	+'<li><a id="a_admin_notice" title="공지사항" class="admin_lnb1">공지사항</a></li>'
	+'<li><a id="a_admin_inquiry_list" title="Q&A" class="admin_lnb2">문의&답변</a></li>'
	+'<li><a id="a_admin_car_list" title="차량관리" class="admin_lnb3">차량관리</a></li>'
	+'<li><a id="a_admin_coupon_list" title="쿠폰관리" class="admin_lnb4">쿠폰관리</a></li>'
	+'</ul>'
	+'<div class="section1">'
	+'<h3><img src="'+app.img()+'/qna.jpg" alt="묻의&답변"></h3>'
	+'<form id="admin_answer_form" accept-charset="utf-8" enctype="multipart/form-data">'
	+'<fieldset>'
	+'<table cellspacing="0" class="rows">'
	+'<tbody><tr>'
	+'<th><img src="'+app.img()+'/inquiry_txt2.gif" alt="문의분류"></th>'
	+'<td style="width:165px" name="category" id="category">'
	+'예약/결제문의'
	+'</td>'
	+'</tr>'
	+'<tr>'
	+'<th><img src="'+app.img()+'/inquiry_txt3.gif" alt="제목 / 내용"></th>'
	+'<td id="title" name="title" class="input" style="width:400px">'
	+'바로반납으로 받은 혜택의 유효기간은 언제까지 인가요?'
	+'</td>'
	+'</tr>'
	+'<tr>'
	+'<td>'
	+'</td>'
	+'<td>'
	+'바로반납 혜택은 대여시간 30분 초과, 대여 종료시간 10분 이전 건에 대하여 적용됩니다.바로반납 크레딧에 대한 자세한 내용은 아래 공지사항을 참고해주세요.☞ 바로반납 크레딧 안내 자세히 보기 (PC)'
	+'</td>'
	+'</tr>'
	+'<tr>'
	+'<th><img src="'+app.img()+'/answer_title.jpg" alt="답변"></th>'
	+'<td>'
	+'<textarea id="contents" cols="" name="contents" rows="15" class="textarea" style="width:750px"></textarea>'
	+'</td>'
	+'</tr>'
	+'</tbody></table>'
	+'<p class="centerBtn">'
	+'<input id="btn_answer_submit" type="submit" value="" class="btn_submit">'
	+'</p>'
	+'</fieldset>'
	+'</form>'
	+'</div>'
	+'</div>'
	+'</div>'
	+'</div>'
	+'</div>';
var ADMIN_CAR_UPDATE = '<div id= "admin_car" class="box">'
	+'<div id="container">'
	+'<div id="content">'
	+'<div class="admin_lnb">'
	+'<ul class="admin_lnb">'
	+'<li><a id="a_admin_notice" title="공지사항" class="admin_lnb1">공지사항</a></li>'
	+'<li><a id="a_admin_inquiry_list" title="Q&A" class="admin_lnb2">문의&답변</a></li>'
	+'<li><a id="a_admin_car_list" title="차량관리" class="admin_lnb3">차량관리</a></li>'
	+'<li><a id="a_admin_coupon_list" title="쿠폰관리" class="admin_lnb4">쿠폰관리</a></li>'
	+'</ul>'
	+'<div class="section1">'
	+'<h3><img src="'+app.img()+'/car_mag.jpg" alt="차량관리"></h3>'
	+'<form id="admin_car_update" method="post" action="${context}/admin/inquiry" accept-charset="utf-8" enctype="multipart/form-data">'
	+'<fieldset>'
	+'<input type="hidden" name="auth_token" value="fc11e5a1541403123da91ff8596dd4253c2b72bcdkhne">'
	+'<input type="hidden" name="return_url" value="">'
	+'<input type="hidden" name="channel" value="www">'
	+'<table cellspacing="0" class="rows">'
	+'<tbody>'
	+'<tr>'
	+'<td>차량번호</td>'
	+'<td>11가1234</td>'
	+'</tr>'
	+'<tr>'
	+'<th>쏘카존</th>'
	+'<td>'
	+'<input id="title" type="text" name="title" class="input" value="증산시장 앞" style="width:200px">'
	+'</td>'
	+'</tr>'
	+'<tr>'
	+'<th>차량</th>'
	+'<td><img src="http://socdnw.speedgabia.com/template/asset/images/car_image/car15.png" id="car_thumb">엑센트  크레센도</td>'
	+'</tr>'
	+'<tr>'
	+'<th>유종</th>'
	+'<td>휘발유</td>'
	+'</tr>'
	+'<tr>'
	+'<th>옵션</th>'
	+'<td>'
	+'<input id="car_option" type="text" name="option" class="input" value="오토변속기어, 내비게이션, 블랙박스" style="width:400px">'
	+'</td>'
	+'</tr>'
	+'<tr>'
	+'<th>대여요금</th>'
	+'<td>'
	+'<input id="car_option" type="text" name="option" class="input" value="2,620원" style="width:100px">'
	+'</td>'
	+'</tr>'
	+'<tr>'
	+'<th>주행요금</th>'
	+'<td>'
	+'<input id="car_option" type="text" name="option" class="input" value="170원/km" style="width:100px">'
	+'</td>'
	+'</tr>'
	+'</tbody>'
	+'</table>'
	+'<p class="centerBtn">'
	+'<input id="btn_admin_car_update" type="submit" value="" class="btn_submit">'
	+'</p>'
	+'</fieldset>'
	+'</form>'
	+'</div>'
	+'</div>'
	+'</div>'
	+'</div>'
	+'</div>';
var ADMIN_CAR_REGIST = '<div id= "admin_car" class="box">'
	+'<div id="container">'
	+'<div id="content">'
	+'<div class="admin_lnb">'
	+'<ul class="admin_lnb">'
	+'<li><a id="a_admin_notice" title="공지사항" class="admin_lnb1">공지사항</a></li>'
	+'<li><a id="a_admin_inquiry_list" title="Q&A" class="admin_lnb2">문의&답변</a></li>'
	+'<li><a id="a_admin_car_list" title="차량관리" class="admin_lnb3">차량관리</a></li>'
	+'<li><a id="a_admin_coupon_list" title="쿠폰관리" class="admin_lnb4">쿠폰관리</a></li>'
	+'</ul>'
	+'<div class="section1">'
	+'<h3><img src="'+app.img()+'/car_mag.jpg" alt="차량관리"></h3>'
	+'<form id="admin_car_regist" accept-charset="utf-8" enctype="multipart/form-data">'
	+'<fieldset>'
	+'<input type="hidden" name="auth_token" value="fc11e5a1541403123da91ff8596dd4253c2b72bcdkhne">'
	+'<input type="hidden" name="return_url" value="">'
	+'<input type="hidden" name="channel" value="www">'
	+'<table cellspacing="0" class="rows">'
	+'<tbody>'
	+'<tr>'
	+'<th>차량번호</th>'
	+'<td><input id="title" type="text" name="title" class="input" value="" style="width:100px"></td>'
	+'</tr>'
	+'<tr>'
	+'<th>쏘카존</th>'
	+'<td>'
	+'<input id="title" type="text" name="title" class="input" value="" style="width:200px">'
	+'</td>'
	+'</tr>'
	+'<tr>'
	+'<th>차량</th>'
	+'<td><img src="'+app.img()+'/car_image/" id="car_thumb">'
	+'<input id="title" type="text" name="title" class="input" value="" style="width:200px">'
	+'</td>'
	+'</tr>'
	+'<tr>'
	+'<th>유종</th>'
	+'<td>'
	+'<input id="title" type="text" name="title" class="input" value="" style="width:60px">'
	+'</td>'
	+'</tr>'
	+'<tr>'
	+'<th>옵션</th>'
	+'<td>'
	+'<input id="car_option" type="text" name="option" class="input" value="" style="width:400px">'
	+'</td>'
	+'</tr>'
	+'<tr>'
	+'<th>대여요금</th>'
	+'<td>'
	+'<input id="car_option" type="text" name="option" class="input" value="" style="width:100px">원'
	+'</td>'
	+'</tr>'
	+'<tr>'
	+'<th>주행요금</th>'
	+'<td>'
	+'<input id="car_option" type="text" name="option" class="input" value="" style="width:100px">/Km'
	+'</td>'
	+'</tr>'
	+'<tr>'
	+'<th>차량이미지</th>'
	+'<td>'
	+'<input type="file" class="inquiry_input" name="userfile" value="">'
	+'<span class="tip ml10">이미지 파일은 jpg, png, gif 만 첨부가능합니다.</span>'
	+'</td>'
	+'</tr>'
	+'</tbody>'
	+'</table>'
	+'<p class="centerBtn">'
	+'<input id="brn_admin_car_regist" type="submit" value="" class="btn_submit">'
	+'</p>'
	+'</fieldset>'
	+'</form>'
	+'</div>'
	+'</div>'
	+'</div>'
	+'</div>'
	+'</div>';
var ADMIN_COUPON_DETAIL = '<div id= "admin_coupon" class="box">'
	+'<div id="container">'
	+'<div id="content">'
	+'<div class="admin_lnb">'
	+'<ul class="admin_lnb">'
	+'<li><a id="a_admin_notice" title="공지사항" class="admin_lnb1">공지사항</a></li>'
	+'<li><a id="a_admin_inquiry_list" title="Q&A" class="admin_lnb2">문의&답변</a></li>'
	+'<li><a id="a_admin_car_list" title="차량관리" class="admin_lnb3">차량관리</a></li>'
	+'<li><a id="a_admin_coupon_list" title="쿠폰관리" class="admin_lnb4">쿠폰관리</a></li>'
	+'</ul>'
	+'<div class="section1">'
	+'<h3><img src="'+app.img()+'/coupon_mag.jpg" alt="쿠폰관리"></h3>'
	+'<table style="width: 89%;" cellspacing="0" class="rows">'
	+'<tbody>'
	+'<tr>'
	+'<td>쿠폰번호</td>'
	+'<td>6</td>'
	+'</tr>'
	+'<tr>'
	+'<th>쿠폰명</th>'
	+'<td><img src="'+app.img()+'/gif_coupon5.jpg" id="car_thumb">주중 낮 5시간 9,900원! [오늘낮할인] 핫 하게 특.급.할.인!</td>'
	+'</tr>'
	+'<tr>'
	+'<th>오픈기간</th>'
	+'<td>2016-08-01 0시 ~ 2016-10-31 17시</td>'
	+'</tr>'
	+'<tr>'
	+'<th>유효기간</th>'
	+'<td>2016-10-31 17시</td>'
	+'</tr>'
	+'<tr>'
	+'<th>사용조건</th>'
	+'<td>5시간 예약전용 주중전용 쿠폰</td>'
	+'</tr>'
	+'<tr>'
	+'<th>자세히</th>'
	+'<td>'
	+'예약오픈시간쿠폰 별 유효기간 내 상시오픈대여/반납 가능시간주중 8시 ~ 17시 시간 내 대여/반납 가능예약가능시간 제한총 5시간 예약시 사용가능 (이후 시간은 반납연장으로 대여 가능하며, 연장된 시간은 쿠폰가격이 아닌 기존가격으로 적용) 차종제한모닝/스파크/레이/프라이드/엑센트/아반떼/K3/티볼리/트랙스/K5 대여시 사용가능 기타제주공항/제주공항입구 교차로 존에서 사용불가 왕복예약시 사용가능 *이 쿠폰은 예고없이 종료될 수 있습니다*'
	+'</td>'
	+'</tr>'
	+'<tr>'
	+'<th>할인조건</th>'
	+'<td>금액</td>'
	+'</tr>'
	+'<tr>'
	+'<th>할인</th>'
	+'<td>9,900원</td>'
	+'</tr>'
	+'<tr>'
	+'<th>남은쿠폰수량</th>'
	+'<td>3,023</td>'
	+'</tr>'
	+'</tbody>'
	+'</table>'
	+'<p class="centerBtn"><a id="a_admin_coupon_list"><img src="http://socdnw.speedgabia.com/template/asset/images/common/btn_list.gif" alt="목록보기"></a></p>'
	+'</div>'
	+'</div>'
	+'</div>'
	+'</div>'
	+'</div>';
var ADMIN_COUPON_REGIST = '<div id= "admin_coupon" class="box">'
	+'<div id="container">'
	+'<div id="content">'
	+'<div class="admin_lnb">'
	+'<ul class="admin_lnb">'
	+'<li><a id="a_admin_notice" title="공지사항" class="admin_lnb1">공지사항</a></li>'
	+'<li><a id="a_admin_inquiry_list" title="Q&A" class="admin_lnb2">문의&답변</a></li>'
	+'<li><a id="a_admin_car_list" title="차량관리" class="admin_lnb3">차량관리</a></li>'
	+'<li><a id="a_admin_coupon_list" title="쿠폰관리" class="admin_lnb4">쿠폰관리</a></li>'
	+'</ul>'
	+'<div class="section1">'
	+'<h3><img src="'+app.img()+'/coupon_mag.jpg" alt="쿠폰관리"></h3>'
	+'<form id="admin_coupon_regist_form" accept-charset="utf-8" enctype="multipart/form-data">'
	+'<fieldset>'
	+'<input type="hidden" name="auth_token" value="fc11e5a1541403123da91ff8596dd4253c2b72bcdkhne">'
	+'<input type="hidden" name="return_url" value="">'
	+'<input type="hidden" name="channel" value="www">'
	+'<table cellspacing="0" class="rows">'
	+'<tbody>'
	+'<tr>'
	+'<th>쿠폰명</th>'
	+'<td><input id="title" type="text" name="title" class="input" value="" style="width:500px"></td>'
	+'</tr>'
	+'<tr>'
	+'<th>오픈기간</th>'
	+'<td>'
	+'<input id="title" type="text" name="title" class="input" value="" style="width:100px"> ~'
	+'<input id="title" type="text" name="title" class="input" value="" style="width:100px">'
	+'</td>'
	+'</tr>'
	+'<tr>'
	+'<th>유효기간</th>'
	+'<td>'
	+'<input id="title" type="text" name="title" class="input" value="" style="width:100px">'
	+'</td>'
	+'</tr>'
	+'<tr>'
	+'<th>사용조건</th>'
	+'<td>'
	+'<input id="title" type="text" name="title" class="input" value="" style="width:400px">'
	+'</td>'
	+'</tr>'
	+'<tr>'
	+'<th>자세히</th>'
	+'<td>'
	+'<textarea id="contents" cols="" name="contents" rows="15" class="textarea" style="width:750px"></textarea>'
	+'</td>'
	+'</tr>'
	+'<tr>'
	+'<th>할인조건</th>'
	+'<td>'
	+'<input id="car_option" type="text" name="option" class="input" value="" style="width:100px">'
	+'</td>'
	+'</tr>'
	+'<tr>'
	+'<th>할인</th>'
	+'<td>'
	+'<input id="car_option" type="text" name="option" class="input" value="" style="width:100px">'
	+'</td>'
	+'</tr>'
	+'<tr>'
	+'<th>쿠폰수량</th>'
	+'<td>'
	+'<input id="car_option" type="text" name="option" class="input" value="" style="width:100px">'
	+'</td>'
	+'</tr>'
	+'<tr>'
	+'<th>쿠폰이미지</th>'
	+'<td>'
	+'<input type="file" class="inquiry_input" name="userfile" value="">'
	+'<span class="tip ml10">이미지 파일은 jpg, png, gif 만 첨부가능합니다.</span>'
	+'</td>'
	+'</tr>'
	+'</tbody>'
	+'</table>'
	+'<p class="centerBtn">'
	+'<input id="btn_coupon_submit" type="submit" value="" class="btn_submit">'
	+'</p>'
	+'</fieldset>'
	+'</form>'
	+'</div>'
	+'</div>'
	+'</div>'
	+'</div>'
	+'</div>';
var admin = (function(){
	var init = function(){onCreate()};
	var setContentView = function(){
	};
	var onCreate = function(){
		setContentView();
		$('#btn_admin_mode').click(function(){admin.admin_notice_form('notice_list',1);}); 
		$('#admin_article').on('click','#a_admin_notice',function(){
			admin.admin_notice_form('notice_list',1);
		});
		$('#admin_article').on('click','#a_admin_inquiry_list',function(){
			admin.admin_inquiry_form();
		});
		$('#admin_article').on('click','#a_admin_car_list',function(){
			admin.admin_car_form();
		});
		$('#admin_article').on('click','#a_admin_coupon_list',function(){
			admin.admin_coupon_form();
		});
		$('#admin_article').on('click','#a_admin_notice_write',function(){
			admin.admin_notice_write();
		});
		$('#admin_article').on('click','#a_admin_answer',function(){
			admin.admin_inquiry_answer();
		});	
		$('#admin_article').on('click','#a_admin_car_update',function(){
			admin.car_update_form();
		});
		$('#admin_article').on('click','#a_admin_car_regist',function(){
			admin.car_regist_form();
		});
		$('#admin_article').on('click','#a_admin_coupon_detail',function(){
			admin.admin_coupon_detail_form();
		});
		$('#admin_article').on('click','#a_admin_coupon_regist',function(){
			admin.admin_coupon_regist_form();
		});
	};
	return{
		init : init,
		admin_notice_form : function(keyField,keyword){
			$('#admin_article').empty();
			var url='';
			if(keyField==='notice_list'){
				url=app.context()+'/admin/notice_list/'+keyword;
				pgNum = keyword;

			}else{
				url=app.context()+'/admin/notice_search/'+keyField+'/'+keyword;
				pgNum = 1;
			}			
			$.getJSON(url,function(data){
				var frame = '';
				var notice_list = '';
				var pagination ='';
				var startPg = data.startPg;
				var lastPg = data.lastPg;
				var pgSize = data.pgSize;
				var totPg = data.totPg;
				var groupSize = data.groupSize;
				var totCount = data.totCount;
				console.log('스타트페이지 : '+startPg);
				console.log('라스트페이지 : '+lastPg);
				console.log('페이지사이즈 : '+pgSize);
				console.log('총페이지 : '+totPg);
				console.log('그룹사이즈 : '+groupSize);
				console.log('페이지번호 : '+pgNum);
				notice_list = ADMIN_NOTICE;
				notice_list += ADMIN_NOTICE_TH;	
				
				if (data.totCount===0) {
					notice_list +='<tr><td colspan=7>등록된 공지사항이 없습니다.</td></tr>';
				} else {					
					$.each(data.list, function(i,notice){
						notice_list +=
							'<tr>'
							+'<td>'+notice.seq+'</td>'
							+'<td class="subj"><a href="#" onclick="admin.admin_notice_content(\''
							+notice.title+'\',\''+notice.regDate+'\')" id= "a_admin_notice_content">'+notice.title+'</a></td>'
							+'<td>'+notice.regDate+'</td>'
							+'<td style="visibility:hidden">'+notice.customerSeq+'</td>'
							+'</tr>';
					});
				}
				notice_list += '</tbody></table>'
				pagination = '<div id="admin_paginate" class="paginate">';
				if(pgNum > startPg  ){
					pagination += 
                        '&nbsp;<a href="#" onclick="admin.admin_notice_form(\'notice_list\','+(pgNum - 1)+')" aria-label="Previous">'
                       +'<span aria-hidden="true">&laquo;</span>'
                       +'</a>'
                       ;
                 }
                 for(var i=startPg; i<=totPg; i++){
                    if(i==pgNum){
                       pagination +='&nbsp;<strong>'+i+'</strong>';
                    }else{
                       pagination += '&nbsp;<a href="#" onclick="admin.admin_notice_form(\'notice_list\','+i+')">'+i+'</a>';
                    }
                 }
                 if(pgNum < lastPg){
                    pagination += 
                       '&nbsp;<a href="#" onclick="admin.admin_notice_form(\'notice_list\','+(pgNum + 1)+')" aria-label="Next">'
                       + '<span aria-hidden="true">&raquo;</span>'
                       +'</a>'
                      ;
                 }
                pagination += '</div>'
                notice_list += pagination;	
                
				notice_list += ADMIN_NOTICE_END;
				frame = notice_list;
				$('#admin_article').html(frame);
				
				$('#btn_notice_search').click(function(){
					if($('#keyword').val().length>0){
						admin.admin_find_notice('title',$('#keyword').val());
					}else{
						alert('검색어를 입력해 주세요');
						$('#keyword').focus();
						return false
					}
				});
			});
		},
		admin_notice_content : function(title,regdate){
			$('#admin_article').empty();
			var frame = '';
			var notice_content = '';
			notice_content = ADMIN_NOTICE_CONTENT;
			notice_content += ADMIN_NOTICE_CONTENT_TH;
			notice_content += '<tr>'
				+'<td class="subj">'+title+'</td>'
				+'<td>'+regdate+'</td>'
				+'</tr>'
				+'</tbody>'
				+'</table>'
				+'<div class="viewCont">'
				+'공지내용 들어갈것'
				+'<p class="centerBtn"><a id="a_admin_notice"><img src="http://socdnw.speedgabia.com/template/asset/images/common/btn_list.gif" alt="목록보기"></a></p>'
				+'</div>'
				+'</div>'
				;
			notice_content += ADMIN_NOTICE_END;
			frame = notice_content;
			$('#admin_article').html(frame);	
		},
		admin_find_notice : function(keyField,keyword){
			admin.admin_notice_form(keyField,keyword);
		},
		admin_inquiry_form : function(){
			$('#admin_article').empty().html(ADMIN_INQUIRY);	
		},
		admin_car_form : function(){
			$('#admin_article').empty().html(ADMIN_CAR);	
		},
		admin_coupon_form : function(){
			$('#admin_article').empty().html(ADMIN_COUPON);	
		},		
		admin_notice_write : function(){
			$('#admin_article').empty().html(ADMIN_NOTICE_WRITE);
			admin.init();
			$('#btn_notice_write_submit').click(function(e){
			    e.preventDefault();
				$('#admin_article').html(ADMIN_NOTICE);				
			}); 
		},
		admin_inquiry_answer : function(){
			$('#admin_article').empty().html(ADMIN_ANSWER);	
			$('#btn_answer_submit').click(function(e){
				e.preventDefault();
				$('#admin_article').html(ADMIN_INQUIRY);
			}); 
		},
		car_update_form : function(){
			$('#admin_article').empty().html(ADMIN_CAR_UPDATE);	
			$('#btn_admin_car_update').click(function(e){
				e.preventDefault();
				$('#admin_article').html(ADMIN_CAR);
			}); 
		},
		car_regist_form : function(){
			$('#admin_article').empty().html(ADMIN_CAR_REGIST);	
			$('#brn_admin_car_regist').click(function(e){
				e.preventDefault();
				$('#admin_article').html(ADMIN_CAR);
			}); 
		},
		admin_coupon_detail_form : function(){
			$('#admin_article').empty().html(ADMIN_COUPON_DETAIL);	
			$('#admin_article').on('click','#a_admin_coupon_list',function(e){
				e.preventDefault();
				$('#admin_article').html(ADMIN_COUPON);
			});
		},
		admin_coupon_regist_form : function(){
			$('#admin_article').empty().html(ADMIN_COUPON_REGIST);	
			$('#btn_coupon_submit').click(function(e){
				e.preventDefault();
				$('#admin_article').html(ADMIN_COUPON);
			}); 
		}
	};
})();