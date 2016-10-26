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
var ADMIN_NOTICE_FIND = '<div id="admin_notice" class="notice1 box">'
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
var ADMIN_NOTICE_CONTENT_TH='<table id="notice_content" cellspacing="0" summary="공지사항" class="cols">'
	+'<colgroup><col><col width="105"></colgroup>'
	+'<thead>'
	+'<tr>'
	+'<th>제목</th>'
	+'<th>작성일</th>'
	+'</tr>'
	+'</thead>'
	+'<tbody>';
var ADMIN_NOTICE_CONTENT_ROW = '<tr>'
	+'<td id="content_title" class="subj" ></td>'
	+'<td id="content_regdate"></td>'
	+'</tr>'
	+'</tbody>'
	+'</table>'
	+'<div id="admin_notice_content" class="viewCont">'
	+'</div>'
	+'<p class="centerBtn"><a href="#" onclick="admin.admin_notice_form(1)"><img src="'+app.img()+'/btn_list.gif" alt="목록보기"></a></p>'
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
	+'<table cellspacing="0" class="rows">'
	+'<tbody>'
	+'<tr>'
	+'<th><img src="'+app.img()+'/inquiry_txt3.gif" alt="제목 / 내용"></th>'
	+'<td>'
	+'<input id="adm_notice_title" type="text" name="title" class="input" value="" style="width:90%; margin-bottom: 20px">'
	+'<textarea id="adm_notice_contents" cols="" name="contents" rows="15" class="textarea" style="width:90%"></textarea>'
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
	+'<div style="margin-top: 30px; margin-left: 170px;" class="section1">'
	+'<h3><img style="margin-bottom: 15px; margin-left: 10px;" src="'+app.img()+'/qna.gif" alt="묻의&답변">'
	+'</h3>'
	+'<div style="position:absolute; top:135px; right:60px;" class="notice-search">'
	+'<fieldset>'
	+'<input type="text" name="inquiry_keyword" id="inquiry_keyword" class="input">'
	+'<input id="btn_inquiry_search" type="image" src="'+app.img()+'/btn_notice_search.gif" alt="검색">'
	+'</fieldset>'
	+'</div>'
	;
var ADMIN_INQUIRY_TH =
	 '<table cellspacing="0" summary="공지사항" class="cols">'
	+'<colgroup><col width="65"><col width="130"><col width="400"><col width="80"><col width="150"></colgroup>'
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
	;
var ADMIN_INQUIRY_FIND = '<div id= "admin_answer" class="box">'
	+'<div id="container">'
	+'<div id="content">'
	+'<div class="admin_lnb">'
	+'<ul class="admin_lnb">'
	+'<li><a id="a_admin_notice" title="공지사항" class="admin_lnb1">공지사항</a></li>'
	+'<li><a id="a_admin_inquiry_list" title="Q&A" class="admin_lnb2">문의&답변</a></li>'
	+'<li><a id="a_admin_car_list" title="차량관리" class="admin_lnb3">차량관리</a></li>'
	+'<li><a id="a_admin_coupon_list" title="쿠폰관리" class="admin_lnb4">쿠폰관리</a></li>'
	+'</ul>'
	+'<div style="margin-top: 30px; margin-left: 170px;" class="section1">'
	+'<h3><img style="margin-bottom: 15px; margin-left: 10px;" src="'+app.img()+'/qna.gif" alt="묻의&답변">'
	+'</h3>'
	;
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
	+'<td style="width:165px" name="category" id="customer_category">'
	+'</td>'
	+'</tr>'
	+'<tr>'
	+'<th><img src="'+app.img()+'/inquiry_txt3.gif" alt="제목 / 내용"></th>'
	+'<td id="customer_title" name="title" class="input" style="width:400px">'
	+'</td>'
	+'</tr>'
	+'<tr>'
	+'<td>'
	+'</td>'
	+'<td id="customer_content">'
	+'</td>'
	+'</tr>'
	+'<tr>'
	+'<th><img src="'+app.img()+'/answer_title.jpg" alt="답변"></th>'
	+'<td>'
	+'<textarea id="customer_answer" cols="" name="contents" rows="15" class="textarea" style="width:750px"></textarea>'
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
+'<div style="margin-top: 30px; margin-left: 170px;" class="section1">'
+'<h3><img style="margin-bottom: 15px; margin-left: 10px;" src="'+app.img()+'/car_mag.jpg" alt="차량관리"></h3>'
+'<div style="position:absolute; top:135px; right:60px;" class="notice-search">'
+'<fieldset>'
+'<select name="admin_car_keyField" id="admin_car_keyField">'
+'<option value="socarZone" selected>쏘카존</option>'
+'<option value="carType">차량</option>'
+'</select>'
+'<input type="text" name="admin_car_keyword" id="admin_car_keyword" class="input">'
+'<input id="btn_car_search" type="image" src="'+app.img()+'/btn_notice_search.gif" alt="검색">'
+'<a id="a_admin_car_regist">'
+'<input id="btn_car_regist" type="image" src="'+app.img()+'/notice_write.gif" alt="등록">'
+'</a>'
+'</fieldset>'
+'</div>'
;
var ADMIN_CAR_TH =
 '<table style="margin-left: 0" cellspacing="0" summary="차량관리" class="admin_cols">'
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
;
var ADMIN_CAR_FIND = '<div id= "admin_car" class="box">'
	+'<div id="container">'
	+'<div id="content">'
	+'<div class="admin_lnb">'
	+'<ul class="admin_lnb">'
	+'<li><a id="a_admin_notice" title="공지사항" class="admin_lnb1">공지사항</a></li>'
	+'<li><a id="a_admin_inquiry_list" title="Q&A" class="admin_lnb2">문의&답변</a></li>'
	+'<li><a id="a_admin_car_list" title="차량관리" class="admin_lnb3">차량관리</a></li>'
	+'<li><a id="a_admin_coupon_list" title="쿠폰관리" class="admin_lnb4">쿠폰관리</a></li>'
	+'</ul>'+''
	+'<div style="margin-top: 30px; margin-left: 170px;" class="section1">'
	+'<h3><img style="margin-bottom: 15px; margin-left: 10px;" src="'+app.img()+'/car_mag.jpg" alt="차량관리">'
	+'<div style="position:absolute; top:135px; right:60px;" class="notice-search">'
	+'</h3>'
	;
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
	+'<form id="admin_car_update" method="post" accept-charset="utf-8" enctype="multipart/form-data">'
	+'<fieldset>'
	+'<table cellspacing="0" class="rows">'
	+'<tbody>'
	+'<tr>'
	+'<th>차량번호</th>'
	+'<td id="admin_car_num"></td>'
	+'</tr>'
	+'<tr>'
	+'<th>쏘카존</th>'
	+'<td id="u_admin_socar_zone">'
	+'</td>'
	+'</tr>'
	+'<tr>'
	+'<th>차량</th>'
	+'<td><img id="admin_car_img" src="" style="width: 100px;height: 100px; float: left;"></td>'
	+'<td id="u_admin_img_name"></td>'
	+'<td id="admin_car_type"></td>'
	+'</tr>'
	+'<tr>'
	+'<th>유종</th>'
	+'<td id="u_admin_oil_type"></td>'
	+'</tr>'
	+'<tr>'
	+'<th>옵션</th>'
	+'<td>'
	+'<input id="admin_car_option" type="text" name="option" class="input" value="" style="width:400px">'
	+'</td>'
	+'</tr>'
	+'<tr>'
	+'<th>대여요금</th>'
	+'<td>'
	+'<input id="admin_rent_amt" type="text" name="option" class="input" value="" style="width:100px">'
	+'</td>'
	+'</tr>'
	+'<tr>'
	+'<th>주행요금</th>'
	+'<td>'
	+'<input id="admin_drive_amt" type="text" name="option" class="input" value="" style="width:100px">'
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
		$('#btn_admin_mode').click(function(){admin.admin_notice_form(1);}); 
		$('#admin_article').on('click','#a_admin_notice',function(){
			admin.admin_notice_form(1);
		});
		$('#admin_article').on('click','#a_admin_notice_write',function(){
			admin.admin_notice_write();
		});
		$('#admin_article').on('click','#a_admin_inquiry_list',function(){
			admin.admin_inquiry_form(1);
		});
		$('#admin_article').on('click','#a_admin_car_list',function(){
			admin.admin_car_form(1);
		});
		$('#admin_article').on('click','#a_admin_coupon_list',function(){
			admin.admin_coupon_form();
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
		numberWithCommas: function (x) {
		    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
		},
		admin_notice_form : function(pgNum){
			$('#admin_article').empty();
			$.getJSON(app.context()+'/admin/notice_list/'+pgNum,function(data){
				var frame = '';
				var notice_list = '';
				var pagination ='';
				var startPg = data.startPg;
				var lastPg = data.lastPg;
				var pgSize = data.pgSize;
				var totPg = data.totPg;
				var groupSize = data.groupSize;
				var totCount = data.totCount;
				notice_list = ADMIN_NOTICE;
				notice_list += ADMIN_NOTICE_TH;	
				if (data.totCount===0) {
					notice_list +='<tr><td colspan=7>등록된 공지사항이 없습니다.</td></tr>';
				} else {					
					$.each(data.list, function(i,notice){
						notice_list +=
							'<tr>'
							+'<td>'+notice.seq+'</td>'
							+'<td class="subj"><a href="#" onclick="admin.admin_notice_content('+notice.customerSeq+')" id= "a_admin_notice_content">'+notice.title+'</a></td>'
							+'<td>'+notice.regDate+'</td>'
							+'<td style="visibility:hidden">'+notice.customerSeq+'</td>'
							+'</tr>';
					});
				}
				notice_list += '</tbody></table>'
				pagination = '<div id="admin_paginate" class="paginate">';
				if(pgNum > 1  ){
					pagination += 
						'&nbsp;<a href="#" onclick="admin.admin_notice_form('+(pgNum - 1)+')" aria-label="Previous">'
						+'<span aria-hidden="true">&laquo;</span>'
						+'</a>'
						;
                 }
                 for(var i=startPg; i < startPg+groupSize && i <= totPg; i++){
                    if(i==pgNum){
                       pagination +='&nbsp;<strong>'+i+'</strong>';
                    }else{
                    	pagination += '&nbsp;<a href="#" onclick="admin.admin_notice_form('+i+')">'+i+'</a>';
                    }
                 }
                 if(pgNum < totPg){
                	 pagination += 
                            '&nbsp;<a href="#" onclick="admin.admin_notice_form('+(pgNum + 1)+')" aria-label="Next">'
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
						admin.admin_find_notice('title',$('#keyword').val(),1);
					}else{
						alert('검색어를 입력해 주세요');
						$('#keyword').focus();
						return false
					}
				});
			});
		},
		admin_notice_content : function(customerSeq){
			$('#admin_article').empty();
			var frame = '';
			var notice_content = '';
			notice_content = ADMIN_NOTICE_CONTENT;
			notice_content += ADMIN_NOTICE_CONTENT_TH;
			notice_content += ADMIN_NOTICE_CONTENT_ROW;
			notice_content += ADMIN_NOTICE_END;
			frame = notice_content;
			$('#admin_article').html(frame);
			$.getJSON(app.context()+'/admin/noticeContent/customerSeq/'+customerSeq,function(data){
			$('#notice_content #content_title').text(data.title);
			$('#notice_content #content_regdate').text(data.regDate);
			$('#admin_notice_content').text(data.content);
			});
		},
		admin_find_notice : function(keyField,keyword,pgNum){
			$('#admin_article').empty();
			$.getJSON(app.context()+'/admin/notice_search/'+keyField+'/'+keyword+'/'+pgNum,function(data){
				var frame = '';
				var notice_list = '';
				var pagination ='';
				var startPg = data.startPg;
				var lastPg = data.lastPg;
				var pgSize = data.pgSize;
				var totPg = data.totPg;
				var groupSize = data.groupSize;
				var totCount = data.totCount;
				notice_list = ADMIN_NOTICE_FIND;
				notice_list += ADMIN_NOTICE_TH;	
				
				if (data.totCount===0) {
					notice_list +='<tr><td colspan=7>등록된 검색 공지사항이 없습니다.</td></tr>';
				} else {					
					$.each(data.list, function(i,notice){
						notice_list +=
							'<tr>'
							+'<td>'+notice.seq+'</td>'
							+'<td class="subj"><a href="#" onclick="admin.admin_notice_content('+notice.customerSeq+')" id= "a_admin_notice_content">'+notice.title+'</a></td>'
							+'<td>'+notice.regDate+'</td>'
							+'<td style="visibility:hidden">'+notice.customerSeq+'</td>'
							+'</tr>';
					});
				}
				notice_list += '</tbody></table>'
				pagination = '<div id="admin_paginate" class="paginate">';
				if(pgNum > 1  ){
					pagination += 
						'&nbsp;<a href="#" onclick="admin.admin_find_notice(\'title\','+keyword+','+(pgNum - 1)+')" aria-label="Previous">'
						+'<span aria-hidden="true">&laquo;</span>'
						+'</a>'
						;
                 }
                 for(var i=startPg; i < startPg+groupSize && i <= totPg; i++){
                    if(i==pgNum){
                       pagination +='&nbsp;<strong>'+i+'</strong>';
                    }else{
                    	pagination += '&nbsp;<a href="#" onclick="admin.admin_find_notice(\'title\','+keyword+','+i+')">'+i+'</a>';
                    }
                 }
                 if(pgNum < totPg){
                	 pagination += 
                            '&nbsp;<a href="#" onclick="admin.admin_find_notice(\'title\','+keyword+','+(pgNum + 1)+')" aria-label="Next">'
                            + '<span aria-hidden="true">&raquo;</span>'
                            +'</a>'
                           ;
                 }
                pagination += '</div>'
                notice_list += pagination;	                
				notice_list += ADMIN_NOTICE_END;
				frame = notice_list;
				$('#admin_article').html(frame);
			});
		},
		admin_notice_write : function(){
			$('#admin_article').empty().html(ADMIN_NOTICE_WRITE);
			admin.init();
			$('#btn_notice_write_submit').click(function(e){
			    e.preventDefault();
			    var join_info = {
						'title' : $('#adm_notice_title').val(),
						'content' : $('#adm_notice_contents').val()
					};
			    $.ajax({
					url : app.context()+'/admin/notice_write',
					type : 'post',
					contentType : 'application/json',
					data : JSON.stringify(join_info),
					dataType : 'json',
					success : function(data){
						if(data.message==='success'){
							admin.admin_notice_form(1);
						}else{
							alert('공지사항 입력시 알 수 없는 에러가  발생했습니다.');
						}
					},
					error : function(x,s,m){
						alert("code:"+x.status+"\n"+"message:"+x.responseText+"\n"+"m:"+error);
					}
					
				});				
			}); 
		},
		admin_inquiry_form : function(pgNum){
			$('#admin_article').empty();
			$.getJSON(app.context()+'/admin/customer_list/'+pgNum,function(data){
				var frame = '';
				var inquiry_list = '';
				var pagination ='';
				var startPg = data.startPg;
				var lastPg = data.lastPg;
				var pgSize = data.pgSize;
				var totPg = data.totPg;
				var groupSize = data.groupSize;
				var totCount = data.totCount;
				inquiry_list = ADMIN_INQUIRY;
				inquiry_list += ADMIN_INQUIRY_TH;				
				if (data.totCount===0) {
					inquiry_list +='<tr><td colspan=7>등록된 문의가 없습니다.</td></tr>';
				} else {					
					$.each(data.list, function(i,inquiry){
						inquiry_list +=
							'<tr>'
							+'<td>'+inquiry.seq+'</td>'
							+'<td>'+inquiry.category+'</td>';
							if(inquiry.answer===null ){
								inquiry_list += '<td class="subj"><a href="#" onclick="admin.admin_inquiry_answer('+inquiry.customerSeq+')" id= "a_admin_answer">'+inquiry.title+'</a><img src="'+app.img()+'/ico-new.gif"></td>';
							}else{
								inquiry_list += '<td class="subj"><a href="#" onclick="admin.admin_inquiry_answer('+inquiry.customerSeq+')" id= "a_admin_answer">'+inquiry.title+'</a></td>';
							}
							inquiry_list +='<td>'+inquiry.id+'</td>'
							+'<td>'+inquiry.regDate+'</td>'
							+'<td style="visibility:hidden">'+inquiry.customerSeq+'</td>'
							+'</tr>';
					});
				}
				inquiry_list += '</tbody></table>'
				pagination = '<div id="admin_paginate" class="paginate">';
				if(pgNum > 1  ){
					pagination += 
						'&nbsp;<a href="#" onclick="admin.admin_inquiry_form('+(pgNum - 1)+')" aria-label="Previous">'
						+'<span aria-hidden="true">&laquo;</span>'
						+'</a>'
						;
                 }
                 for(var i=startPg; i < startPg+groupSize && i <= totPg; i++){
                    if(i==pgNum){
                       pagination +='&nbsp;<strong>'+i+'</strong>';
                    }else{
                    	pagination += '&nbsp;<a href="#" onclick="admin.admin_inquiry_form('+i+')">'+i+'</a>';
                    }
                 }
                 if(pgNum < totPg){
                	 pagination += 
                            '&nbsp;<a href="#" onclick="admin.admin_inquiry_form('+(pgNum + 1)+')" aria-label="Next">'
                            + '<span aria-hidden="true">&raquo;</span>'
                            +'</a>'
                           ;
                 }
                pagination += '</div>'
                inquiry_list += pagination;	                
                inquiry_list += ADMIN_NOTICE_END;
				frame = inquiry_list;
				$('#admin_article').html(frame);
				
				$('#btn_inquiry_search').click(function(){
					if($('#inquiry_keyword').val().length>0){
						admin.admin_find_inquiry('title',$('#inquiry_keyword').val(),1);
					}else{
						alert('검색어를 입력해 주세요');
						$('#inquiry_keyword').focus();
						return false
					}
				});
			});
		},
		admin_find_inquiry : function(keyField,keyword,pgNum){
			$('#admin_article').empty();
			$.getJSON(app.context()+'/admin/customer_search/'+keyField+'/'+keyword+'/'+pgNum,function(data){
				var frame = '';
				var inquiry_list = '';
				var pagination ='';
				var startPg = data.startPg;
				var lastPg = data.lastPg;
				var pgSize = data.pgSize;
				var totPg = data.totPg;
				var groupSize = data.groupSize;
				var totCount = data.totCount;
				inquiry_list = ADMIN_INQUIRY_FIND;
				inquiry_list += ADMIN_INQUIRY_TH;	
				
				if (data.totCount===0) {
					inquiry_list +='<tr><td colspan=7>등록된 검색 문의가 없습니다.</td></tr>';
				} else {					
					$.each(data.list, function(i,inquiry){
						inquiry_list +=
							'<tr>'
							+'<td>'+inquiry.seq+'</td>'
							+'<td>'+inquiry.category+'</td>'
							+'<td class="subj"><a href="#" onclick="admin.admin_inquiry_answer('+inquiry.customerSeq+')" id= "a_admin_answer">'+inquiry.title+'</a></td>'
							+'<td>'+inquiry.id+'</td>'
							+'<td>'+inquiry.regDate+'</td>'
							+'<td style="visibility:hidden">'+inquiry.customerSeq+'</td>'
							+'</tr>';
					});
				}
				inquiry_list += '</tbody></table>'
				pagination = '<div id="admin_paginate" class="paginate">';
				if(pgNum > 1  ){
					pagination += 
						'&nbsp;<a href="#" onclick="admin.admin_find_inquiry(\'title\','+keyword+','+(pgNum - 1)+')" aria-label="Previous">'
						+'<span aria-hidden="true">&laquo;</span>'
						+'</a>'
						;
                 }
                 for(var i=startPg; i < startPg+groupSize && i <= totPg; i++){
                    if(i==pgNum){
                       pagination +='&nbsp;<strong>'+i+'</strong>';
                    }else{
                    	pagination += '&nbsp;<a href="#" onclick="admin.admin_find_inquiry(\'title\','+keyword+','+i+')">'+i+'</a>';
                    }
                 }
                 if(pgNum < totPg){
                	 pagination += 
                            '&nbsp;<a href="#" onclick="admin.admin_find_inquiry(\'title\','+keyword+','+(pgNum + 1)+')" aria-label="Next">'
                            + '<span aria-hidden="true">&raquo;</span>'
                            +'</a>'
                           ;
                 }
                pagination += '</div>'
                inquiry_list += pagination;	                
                inquiry_list += ADMIN_NOTICE_END;
				frame = inquiry_list;
				$('#admin_article').html(frame);
			});
		},
		admin_inquiry_answer : function(customerSeq){
			$('#admin_article').empty().html(ADMIN_ANSWER);	
			admin.init();
			$.getJSON(app.context()+'/admin/customerAnswer/customerSeq/'+customerSeq,function(data){
				$('#customer_category').text(data.category);
				$('#customer_title').text(data.title);
				$('#customer_content').text(data.content);
				$('#customer_answer').text(data.answer);
			});
			$('#btn_answer_submit').click(function(e){
				e.preventDefault();
				var join_info = {
						'answer' : $('#customer_answer').val(),
						'customerSeq' : customerSeq
					};
			    $.ajax({
					url : app.context()+'/admin/customer_answer',
					type : 'post',
					contentType : 'application/json',
					data : JSON.stringify(join_info),
					dataType : 'json',
					success : function(data){
						if(data.message==='success'){
							admin.admin_inquiry_form(1);
						}else{
							alert('답변 업데이트시 알 수 없는 에러가  발생했습니다.');
						}
					},
					error : function(x,s,m){
						alert("code:"+x.status+"\n"+"message:"+x.responseText+"\n"+"m:"+error);
					}
					
				});
			}); 
		},
		admin_car_form : function(pgNum){
			$('#admin_article').empty();
			$.getJSON(app.context()+'/admin/car_list/'+pgNum,function(data){
				var frame = '';
				var car_list = '';
				var pagination ='';
				var startPg = data.startPg;
				var lastPg = data.lastPg;
				var pgSize = data.pgSize;
				var totPg = data.totPg;
				var groupSize = data.groupSize;
				var totCount = data.totCount;
				car_list = ADMIN_CAR;
				car_list += ADMIN_CAR_TH;					
				if (data.totCount===0) {
					car_list +='<tr><td colspan=7>등록된 차량이 없습니다.</td></tr>';
				} else {					
					$.each(data.list, function(i,car){
						car_list +=
							'<tr>'
							+'<td class="subj"> <a href="#" onclick="admin.car_update_form('+car.seq+')" id= "a_admin_notice_content">'+car.carNum+'</a></td>'
							+'<td>'+car.socarZone+'</td>'
							+'<td><img src="'+app.img()+'/car_image/'+car.carImg+'" id="car_thumb"><p>'+car.carType+'</p></td>'
							+'<td>'+car.oilType+'</td>'
							+'<td>'+car.carOption+'</td>'
							+'<td>'+admin.numberWithCommas(car.rentAmt)+'원</td>'
							+'<td>'+admin.numberWithCommas(car.driveAmt)+'원/km</td>'
							+'<td style="visibility:hidden">'+car.seq+'</td>'
							+'</tr>';
					});
				}
				car_list += '</tbody></table>'
				pagination = '<div id="admin_paginate" class="paginate">';
				if(pgNum > 1  ){
					pagination += 
						'&nbsp;<a href="#" onclick="admin.admin_car_form('+(pgNum - 1)+')" aria-label="Previous">'
						+'<span aria-hidden="true">&laquo;</span>'
						+'</a>'
						;
                 }
                 for(var i=startPg; i < startPg+groupSize && i <= totPg; i++){
                    if(i==pgNum){
                       pagination +='&nbsp;<strong>'+i+'</strong>';
                    }else{
                    	pagination += '&nbsp;<a href="#" onclick="admin.admin_car_form('+i+')">'+i+'</a>';
                    }
                 }
                 if(pgNum < totPg){
                	 pagination += 
                            '&nbsp;<a href="#" onclick="admin.admin_car_form('+(pgNum + 1)+')" aria-label="Next">'
                            + '<span aria-hidden="true">&raquo;</span>'
                            +'</a>'
                           ;
                 }
                pagination += '</div>'
                car_list += pagination;	                
                car_list += ADMIN_NOTICE_END;
				frame = car_list;
				$('#admin_article').html(frame);
				
				$('#btn_car_search').click(function(){
					if($('#admin_car_keyword').val().length>0){
						admin.admin_find_car($('#admin_car_keyField').val(),$('#admin_car_keyword').val(),1);
					}else{
						alert('검색어를 입력해 주세요');
						$('#admin_car_keyword').focus();
						return false
					}
				});
			});	
		},
		admin_find_car : function(keyField,keyword,pgNum){
			$('#admin_article').empty();
			$.getJSON(app.context()+'/admin/car_search/'+keyField+'/'+keyword+'/'+pgNum,function(data){
				var frame = '';
				var car_list = '';
				var pagination ='';
				var startPg = data.startPg;
				var lastPg = data.lastPg;
				var pgSize = data.pgSize;
				var totPg = data.totPg;
				var groupSize = data.groupSize;
				var totCount = data.totCount;
				car_list = ADMIN_CAR_FIND;
				car_list += ADMIN_CAR_TH;	
				if (data.totCount===0) {
					car_list +='<tr><td colspan=7>등록된 차량이 없습니다.</td></tr>';
				} else {					
					$.each(data.list, function(i,car){
						car_list +=
							'<tr>'
							+'<td class="subj"> <a href="#" onclick="admin.car_update_form('+car.seq+')" id= "a_admin_notice_content">'+car.carNum+'</a></td>'
							+'<td>'+car.socarZone+'</td>'
							+'<td><img src="'+app.img()+'/car_image/'+car.carImg+'" id="car_thumb"><p>'+car.carType+'</p></td>'
							+'<td>'+car.oilType+'</td>'
							+'<td>'+car.carOption+'</td>'
							+'<td>'+admin.numberWithCommas(car.rentAmt)+'원</td>'
							+'<td>'+admin.numberWithCommas(car.driveAmt)+'원/km</td>'
							+'<td style="visibility:hidden">'+car.seq+'</td>'
							+'</tr>';
					});
				}
				car_list += '</tbody></table>'
				pagination = '<div id="admin_paginate" class="paginate">';
				if(pgNum > 1  ){
					pagination += 
						'&nbsp;<a href="#" onclick="admin.admin_find_inquiry('+keyField+','+keyword+','+(pgNum - 1)+')" aria-label="Previous">'
						+'<span aria-hidden="true">&laquo;</span>'
						+'</a>'
						;
                 }
                 for(var i=startPg; i < startPg+groupSize && i <= totPg; i++){
                    if(i==pgNum){
                       pagination +='&nbsp;<strong>'+i+'</strong>';
                    }else{
                    	pagination += '&nbsp;<a href="#" onclick="admin.admin_find_inquiry('+keyField+','+keyword+','+i+')">'+i+'</a>';
                    }
                 }
                 if(pgNum < totPg){
                	 pagination += 
                            '&nbsp;<a href="#" onclick="admin.admin_find_inquiry('+keyField+','+keyword+','+(pgNum + 1)+')" aria-label="Next">'
                            + '<span aria-hidden="true">&raquo;</span>'
                            +'</a>'
                           ;
                 }
                pagination += '</div>'
                car_list += pagination;	                
                car_list += ADMIN_NOTICE_END;
				frame = car_list;
				$('#admin_article').html(frame);
			});
		},
		car_update_form : function(seq){
			$('#admin_article').empty().html(ADMIN_CAR_UPDATE);	
			admin.init();
			$.getJSON(app.context()+'/admin/carUpdate/seq/'+seq,function(data){
				$('#admin_car_num').text(data.carNum);
				$('#u_admin_socar_zone').html('<input type="text" id="admin_socar_zone" class="input" value="'+data.socarZone+'" style="width:200px"/>');			
				$('#admin_car_img').attr('src',app.img()+'/car_image/'+data.carImg);
				$('#admin_img_name').text(data.carImg);
				$('#u_admin_img_name').html('<input type="text" id="admin_img_name" class="input" value="'+data.carImg+'" style="width:100px"/>');
				$('#admin_car_type').text(data.carType);				
				$('#admin_oil_type').text(data.oilType);
				$('#admin_car_option').text(data.carOption);
				$('#admin_rent_amt').text(admin.numberWithCommas(data.rentAmt)+' 원');
				$('#admin_drive_amt').text(admin.numberWithCommas(data.driveAmt)+' 원/km');
			});
			$('#btn_admin_car_update').click(function(e){
				e.preventDefault();
				$('#admin_article').html(ADMIN_CAR);
			}); 
		},
		admin_coupon_form : function(){
			$('#admin_article').empty().html(ADMIN_COUPON);	
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